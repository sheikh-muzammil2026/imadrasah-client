"use client";

import { getMyEnrolledCoursesPromise } from "@/lib/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MyEnrolledClassesContent = () => {

  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [isCancelOpen, setIsCancelOpen] = useState(false)

  useEffect( ()=>{
    const getCoursesDataFromPromise = async()=>{
       const courses = await getMyEnrolledCoursesPromise();
        setEnrolledCourses(courses)
    }
    getCoursesDataFromPromise()

  },[])

  /**
   * 
   * */ 

  return (
   <div className="min-h-screen bg-slate-50/70 py-10 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    
    {/* Header Section */}
    <div className="mb-8 sm:mb-10">
      <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
        <span>🎓</span> My Enrolled Classes
      </h1>
      <p className="text-slate-500 mt-1.5 text-sm sm:text-base">
        Review your enrolled classes, status, timings, or cancel if necessary.
      </p>
    </div>

    {/* Empty State */}
    {enrolledCourses?.length === 0 ? (
      <div className="bg-white rounded-2xl border border-slate-200/60 p-8 sm:p-12 text-center shadow-sm max-w-md mx-auto mt-16">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
          <span className="text-2xl">📖</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900">No Classes Enrolled Yet</h3>
        <p className="text-slate-500 text-sm mt-2 mb-6 max-w-xs mx-auto">
          You havent enrolled in any classes yet. Browse courses to get started!
        </p>
      </div>
    ) : (
      /* Enrolled Classes Table Wrapper */
      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-xl shadow-slate-100/40 overflow-hidden">
        <div className="overflow-x-auto w-full scrollbar-thin">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/60 text-slate-500 text-xs font-bold uppercase tracking-wider select-none">
                <th className="py-4 px-6 min-w-[200px]">Course Name</th>
                <th className="py-4 px-6 min-w-[150px]">Teacher Name</th>
                <th className="py-4 px-6 min-w-[180px]">Student Email</th>
                <th className="py-4 px-6 min-w-[120px]">Status</th>
                <th className="py-4 px-6 min-w-[150px]">Class Time</th>
                <th className="py-4 px-6 text-right min-w-[100px]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {enrolledCourses?.map((singleCourse, index) => (
                <tr key={singleCourse?._id || index} className="hover:bg-slate-50/40 transition-colors">
                  
                  {/* Course Name */}
                  <td className="py-4.5 px-6 font-semibold text-slate-900 whitespace-nowrap">
                    {singleCourse?.courseName || "N/A"}
                  </td>

                  {/* Teacher Name */}
                  <td className="py-4.5 px-6 text-slate-600 font-medium whitespace-nowrap">
                    {singleCourse?.teacherName || "N/A"}
                  </td>

                  {/* Student Email */}
                  <td className="py-4.5 px-6 text-slate-500 whitespace-nowrap">
                    {singleCourse?.userEmail || "N/A"}
                  </td>

                  {/* Status */}
                  <td className="py-4.5 px-6 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                      singleCourse?.status === "Approved" || singleCourse?.status === "Active"
                        ? "bg-green-50 text-green-700 border border-green-200/60"
                        : "bg-amber-50 text-amber-700 border border-amber-200/60"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                        singleCourse?.status === "Approved" || singleCourse?.status === "Active" ? "bg-green-500" : "bg-amber-500"
                      }`} />
                      {singleCourse?.status || "Pending"}
                    </span>
                  </td>

                  {/* Class Time */}
                  <td className="py-4.5 px-6 text-slate-600 font-medium whitespace-nowrap">
                    {singleCourse?.classTime || "N/A"}
                  </td>

                  {/* Cancel Button */}
                  <td className="py-4.5 px-6 text-right whitespace-nowrap">
                    <button 
                      onClick={() => setIsCancelOpen(true)}
                      className="text-xs font-bold bg-white text-red-600 border border-red-200 px-3.5 py-2 rounded-lg shadow-sm hover:bg-red-50 hover:border-red-300 active:scale-95 transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )}

    {/* Confirmation Modal */}
    {isCancelOpen && (
      <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 text-center animate-in fade-in zoom-in-95 duration-150">
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl shadow-inner">
            ⚠️
          </div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">Are you absolutely sure?</h2>
          <p className="text-slate-500 text-sm mt-2 mb-6 px-2 leading-relaxed">
            This will cancel your enrollment from this course. This action cannot be undone.
          </p>
          
          <div className="flex items-center justify-center gap-3">
            <button 
              onClick={() => setIsCancelOpen(false)}
              className="w-full py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer border border-transparent"
            >
              No, Keep It
            </button>
            <button 
              // onClick={handleConfirmCancel}
              className="w-full py-2.5 text-sm font-semibold bg-red-600 text-white rounded-xl shadow-sm hover:bg-red-700 active:scale-98 transition-all cursor-pointer"
            >
              Yes, Cancel
            </button>
          </div>
        </div>
      </div>
    )}

  </div>
</div>
  
  );
};

export default MyEnrolledClassesContent;
