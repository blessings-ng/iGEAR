import React from 'react';
import logoImg from '../assets/image/iGEAR Logo.png'; 

export default function Navbar() {
  return (
    <nav className="w-full py-6 px-6 z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LEFT: Brand Identity */}
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity">
          
          {/* The Logo Image */}
          <img 
            src={logoImg} 
            alt="Brand Logo" 
            className="h-12 w-auto object-contain bg-red-500" 
          />

          {/* The Text (Optional: If you want text next to the logo) */}
          <div className="text-2xl font-bold tracking-tighter leading-none hidden sm:block">
            Tik<span className="text-brand-primary">Scale</span>
          </div>
        
        </div>

        {/* RIGHT: Agency Tagline (The "pill" shape) */}
        <div className="hidden md:block">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest border border-white/10 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
            Short Form Content Agency
          </div>
        </div>

      </div>
    </nav>
  );
}