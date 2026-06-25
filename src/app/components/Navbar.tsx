import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="sticky top-0  z-50 backdrop-blur-md bg-[#03030d]/70 border-b border-gray-800/40">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className=" flex justify-between">
          <div className="">
            <a href="#" className="text-2xl font-black tracking-wider text-white">
              <Image src="/logo.png" alt="" width="100" height="20"></Image>
              {/* MD<span className="text-blue-500">.</span> */}
            </a>
          </div>
          <div className="flex-none hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#" className="text-blue-500 transition-colors">Home</Link>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <div className="  flex items-center">
            <button className="btn btn-sm btn-primary bg-blue-600 hover:bg-blue-700 border-none rounded-md px-5 text-white normal-case">
            Hire Me
          </button>
          </div>
        </div>
      </div>
    </header>
  );
}