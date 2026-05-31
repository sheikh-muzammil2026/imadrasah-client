import React from 'react';

const WhyChooseSection = () => {
    return (
       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 md:p-14 text-white relative overflow-hidden">

    {/* Subtle Background Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px]" />

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

      {/* LEFT CONTENT */}
      <div className="lg:col-span-7 space-y-10">

        {/* Header */}
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-emerald-400">
            Academic System
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-100">
            Our Academic Framework
          </h2>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl">
            একটি ঐতিহ্যবাহী সুশৃঙ্খল অফলাইন মাদরাসার উসূল ও আধুনিক বৈশ্বিক প্রাতিষ্ঠানিক
            কারিগরি প্রযুক্তির সমন্বিত ডিজিটাল ইকোসিস্টেম।
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900 transition">
            <span className="text-xs text-emerald-400">01 / DISCIPLINE</span>
            <h4 className="font-semibold mt-2 text-slate-100">Flexible Scheduling</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              ভোর, বিকেল ও রাতের ক্লাস শিফট সিস্টেম শিক্ষার্থীদের সুবিধার্থে।
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900 transition">
            <span className="text-xs text-cyan-400">02 / INTERACTION</span>
            <h4 className="font-semibold mt-2 text-slate-100">Live Sessions</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              লাইভ প্রশ্নোত্তর ও ইন্টারেক্টিভ ভাইভা সিস্টেম।
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900 transition">
            <span className="text-xs text-teal-400">03 / PRIVACY</span>
            <h4 className="font-semibold mt-2 text-slate-100">Female Faculty</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              নারীদের জন্য আলাদা নিরাপদ ভার্চুয়াল ক্লাসরুম।
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900 transition">
            <span className="text-xs text-emerald-400">04 / ARCHIVE</span>
            <h4 className="font-semibold mt-2 text-slate-100">Digital Library</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              সকল ক্লাস নোট, ভিডিও ও রিসোর্স আজীবন সংরক্ষিত।
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE VISUAL (STATIC CLEAN VERSION) */}
      <div className="lg:col-span-5 flex items-center justify-center">

        <div className="relative w-72 h-72 rounded-full border border-slate-800 bg-slate-900/30 flex items-center justify-center">

          {/* Inner circles */}
          <div className="w-52 h-52 rounded-full border border-slate-700 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border border-slate-600 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-emerald-400"></div>
            </div>
          </div>

          {/* small nodes */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-2 h-2 bg-emerald-400 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-2 h-2 bg-teal-400 rounded-full"></div>

        </div>

      </div>

    </div>
  </div>
</section>
    );
};

export default WhyChooseSection;