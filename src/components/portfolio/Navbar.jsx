"use client";
import React from "react";
import { Instagram, Youtube, Mail } from "lucide-react";

// ADDED FAILSAFE: Defaults to true
export default function Navbar({ isDarkMode = true }) {
  return (
    // RESTORED: Dynamic background, text, and border colors based on the toggle state
    <nav className={`fixed top-0 left-0 w-full z-[150] px-4 md:px-10 py-3 md:py-5 flex justify-between items-center transition-all duration-500 font-sans antialiased ${
      isDarkMode ? "bg-black/80 backdrop-blur-md text-white border-b border-white/5" : "bg-white/80 backdrop-blur-md text-black border-b border-zinc-200"
    }`}>
      
      {/* RESPONSIVE LOGO */}
      <div className="flex items-center">
        {/* MATCHED STYLING: Made the logo font-black to match the new high-end Hero typography */}
        <h1 className="text-xl md:text-2xl font-black italic tracking-tighter">iGearMedia</h1>
      </div>

      {/* RESPONSIVE SOCIALS */}
      <div className="flex items-center gap-4 md:gap-8">
        <a href="https://www.instagram.com/igear.vfxedit?igsh=MWF1MDdpZDc3MW5yMA%3D%3D&utm_source=qr" className="hover:text-brand-teal transition-colors"  target="_blank"><Instagram size={18} className="md:w-5 md:h-5" /></a>
        <a href="https://youtube.com/@igearmedia?si=vmdd6Wdl_lY05ga7" className="hover:text-brand-teal transition-colors" target="_blank"><Youtube size={20} className="md:w-6 md:h-6" /></a>
        <a href="mailto:igearenterprises@gmail.com" className="hover:text-brand-teal transition-colors" target="_blank"><Mail size={18} className="md:w-5 md:h-5" /></a>
        
        <a 
          href="https://wa.me/yournumber" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-2 md:px-4 py-1.5 border border-green-500/30 rounded-full bg-green-500/5 hover:bg-green-500/10 transition-all"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest hidden sm:block text-green-500">
            Chat
          </span>
        </a>
      </div>
    </nav>
  );
}