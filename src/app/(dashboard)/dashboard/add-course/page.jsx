"use client";

import React from "react";

import {
  Card,
  Input,
  TextArea,
  Button,
  Label
} from "@heroui/react";
import { submitMyaddedCourse } from "@/lib/data";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";


export default function AddCoursePage() {

  const {data:session} = authClient.useSession()
  const userId = session?.user.id;
  // console.log(userId)

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const myAddedCourse = Object.fromEntries(formData.entries());
    

    const myAddedCourseWithId = {
      ...myAddedCourse,
      userId
    }
    console.log(myAddedCourseWithId);

    try {
      submitMyaddedCourse(myAddedCourseWithId);
      toast.success("Added your course Successfully")
      e.target.reset(); 

    } catch (error) {

      toast.error("Failed to submit admission");
      console.log(error);
      
    }



  };

  return (
<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 p-3 md:p-6">
  
  <Card className="flex w-full max-w-7xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl md:flex-row">

    {/* ================= LEFT SIDE ================= */}

    <div className="relative hidden md:flex md:w-[35%] flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-10 text-white">
      
      <div className="relative z-10 space-y-4">
        <div className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs backdrop-blur">
          Online Madrasa Course Management
        </div>

        <h1 className="text-4xl font-black leading-tight">
          নতুন কোর্স যুক্ত করুন সহজেই
        </h1>

        <p className="max-w-sm text-sm leading-7 text-blue-100/80">
          নতুন ইসলামিক কোর্স, লাইভ ক্লাস, হিফজ, নাযেরা ও তাজবীদ প্রোগ্রাম সহজেই যুক্ত করুন এবং শিক্ষার্থীদের জন্য আধুনিক লার্নিং অভিজ্ঞতা তৈরি করুন।
        </p>
      </div>

      <div className="relative z-10 space-y-3">
        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
          <h3 className="font-semibold">
            ✔ স্মার্ট কোর্স ম্যানেজমেন্ট
          </h3>

          <p className="mt-1 text-sm text-blue-100/70">
            কোর্স তথ্য, ব্যাচ ও সিট সহজেই নিয়ন্ত্রণ করুন
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
          <h3 className="font-semibold">
            ✔ লাইভ ক্লাস সাপোর্ট
          </h3>

          <p className="mt-1 text-sm text-blue-100/70">
            Zoom, Meet ও Recorded Class সুবিধা যুক্ত করুন
          </p>
        </div>
      </div>

      <div className="relative z-10 text-xs text-blue-100/50">
        © 2026 Online Madrasa. All Rights Reserved.
      </div>

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),transparent_40%)]" />
    </div>

    {/* ================= RIGHT SIDE ================= */}

    <div className="max-h-screen w-full overflow-y-auto bg-slate-950/50 p-5 text-white md:w-[65%] md:p-8">

      {/* Header */}

      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Add New Course
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          নতুন কোর্সের সঠিক তথ্য দিয়ে ফর্ম পূরণ করুন
        </p>
      </div>

      {/* FORM */}

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* ================= COURSE INFORMATION ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

          <h2 className="mb-5 text-center text-lg font-bold text-green-400">
            Course Information
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            <div className="flex flex-col gap-2">
              <Label className="text-white">Course Title</Label>
              <Input
                type="text"
                name="title"
                placeholder="Enter course title"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Instructor Name</Label>
              <Input
                type="text"
                name="teacher"
                placeholder="Enter instructor name"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Course Duration</Label>
              <Input
                type="text"
                name="duration"
                placeholder="3 Months"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Course Fee</Label>
              <Input
                type="number"
                name="fee"
                placeholder="5000"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Total Seats</Label>
              <Input
                type="number"
                name="seats"
                placeholder="50"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Class Schedule</Label>
              <Input
                type="text"
                name="schedule"
                placeholder="Sat - Mon | 8 PM"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Level</Label>
              <Input
                type="text"
                name="level"
                placeholder="Beginner to Advanced"
              />
            </div>

             <div className="flex flex-col gap-2">
              <Label className="text-white">Subject</Label>
              <Input
                type="text"
                name="subject"
                placeholder="Hifzul Quran"
              />
            </div>

          </div>
        </div>

        {/* ================= COURSE DETAILS ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

          <h2 className="mb-5 text-center text-lg font-bold text-white">
            Course Details
          </h2>

          <div className="space-y-4">

            <div className="flex flex-col gap-2">
              <Label className="text-white">Short Description</Label>
              <TextArea
                name="shortDescription"
                rows={3}
                placeholder="Write short description"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Full Description</Label>
              <TextArea
                name="fullDescription"
                rows={5}
                placeholder="Write detailed course description"
              />
            </div>

          </div>
        </div>

        {/* ================= COURSE MEDIA ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

          <h2 className="mb-5 text-center text-lg font-bold text-white">
            Course Media & Resources
          </h2>

          <div className="grid grid-cols-1 gap-4">

            <div className="flex flex-col gap-2">
              <Label className="text-white">Course Thumbnail URL</Label>
              <Input
                type="url"
                name="image"
                placeholder="https://example.com/image.jpg"
              />
            </div>

          </div>
        </div>

        {/* ================= EXTRA INFO ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">

          <h2 className="mb-5 text-center text-lg font-bold text-white">
            Extra Information
          </h2>

          <div className="space-y-4">

            <div className="flex flex-col gap-2">
              <Label className="text-white">Course Requirements</Label>
              <TextArea
                name="requirements"
                rows={4}
                placeholder="Mention course requirements"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-white">Special Notes</Label>
              <TextArea
                name="specialNotes"
                rows={4}
                placeholder="Additional information"
              />
            </div>

          </div>
        </div>

        {/* ================= BUTTON ================= */}

        <Button
          type="submit"
          className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-base font-semibold text-white shadow-lg"
        >
          Add New Course
        </Button>

      </form>
    </div>
  </Card>
</div>
  );
}