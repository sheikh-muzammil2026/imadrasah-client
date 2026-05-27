"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 w-full font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* ১. লোগো এবং পরিচিতি */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 bg-emerald-600 rounded-xl text-white shadow-lg flex items-center justify-center">
                <i className="gvt-book-open text-lg"></i>
              </div>
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                DeenSphere
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              সময়, দূরত্ব বা পারিপার্শ্বিক ব্যস্ততা যেন দ্বীনি শিক্ষার পথে বাধা না হয়। DeenSphere-এর মাধ্যমে ঘরে বসেই নির্ভরযোগ্য আলেম ও শিক্ষকদের তত্ত্বাবধানে কুরআন, হাদিস ও ইসলামিক জ্ঞানে নিজেকে সমৃদ্ধ করুন।
            </p>
          </div>

          {/* ২. গুরুত্বপূর্ণ লিঙ্কসমূহ */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-base tracking-wider uppercase border-l-4 border-emerald-500 pl-3">
              Important Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                { name: "Home Page", href: "/" },
                { name: "All Courses", href: "/courses" },
                { name: "Online Admission", href: "/admission" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms" },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="hover:text-emerald-400 transition-colors duration-200 flex items-center group text-slate-400"
                  >
                    <i className="gvt-arrow-up-right text-xs mr-1 text-slate-600 group-hover:text-emerald-400 transition-colors"></i>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ৩. আওয়ার সার্ভিসেস */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-base tracking-wider uppercase border-l-4 border-emerald-500 pl-3">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li className="hover:text-slate-200 transition-colors">✨ Live Online Quran Classes</li>
              <li className="hover:text-slate-200 transition-colors">📚 Authenticated Hadith & Fiqh</li>
              <li className="hover:text-slate-200 transition-colors">👨‍🏫 1-on-1 Certified Teacher Booking</li>
              <li className="hover:text-slate-200 transition-colors">📜 Digital Class Token System</li>
              <li className="hover:text-slate-200 transition-colors">👩‍🏫 Verified Female Teacher Support</li>
            </ul>
          </div>

          {/* ৪. যোগাযোগ */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-base tracking-wider uppercase border-l-4 border-emerald-500 pl-3">
              Contact Info
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li className="flex items-start space-x-3">
                <i className="gvt-map-pin text-emerald-500 text-lg mt-0.5 shrink-0"></i>
                <span className="text-slate-400">হাউস #১২, রোড #০৫, ধানমন্ডি, ঢাকা-১২০৯, বাংলাদেশ</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="gvt-phone text-emerald-500 text-base shrink-0"></i>
                <a href="tel:+8801700000000" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  +880 1700-000000
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="gvt-mail text-emerald-500 text-base shrink-0"></i>
                <a href="mailto:support@deensphere.com" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  support@deensphere.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <hr className="border-slate-900 my-10" />

        {/* নিচের অংশ: সোশাল লিঙ্ক এবং কপিরাইট */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <p className="text-xs text-slate-500 text-center sm:text-left">
            &copy; {currentYear} <span className="text-emerald-500 font-medium">DeenSphere</span>. All rights reserved. 
            <br className="sm:hidden" /> Developed for Assignment Category CAT_02.
          </p>

          {/* সোশ্যাল মিডিয়া লিঙ্কসমূহ */}
          <div className="flex items-center gap-2">
            {[
              { iconClass: "gvt-facebook", href: "https://facebook.com", label: "Facebook" },
              { iconClass: "gvt-youtube", href: "https://youtube.com", label: "Youtube" },
              { iconClass: "gvt-twitter", href: "https://twitter.com", label: "Twitter" },
              { iconClass: "gvt-instagram", href: "https://instagram.com", label: "Instagram" },
            ].map((social, index) => (
              <Button
                key={index}
                as="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                isIconOnly
                variant="flat"
                radius="lg"
                className="bg-slate-900 text-slate-400 hover:bg-emerald-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                aria-label={social.label}
              >
                <i className={`${social.iconClass} text-base`}></i>
              </Button>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}