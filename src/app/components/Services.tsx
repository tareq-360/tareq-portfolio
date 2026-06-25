import React from "react";
import { FaLaptopCode, FaServer, FaShieldAlt, FaNetworkWired, FaCogs } from "react-icons/fa";

export default function Services() {
  const services = [
    { icon: FaLaptopCode, title: "Web Design", desc: "Modern, responsive and user friendly website design using best UI/UX practices." },
    { icon: FaServer, title: "Web Development", desc: "Full stack web development using React, Next.js, Node.js and more technologies." },
    { icon: FaShieldAlt, title: "CCTV Installation", desc: "Professional CCTV system installation for home, office and industries." },
    { icon: FaNetworkWired, title: "Network Setup", desc: "LAN, WAN, WiFi and router configuration for secure and stable networks." },
    { icon: FaCogs, title: "Technical Support", desc: "Hardware, software and network troubleshooting and maintenance." }
  ];

  return (
    <section id="services" className="space-y-8">
      <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
        My Services <span className="w-12 h-[2px] bg-blue-500" />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {services.map((srv, idx) => (
          <div key={idx} className="bg-gray-900/30 border border-gray-800/80 rounded-xl p-5 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className=" text-blue-500 w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600/20 transition-colors">
                <srv.icon size={20} />
              </div>
              <h3 className="font-bold text-white text-base tracking-wide">{srv.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{srv.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}