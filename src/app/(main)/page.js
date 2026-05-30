"use client";

import { useEffect, useState } from "react";
import { getAvalilableCourses } from "@/lib/data";
import StudentsReviews from "@/components/dashboard/Reviews/StudentsReviews";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import PopularCardSection from "@/components/home/PopularCardSection";
import HeroPageAi from "@/components/home/HeroPageByAi";

export default function HomePage() {

  const [popularCourses, setPopularCourses] = useState([])

  useEffect(()=>{
    const getAvailableSixData = async()=>{
      try {

      const availableData = await getAvalilableCourses();
      setPopularCourses(availableData)
        
      } catch (error) {
        console.log(error, "from home page, available data fatching time error")
      }
    }
    getAvailableSixData()
  } , [])


  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen pb-16 transition-colors duration-300">
      
      <HeroPageAi/>
     <PopularCardSection popularCourses={popularCourses} />
      <WhyChooseSection/>
      <StudentsReviews/>

    </div>
  );
}