"use client";

import UpdateCourseInfo from "@/components/updateCouseInfoModal/UpdateCourseInfo";
import { authClient } from "@/lib/auth-client";
import { deleteFromAllCourses, getCourseDetailsPromise, submitEnrolledCourse } from "@/lib/data";
import { Button, Chip } from "@heroui/react"; 
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, use } from "react";
import { toast } from "react-toastify";

const extraCourseFeatures = {
  classType: "Live on Zoom",
  targetAudience: "শুধুমাত্র ছোট ছেলেদের জন্য (বয়স: ৮-১৫ বছর)",
  willLearn: [
    "কুরআনের শেষ ১০টি সূরা সম্পূর্ণ সহীহ-শুদ্ধভাবে মুখস্থ করা",
    "নূরানী নিয়মে আরবী হরফের সঠিক মাখরাজ ও উচ্চারণ শেখা",
    "গুন্নাহ, ইদগাম এবং কলকলাহ-এর প্র্যাকটিক্যাল প্রয়োগ",
    "প্রতিদিনের প্রয়োজনীয় দোয়া ও মাসনুন আমলসমূহ মুখস্থ করা",
    "সালাত বা নামাযের ভেতরের সব তাসবীহ ও নিয়মকানুন সংশোধন"
  ],
  requirements: [
    "নূরানী কায়দা সম্পূর্ণ বা আংশিক পড়া জানা থাকতে হবে",
    "স্মার্টফোন বা ল্যাপটপ + internet",
    "প্রতিদিন ৩০ মিনিট রিভিশনের অভ্যাস"
  ]
};

const CourseDetailsPage = ({ params }) => {
  const { id } = use(params);
  const router = useRouter();

  const { data: session} = authClient.useSession();
  const user= session?.user;
  // console.log(userId, "user ID")

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)

  useEffect(() => {
    const getCourseDetailsById = async () => {
      try {
        const courseData = await getCourseDetailsPromise(id);
        setCourse(courseData);
      } catch (error) {
        console.error("Failed to fetch course details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) getCourseDetailsById();
  }, [id]);

  // console.log(course)

  const enrolledData = {
        courseName: course?.title,
        userEmail: user?.email,
        userId: user?.id,
        courseId: course?.id,
        teacherName: course?.teacher,
        subject: course?.subject,
        classTime: course?.schedule,
        bookedAt: new Date()
  }

  const handleenrolledNowButton = ()=>{
    
    try {
      submitEnrolledCourse(enrolledData);
      toast.success("Enrolled successfully")
    } catch (error) {
      console.log(error)
    }
    
  }

 const  handleDeleteCourseButton = async(courseId)=>{
        await deleteFromAllCourses(courseId)
        toast.success('Course deleted successfully.Now you redirected to all Courses page')
        router.push('/courses')
 }

  if (loading || !course) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 gap-4">
        <div className="animate-spin h-10 w-10 rounded-full border-4 border-blue-500 border-t-transparent"></div>
        <p className="text-sm font-medium text-blue-100/70">Loading details...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 p-4 md:p-8 text-white antialiased">
      <div className="mx-auto max-w-[1340px] w-full">
        
        {/* মেইন গ্রিড লেআউট */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 items-start">

          {/* ================= LEFT COLUMN - CONTENT (Takes 2 columns) ================= */}
          <div className="lg:col-span-2 space-y-6 w-full">

            {/* TITLE & CHIPS CARD */}
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">
              <div className="flex flex-wrap gap-2">
              
                 <Chip variant="flat" size="sm" className="font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  {course.subject}
                </Chip>

                <Chip variant="flat" size="sm" className="font-semibold bg-white/10 text-slate-200 border border-white/5">
                  {course.level}
                </Chip>

                <Chip variant="flat" size="sm" className="font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  🎥 {extraCourseFeatures.classType}
                </Chip>
               
                
              </div>

              <h1 className="text-2xl md:text-4xl font-black text-white leading-tight">
                {course.title}
              </h1>

              <p className="text-sm md:text-base text-blue-100/70">
                Instructor:{" "}
                <span className="font-bold text-white border-b border-blue-400/40 pb-0.5">
                  {course.teacher}
                </span>
              </p>
            </div>

            {/* BANNER IMAGE SECTION - PERMANENT FIX */}
              <div className="w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-slate-950/40">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={1200} // ইমেজের অরিজিনাল রেশিও বজায় রাখার জন্য
                  height={700} // আপনার ইমেজ সোর্স অনুযায়ী (1200x700) নির্দিষ্ট করে দেওয়া হলো
                  priority
                  className="w-full h-auto object-cover aspect-video transition duration-500 hover:scale-[1.01]"
                />
                {/* ইমেজ এর নিচের গ্রেডিয়েন্ট ওভারলে */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
              </div>

            {/* TARGET AUDIENCE BANNER */}
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-blue-100/90 shadow-xl backdrop-blur-md">
              <span className="text-xl shrink-0">📢</span>
              <p>
                <span className="font-bold text-blue-400">Target Audience:</span> {extraCourseFeatures.targetAudience}
              </p>
            </div>

            {/* ABOUT COURSE */}
            <div className="p-6 md:p-8 border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl rounded-3xl">
              <h3 className="mb-4 text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-blue-400">■</span> About Course
              </h3>
              <p className="text-blue-100/80 leading-relaxed text-sm md:text-base whitespace-pre-line">
                {course.description}
              </p>
            </div>

            {/* WHAT YOU LEARN */}
            <div className="p-6 md:p-8 border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl rounded-3xl">
              <h3 className="mb-4 text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-blue-400">■</span> What you will learn
              </h3>

              <div className="grid gap-4">
                {extraCourseFeatures.willLearn.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-bold text-blue-300 mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm md:text-base text-blue-100/80 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* REQUIREMENTS */}
            <div className="p-6 md:p-8 border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl rounded-3xl">
              <h3 className="mb-4 text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="text-blue-400">■</span> Requirements
              </h3>

              <div className="space-y-3">
                {extraCourseFeatures.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm md:text-base text-blue-100/80">
                    <span className="text-purple-400 font-black text-xl leading-none mt-0.5">•</span>
                    <span className="leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN - STICKY CARD (Takes 1 column) ================= */}
          <div className="lg:col-span-1 w-full lg:sticky lg:top-6">
            <div className="p-6 space-y-6 border border-white/10 rounded-3xl shadow-2xl bg-slate-950/50 backdrop-blur-2xl relative overflow-hidden">
              
              {/* Background Decorative Glow */}
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

              {/* PRICE & SEAT STATUS */}
              <div className="space-y-2 relative z-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-100/50">Course Fee</p>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  {course.fee}
                </h2>

                <div className="pt-1 flex justify-between">
                  <Chip size="sm" className="font-bold bg-red-500/20 text-red-300 border border-red-500/30 animate-pulse">
                    ⚠️ Only {course.seats} seats left
                  </Chip>

                   {/* Action Button */}
                  <Button 
                  variant="danger-soft"
                  onClick={()=> handleDeleteCourseButton(course?._id)}
                >
                  Delete Course
                </Button>
                </div>
              </div>

              <div className="border-t border-white/10" />

              {/* META INFO SPECIFICATIONS */}
              <div className="space-y-4 text-sm relative z-10">
                <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                  <span className="font-medium text-blue-100/50">Duration</span>
                  <span className="font-semibold text-blue-100">{course.duration}</span>
                </div>

                <div className="flex justify-between items-start border-b border-white/5 pb-2.5">
                  <span className="font-medium text-blue-100/50 pt-0.5">Schedule</span>
                  <span className="font-semibold text-blue-100 text-right max-w-[180px] leading-tight">{course.schedule}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-blue-100/50">Level</span>
                  <span className="font-semibold text-blue-100">{course.level}</span>
                </div>
              </div>

              {/* BUTTONS WITH MATCHING ADMISSION THEME */}
              <div className="space-y-3 pt-2 relative z-10">
                <Button 
                onClick={handleenrolledNowButton}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 font-bold text-white shadow-lg text-base transition duration-300 hover:opacity-95 active:scale-[0.98]"
                >
                  Enroll Now
                </Button>

               
                  <Button
                  onClick={()=> {
                    setIsUpdateModalOpen(true)
                    
                  }}
                  variant="bordered"
                  className="w-full h-11 border-white/20 bg-white/5 font-semibold text-blue-100 transition hover:bg-white/10"
                >
                  Update Info
                </Button >
               
               
              </div>

              <p className="text-xs text-center font-medium text-blue-100/40 relative z-10">
                Secure enrollment & instant class access
              </p>

            </div>
          </div>

        </div>

      </div>
      {isUpdateModalOpen && (
        <UpdateCourseInfo 
        courseData={course}
        setCourse={setCourse}
        onClose={() => setIsUpdateModalOpen(false)} />
      )}
    </section>
  );
};

export default CourseDetailsPage;