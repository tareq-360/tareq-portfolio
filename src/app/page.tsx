
"use client";

import Navbar from "@/navbar/Navbar";
import Hero from "@/app/components/hero/page";
import About from "@/app/components/about/page";
import Skills from "@/app/components/skill/page";
import Services from "@/app/components/service/page";
import Projects from "@/app/components/project/page";
import Experience from "@/app/components/experience/page";
// import Contact from "@/app/components/contact/page";
import Footer from "@/app/components/footer/page";
import Contact from "./components/contact/page";

export default function Home() {
  return (
  
    <div className="min-h-screen bg-[#03030d] text-gray-200 font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden relative">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
      </div>

      {/* <Navbar /> */}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-32 py-12">
        <Hero />
        <About />
        
        <Services />
        <Projects />
        <Experience />
        <Skills></Skills>
        <Contact></Contact>
        
      </main>

      {/* <Footer /> */}
    </div>
  );
}