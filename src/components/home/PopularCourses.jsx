'use client'
import { getAvalilableCourses } from '@/lib/data';
import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const PopularCardSection = () => {
    const [popularCourses, setPopularCourses] = useState([])

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
    console.log(popularCourses)
    return (
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
    );
};

export default PopularCardSection;