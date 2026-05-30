"use client";

import { useState } from "react";

export default function StudentFeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "5",
    comment: "",
  });
  
  const [status, setStatus] = useState({
    type: null, // 'success' অথবা 'error'
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    // try {
    //   const response = await fetch("/api/feedback", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     setStatus({ type: "success", message: "ধন্যবাদ! আপনার ফিডব্যাক সফলভাবে জমা হয়েছে।" });
    //     setFormData({ name: "", email: "", rating: "5", comment: "" }); // ফর্ম রিসেট
    //   } else {
    //     setStatus({ type: "error", message: "দুঃখিত, কোথাও ভুল হয়েছে। আবার চেষ্টা করুন।" });
    //   }
    // } catch (error) {
    //   setStatus({ type: "error", message: "সার্ভারে সমস্যা হচ্ছে। দয়া করে পরে চেষ্টা করুন।" });
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          স্টুডেন্ট ফিডব্যাক ফর্ম
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          আপনার মূল্যবান মতামত আমাদের আরও উন্নত হতে সাহায্য করবে।
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* নাম ইনপুট */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                আপনার নাম (ঐচ্ছিক)
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  placeholder="যেমন: আবির হাসান"
                />
              </div>
            </div>

            {/* ইমেইল ইনপুট */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                ইমেইল অ্যাড্রেস (ঐচ্ছিক)
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  placeholder="student@example.com"
                />
              </div>
            </div>

            {/* রেটিং ইনপুট */}
            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                রেটিং দিন
              </label>
              <div className="mt-1">
                <select
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                >
                  <option value="5">⭐⭐⭐⭐⭐ (অসাধারণ)</option>
                  <option value="4">⭐⭐⭐⭐ (খুব ভালো)</option>
                  <option value="3">⭐⭐⭐ (ভালো)</option>
                  <option value="2">⭐⭐ (মোটামুটি)</option>
                  <option value="1">⭐ (খারাপ)</option>
                </select>
              </div>
            </div>

            {/* ফিডব্যাক কমেন্ট */}
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                আপনার মন্তব্য বা পরামর্শ *
              </label>
              <div className="mt-1">
                <textarea
                  id="comment"
                  name="comment"
                  rows={4}
                  required
                  value={formData.comment}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                  placeholder="আপনার ক্লাস বা কোর্স সম্পর্কে বিস্তারিত লিখুন..."
                />
              </div>
            </div>

            {/* স্ট্যাটাস মেসেজ */}
            {status.type && (
              <div
                className={`p-3 rounded-md text-sm ${
                  status.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                }`}
              >
                {status.message}
              </div>
            )}

            {/* সাবমিট বাটন */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 cursor-pointer"
              >
                {isSubmitting ? "জমা হচ্ছে..." : "ফিডব্যাক সাবমিট করুন"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}