// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { 
//   FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaYoutube, 
//   FaLaptopCode, FaCogs, FaShieldAlt, FaServer, FaDatabase, FaNetworkWired 
// } from "react-icons/fa";
// import { 
//   Mail, Phone, MapPin, MessageSquare, ChevronLeft, ChevronRight, Download, Send 
// } from "lucide-react";

// // --- ANIMATION VARIANTS ---
// const fadeIn = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
// };

// export default function Portfolio() {
//   return (
//     <div className="min-h-screen bg-[#03030d] text-gray-200 font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
//       {/* --- BACKGROUND GLOW SPECKLES --- */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] pointer-events-none overflow-hidden z-0">
//         <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
//         <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
//       </div>

//       {/* --- NAVBAR --- */}
//       <header className="sticky top-0 z-50 backdrop-blur-md bg-[#03030d]/70 border-b border-gray-800/40">
//         <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex-1">
//             <a className="text-2xl font-black tracking-wider text-white flex items-center gap-1">
//               MD<span className="text-blue-500">.</span>
//             </a>
//           </div>
//           <div className="flex-none hidden md:flex items-center gap-8 text-sm font-medium">
//             <a href="#home" className="text-blue-500 transition-colors">Home</a>
//             <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
//             <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
//             <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
//             <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
//             <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
//             <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
//             <button className="btn btn-sm btn-primary bg-blue-600 hover:bg-blue-700 border-none rounded-md px-5 text-white normal-case">
//               Hire Me
//             </button>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-32 py-12">
        
//         {/* --- HERO SECTION --- */}
//         <section id="home" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-100px)]">
//           <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-xs font-semibold text-purple-300">
//               <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
//               Computer Engineer & Full Stack Developer
//             </div>
//             <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
//               MD Tareq Hossain
//             </h1>
//             <div className="text-xl sm:text-2xl font-bold tracking-wide space-y-1">
//               <p className="text-blue-400">Computer Engineer | Web Developer</p>
//               <p className="text-cyan-400">CCTV & Security Specialist</p>
//             </div>
//             <p className="text-gray-400 max-w-lg leading-relaxed">
//               I build modern web applications and provide reliable CCTV surveillance solutions for businesses and homes. Passionate about technology and problem solving.
//             </p>
//             <div className="flex flex-wrap gap-4 pt-2">
//               <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-none text-white gap-2 rounded-md">
//                 <Download size={18} /> Download Resume
//               </button>
//               <button className="btn btn-outline border-gray-700 hover:bg-gray-800 text-gray-300 gap-2 rounded-md">
//                 <MessageSquare size={18} /> Contact Me
//               </button>
//             </div>
//             <div className="flex items-center gap-4 pt-6">
//               <span className="text-xs tracking-wider uppercase text-gray-500 font-bold">Follow Me</span>
//               <div className="flex gap-3">
//                 {[FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaYoutube].map((Icon, idx) => (
//                   <a key={idx} href="#" className="p-2 rounded-md bg-gray-900/60 hover:bg-blue-600/20 border border-gray-800 text-gray-400 hover:text-blue-400 transition-all">
//                     <Icon size={16} />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Hologram Graphic Representation */}
//           <div className="relative flex justify-center items-center">
//             <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full border-2 border-dashed border-blue-500/20 animate-[spin_60s_linear_infinite] absolute" />
//             <div className="w-60 h-60 sm:w-80 sm:h-80 rounded-full border border-purple-500/30 animate-[spin_30s_linear_infinite] absolute flex justify-center items-center" />
//             <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20 flex items-center justify-center overflow-hidden border border-white/10 backdrop-blur-sm">
//               <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-gray-950 flex items-center justify-center border border-gray-800">
//                 <FaLaptopCode className="text-blue-500 text-5xl sm:text-6xl animate-pulse" />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* --- ABOUT ME SECTION --- */}
//         <section id="about" className="space-y-12">
//           <div>
//             <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
//               About Me <span className="w-12 h-[2px] bg-blue-500" />
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//             <div className="lg:col-span-5 space-y-6">
//               <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
//                 I am a Computer Engineer with expertise in Web Development, Hardware, Networking, and CCTV Surveillance Systems. I enjoy building scalable web applications and solving real-world technical problems.
//               </p>
//               <ul className="space-y-3 text-sm text-gray-300">
//                 <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> B.Sc in Computer Engineering</li>
//                 <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> 5+ Projects Completed</li>
//                 <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> Strong problem solving and analytical skills</li>
//               </ul>
//               <button className="btn btn-sm btn-primary bg-blue-600 border-none text-white rounded-sm mt-2">Read More About Me</button>
//             </div>
            
//             <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
//               {[
//                 { val: "15+", label: "Projects Completed" },
//                 { val: "10+", label: "Happy Clients" },
//                 { val: "2+", label: "Years of Experience" },
//                 { val: "5+", label: "Certifications" }
//               ].map((stat, idx) => (
//                 <div key={idx} className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 p-6 rounded-lg text-center space-y-2 hover:border-blue-500/40 transition-colors">
//                   <h3 className="text-3xl sm:text-4xl font-black text-blue-500">{stat.val}</h3>
//                   <p className="text-xs text-gray-400 font-medium tracking-wide">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* --- MY SKILLS SECTION --- */}
//         <section id="skills" className="space-y-8">
//           <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
//             My Skills <span className="w-12 h-[2px] bg-blue-500" />
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               { cat: "Frontend", skills: [{n: "HTML", p: 95}, {n: "CSS", p: 90}, {n: "JavaScript", p: 85}, {n: "React.js", p: 80}, {n: "Next.js", p: 75}, {n: "Tailwind CSS", p: 90}] },
//               { cat: "Backend", skills: [{n: "Node.js", p: 75}, {n: "Express.js", p: 75}, {n: "Next.js API", p: 70}, {n: "REST API", p: 85}] },
//               { cat: "Database", skills: [{n: "MongoDB", p: 80}, {n: "MySQL", p: 75}, {n: "Firebase", p: 70}] },
//               { cat: "Tools & Others", skills: [{n: "Git & GitHub", p: 85}, {n: "VS Code", p: 90}, {n: "Postman", p: 80}, {n: "Figma", p: 65}, {n: "Linux", p: 70}] },
//               { cat: "Networking", skills: [{n: "TCP/IP", p: 85}, {n: "LAN / WAN", p: 80}, {n: "Router Setup", p: 90}, {n: "WiFi Setup", p: 90}] },
//               { cat: "CCTV & Security", skills: [{n: "CCTV Installation", p: 95}, {n: "DVR / NVR Setup", p: 95}, {n: "IP Camera Setup", p: 90}, {n: "Remote Access", p: 85}] }
//             ].map((block, idx) => (
//               <div key={idx} className="p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-800/60 rounded-xl space-y-4">
//                 <h3 className="text-md font-bold text-white tracking-wide border-b border-gray-800 pb-2 flex items-center gap-2">
//                   <span className="w-1.5 h-3 bg-purple-500 rounded-sm" /> {block.cat}
//                 </h3>
//                 <div className="space-y-3">
//                   {block.skills.map((s, sIdx) => (
//                     <div key={sIdx} className="space-y-1.5">
//                       <div className="flex justify-between text-xs font-semibold tracking-wide">
//                         <span className="text-gray-400">{s.n}</span>
//                       </div>
//                       <progress className="progress progress-primary h-[6px] bg-gray-800" value={s.p} max="100"></progress>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* --- SERVICES SECTION --- */}
//         <section id="services" className="space-y-8">
//           <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
//             My Services <span className="w-12 h-[2px] bg-blue-500" />
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
//             {[
//               { icon: FaLaptopCode, title: "Web Design", desc: "Modern, responsive and user friendly website design using best UI/UX practices." },
//               { icon: FaServer, title: "Web Development", desc: "Full stack web development using React, Next.js, Node.js and more technologies." },
//               { icon: FaShieldAlt, title: "CCTV Installation", desc: "Professional CCTV system installation for home, office and industries." },
//               { icon: FaNetworkWired, title: "Network Setup", desc: "LAN, WAN, WiFi and router configuration for secure and stable networks." },
//               { icon: FaCogs, title: "Technical Support", desc: "Hardware, software and network troubleshooting and maintenance." }
//             ].map((srv, idx) => (
//               <div key={idx} className="bg-gray-900/30 border border-gray-800/80 rounded-xl p-5 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group">
//                 <div className="space-y-4">
//                   <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600/20 transition-colors">
//                     <srv.icon className="text-blue-400" size={20} />
//                   </div>
//                   <h3 className="font-bold text-white text-base tracking-wide">{srv.title}</h3>
//                   <p className="text-xs text-gray-400 leading-relaxed">{srv.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* --- FEATURED PROJECTS --- */}
//         <section id="projects" className="space-y-8">
//           <div className="flex justify-between items-end">
//             <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
//               Featured Projects <span className="w-12 h-[2px] bg-blue-500" />
//             </h2>
//             <a href="#" className="text-xs font-semibold text-blue-400 hover:underline">View All Projects →</a>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { title: "Training Center Website", tags: ["Next.js", "Tailwind", "DaisyUI"], desc: "A modern training center website with course management system." },
//               { title: "CCTV Management System", tags: ["React", "Node.js", "MongoDB"], desc: "Web based CCTV monitoring and management system with live view." },
//               { title: "Dashboard Analytics", tags: ["Next.js", "MongoDB", "Chart.js"], desc: "Analytics dashboard with charts, reports and real-time data." },
//               { title: "E-Commerce Website", tags: ["React", "Firebase", "Tailwind"], desc: "Full stack e-commerce website with cart and payment gateway." }
//             ].map((proj, idx) => (
//               <div key={idx} className="bg-gray-900/40 border border-gray-800/80 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-gray-700 transition-all">
//                 <div className="h-44 bg-gray-950 relative flex items-center justify-center border-b border-gray-800">
//                   {/* Decorative Placeholder Graphic */}
//                   <div className="text-center p-4">
//                     <div className="w-12 h-12 rounded-full bg-purple-600/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-2 text-purple-400 font-bold text-lg">
//                       {idx + 1}
//                     </div>
//                     <span className="text-xs text-gray-500 font-mono">Project Preview Image</span>
//                   </div>
//                 </div>
//                 <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
//                   <div className="space-y-2">
//                     <div className="flex flex-wrap gap-1.5">
//                       {proj.tags.map((t, tIdx) => (
//                         <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] bg-blue-950/60 border border-blue-900/50 text-blue-300 font-medium">
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                     <h3 className="font-bold text-white text-base tracking-wide">{proj.title}</h3>
//                     <p className="text-xs text-gray-400 leading-relaxed">{proj.desc}</p>
//                   </div>
//                   <div className="flex justify-between items-center text-xs font-semibold pt-2 border-t border-gray-800/60">
//                     <a href="#" className="text-blue-400 hover:underline">Live Demo ↗</a>
//                     <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* --- EXPERIENCE & TESTIMONIALS --- */}
//         <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
//           {/* Timeline */}
//           <div id="experience" className="lg:col-span-7 space-y-8">
//             <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
//               Experience & Education <span className="w-12 h-[2px] bg-blue-500" />
//             </h2>
//             <div className="relative border-l-2 border-gray-800 ml-4 space-y-8">
//               {[
//                 { year: "2026 - Present", role: "Freelance Web Developer", comp: "Working on multiple web development projects for clients worldwide." },
//                 { year: "2025", role: "CCTV & Security System Engineer", comp: "Installed and managed CCTV systems for businesses and residential clients." },
//                 { year: "2024", role: "B.Sc in Computer Engineering", comp: "Completed B.Sc in Computer Engineering from a reputed university." },
//                 { year: "2020", role: "HSC (Science)", comp: "Higher Secondary Certificate in Science." }
//               ].map((item, idx) => (
//                 <div key={idx} className="relative pl-8 group">
//                   <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#03030d] border-2 border-blue-500 group-hover:bg-blue-400 transition-colors" />
//                   <span className="text-xs font-bold tracking-wider text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/50">
//                     {item.year}
//                   </span>
//                   <h3 className="text-base font-bold text-white mt-2">{item.role}</h3>
//                   <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.comp}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Testimonials */}
//           <div className="lg:col-span-5 space-y-8">
//             <div className="flex justify-between items-center">
//               <h2 className="text-3xl font-extrabold text-white tracking-tight">What Clients Say</h2>
//               <div className="flex gap-2">
//                 <button className="p-1.5 rounded bg-gray-900 border border-gray-800 text-gray-400 hover:text-white"><ChevronLeft size={16} /></button>
//                 <button className="p-1.5 rounded bg-gray-900 border border-gray-800 text-gray-400 hover:text-white"><ChevronRight size={16} /></button>
//               </div>
//             </div>
//             <div className="space-y-4">
//               {[
//                 { name: "Rashed Ahmed", role: "Entrepreneur", text: "Tareq is a very professional developer. He delivered the project on time with high quality. Highly recommended!" },
//                 { name: "Mahbubul Islam", role: "Business Owner", text: "Excellent work on our CCTV system setup. Very knowledgeable and supportive." }
//               ].map((tst, idx) => (
//                 <div key={idx} className="bg-gray-900/30 border border-gray-800/80 p-5 rounded-xl space-y-3">
//                   <div className="flex text-amber-400 text-xs">★★★★★</div>
//                   <p className="text-xs text-gray-400 italic leading-relaxed">"{tst.text}"</p>
//                   <div className="flex items-center gap-3 pt-2">
//                     <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center font-bold text-xs text-white">
//                       {tst.name[0]}
//                     </div>
//                     <div>
//                       <h4 className="text-xs font-bold text-white">{tst.name}</h4>
//                       <p className="text-[10px] text-gray-500">{tst.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* --- CONTACT ME SECTION --- */}
//         <section id="contact" className="space-y-8">
//           <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
//             Contact Me <span className="w-12 h-[2px] bg-blue-500" />
//           </h2>
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
//             <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
//               <div className="space-y-4">
//                 {[
//                   { icon: Mail, title: "Email", info: "mdtareq@example.com" },
//                   { icon: Phone, title: "Phone", info: "+880 1234-567890" },
//                   { icon: MapPin, title: "Location", info: "Dhaka, Bangladesh" },
//                   { icon: MessageSquare, title: "WhatsApp", info: "+880 1234-567890" }
//                 ].map((c, idx) => (
//                   <div key={idx} className="flex items-center gap-4 p-4 bg-gray-900/20 border border-gray-800/60 rounded-xl">
//                     <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400">
//                       <c.icon size={18} />
//                     </div>
//                     <div>
//                       <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{c.title}</p>
//                       <p className="text-xs font-semibold text-gray-200 mt-0.5">{c.info}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="p-6 bg-gradient-to-br from-blue-950/40 to-purple-950/40 border border-blue-900/30 rounded-xl space-y-2 relative overflow-hidden">
//                 <div className="relative z-10">
//                   <h3 className="font-bold text-white text-base">Let's work together!</h3>
//                   <p className="text-xs text-gray-400 leading-relaxed">I am available for freelance work. If you have a project in mind, feel free to contact me.</p>
//                 </div>
//                 <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
//               </div>
//             </div>

//             <div className="lg:col-span-8 bg-gray-900/20 border border-gray-800/60 p-6 rounded-xl">
//               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="form-control w-full">
//                     <input type="text" placeholder="Your Name" className="input input-bordered w-full bg-gray-900/50 border-gray-800 focus:border-blue-500 text-xs rounded-md" />
//                   </div>
//                   <div className="form-control w-full">
//                     <input type="email" placeholder="Your Email" className="input input-bordered w-full bg-gray-900/50 border-gray-800 focus:border-blue-500 text-xs rounded-md" />
//                   </div>
//                 </div>
//                 <div className="form-control w-full">
//                   <input type="text" placeholder="Subject" className="input input-bordered w-full bg-gray-900/50 border-gray-800 focus:border-blue-500 text-xs rounded-md" />
//                 </div>
//                 <div className="form-control w-full">
//                   <textarea placeholder="Your Message" className="textarea textarea-bordered w-full bg-gray-900/50 border-gray-800 focus:border-blue-500 text-xs rounded-md h-32"></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-sm btn-primary bg-blue-600 hover:bg-blue-700 border-none text-white rounded-md gap-2 px-6 h-10 normal-case">
//                   <Send size={14} /> Send Message
//                 </button>
//               </form>
//             </div>

//           </div>
//         </section>
//       </main>

//       {/* --- FOOTER --- */}
//       <footer className="border-t border-gray-900 bg-[#020208] mt-32 py-6 text-xs text-gray-500">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
//           <p>© 2026 MD Tareq Hossain. All Rights Reserved.</p>
//           <p>Designed & Developed with <span className="text-red-500">♥</span> by MD Tareq Hossain</p>
//         </div>
//       </footer>
//     </div>
//   );
// }




"use client";

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#03030d] text-gray-200 font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden relative">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />
      </div>

      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-32 py-12">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}