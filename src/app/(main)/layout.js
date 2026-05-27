// app/(main)/layout.jsx

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/Navbar";

export default function MainLayout({
  children,
}) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}