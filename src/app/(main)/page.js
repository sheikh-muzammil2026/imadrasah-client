"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Card,Chip } from "@heroui/react";
import Image from "next/image";
import { getAvalilableCourses } from "@/lib/data";

export default function HomePage() {
  // ১. ব্যানার ক্যারোসেল স্টেট ও ডাটা
  const [currentSlide, setCurrentSlide] = useState(0);
  const [popularCourses, setPopularCourses] = useState([])
 const bannerSlides = [
    {
      title: "ঘরে বসেই হোক দ্বীনি শিক্ষার সূচনা",
      highlight: "১-অন-১ লাইভ ক্লাস ও অভিজ্ঞ আলেমদের তত্ত্বাবধান",
      desc: "দূরত্ব বা সময়ের ব্যস্ততায় আর থেমে থাকবে না আপনার ইসলামিক জ্ঞান অর্জন। আমাদের আধুনিক প্ল্যাটফর্মে যুক্ত হোন আজই।",
      bg: "bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900"
    },
    {
      title: "শুদ্ধ উচ্চারণে কুরআন ও তাজবীদ শিক্ষা",
      highlight: "নারী শিক্ষার্থীদের জন্য ডেডিকেটেড নারী শিক্ষিকা সাপোর্ট",
      desc: "অভিজ্ঞ কারী ও হাফেজদের কাছ থেকে একদম শুরু থেকে আন্তর্জাতিক মানদণ্ড অনুযায়ী সহীহ-শুদ্ধভাবে কুরআন তিলাওয়াত শিখুন।",
      bg: "bg-gradient-to-br from-teal-950 via-slate-900 to-emerald-950"
    },
    {
      title: "ইসলামিক স্কলারশিপ ও উচ্চতর ফিকহ কোর্স",
      highlight: "ডিজিটাল স্টুডেন্ট আইডি ও ভেরিফাইড ক্লাস টোকেন",
      desc: "কুরআন, সুন্নাহ এবং সমসাময়িক মাসআলা-মাসায়েলের ওপর নির্ভরযোগ্য আলেমদের কাছ থেকে ফিকহ ও আকীদা অর্জন করুন।",
      bg: "bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-900"
    }
  ];

  useEffect(() => {

    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === bannerSlides.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000); // ৪০০০ মিলিসেকেন্ড = ৪ সেকেন্ড

    // কম্পোনেন্ট আনমাউন্ট হলে ইন্টারভালটি ক্লিয়ার করে মেমোরি সেভ করবে
    return () => clearInterval(slideInterval);
  }, [bannerSlides.length]);

  useEffect(()=>{
    const getAvailableSixData = async()=>{
      try {

      const availableData = await getAvalilableCourses();
      setPopularCourses(availableData)
        
      } catch (error) {
        console.log(error, "from home page, available data fatching time error")
      }
    }
    getAvailableSixData()
  } , [])


  // ৩. টেস্টীমোনিয়াল মক ডাটা
  const testimonials = [
    {
      name: "আরিফুর রহমান",
      role: "সফটওয়্যার ইঞ্জিনিয়ার",
      review: "চাকরির ব্যস্ততার কারণে মাদরাসায় যাওয়া সম্ভব হতো না। DeenSphere-এর উইকেন্ড সিডিউলের কারণে এখন সহজেই ফিকহ শিখতে পারছি।",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "নুসরাত জাহান",
      role: "গৃহিণী ও অভিভাবক",
      review: "আমার মেয়ের জন্য একজন ভালো নারী শিক্ষিকা খুঁজছিলাম। এখানকার ফিমেল টিচার সাপোর্ট এবং লাইভ মনিটরিং সিস্টেম সত্যিই অসাধারণ!",
      rating: "⭐⭐⭐⭐⭐"
    }
  ];

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen pb-16 transition-colors duration-300">
      
      {/* 🏠 সেকশন ১: ব্যানার ক্যারোসেল */}
      <section className="relative w-full overflow-hidden h-[500px] md:h-[550px] flex items-center">
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out flex items-center ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            } ${slide.bg}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent)] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left text-white relative z-20">
              <div className="max-w-3xl space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider">
                  {slide.highlight}
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-lg text-slate-300 leading-relaxed">
                  {slide.desc}
                </p>
                <div className="pt-4">
                  <Button
                    as={Link}
                    href="/courses"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-6 shadow-xl"
                    radius="xl"
                    size="lg"
                  >
                    <span>Explore Courses</span>
                    <i className="gvt-arrow-right ml-1"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ক্যারোসেল ডটস */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-emerald-500 w-8" : "bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* 📚 সেকশন ২: পপুলার কোর্স সেকশন */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-2">
            <i className="gvt-bookmark text-emerald-600"></i> Our Popular Courses
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">
            আমাদের ডাটাবেজ থেকে নির্বাচিত ও সর্বাধিক এনরোল হওয়া ৬টি প্রিমিয়াম ইসলামিক কোর্স। আপনার পছন্দের কোর্সটিতে আজই যুক্ত হোন।
          </p>
        </div>

        {/* ৬টি কোর্সের রেসপনসিভ গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCourses?.map((course, index) => (
            <Card 
              key={index} 
              className="shadow-md border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-2xl overflow-hidden flex flex-col justify-between h-full transition-transform hover:scale-[1.01]"
            >
              {/* ইমেজ ও সাবজেক্ট চিপ */}
              <div className="relative w-full h-48 overflow-hidden shrink-0">
                <Image
                width={500}
                height={400}
                  alt={course?.title}
                  className="object-cover w-full h-full rounded-none"
                  src={course?.image}
                />
                <Chip 
                  className="absolute top-3 right-3 z-20 font-semibold" 
                  color="emerald" 
                  variant="solid" 
                  size="sm"
                >
                  {course.subject}
                </Chip>
              </div>

              {/* বডি কন্টেন্ট */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-2 h-14">
                    {course.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <p className="flex items-center gap-2">
                      <i className="gvt-user text-emerald-600"></i>
                      <span>শিক্ষক: <strong>{course.teacher}</strong></span>
                    </p>
                    <p className="flex items-center gap-2">
                      <i className="gvt-clock text-emerald-600"></i>
                      <span>সিডিউল: {course.schedule}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <i className="gvt-users text-emerald-600"></i>
                      <span>বাকি আসন: {course.seats > 0 ? (
                        <span className="text-emerald-600 font-bold">{course.seats} টি</span>
                      ) : (
                        <span className="text-rose-500 font-bold">আসন খালি নেই</span>
                      )}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* ফুটার কন্টেন্ট */}
              <div className="p-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50 shrink-0">
                <div>
                  <p className="text-xs text-slate-400">কোর্স ফি</p>
                  <p className="font-extrabold text-xl text-emerald-600 dark:text-emerald-400">৳{course.fee}</p>
                </div>
                
               <Link href={`/courses/${course?._id}`}>
                <Button
                  // as={Link}
                  color={course.seats > 0 ? "emerald" : "default"}
                  disabled={course.seats === 0}
                  className={`${course.seats > 0 ? "bg-emerald-600 text-white" : "bg-slate-300 dark:bg-slate-800 text-slate-500"} font-semibold`}
                  radius="lg"
                >
                  {course.seats > 0 ? "Course Details" : "House Full"}
                </Button>
               </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 🛡️ এক্সট্রা সেকশন ১: Why Choose Online Madrasah? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="bg-gradient-to-br from-emerald-900 to-slate-950 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 translate-x-10 -translate-y-10">
            <i className="gvt-mosque text-[200px]"></i>
          </div>
          
          <div className="max-w-3xl relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold">Why Choose DeenSphere?</h2>
            <p className="text-slate-300 text-sm md:text-base mt-2">
              একটি ঐতিহ্যবাহী অফলাইন মাদরাসার নিয়মানুবর্তিতা ও আধুনিক প্রযুক্তির মেলবন্ধনে আমাদের এই ইকোসিস্টেম।
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <i className="gvt-calendar text-emerald-400 text-lg"></i>
                </div>
                <div>
                  <h4 className="font-bold text-base">Flexible Schedule</h4>
                  <p className="text-xs text-slate-400 mt-1">চাকরিজীবী বা শিক্ষার্থীদের জন্য ভোর, বিকাল ও রাতের শিфটে ক্লাসের ব্যবস্থা।</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <i className="gvt-video text-emerald-400 text-lg"></i>
                </div>
                <div>
                  <h4 className="font-bold text-base">Live Quran Classes</h4>
                  <p className="text-xs text-slate-400 mt-1">রেকর্ডেড ক্লাসের পাশাপাশি প্রতিদিন সরাসরি ওয়ান-টু-ওয়ান ইন্টারেক্টিভ সেশন।</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <i className="gvt-heart text-emerald-400 text-lg"></i>
                </div>
                <div>
                  <h4 className="font-bold text-base">Female Teacher Support</h4>
                  <p className="text-xs text-slate-400 mt-1">বোন ও মায়েদের পর্দার সাথে সম্পূর্ণ আলাদাভাবে নারী শিক্ষকদের কাছে শেখার নিশ্চয়তা।</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <i className="gvt-download text-emerald-400 text-lg"></i>
                </div>
                <div>
                  <h4 className="font-bold text-base">Recorded Lectures</h4>
                  <p className="text-xs text-slate-400 mt-1">লাইভ ক্লাস মিস হলেও কোনো সমস্যা নেই, ড্যাশবোর্ডে পাবেন আজীবন রেকর্ডেড ব্যাকআপ।</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 💬 এক্সট্রা সেকশন ২: Student Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white">
            What Our Students Say
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <Card key={index} className="p-6 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm rounded-2xl">
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-base text-slate-900 dark:text-white">{t.name}</h4>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                  <span className="text-sm">{t.rating}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  {t.review}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

    </div>
  );
}