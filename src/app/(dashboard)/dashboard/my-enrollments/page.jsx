"use client";

import { authClient } from "@/lib/auth-client";
import { cancelEnrolledCourses, getMyEnrolledCoursesPromise, updateMyEnrolledClass } from "@/lib/data";
import React, { useEffect, useState } from "react";
import { Button } from '@heroui/react';
import { toast } from "react-toastify";

const MyEnrolledClassesContent = () => {


  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [isCancelOpen, setIsCancelOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState()
  const [isUpdateOpen, setIsUpdateOpen] = useState(false)

  const {data:session} = authClient.useSession();
  const userId = session?.user.id;

  // console.log(userId, "from enrolled courses page")

  useEffect( ()=>{
    const getCoursesDataFromPromise = async()=>{
       const courses = await getMyEnrolledCoursesPromise(userId);
        setEnrolledCourses(courses)
    }
    getCoursesDataFromPromise()

  },[userId])

  

  const handleUpdateClass = async(e) =>{
    try {
       e.preventDefault()
       const formData = new FormData(e.target);
       const updatedValues = Object.fromEntries(formData.entries())

       const classId = selectedCourse?._id;
      const result = await updateMyEnrolledClass(updatedValues,classId)

      if(result.modifiedCount > 0){
          toast.success("Saved successfully")

          const updateUiAfterMaping = enrolledCourses.map((course)=> {
        if(course._id === classId){
          return {
            ...course,
            ...updatedValues
          }
        }
        return course;
      });
      console.log(updateUiAfterMaping, "after maping");
      setEnrolledCourses(updateUiAfterMaping);
      setIsUpdateOpen(false)
      }


    } catch (error) {
      console.log(error, "from handle update class function");
      toast.error("Update failed");
    }
    
  }

  const handleConfirmCancel = async() =>{
     try {
          const id = selectedCourse?._id;
          await cancelEnrolledCourses(id)
          toast.success("The course has been deleted successfully. ✅");

          const filteredCourses = enrolledCourses.filter((course)=> course._id != selectedCourse?._id)
          setEnrolledCourses(filteredCourses)
      
     } catch (error) {
      console.log(error);
     }
  }

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

  {/* Table wrapper */}
  <div className="overflow-x-auto w-full">
    <table className="w-full text-left border-collapse min-w-[800px]">

      {/* HEADER */}
      <thead className="hidden md:table-header-group">
        <tr className="bg-slate-50/80 border-b border-slate-200/60 text-slate-500 text-xs font-bold uppercase tracking-wider select-none">
          <th className="py-4 px-6 min-w-[200px]">Course Name</th>
          <th className="py-4 px-6 min-w-[150px]">Teacher Name</th>
          <th className="py-4 px-6 min-w-[180px]">Student Email</th>
          <th className="py-4 px-6 min-w-[120px]">Status</th>
          <th className="py-4 px-6 min-w-[150px]">Class Time</th>
          <th className="py-4 px-6 text-center min-w-[100px]">Actions</th>
        </tr>
      </thead>

      {/* BODY */}
      <tbody className="divide-y divide-slate-100 text-sm block md:table-row-group">

        {enrolledCourses?.map((singleCourse, index) => (
          <tr
            key={singleCourse?._id || index}
            className="block md:table-row bg-white md:bg-transparent border md:border-0 rounded-xl mb-4 md:mb-0 shadow-sm md:shadow-none hover:bg-slate-50/40 transition-colors"
          >

            {/* Course Name */}
            <td className="block md:table-cell py-3 px-4 md:py-4.5 md:px-6 font-semibold text-slate-900"
              data-label="Course Name"
            >
              <span className="md:hidden text-slate-500 text-xs">Course Name: </span>
              {singleCourse?.courseName || "N/A"}
            </td>

            {/* Teacher Name */}
            <td className="block md:table-cell py-3 px-4 md:py-4.5 md:px-6 text-slate-600 font-medium"
              data-label="Teacher Name"
            >
              <span className="md:hidden text-slate-500 text-xs">Teacher: </span>
              {singleCourse?.teacherName || "N/A"}
            </td>

            {/* Student Email */}
            <td className="block md:table-cell py-3 px-4 md:py-4.5 md:px-6 text-slate-500"
              data-label="Email"
            >
              <span className="md:hidden text-slate-500 text-xs">Email: </span>
              {singleCourse?.userEmail || "N/A"}
            </td>

            {/* Status */}
            <td className="block md:table-cell py-3 px-4 md:py-4.5 md:px-6"
              data-label="Status"
            >
              <span className="md:hidden text-slate-500 text-xs">Status: </span>

              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                singleCourse?.status === "Approved" || singleCourse?.status === "Active"
                  ? "bg-green-50 text-green-700 border border-green-200/60"
                  : "bg-amber-50 text-amber-700 border border-amber-200/60"
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                  singleCourse?.status === "Approved" || singleCourse?.status === "Active"
                    ? "bg-green-500"
                    : "bg-amber-500"
                }`} />
                {singleCourse?.status || "Pending"}
              </span>
            </td>

            {/* Class Time */}
            <td className="block md:table-cell py-3 px-4 md:py-4.5 md:px-6 text-slate-600 font-medium"
              data-label="Class Time"
            >
              <span className="md:hidden text-slate-500 text-xs">Time: </span>
              {singleCourse?.classTime || "N/A"}
            </td>

            {/* Actions */}
            <td className="block md:table-cell py-3 px-4 md:py-4.5 md:px-6 md:text-right space-y-2 md:space-y-0 md:space-x-2"
              data-label="Actions"
            >
              <span className="md:hidden text-slate-500 text-xs block mb-2">Actions:</span>

              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedCourse(singleCourse)
                  setIsUpdateOpen(true)
                }}
              >
                update
              </Button>

              <button
                onClick={() => {
                  setSelectedCourse(singleCourse)
                  setIsCancelOpen(true)
                }}
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


    {/* ===================== */}
    {/* UPDATE Class MODAL */}
    {/* ===================== */}

    {isUpdateOpen && (
      <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">

  <div className="bg-white w-full max-w-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">

    {/* Header */}
    <div className="px-5 sm:px-7 py-4 sm:py-5 border-b border-slate-100 flex items-start sm:items-center justify-between gap-3">
      
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-slate-900">
          Update Class
        </h2>

        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Edit your class information below.
        </p>
      </div>

      <button
        onClick={() => setIsUpdateOpen(false)}
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full hover:bg-slate-100 transition flex items-center justify-center text-slate-500 cursor-pointer"
      >
        ✕
      </button>
    </div>

    {/* Form */}
    <form
      onSubmit={handleUpdateClass}
      className="p-5 sm:p-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
    >

      {/* Class Title */}
      <div className="sm:col-span-2">
        <label className="text-sm font-semibold text-slate-700 mb-2 block">
          Class Title
        </label>

        <input
          type="text"
          name="courseName"
          defaultValue={selectedCourse?.courseName}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 text-sm sm:text-base"
        />
      </div>

      {/* Category */}
      <div>
        <label className="text-sm font-semibold text-slate-700 mb-2 block">
          Category
        </label>

        <input
          type="text"
          name="subject"
          defaultValue={selectedCourse?.subject}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 text-sm sm:text-base"
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-sm font-semibold text-slate-700 mb-2 block">
          Email
        </label>

        <input
          type="email"
          name="userEmail"
          defaultValue={selectedCourse?.userEmail}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 text-sm sm:text-base"
        />
      </div>

      {/* Teacher */}
      <div>
        <label className="text-sm font-semibold text-slate-700 mb-2 block">
          Teacher
        </label>

        <input
          type="text"
          name="teacherName"
          defaultValue={selectedCourse?.teacherName}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 text-sm sm:text-base"
        />
      </div>

      {/* Class Time */}
      <div>
        <label className="text-sm font-semibold text-slate-700 mb-2 block">
          Class Time
        </label>

        <input
          type="text"
          name="classTime"
          defaultValue={selectedCourse?.classTime}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 text-sm sm:text-base"
        />
      </div>

      {/* Buttons */}
      <div className="sm:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-2">

        <button
          type="button"
          onClick={() => setIsUpdateOpen(false)}
          className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-600 hover:bg-slate-100 transition cursor-pointer w-full sm:w-auto"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 active:scale-95 transition-all shadow cursor-pointer w-full sm:w-auto"
        >
          Save Changes
        </button>

      </div>

    </form>
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
              onClick={()=> {
                handleConfirmCancel(selectedCourse)
                setIsCancelOpen(false)
              }}
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
