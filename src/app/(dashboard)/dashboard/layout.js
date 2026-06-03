
import dynamic from "next/dynamic";

// import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
const DashboardNavbar = dynamic(()=> import("@/components/dashboard/DashboardNavbar"))

export const metadata = {
 title: {
      default: "Dasboard",
      template: "%s | DeenSphere",
        },
  description: "Online Madrasa Platform",
};

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      
      {/* Dashboard Navbar */}
      <DashboardNavbar />

      {/* Dashboard Content */}
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}