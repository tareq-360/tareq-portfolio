import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-[#020208] mt-32 py-6 text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© 2026 MD Tareq Hossain. All Rights Reserved.</p>
        <p>Designed & Developed with <span className="text-red-500">♥</span> by MD Tareq Hossain</p>
      </div>
    </footer>
  );
}