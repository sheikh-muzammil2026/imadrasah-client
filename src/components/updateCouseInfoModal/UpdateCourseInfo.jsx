'use client'
import { updateDetailsCourse } from '@/lib/data';
import { Button, Card, Input, Label, TextArea } from '@heroui/react';
import { toast } from 'react-toastify';


const UpdateCourseInfo = ({onClose, courseData, setCourse}) => {

  const courseId = courseData?._id;
  const handleUpdateFormSubmit = async(e)=>{
    
    e.preventDefault()
    const formData = new FormData(e.target);
    const updatedValues = Object.fromEntries(formData.entries())
    updatedValues.fee = Number(updatedValues.fee);
    updatedValues.seats = Number(updatedValues.seats);

    try {
       const result =  await updateDetailsCourse(courseId, updatedValues)
       if(result.modifiedCount > 0){
        toast.success(`'${courseData?.title}' course updated successfully`)
        setCourse((prevCourse)=>({
          ...prevCourse,
          ...updatedValues
        }));
        onClose(true)
       }else{
        toast.info("No changes were made.");
      onClose();
       }
      
    } catch (error) {
      console.log(error, "from handle update button in update course page.");
    }
    console.log("cliked update form")
  }
    return (
<>
{/* মেইন কন্টেইনার: ব্যাকগ্রাউন্ড ব্লার এবং স্ক্রোলিং ম্যানেজমেন্ট */}
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto'>
      
      {/* মোডালের বাইরের কালো বা আবছা অংশে ক্লিক করলে যেন মোডাল বন্ধ হয় */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />

      {/* মেইন কার্ড */}
      <Card className="relative flex w-full max-w-6xl max-h-[90vh] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl md:flex-row">
        
        {/* ক্লোজ বাটন (✕) */}
        <button 
          onClick={onClose}
          className="absolute right-12 top-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition"
          type="button"
        >
          ✕
        </button>

        {/* ================= LEFT SIDE ================= */}
        <div className="relative hidden md:flex md:w-[35%] flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-10 text-white">
          <div className="relative z-10 space-y-4">
            <div className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs backdrop-blur">
              Online Madrasa Course Management
            </div>
            <h1 className="text-4xl font-black leading-tight">
              কোর্সের তথ্য আপডেট করুন
            </h1>
            <p className="max-w-sm text-sm leading-7 text-blue-100/80">
              বিদ্যমান ইসলামিক কোর্সের যেকোনো তথ্য, ব্যাচ, ফী কিংবা সময়সূচী এখান থেকে সহজেই পরিবর্তন বা সংশোধন করতে পারেন।
            </p>
          </div>

          <div className="relative z-10 space-y-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <h3 className="font-semibold">✔ তথ্য পরিবর্তন</h3>
              <p className="mt-1 text-sm text-blue-100/70">টাইটেল, শিক্ষক ও কোর্সের বিবরণ আপডেট করুন</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <h3 className="font-semibold">✔ লাইভ আপডেট</h3>
              <p className="mt-1 text-sm text-blue-100/70">পরিবর্তন করার সাথে সাথেই শিক্ষার্থীরা নতুন তথ্য দেখতে পাবে</p>
            </div>
          </div>

          <div className="relative z-10 text-xs text-blue-100/50">© 2026 Online Madrasa.</div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),transparent_40%)]" />
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="overflow-y-auto w-full bg-slate-950/50 p-5 text-white md:w-[65%] md:p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Update Course Details</h2>
            <p className="mt-2 text-sm text-slate-400">কোর্সের প্রয়োজনীয় তথ্যগুলো সংশোধন করে ফর্মটি সাবমিট করুন</p>
          </div>

          {/* ফর্ম */}
          <form  onSubmit={handleUpdateFormSubmit} className="space-y-4">
            
            {/* ================= COURSE INFORMATION ================= */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <h2 className="mb-5 text-center text-lg font-bold text-green-400">Course Information</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                
                <div className="flex flex-col gap-2">
                  <Label className="text-white">Course Title</Label>
                  <Input 
                    type="text" 
                    name="title" 
                    defaultValue={courseData?.title}
                    placeholder="Enter course title" 
                    required 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-white">Instructor Name</Label>
                  <Input 
                    type="text" 
                    name="teacher" 
                    defaultValue={courseData?.teacher}
                    placeholder="Enter instructor name" 
                    required 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-white">Course Duration</Label>
                  <Input 
                    type="text" 
                    name="duration" 
                    defaultValue={courseData?.duration}
                    placeholder="3 Months" 
                    required 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-white">Course Fee</Label>
                  <Input 
                    type="number" 
                    name="fee" 
                    defaultValue={courseData?.fee}
                    placeholder="5000" 
                    required 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-white">Total Seats</Label>
                  <Input 
                    type="number" 
                    name="seats" 
                    defaultValue={courseData?.seats}
                    placeholder="50" 
                    required 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-white">Class Schedule</Label>
                  <Input 
                    type="text" 
                    name="schedule" 
                    defaultValue={courseData?.schedule}
                    placeholder="Sat - Mon | 8 PM" 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-white">Level</Label>
                  <Input 
                    type="text" 
                    name="level" 
                    defaultValue={courseData?.level}
                    placeholder="Beginner to Advanced" 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-white">Subject</Label>
                  <Input 
                    type="text" 
                    name="subject" 
                    defaultValue={courseData?.subject}
                    placeholder="Hifzul Quran" 
                  />
                </div>
              </div>
            </div>

            {/* ================= COURSE DETAILS ================= */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <h2 className="mb-5 text-center text-lg font-bold text-white">Course Details</h2>
              <div className="space-y-4">
                
                <div className="flex flex-col gap-2">
                  <Label className="text-white">Short Description</Label>
                  <TextArea 
                    name="shortDescription" 
                    defaultValue={courseData?.shortDescription}
                    rows={3} 
                    placeholder="Write short description" 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-white">Full Description</Label>
                  <TextArea 
                    name="fullDescription" 
                    defaultValue={courseData?.fullDescription}
                    rows={5} 
                    placeholder="Write detailed course description" 
                  />
                </div>
              </div>
            </div>

            {/* ================= COURSE MEDIA ================= */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <h2 className="mb-5 text-center text-lg font-bold text-white">Course Media & Resources</h2>
              <div className="grid grid-cols-1 gap-4">
                
                <div className="flex flex-col gap-2">
                  <Label className="text-white">Course Thumbnail URL</Label>
                  <Input 
                    type="url" 
                    name="image" 
                    defaultValue={courseData?.image}
                    placeholder="https://example.com/image.jpg" 
                  />
                </div>
              </div>
            </div>

            {/* ================= EXTRA INFO ================= */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <h2 className="mb-5 text-center text-lg font-bold text-white">Extra Information</h2>
              <div className="space-y-4">
                
                <div className="flex flex-col gap-2">
                  <Label className="text-white">Course Requirements</Label>
                  <TextArea 
                    name="requirements" 
                    defaultValue={courseData?.requirements}
                    rows={4} 
                    placeholder="Mention course requirements" 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-white">Special Notes</Label>
                  <TextArea 
                    name="specialNotes" 
                    defaultValue={courseData?.specialNotes}
                    rows={4} 
                    placeholder="Additional information" 
                  />
                </div>
              </div>
            </div>

            {/* ================= ACTION BUTTONS ================= */}
            <div className="flex gap-4 pt-2">
              <Button
                type="button"
                onClick={onClose}
                className="h-12 w-1/3 rounded-xl bg-white/10 text-base font-semibold text-white hover:bg-white/20 transition"
              >
                Cancel
              </Button>
              
              <Button
                type="submit"
                className="h-12 w-2/3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-base font-semibold text-white shadow-lg hover:from-green-500 hover:to-emerald-500 transition"
              >
                Save Changes
              </Button>
            </div>

          </form>
        </div>
      </Card>
    </div>
</>
    );
};

export default UpdateCourseInfo;