import React from "react";

export default function Projects() {
  const projects = [
    { title: "Training Center Website", tags: ["Next.js", "Tailwind", "DaisyUI"], desc: "A modern training center website with course management system." },
    { title: "CCTV Management System", tags: ["React", "Node.js", "MongoDB"], desc: "Web based CCTV monitoring and management system with live view." },
    { title: "Dashboard Analytics", tags: ["Next.js", "MongoDB", "Chart.js"], desc: "Analytics dashboard with charts, reports and real-time data." },
    { title: "E-Commerce Website", tags: ["React", "Firebase", "Tailwind"], desc: "Full stack e-commerce website with cart and payment gateway." }
  ];

  return (
    <section id="projects" className="space-y-8">
      <div className="flex justify-between items-end">
        <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
          Featured Projects <span className="w-12 h-[2px] bg-blue-500" />
        </h2>
        <a href="#" className="text-xs font-semibold text-blue-400 hover:underline">View All Projects →</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-gray-900/40 border border-gray-800/80 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-gray-700 transition-all">
            <div className="h-44 bg-gray-950 relative flex items-center justify-center border-b border-gray-800">
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-2 text-purple-400 font-bold text-lg">
                  {idx + 1}
                </div>
                <span className="text-xs text-gray-500 font-mono">Project Preview Image</span>
              </div>
            </div>
            <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((t, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] bg-blue-950/60 border border-blue-900/50 text-blue-300 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-white text-base tracking-wide">{proj.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{proj.desc}</p>
              </div>
              <div className="flex justify-between items-center text-xs font-semibold pt-2 border-t border-gray-800/60">
                <a href="#" className="text-blue-400 hover:underline">Live Demo ↗</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}