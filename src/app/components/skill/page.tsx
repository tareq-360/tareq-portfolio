import React from "react";

export default function Skills() {
  const skillGroups = [
    { cat: "Frontend", skills: [{n: "HTML", p: 95}, {n: "CSS", p: 90}, {n: "JavaScript", p: 85}, {n: "React.js", p: 80}, {n: "Next.js", p: 75}, {n: "Tailwind CSS", p: 90}] },
    { cat: "Backend", skills: [{n: "Node.js", p: 75}, {n: "Express.js", p: 75}, {n: "Next.js API", p: 70}, {n: "REST API", p: 85}] },
    { cat: "Database", skills: [{n: "MongoDB", p: 80}, {n: "MySQL", p: 75}, {n: "Firebase", p: 70}] },
    { cat: "Tools & Others", skills: [{n: "Git & GitHub", p: 85}, {n: "VS Code", p: 90}, {n: "Postman", p: 80}, {n: "Figma", p: 65}, {n: "Linux", p: 70}] },
    { cat: "Networking", skills: [{n: "TCP/IP", p: 85}, {n: "LAN / WAN", p: 80}, {n: "Router Setup", p: 90}, {n: "WiFi Setup", p: 90}] },
    { cat: "CCTV & Security", skills: [{n: "CCTV Installation", p: 95}, {n: "DVR / NVR Setup", p: 95}, {n: "IP Camera Setup", p: 90}, {n: "Remote Access", p: 85}] }
  ];

  return (
    <section id="skills" className="space-y-8">
      <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
        My Skills <span className="w-12 h-[2px] bg-blue-500" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((block, idx) => (
          <div key={idx} className="p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-800/60 rounded-xl space-y-4">
            <h3 className="text-md font-bold text-white tracking-wide border-b border-gray-800 pb-2 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-purple-500 rounded-sm" /> {block.cat}
            </h3>
            <div className="space-y-3">
              {block.skills.map((s, sIdx) => (
                <div key={sIdx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold tracking-wide">
                    <span className="text-gray-400">{s.n}</span>
                  </div>
                  <progress className="progress progress-primary h-[6px] bg-gray-800" value={s.p} max="100" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}