"use client";
import React from "react";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-indigo-950 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        
        {/* বড় ৪MD মেটালিক টেক্সট */}
        <h1 className="text-9xl font-black tracking-tighter bg-gradient-to-b from-indigo-400 to-slate-800 bg-clip-text text-transparent select-none animate-pulse">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">পেজটি খুঁজে পাওয়া যায়নি!</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            দুঃখিত, আপনি যে লিংকটি খুঁজছেন সেটি হয়তো পরিবর্তন করা হয়েছে অথবা অস্তিত্ব নেই।
          </p>
        </div>

        {/* ব্যাক টু হোম বাটন */}
        <div className="pt-4">
          <Link href={'/'}>
          <Button
            size="lg"
            variant="shadow"
            color="secondary"
            className="font-bold rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/20"
          >
            <i className="fas fa-home mr-2"></i> হোমপেজে ফিরে যান
          </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}