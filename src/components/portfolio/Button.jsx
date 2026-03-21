import React from "react";

export default function Button({ children = "Work With Us" }) {
  return (
    <a 
      href="https://tally.so/r/J90B1K" 
      target="_blank" 
      rel="noopener noreferrer"
      className="relative inline-flex items-center justify-center px-10 py-5 md:px-14 md:py-6 text-lg md:text-xl font-black text-white uppercase tracking-wide transition-all duration-300 bg-[#14b8a6] rounded-l-sm hover:bg-[#14b8a6]/90 hover:scale-105 hover:shadow-[0_0_50px_rgba(20,184,166,0.6)] cursor-pointer"
    >
      {children}
    </a>
  );
}