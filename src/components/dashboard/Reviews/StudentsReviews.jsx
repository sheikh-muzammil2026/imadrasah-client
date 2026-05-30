"use client";
import React from "react";
import { Avatar, Card} from "@heroui/react";
import { motion } from "framer-motion";

// ১. মক ডাটাবেজ (ডাটাবেজ থেকে আসা কমেন্টের লিস্ট)
const reviews = [
  {
    name: "আরিফ রহমান",
    role: "ওয়েব ডেভেলপমেন্ট স্টুডেন্ট",
    comment: "কোর্সের মডিউলগুলো অসাধারণ ছিল। মেন্টরদের সাপোর্ট টিম যেকোনো সমস্যায় সাথে সাথে সাহায্য করেছে।",
    avatar: "https://i.pravatar.cc/150?u=a042581f2e29026024d"
  },
  {
    name: "ফাতেমা আক্তার",
    role: "গ্রাফিক্স ডিজাইন স্টুডেন্ট",
    comment: "আমি একদম জিরো থেকে শুরু করেছিলাম, এখন আমি ফ্রিল্যান্সিং করছি। আলহামদুলিল্লাহ্‌, বেস্ট ডিসিশন ছিল!",
    avatar: "https://i.pravatar.cc/150?u=a042581f2e29026704d"
  },
  {
    name: "সাকিব হাসান",
    role: "অ্যাপ ডেভেলপমেন্ট স্টুডেন্ট",
    comment: "লাইভ প্রজেক্টগুলো করার কারণে আমার কনফিডেন্স অনেক বেড়ে গেছে। ধন্যবাদ এই টিমকে।",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d"
  },
  {
    name: "নুসরাত জাহান",
    role: "ইউআই/ইউএক্স স্টুডেন্ট",
    comment: "পোর্টফোলিও বিল্ডিং পার্টটা সবচেয়ে বেশি হেল্পফুল ছিল। ইন্টারভিউ ক্র্যাক করতে এটি অনেক সাহায্য করেছে।",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026708d"
  }
];

export default function StudentsReviews() {
  // ২. ইনফিনিট লুপ ট্রিক: ডাটাবেজের কমেন্টগুলোকে ডাবল (Duplicate) করে নেওয়া, 
  // যাতে অ্যানিমেশন শেষ হওয়ার পর কোনো ফাঁকা জায়গা তৈরি না হয়।
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="max-w-7xl mx-auto mt-10 py-20 sm:px-6 lg:px-8 rounded-t-2xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden w-full">
      <div className="max-w-5xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          আমাদের শিক্ষার্থীরা কী বলছেন
        </h2>
        <p className="text-slate-400 mt-2 text-sm">
          সফল স্টুডেন্টদের বাস্তব অভিজ্ঞতা ও মতামত
        </p>
      </div>

      {/* ৩. মেইন অ্যানিমেশন কন্টেইনার */}
      <div className="relative flex w-full overflow-x-hidden mask-gradient">
        
        <motion.div
          className="flex gap-6 whitespace-nowrap min-w-full"
          // ৪. অ্যানিমেশন সেটিংস: ডান থেকে বামে যাবে
          animate={{
            x: ["0%", "-50%"], // নিজের অর্ধেক দূরত্ব পর্যন্ত বামে সরবে
          }}
          transition={{
            ease: "linear",
            duration: 25, // গতি কমানো বা বাড়ানোর জন্য সেকেন্ড পরিবর্তন করুন
            repeat: Infinity, // আজীবন চলতে থাকবে
          }}
        >
          {duplicatedReviews.map((review, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-md border border-white/10 w-[300px] sm:w-[400px] flex-shrink-0 rounded-2xl shadow-xl"
            >
              <div className="p-6 whitespace-normal flex flex-col justify-between space-y-4">
                {/* কমেন্ট বা রিভিউ টেক্সট */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  {review.comment}
                </p>
                
                <div className="flex items-center gap-3 text-left">
                <Avatar
                    src={review.avatar} 
                    className="border-2 border-indigo-500/50 w-10 h-10 rounded-full"
                    
                />
                <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-white">{review.name}</h4>
                    <p className="text-xs text-slate-400">{review.role}</p>
                </div>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

      </div>
    </section>
  );
}