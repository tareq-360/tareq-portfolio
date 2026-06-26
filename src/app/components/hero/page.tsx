'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaYoutube, FaLaptopCode } from "react-icons/fa";
import { Download, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100dvh-100px)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-xs font-semibold text-purple-300">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          Computer Engineer & Full Stack Developer
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          MD Tareq Hossain
        </h1>
        <div className="text-xl sm:text-2xl font-bold tracking-wide space-y-1">
          <p className="text-blue-400">Computer Engineer | Web Developer</p>
          <p className="text-cyan-400">CCTV & Security Specialist</p>
        </div>
        <p className="text-gray-400 max-w-lg leading-relaxed">
          I build modern web applications and provide reliable CCTV surveillance solutions for businesses and homes. Passionate about technology and problem solving.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <button className="btn btn-primary p-2 bg-blue-600 hover:bg-blue-700 border-none text-white gap-2 rounded-md">
            <Download size={18} /> Download Resume
          </button>
          <button className="btn btn-outline p-2 border-gray-700 hover:bg-gray-800 text-gray-300 gap-2 rounded-md">
            <MessageSquare size={18} /> Contact Me
          </button>
        </div>
        <div className="flex items-center gap-4 pt-6">
          <span className="text-xs tracking-wider uppercase text-gray-500 font-bold">Follow Me</span>
          <div className="flex gap-3">
            {/* {[FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaYoutube].map((Icon, idx) => ( */}
            <Link href="https://github.com/tareq-360" className="p-2 rounded-md bg-gray-900/60 hover:bg-blue-600/20 border border-gray-800 text-gray-400 hover:text-blue-400 transition-all">
              <FaGithub size={16} />
            </Link>
            <Link href="https://www.linkedin.com/in/tareq360?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="p-2 rounded-md bg-gray-900/60 hover:bg-blue-600/20 border border-gray-800 text-gray-400 hover:text-blue-400 transition-all">
              <FaLinkedin size={16} />
            </Link>
            <Link href="https://www.facebook.com/share/19P3cCnjmJ/" className="p-2 rounded-md bg-gray-900/60 hover:bg-blue-600/20 border border-gray-800 text-gray-400 hover:text-blue-400 transition-all">
              <FaFacebook size={16} />
            </Link>
            <a href="#" className="p-2 rounded-md bg-gray-900/60 hover:bg-blue-600/20 border border-gray-800 text-gray-400 hover:text-blue-400 transition-all">
              <FaTwitter size={16} />
            </a>
            <Link href="https://www.youtube.com/@the.tech.world.360" className="p-2 rounded-md bg-gray-900/60 hover:bg-blue-600/20 border border-gray-800 text-gray-400 hover:text-blue-400 transition-all">
              <FaYoutube size={16} />
            </Link>
            {/* ))} */}

          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="space-y-6"
      >
        <div className="relative flex justify-center items-center py-12 lg:py-0">
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border-2 border-dashed border-blue-500/20 animate-[spin_60s_linear_infinite] absolute" />
          <div className="w-60 h-60 sm:w-80 sm:h-80 rounded-full border border-purple-500/30 animate-[spin_30s_linear_infinite] absolute flex justify-center items-center" />
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20 flex items-center justify-center overflow-hidden border border-white/10 backdrop-blur-sm">
            {/* <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-gray-950 flex items-center justify-center border border-gray-800"> */}
            <Image src="/Hero-pic.jpg" alt="md tarea hossain" width="230" height="250" className=" border border-t-white animate-pulse rounded-full" />
            {/* </div> */}
          </div>
        </div>
      </motion.div>

    </section>
  );
}