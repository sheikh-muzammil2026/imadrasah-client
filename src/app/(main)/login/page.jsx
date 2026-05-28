"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Card,Input,Button,Checkbox,} from "@heroui/react";
import { ArrowRight, Eye, EyeClosed} from "@gravity-ui/icons";

import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
     setIsLoading(true);
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());


            try {
              const { data, error } = await authClient.signIn.email({
                  email: user.email,
                  password: user.password,
                  callbackURL: "/"   
              
            })
            if(data && !error ){
                toast.success("logged in successfully")
            }else{
              toast.error(error.message)
            }
            
              
            } catch (error) {

            console.log(error.message)
            }



    setIsLoading(false);
   
  };

  const handleGoogleLogin = async() => {
     try {
      await authClient.signIn.social({
      provider: "google",
      callbackURL: "/", 
                });
      toast.success("logged in successfully");
     
     } catch (error) {
      console.log(error, "from google login in login page")
      
     }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 p-4">
      
      <Card className="flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl md:flex-row">
        
        {/* Left Side */}
        <div className="relative hidden flex-col justify-between bg-gradient-to-tr from-blue-600 to-indigo-700 p-8 text-white md:flex md:w-1/2">
          
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
        <div className="flex w-full flex-col justify-center bg-slate-950/40 p-8 text-white md:w-1/2">
          
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              লগইন করুন
            </h2>

            <p className="text-sm text-slate-400">
              আপনার তথ্য দিয়ে অ্যাকাউন্টটি অ্যাক্সেস করুন
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className="space-y-4"
          >
            
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                ইমেইল এড্রেস
              </label>

              <Input
                type="email"
                required
                name="email"
                className="text-black"
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
                  className="pr-12 text-black"
                />

                <button
                  type="button"
                  onClick={toggleVisibility}
                  className="absolute right-15 top-1/2 z-15 -translate-y-1/2 text-slate-400"
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

            {/* Login Button */}
            <Button
              type="submit"
              isLoading={isLoading}
              className="w-full bg-indigo-600 font-semibold text-white hover:bg-indigo-700"
            >
              <div className="flex items-center gap-2">
                লগইন করুন

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

            <span className="relative bg-slate-900 px-3 text-xs uppercase text-slate-500">
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
          <p className="mt-6 text-center text-sm text-slate-400">
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