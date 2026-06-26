import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Experience() {
  const timeline = [
    { year: "2026 - Present", role: "Freelance Web Developer", comp: "Working on multiple web development projects for clients worldwide." },
    { year: "2025", role: "CCTV & Security System Engineer", comp: "Installed and managed CCTV systems for businesses and residential clients." },
    { year: "2024", role: "Diploma in engineering in Computer science and Technology", comp: "Completed Diploma in engineering in Computer science and Technology from a reputed Technical Collage." },
    { year: "2020", role: "SSC ", comp: " Secondary School Certificate ." }
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Experience / Timeline */}
      <div id="experience" className="lg:col-span-7 space-y-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
          Experience & Education <span className="w-12 h-[2px] bg-blue-500" />
        </h2>
        <div className="relative border-l-2 border-gray-800 ml-4 space-y-8">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 group">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#03030d] border-2 border-blue-500 group-hover:bg-blue-400 transition-colors" />
              <span className="text-xs font-bold tracking-wider text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/50">
                {item.year}
              </span>
              <h3 className="text-base font-bold text-white mt-2">{item.role}</h3>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.comp}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Side */}
      <div className="lg:col-span-5 space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">What Clients Say</h2>
          <div className="flex gap-2">
            <button className="p-1.5 rounded bg-gray-900 border border-gray-800 text-gray-400 hover:text-white"><ChevronLeft size={16} /></button>
            <button className="p-1.5 rounded bg-gray-900 border border-gray-800 text-gray-400 hover:text-white"><ChevronRight size={16} /></button>
          </div>
        </div>
        <div className="space-y-4">
          {[
            { name: "Rashed Ahmed", role: "Entrepreneur", text: "Tareq is a very professional developer. He delivered the project on time with high quality. Highly recommended!" },
            { name: "Mahbubul Islam", role: "Business Owner", text: "Excellent work on our CCTV system setup. Very knowledgeable and supportive." }
          ].map((tst, idx) => (
            <div key={idx} className="bg-gray-900/30 border border-gray-800/80 p-5 rounded-xl space-y-3">
              <div className="flex text-amber-400 text-xs">★★★★★</div>
              <p className="text-xs text-gray-400 italic leading-relaxed">"{tst.text}"</p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center font-bold text-xs text-white">
                  {tst.name[0]}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{tst.name}</h4>
                  <p className="text-[10px] text-gray-500">{tst.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}