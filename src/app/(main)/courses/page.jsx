"use client";

import Image from "next/image";
import { Card, Button, Chip } from "@heroui/react";
import { useEffect, useState } from "react";
import { getAllCoursesPromise } from "@/lib/data";
import Link from "next/link";
  

export default function CoursesPage() {
  const [courses, setCourses] = useState([])

  useEffect(()=>{
    const getCoursesFromPromise = async ()=> {
      const result = await getAllCoursesPromise()
      setCourses(result)
    }
    getCoursesFromPromise();
  } ,[])

  return (
   <section className="min-h-screen bg-gradient-to-b from-slate-50 to-green-50/50 px-4 py-16">
  <div className="mx-auto max-w-7xl">
    
    {/* Heading */}
    <div className="mb-16 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-green-800 md:text-5xl">
        Our Courses
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
        Learn Quran, Hadith, Arabic, and Islamic Studies from expert scholars through live online classes.
      </p>
    </div>

    {/* Grid */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {courses?.map((course) => (
        <Card
          key={course?.id}
          className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          
          {/* Image Container - হাইট এখানে লক করা হয়েছে যাতে লেআউট না ভাঙে */}
          <div className="relative h-48 w-full overflow-hidden sm:h-52">
            <Image
              src={course?.image}
              alt={course?.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={course?.id <= 3}
              className="object-cover transition duration-500 group-hover:scale-105"
            />

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Seats Badge */}
            <div className="absolute left-4 top-4">
              <Chip
                color="success"
                variant="solid"
                className="bg-green-600/90 font-medium text-white backdrop-blur-sm shadow-sm"
              >
                {course?.seats} Seats Left
              </Chip>
            </div>
          </div>

          {/* Content Wrapper */}
          <div className="flex flex-1 flex-col justify-between p-6">
            
            {/* Title & Description */}
            <div>
              <h2 className="text-xl font-bold text-slate-800 transition duration-300 group-hover:text-green-700 md:text-2xl">
                {course?.title}
              </h2>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-500">
                {course?.description || "Learn comprehensive Islamic knowledge with live interactive sessions."}
              </p>
            </div>

            {/* Info Specification List */}
            <div className="mt-6 space-y-2.5 text-sm text-gray-600">
              <div className="flex items-center justify-between border-b border-dashed border-slate-100 pb-2">
                <span className="text-gray-400">Teacher</span>
                <span className="font-medium text-slate-700">{course?.teacher}</span>
              </div>

              <div className="flex items-center justify-between border-b border-dashed border-slate-100 pb-2">
                <span className="text-gray-400">Subject</span>
                <span className="font-medium text-slate-700">{course?.subject}</span>
              </div>

              <div className="flex items-center justify-between border-b border-dashed border-slate-100 pb-2">
                <span className="text-gray-400">Schedule</span>
                <span className="font-medium text-slate-700">{course?.schedule}</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-gray-400">Course Fee</span>
                <span className="text-lg font-bold text-green-600">
                  {course?.fee}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-6">
             <Link href={`/courses/${course?._id}`}> 
             <Button
                fullWidth
                radius="xl"
                size="md"
                className="bg-green-700 font-semibold text-white transition duration-300 hover:bg-green-800 shadow-sm"
              >
                View Course Details
              </Button>
             </Link>
            </div>
          </div>

        </Card>
      ))}
    </div>
  </div>
</section>
  );
}