"use client";
import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function HeroSection() {
  
  // ১. প্যারেন্টের জন্য ভেরিয়েন্ট তৈরি (যা stagger কন্ট্রোল করবে)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // চাইল্ডগুলোর অ্যানিমেশন শুরুর মাঝখানের বিরতি (০.২ সেকেন্ড)
        staggerChildren: 0.2, 
        delayChildren: 0.1, // প্রথম অ্যানিমেশনটি শুরু হতে সামান্য দেরি
      },
    },
  };

  // ২. চাইল্ড উপাদানগুলোর সাধারণ অ্যানিমেশন ভেরিয়েন্ট
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // শুরুতে নিচে ও অদৃশ্য থাকবে
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100 } // স্ক্রিনে আসার পর নিজের জায়গায় আসবে
    },
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 px-4">
      
      {/* ৩. প্যারেন্ট কন্টেইনার (এখানে motion.div এবং ভেরিয়েন্ট সেট করতে হবে) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl text-center space-y-6"
      >
        
        {/* চাইল্ড ১: টপ নোটিফিকেশন ব্যাজ */}
        <motion.div variants={itemVariants}>
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            🚀 অ্যাডমিশন ২০২৬ এখন লাইভ
          </span>
        </motion.div>

        {/* চাইল্ড ২: মেইন বড় হেডিং */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
        >
          আপনার ভবিষ্যতের চাবিকাঠি <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            আমাদের স্মার্ট পোর্টালে
          </span>
        </motion.h1>

        {/* চাইল্ড ৩: সাব-হেডিং প্যারাগ্রাফ */}
        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed"
        >
          আধুনিক কোর্স, প্রফেশনাল মেন্টর এবং ডাইনামিক ট্র্যাকিং সিস্টেমের মাধ্যমে আপনার শেখার জার্নিকে করুন আরও সহজ ও আনন্দদায়ক।
        </motion.p>

        {/* চাইল্ড ৪: কল-টু-অ্যাকশন বাটন গ্রুপ */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center pt-4"
        >
          <Button
            size="lg"
            color="secondary"
            variant="shadow"
            className="font-bold rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl shadow-indigo-600/20"
          >
            এখনই ভর্তি হোন
          </Button>
          
          <Button
            size="lg"
            variant="bordered"
            className="font-bold text-white border-white/10 hover:bg-white/5 rounded-xl"
          >
            কোর্সসমূহ দেখুন
          </Button>
        </motion.div>

      </motion.div>
    </section>
  );
}