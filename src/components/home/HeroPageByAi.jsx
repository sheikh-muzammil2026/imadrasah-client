'use client'
import React, { useEffect, useState } from "react";

export default function HeroPageAi() {
  const [currentSlide, setCurrentSlide] = useState(0);


  const bannerSlides = [
    {
      title: "ঘরে বসেই হোক দ্বীনি শিক্ষার উচ্চতর সূচনা",
      highlight: "১-অন-১ লাইভ সেশন ও গ্লোবাল স্ট্যান্ডার্ড",
      desc: "দূরত্ব বা সময়ের ব্যস্ততায় আর থমকে থাকবে না আপনার ইসলামিক জ্ঞান অর্জন। মহাজাগতিক ও প্রাতিষ্ঠানিক সমন্বয়ে সাজানো আমাদের আধুনিক প্ল্যাটফর্মে যুক্ত হোন আজই।",
      bg: "from-[#020617] via-[#071330] to-[#040d21]",
      accent: "emerald"
    },
    {
      title: "শুদ্ধ উচ্চারণে কুরআন ও তাজবীদ গবেষণা",
      highlight: "নারী শিক্ষার্থীদের জন্য সম্পূর্ণ ডেডিকেটেড সাপোর্ট",
      desc: "অভিজ্ঞ কারী ও হাফেজদের কাছ থেকে একদম শুরু থেকে প্রাতিষ্ঠানিক গাইডলাইন অনুযায়ী সহীহ-শুদ্ধভাবে কুরআন তিলাওয়াত ও এর প্রায়োগিক ব্যাকরণ শিখুন।",
      bg: "from-[#020617] via-[#031b33] to-[#011224]",
      accent: "cyan"
    },
    {
      title: "ইসলামিক স্কলারশিপ ও উচ্চতর ফিকহ কোর্স",
      highlight: "ভেরিফাইড ক্লাস ক্রেডিট ও ডিজিটাল আইডি",
      desc: "কুরআন, সুন্নাহ এবং সমসাময়িক মাসআলা-মাসায়েলের ওপর নির্ভরযোগ্য গবেষক ও আলেমদের তত্ত্বাবধানে একাডেমিক ফিকহ ও আকীদা অর্জন করুন।",
      bg: "from-[#020617] via-[#0c1a30] to-[#050f1f]",
      accent: "teal"
    }
  ];



  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === bannerSlides.length - 1 ? 0 : prevSlide + 1
      );
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [bannerSlides.length]);




  return (
    <div className="w-full bg-[#030712] text-slate-100 min-h-screen pb-24 transition-colors duration-500 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      
      {/* 🌌 SECTION 1: COSMIC HERO BANNER (PURE TAILWIND ANIMS & GLOWS) */}
      <section className="relative w-full overflow-hidden h-[600px] md:h-[680px] flex items-center bg-[#020617]">
        {/* Futuristic Space Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-10" />
        
        {/* Nebula Glow Orbs (Tailwind Custom Shadows & Blurs) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none animate-[pulse_6s_infinite]" />

        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out flex items-center bg-gradient-to-tr ${slide.bg} ${
              index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
            }`}
          >
            {/* Elegant Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#020617]/50" />
            
            <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full text-left relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Area */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border-l-2 border-emerald-400 text-emerald-400 text-xs font-semibold tracking-widest uppercase rounded-r-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  {slide.highlight}
                </div>
                
                <h1 className="text-4xl md:text-6xl font-extralight tracking-tight leading-[1.15] text-slate-100">
                  {slide.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                    {slide.title.split(" ").pop()}
                  </span>
                </h1>
                
                <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed max-w-2xl">
                  {slide.desc}
                </p>
                
                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href="#courses"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-slate-950 font-semibold tracking-wider px-8 py-4 text-sm transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:shadow-[0_0_35px_rgba(16,185,129,0.4)]"
                  >
                    <span>EXPLORE PROGRAMS</span>
                    <span className="ml-2 font-mono">→</span>
                  </a>
                </div>
              </div>

              {/* Glowing Low-Poly Islamic Dome Vector (Pure Responsive SVG inside Tailwind) */}
              <div className="hidden lg:col-span-5 relative lg:flex items-center justify-center">
                <div className="absolute w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                <svg className="w-full max-w-[340px] aspect-square relative z-10 text-emerald-400/80 hover:text-cyan-400 transition-colors duration-700" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Orbiting Ring */}
                  <ellipse cx="100" cy="110" rx="90" ry="35" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="animate-[spin_40s_linear_infinite]" />
                  <ellipse cx="100" cy="110" rx="75" ry="20" stroke="currentColor" strokeWidth="0.5" className="animate-[spin_20s_linear_infinite_reverse] opacity-60" />
                  
                  {/* Glowing Core Particle */}
                  <circle cx="100" cy="45" r="5" className="fill-emerald-400 animate-ping" />
                  <circle cx="100" cy="45" r="3" className="fill-emerald-400" />
                  
                  {/* Main Dome Low-Poly Lines */}
                  <path d="M100 45 C100 45, 135 85, 145 110" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M100 45 C100 45, 65 85, 55 110" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M100 45 C100 45, 115 80, 115 110" stroke="currentColor" strokeWidth="1" />
                  <path d="M100 45 C100 45, 85 80, 85 110" stroke="currentColor" strokeWidth="1" />
                  <path d="M100 45 L100 110" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />

                  {/* Horizontal Cyber Grid Lines */}
                  <path d="M55 110 C55 110, 100 130, 145 110" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M68 95 C68 95, 100 112, 132 95" stroke="currentColor" strokeWidth="1" />
                  <path d="M80 80 C80 80, 100 93, 120 80" stroke="currentColor" strokeWidth="0.8" />
                  <path d="M90 65 C90 65, 100 73, 110 65" stroke="currentColor" strokeWidth="0.5" />

                  {/* Base pillars */}
                  <rect x="52" y="112" width="96" height="4" stroke="currentColor" strokeWidth="1" />
                  <line x1="55" y1="116" x2="145" y2="116" stroke="currentColor" strokeWidth="1" />
                  <line x1="60" y1="120" x2="140" y2="120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                </svg>
              </div>

            </div>
          </div>
        ))}

        {/* Minimalist Slide Navigation */}
        <div className="absolute bottom-10 right-6 md:right-12 flex items-center space-x-6 z-30">
          <span className="text-xs text-slate-500 font-mono">0{currentSlide + 1} / 0{bannerSlides.length}</span>
          <div className="flex space-x-2">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-[2px] transition-all duration-300 ${
                  index === currentSlide ? "w-12 bg-emerald-400" : "w-6 bg-slate-800 hover:bg-slate-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

    
     

    </div>
  );
}