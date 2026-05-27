// app/(dashboard)/dashboard/layout.jsx

import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

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