import React from "react";

export default function About() {
  return (
    <section id="about" className="space-y-12">
      <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
        About Me <span className="w-12 h-[2px] bg-blue-500" />
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-6">
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            I am a Computer Engineer with expertise in Web Development, Hardware, Networking, and CCTV Surveillance Systems. I enjoy building scalable web applications and solving real-world technical problems.
          </p>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> Diploma in engineering in Computer science and Technology</li>
            <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> 5+ Projects Completed</li>
            <li className="flex items-center gap-3"><span className="text-blue-500">✓</span> Strong problem solving and analytical skills</li>
          </ul>
          <button className="btn btn-sm btn-primary p-2 bg-blue-600 border-none text-white rounded-sm mt-2">Read More About Me</button>
        </div>
        
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
          {[
            { val: "15+", label: "Projects Completed" },
            { val: "10+", label: "Happy Clients" },
            { val: "2+", label: "Years of Experience" },
            { val: "5+", label: "Certifications" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 p-6 rounded-lg text-center space-y-2 hover:border-blue-500/40 transition-colors">
              <h3 className="text-3xl sm:text-4xl font-black text-blue-500">{stat.val}</h3>
              <p className="text-xs text-gray-400 font-medium tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}