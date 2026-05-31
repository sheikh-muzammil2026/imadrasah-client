
import PopularCardSection from "@/components/home/PopularCourses";
import WhyChooseSection from "@/components/home/WhyChooseUs";
import HeroSection from "@/components/home/HeroSection";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  title: "Home",
  description: "Welcome to DeenSphere Online Madrasa Platform",
};
export default function HomePage() {




  return (
    <div className="w-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen pb-16 transition-colors duration-300">
      
       <HeroSection/>
     <PopularCardSection />
      <WhyChooseSection/>
      <Testimonials/>

    </div>
  );
}