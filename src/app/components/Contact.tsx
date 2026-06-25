import React from "react";
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    { icon: Mail, title: "Email", info: "mdtareq@example.com" },
    { icon: Phone, title: "Phone", info: "+880 1234-567890" },
    { icon: MapPin, title: "Location", info: "Dhaka, Bangladesh" },
    { icon: MessageSquare, title: "WhatsApp", info: "+880 1234-567890" }
  ];

  return (
    <section id="contact" className="space-y-8">
      <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
        Contact Me <span className="w-12 h-[2px] bg-blue-500" />
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            {contactInfo.map((c, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-gray-900/20 border border-gray-800/60 rounded-xl">
                <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400">
                  <c.icon size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{c.title}</p>
                  <p className="text-xs font-semibold text-gray-200 mt-0.5">{c.info}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 bg-gradient-to-br from-blue-950/40 to-purple-950/40 border border-blue-900/30 rounded-xl space-y-2 relative overflow-hidden">
            <h3 className="font-bold text-white text-base">Let's work together!</h3>
            <p className="text-xs text-gray-400 leading-relaxed">I am available for freelance work. If you have a project in mind, feel free to contact me.</p>
            <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
          </div>
        </div>

        <div className="lg:col-span-8 bg-gray-900/20 border border-gray-800/60 p-6 rounded-xl">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="input input-bordered w-full bg-gray-900/50 border-gray-800 focus:border-blue-500 text-xs rounded-md" />
              <input type="email" placeholder="Your Email" className="input input-bordered w-full bg-gray-900/50 border-gray-800 focus:border-blue-500 text-xs rounded-md" />
            </div>
            <input type="text" placeholder="Subject" className="input input-bordered w-full bg-gray-900/50 border-gray-800 focus:border-blue-500 text-xs rounded-md" />
            <textarea placeholder="Your Message" className="textarea textarea-bordered w-full bg-gray-900/50 border-gray-800 focus:border-blue-500 text-xs rounded-md h-32" />
            <button type="submit" className="btn btn-sm btn-primary bg-blue-600 hover:bg-blue-700 border-none text-white rounded-md gap-2 px-6 h-10 normal-case">
              <Send size={14} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}