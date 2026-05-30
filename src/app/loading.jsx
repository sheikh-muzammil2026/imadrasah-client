"use client";
import React from "react";
import { Spinner } from "@heroui/react";
import { motion } from "framer-motion"; 

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-indigo-950 flex flex-col items-center justify-center p-4">
      
      {/* ২. সাধারণ div কে motion.div বানালাম */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          type: "spring", // স্প্রিং ইফেক্ট (একটু বাউন্স করবে)
          stiffness: 100, 
          damping: 15 
        }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl flex flex-col items-center space-y-4 shadow-2xl max-w-xs w-full text-center"
      >
        
        {/* ৩. স্পিনারের ওপর পালস (ধকধক করা) অ্যানিমেশন */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Spinner size="lg" color="secondary" />
        </motion.div>
        
        {/* ৪. টেক্সটটি কার্ড আসার ০.৩ সেকেন্ড পর সুন্দরভাবে ফেইড-ইন হবে */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-1"
        >
          <h3 className="text-white font-bold text-lg tracking-wide">অপেক্ষা করুন...</h3>
          <p className="text-xs text-slate-400">আপনার পেজটি লোড হচ্ছে</p>
        </motion.div>

      </motion.div>
    </div>
  );
}