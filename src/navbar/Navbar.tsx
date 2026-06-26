import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="sticky top-0  z-50 backdrop-blur-md bg-[#03030d]/70 border-b border-gray-800/40">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className=" flex ">
          <div className="flex-1">
            <a href="#" className="text-2xl font-black tracking-wider text-white">
              <Image src="/logo.png" alt="" width="100" height="20"></Image>
              {/* MD<span className="text-blue-500">.</span> */}
            </a>
          </div>
          <div className="flex-none hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-blue-500 transition-colors">Home</Link>
            <Link href="/components/about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link href="/components/skill" className="hover:text-blue-400 transition-colors">Skills</Link>
            <Link href="/components/service" className="hover:text-blue-400 transition-colors">Services</Link>
            <Link href="/components/project" className="hover:text-blue-400 transition-colors">Projects</Link>
            <Link href="/components/experience" className="hover:text-blue-400 transition-colors">Experience</Link>
            <Link href="/components/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
          <div className="  flex flex-1 items-center">
            <button className="btn btn-sm btn-primary bg-blue-600 hover:bg-blue-700 border-none rounded-md px-5 text-white normal-case">
            Hire Me
          </button>
          </div>
        </div>
      </div>
    </header>
  );
}