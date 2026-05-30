"use client";
import React, { useEffect } from "react";
import { Button } from "@heroui/react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // কন্সোলে এরর লগ করা হচ্ছে
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-rose-950 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md bg-slate-900/60 backdrop-blur-md border border-rose-500/20 p-8 rounded-3xl shadow-2xl space-y-6">
        
        {/* এরর আইকন */}
        <div className="w-16 h-16 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mx-auto text-3xl shadow-lg shadow-rose-500/5">
          <i className="fas fa-exclamation-triangle"></i>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">কিছু একটা ভুল হয়েছে!</h2>
          <p className="text-sm text-slate-400">
            পেজটি লোড করার সময় আমাদের সিস্টেমে একটি সাময়িক ত্রুটি দেখা দিয়েছে।
          </p>
        </div>

        {/* এরর মেসেজ প্রিভিউ */}
        <div className="p-3 bg-black/40 rounded-xl border border-white/5 text-left">
          <p className="text-[11px] font-mono text-rose-400 break-all">
            {error?.message || "An unexpected error occurred."}
          </p>
        </div>

        {/* অ্যাকশন বাটনসমূহ */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button
            onClick={() => reset()}
            size="md"
            variant="solid"
            color="danger"
            className="font-bold rounded-xl shadow-lg shadow-rose-600/20"
          >
            <i className="fas fa-sync-alt mr-2"></i> আবার চেষ্টা করুন
          </Button>
          
          <Button
            onClick={() => window.location.href = '/'}
            size="md"
            variant="bordered"
            className="font-bold text-white border-white/20 hover:bg-white/5 rounded-xl"
          >
            হোমে যান
          </Button>
        </div>

      </div>
    </div>
  );
}