"use client";
import React from "react";
import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-indigo-950 flex flex-col items-center justify-center p-4">
      {/* গ্লাস-মরফিজম কন্টেইনার */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl flex flex-col items-center space-y-4 shadow-2xl max-w-xs w-full text-center">
        
        {/* HeroUI v3 স্পিনার */}
        <Spinner 
          size="lg" 
          color="secondary" 
          labelColor="secondary"
          className="drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
        />
        
        <div className="space-y-1">
          <h3 className="text-white font-bold text-lg tracking-wide">অপেক্ষা করুন...</h3>
          <p className="text-xs text-slate-400">আপনার পেজটি লোড হচ্ছে</p>
        </div>

      </div>
    </div>
  );
}