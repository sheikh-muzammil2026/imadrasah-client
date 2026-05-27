"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Card, Input, Button, Checkbox,} from "@heroui/react";
import { ArrowRight, Eye, EyeClosed} from "@gravity-ui/icons";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const router = useRouter()

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  // handle Register button
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());
    console.log(user)

   try {
     
     const {data, error} = await authClient.signUp.email({    
        email: user.email,
        password: user.password,
        name: user.name,
        image: user.image
        
    })
     console.log(data)
     if(data && !error){
         toast.success("Registered successfully")
         router.push('/login')
       }

       if(error){
        toast.error(error.message)
        console.log(error.message)
       }
    
   } catch (error) {
    toast.error("Something went wrong!");
      console.error(error);
    
   }finally{
    setIsLoading(false);
   }

     
  };

  const handleGoogleLogin = () => {
    toast.success("Google এর মাধ্যমে লগইন করা হচ্ছে...");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 p-2">
      
      <Card className="flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl md:flex-row">
        
        {/* Left Side */}
        <div className="relative hidden flex-col justify-between bg-gradient-to-tr from-blue-600 to-indigo-700 p-2 text-white md:flex md:w-1/2">
          
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              স্বাগতম আবার!
            </h1>

            <p className="text-sm text-blue-100/80">
              আপনার অ্যাকাউন্টে লগইন করে নতুন ফিচারগুলো এক্সপ্লোর করুন।
            </p>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15),transparent)]" />

          <div className="text-xs text-blue-200/50">
            © 2026 আপনার কোম্পানি। সর্বস্বত্ব সংরক্ষিত।
          </div>
        </div>

        {/* Right Side */}
        <div className="flex w-full flex-col justify-center bg-slate-950/40 p-4 text-white md:w-1/2">
          
          <div className="mb-4">
            <h2 className="text-2xl font-bold">
              রেজিস্টার করুন
            </h2>

            <p className="text-sm text-slate-400">
              আপনার তথ্য দিয়ে অ্যাকাউন্টটি অ্যাক্সেস করুন
            </p>
          </div>

          <form
            onSubmit={handleRegister}
            className="space-y-2 w-full"
          >
            
             {/* Name */}
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                ইউজার নেম
              </label>

              <Input
                type="text"
                required
                name="name"
                className='w-full'
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                ইমেইল এড্রেস
              </label>

              <Input
                type="email"
                required
                name="email"
               className='w-full'
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                পাসওয়ার্ড
              </label>

              <div className="relative">
                
                <Input
                  type={
                    isVisible ? "text" : "password"
                  }
                  required
                  name="password"
                  className="pr-12 w-full"
                />

               <button
                      type="button"
                      onClick={toggleVisibility}
                      className="absolute right-3 top-1/2 z-10 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                    >
                      {isVisible ? (
                        <EyeClosed
                          width={18}
                          height={18}
                        />
                      ) : (
                        <Eye
                          width={18}
                          height={18}
                        />
                      )}
                </button>
              </div>
            </div>

            {/* Image url */}
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                ফটো লিঙ্ক
              </label>

              <div>
                
                <Input
                  type="url"
                  name="image"
                  required
                   placeholder="https://example.com/photo.jpg"
                   className='w-full'
                />

              </div>
            </div>
            
            {/* role */}
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                রোল
              </label>

              <div>
                
                <Input
                  type="text"
                  required
                   placeholder="এডমিন / স্টুডেন্ট / টিচার "
                   className='w-full'
                />

              </div>
            </div>
            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-xs">
              
              <Checkbox size="sm">
                <span className="text-slate-400">
                  মনে রাখুন
                </span>
              </Checkbox>

              <Link
                href="#"
                className="text-indigo-400 hover:underline"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>

            {/* রেজিস্ট্রেশন করুন */}
            <Button
              type="submit"
              isLoading={isLoading}
              className="w-full bg-indigo-600 font-semibold text-white hover:bg-indigo-700"
            >
              <div className="flex items-center gap-2">
                রেজিস্ট্রেশন করুন

                {!isLoading && (
                  <ArrowRight
                    width={16}
                    height={16}
                  />
                )}
              </div>
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6 flex items-center justify-center">
            
            <div className="absolute w-full border-t border-slate-800"></div>

            <span className="relative px-2 text-xs uppercase text-slate-500">
              অথবা
            </span>
          </div>

          {/* Google Login */}
          <Button
            variant="bordered"
            onClick={handleGoogleLogin}
            className="w-full border-slate-700 text-slate-200 hover:bg-white/5"
          >
            <div className="flex items-center gap-2">
              <FcGoogle size={18} />

              Google দিয়ে লগইন করুন
            </div>
          </Button>

          {/* Register */}
          <p className="mt-2 text-center text-sm text-slate-400">
            অ্যাকাউন্ট নেই?{" "}
            
            <Link
              href="/register"
              className="font-medium text-indigo-400 hover:underline"
            >
              রেজিস্ট্রেশন করুন
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}