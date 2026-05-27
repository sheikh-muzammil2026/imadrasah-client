"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Dropdown, Avatar, Label } from "@heroui/react";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";



export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter()

  //  get user from session
  const { data: session } = authClient.useSession()
  const user = session?.user;


  // log out button handleing
    const handleLogout = async() =>{
     try {
       await authClient.signOut()
        router.push("/login"); 
        router.refresh(); // সার্ভার কম্পোনেন্ট এবং কুকি স্টেট রিফ্রেশ করার জন্য
     } catch (error) {
      console.log(error, "from logout button handling")
     }
    }

         
     
  // ডাইনামিক ড্যাশবোর্ড রুট নির্ধারণ
  const getDashboardPath = () => {
    if (user?.role === "admin") return "/admin-dashboard";
    if (user?.role === "teacher") return "/teacher-dashboard";
    return "/dashboard";
  };

  const getPortalTitle = (role) => {
  if (role === "admin") return "Admin Panel";
  if (role === "teacher") return "Teacher Portal";
  if (role === "student") return "Student Portal";

};

  // ডাইনামিক  path নির্ধারণ
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "All Courses", path: "/courses" },
    { label: "Admission", path: "/admission" },
    { label: "All Students", path: `/all-students`},
    { label: "Dashboard", path: "/dashboard" },
    { label: getPortalTitle(user?.role), path: getDashboardPath() },
    
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* ১. লোগো এরিয়া */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 font-black text-xl tracking-wider text-emerald-600 dark:text-emerald-400">
              <i className="gvt-mosque text-2xl"></i>
              <span className="font-sans font-bold">DeenSphere</span>
            </Link>
          </div>

          {/* ২. ডেস্কটপ মেনু আইটেম */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={index}
                  href={item.path}
                  className={`text-sm font-semibold relative py-1 transition-colors hover:text-emerald-500 ${
                    isActive ? "text-emerald-600 dark:text-emerald-400 font-bold" : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

        {/* ৩. ইউজার প্রোফাইল / অথেনটিকেশন বাটন  */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
           <Dropdown>
              <Dropdown.Trigger className="rounded-full">
                <Avatar>
                  <Avatar.Image
                    alt={user.name}
                    src={user.image || "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"}
                  />
                  <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                </Avatar>
              </Dropdown.Trigger>
      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image
                alt={user.name}
               src={user.image || "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"}
              />
              <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">{user.name}</p>
              <p className="text-xs leading-none text-muted">{user.email}</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
         
          <Dropdown.Item id="profile" textValue="Profile">
            <Label>Profile</Label>
          </Dropdown.Item>
         
          <Dropdown.Item id="logout" textValue="Logout" variant="danger">
            <div className="flex w-full items-center justify-between gap-2">
              <span onClick={handleLogout} variant="light" className="font-semibold">Log Out</span>
              <ArrowRightFromSquare className="size-3.5 text-danger" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
          ) : (
            <div className="flex items-center gap-2">
              <Link href={'/login'}><Button variant="light" className="font-semibold">Login</Button></Link>
              <Link href={'/register'}><Button as={Link} href="/register" className="bg-emerald-600 text-white font-semibold shadow-md">Register</Button></Link>
            </div>
          )}
        </div>

          {/* 📱 মোবাইল মেনু বাটন (Hamburger) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <i className={`text-xl ${isMenuOpen ? "gvt-x" : "gvt-menu"}`}></i>
            </button>
          </div>

        </div>
      </div>

      {/* 📱 মোবাইল ড্রপডাউন মেনু রেস্পনসিভনেস */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-4 space-y-2">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={index}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-xl px-4 py-2.5 text-base font-medium transition-all ${
                  isActive 
                    ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/20 font-bold" 
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          
          {/* মোবাইল মোডে ইউজার অ্যাকশন */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            {user ? (
              <div className="flex items-center gap-3 w-full justify-between bg-slate-50 dark:bg-slate-900 p-3 rounded-xl">
                <div className="flex items-center gap-2">
                  <Avatar size="sm" src={user.avatar} alt={user.name} className="border border-emerald-500" />
                  <div className="text-left">
                    <p className="font-bold text-sm text-slate-800 dark:text-white leading-tight">{user.name}</p>
                    <p className="text-xs text-slate-400 capitalize">{user.role}</p>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  color="danger" 
                  variant="flat" 
                  onClick={() => {
                      handleLogout 
                    setIsMenuOpen(false);
                  }}
                >
                  Log Out
                </Button>
              </div>
            ) : (
              <div className="flex w-full gap-2 pt-2">
                <Button as={Link} href="/login" size="sm" variant="bordered" className="w-full font-semibold">Login</Button>
                <Button as={Link} href="/register" size="sm" className="bg-emerald-600 text-white w-full font-semibold">Register</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}