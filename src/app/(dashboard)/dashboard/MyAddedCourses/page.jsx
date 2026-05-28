'use client'
import { authClient } from '@/lib/auth-client';
import { cancelMyAddedCourse, getMyAddedCoursesPromise } from '@/lib/data';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MyAddedCourses = () => {

    const [myCourses, setMyCourses] = useState([]);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const [selectedCourse, setSelectedCourse] = useState()


    const {data:session} = authClient.useSession()
    const userId = session?.user.id;
  
    useEffect( ()=>{
        try {
            const getMyaddedCoursesData = async()=>{
                const data = await getMyAddedCoursesPromise(userId)
                setMyCourses(data)
            }
            getMyaddedCoursesData()
            
        } catch (error) {
            console.log(error);
        }
    } , [userId])

    const handleConfirmDelete = async()=>{
      try {
        const selectedCourseId = selectedCourse?._id;
        await cancelMyAddedCourse(selectedCourseId)
        
        const filteredCourses = myCourses.filter((course)=> course?._id !=selectedCourseId )
        setMyCourses(filteredCourses);
        toast.success("The course has been deleted successfully. ✅");

      } catch (error) {
        console.log(error);
      }
    }

    return (
     
        <div className="min-h-screen bg-slate-50/70 py-10 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
          <span>📚</span> My Courses
        </h1>

        <p className="text-slate-500 mt-1.5 text-sm sm:text-base">
          Manage your added courses, update information, or remove courses anytime.
        </p>
      </div>

      {/* Optional Add Course Button */}
      <button className="bg-slate-900 text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-md hover:bg-slate-800 active:scale-95 transition-all cursor-pointer">
        + Add New Course
      </button>
    </div>

    {/* Empty State */}
    {myCourses?.length === 0 ? (
      <div className="bg-white rounded-2xl border border-slate-200/60 p-8 sm:p-12 text-center shadow-sm max-w-md mx-auto mt-16">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
          <span className="text-2xl">📘</span>
        </div>

        <h3 className="text-lg font-bold text-slate-900">
          No Courses Added Yet
        </h3>

        <p className="text-slate-500 text-sm mt-2 mb-6 max-w-xs mx-auto">
          You haven’t added any courses yet. Start creating your first course now.
        </p>

        <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow hover:bg-slate-800 transition-all cursor-pointer">
          Create Course
        </button>
      </div>
    ) : (
      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-xl shadow-slate-100/40 overflow-hidden">

        {/* Table */}
        <div className="overflow-x-auto w-full scrollbar-thin">
          <table className="w-full text-left border-collapse min-w-[1050px]">

            {/* Table Head */}
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/60 text-slate-500 text-xs font-bold uppercase tracking-wider select-none">
                
                <th className="py-4 px-6 min-w-[220px]">
                  Course Name
                </th>

                <th className="py-4 px-6 min-w-[180px]">
                  Category
                </th>

                <th className="py-4 px-6 min-w-[150px]">
                  Level
                </th>

                <th className="py-4 px-6 min-w-[120px]">
                  Price
                </th>

                <th className="py-4 px-6 min-w-[150px]">
                  Status
                </th>

                <th className="py-4 px-6 text-right min-w-[220px]">
                  Actions
                </th>

              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-100 text-sm">

              {myCourses?.map((course, index) => (
                <tr
                  key={course?._id || index}
                  className="hover:bg-slate-50/40 transition-colors"
                >

                  {/* Course Name */}
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">

                      {/* <Image
                        width={36}
                        height={36}
                        src={course?.image}
                        alt={course?.title}
                        className="w-12 h-12 rounded-xl object-cover border border-slate-200"
                      /> */}

                      <div>
                        <h3 className="font-semibold text-slate-900 line-clamp-1">
                          {course?.title || "N/A"}
                        </h3>

                        <p className="text-xs text-slate-500 mt-1">
                          Created by You
                        </p>
                      </div>

                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-5 px-6 text-slate-600 font-medium whitespace-nowrap">
                    {course?.category || "N/A"}
                  </td>

                  {/* Level */}
                  <td className="py-5 px-6 whitespace-nowrap">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                      {course?.level || "Beginner"}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="py-5 px-6 text-slate-700 font-semibold whitespace-nowrap">
                    ${course?.fee || 0}
                  </td>

                  {/* Status */}
                  <td className="py-5 px-6 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                        course?.status === "Published"
                          ? "bg-green-50 text-green-700 border border-green-200/60"
                          : "bg-amber-50 text-amber-700 border border-amber-200/60"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          course?.status === "Published"
                            ? "bg-green-500"
                            : "bg-amber-500"
                        }`}
                      />

                      {course?.status || "Draft"}
                    </span>
                  </td>

                  {/* Action Buttons */}
                  <td className="py-5 px-6">
                    <div className="flex items-center justify-end gap-3">

                      {/* Update */}
                      <button
                      onClick={()=> {
                        setIsUpdateOpen(true)
                        // handleUpdateModal(course)
                      }}
                        
                        className="text-xs font-bold bg-white text-slate-700 border border-slate-200 px-4 py-2 rounded-lg shadow-sm hover:bg-slate-100 hover:border-slate-300 active:scale-95 transition-all cursor-pointer"
                      >
                        Update
                      </button>

                      {/* Delete */}
                      <button
                        onClick={()=>{
                          setIsDeleteOpen(true)
                          setSelectedCourse(course)
                        }}
                       
                        className="text-xs font-bold bg-white text-red-600 border border-red-200 px-4 py-2 rounded-lg shadow-sm hover:bg-red-50 hover:border-red-300 active:scale-95 transition-all cursor-pointer"
                      >
                        Delete
                      </button>

                    </div>
                  </td>

                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    )}

    {/* ===================== */}
    {/* UPDATE COURSE MODAL */}
    {/* ===================== */}

    {isUpdateOpen && (
      <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm flex items-center justify-center p-4">

        <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-150">

          {/* Header */}
          <div className="px-7 py-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Update Course
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Edit your course information below.
              </p>
            </div>

            <button
              onClick={() => setIsUpdateOpen(false)}
              className="w-9 h-9 rounded-full hover:bg-slate-100 transition flex items-center justify-center text-slate-500 cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Form */}
          <form
            // onSubmit={handleUpdateCourse}
            className="p-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >

            {/* Course Title */}
            <div className="sm:col-span-2">
              <label className="text-sm font-semibold text-slate-700 mb-2 block">
                Course Title
              </label>

              <input
                type="text"
                // defaultValue={selectedCourse?.title}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">
                Category
              </label>

              <input
                type="text"
                // defaultValue={selectedCourse?.category}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
              />
            </div>

            {/* Level */}
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">
                Level
              </label>

              <input
                type="text"
                // defaultValue={selectedCourse?.level}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
              />
            </div>

            {/* Price */}
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">
                Price
              </label>

              <input
                type="number"
                // defaultValue={selectedCourse?.price}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
              />
            </div>

            {/* Thumbnail */}
            <div>
              <label className="text-sm font-semibold text-slate-700 mb-2 block">
                Thumbnail URL
              </label>

              <input
                type="url"
                // defaultValue={selectedCourse?.thumbnail}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300"
              />
            </div>

            {/* Description */}
            <div className="sm:col-span-2">
              <label className="text-sm font-semibold text-slate-700 mb-2 block">
                Description
              </label>

              <textarea
                rows={4}
                // defaultValue={selectedCourse?.description}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="sm:col-span-2 flex items-center justify-end gap-3 pt-2">

              <button
                type="button"
                onClick={() => setIsUpdateOpen(false)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 active:scale-95 transition-all shadow cursor-pointer"
              >
                Save Changes
              </button>

            </div>

          </form>
        </div>
      </div>
    )}

    {/* ===================== */}
    {/* DELETE CONFIRM MODAL */}
    {/* ===================== */}

    {isDeleteOpen && (
      <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">

        <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 text-center animate-in fade-in zoom-in-95 duration-150">

          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl shadow-inner">
            🗑️
          </div>

          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Delete This Course?
          </h2>

          <p className="text-slate-500 text-sm mt-2 mb-6 px-2 leading-relaxed">
            This course will be permanently deleted from your dashboard.
            This action cannot be undone.
          </p>

          <div className="flex items-center justify-center gap-3">

            <button
              onClick={() => setIsDeleteOpen(false)}
              className="w-full py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer border border-transparent"
            >
              Cancel
            </button>

            <button
              onClick={handleConfirmDelete}
              className="w-full py-2.5 text-sm font-semibold bg-red-600 text-white rounded-xl shadow-sm hover:bg-red-700 active:scale-98 transition-all cursor-pointer"
            >
              Yes, Delete
            </button>

          </div>
        </div>
      </div>
    )}

  </div>
</div>
    );
};

export default MyAddedCourses;