import React from 'react';

const WhyChooseSection = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-32">
        <div className="bg-[#040a1b]/80 border  border-slate-800 p-8 md:p-16 text-white relative overflow-hidden">
          {/* Subtle Cyber Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Architectural Info Block */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block">Operational Core</span>
                <h2 className="text-3xl md:text-5xl font-extralight tracking-tight">Our Academic Framework</h2>
                <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-2xl">
                  একটি ঐতিহ্যবাহী সুশৃঙ্খল অফলাইন মাদরাসার উসূল ও আধুনিক বৈশ্বিক প্রাতিষ্ঠানিক কারিগরি প্রযুক্তির সমন্বিত ডিজিটাল ইকোসিস্টেম।
                </p>
              </div>
              
              {/* Technical Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2 border-l border-emerald-500/50 pl-4 hover:border-emerald-400 transition-colors">
                  <span className="font-mono text-[9px] text-emerald-400">01 / DISCIPLINE</span>
                  <h4 className="font-semibold text-sm text-slate-200">Flexible Scheduling Systems</h4>
                  <p className="text-xs text-slate-400 font-light">কর্মব্যস্ত সমাজ ও একাডেমিক শিক্ষার্থীদের সুবিধার্থে ভোর, বিকেল ও রাতের ক্লাসের ডেডিকেটেড শিফট সিস্টেম।</p>
                </div>

                <div className="space-y-2 border-l border-cyan-500/50 pl-4 hover:border-cyan-400 transition-colors">
                  <span className="font-mono text-[9px] text-cyan-400">02 / INTERACTION</span>
                  <h4 className="font-semibold text-sm text-slate-200">Live Research Sessions</h4>
                  <p className="text-xs text-slate-400 font-light">রেকর্ডেড লেকচারের পাশাপাশি নিয়মিত সরাসরি ওয়ান-টু-ওয়ান ইন্টারেক্টিভ প্রশ্নোত্তর ও ভাইভা পরীক্ষা পোর্টাল।</p>
                </div>

                <div className="space-y-2 border-l border-teal-500/50 pl-4 hover:border-teal-400 transition-colors">
                  <span className="font-mono text-[9px] text-teal-400">03 / PRIVACY GUARDS</span>
                  <h4 className="font-semibold text-sm text-slate-200">Dedicated Female Faculty</h4>
                  <p className="text-xs text-slate-400 font-light">বোনদের পর্দার সুরক্ষায় সম্পূর্ণ আলাদা ভার্চুয়াল ক্লাসরুমে বিজ্ঞ নারী আলেম শিক্ষিকাদের তত্ত্বাবধান পোর্টাল।</p>
                </div>

                <div className="space-y-2 border-l border-emerald-500/50 pl-4 hover:border-emerald-400 transition-colors">
                  <span className="font-mono text-[9px] text-emerald-400">04 / SECURE VAULT</span>
                  <h4 className="font-semibold text-sm text-slate-200">Digital Archive System</h4>
                  <p className="text-xs text-slate-400 font-light">ক্লাসের সমস্ত রেফারেন্স নোট, ইবুক এবং অডিও/ভিডিও লেকচার লাইব্রেরি ব্যাকআপ হিসেবে ড্যাশবোর্ডে আজীবন সংরক্ষিত।</p>
                </div>
              </div>
            </div>

            {/* Glowing Knowledge Sphere Network Visualization (Pure Responsive SVG inside Tailwind) */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="absolute w-60 h-60 bg-emerald-500/5 rounded-full blur-2xl animate-pulse" />
              <svg className="w-full max-w-[280px] aspect-square relative z-10 text-emerald-500/40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Concentric Circles */}
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,2" className="animate-[spin_60s_linear_infinite]" />
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,1" className="animate-[spin_30s_linear_infinite_reverse]" />
                <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />

                {/* Core Data Node */}
                <circle cx="50" cy="50" r="3" className="fill-emerald-400 animate-ping" />
                <circle cx="50" cy="50" r="1.5" className="fill-emerald-400" />

                {/* Orbit Nodes & Network Vectors */}
                <g className="animate-[spin_40s_linear_infinite]">
                  <line x1="50" y1="50" x2="50" y2="5" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="5" r="2" className="fill-cyan-400" />
                  <line x1="50" y1="50" x2="85" y2="70" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="85" cy="70" r="2" className="fill-emerald-400" />
                  <line x1="50" y1="50" x2="15" y2="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                  <circle cx="15" cy="70" r="1.5" className="fill-teal-400" />
                </g>

                <g className="animate-[spin_25s_linear_infinite_reverse]">
                  <circle cx="18" cy="35" r="2" className="fill-emerald-400" />
                  <circle cx="82" cy="35" r="1.5" className="fill-cyan-300" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    );
};

export default WhyChooseSection;