import React from 'react';

export default function Button({ children, className = "", fullWidth = false, ...props }) {
  return (
    <button 
      className={`
        /* --- BASE STYLES --- */
        relative flex items-center justify-center text-center gap-3
        transition-all duration-300 ease-out transform hover:-translate-y-1 
        text-white uppercase font-black rounded-lg
        
        /* --- COLORS & SHADOWS (Brand Orange) --- */
        bg-[#F79F1A] hover:bg-[#e08e12]
        shadow-[0_0_30px_rgba(247,159,26,0.4)] hover:shadow-[0_0_50px_rgba(247,159,26,0.7)]
        
        /* --- RESPONSIVE TYPOGRAPHY & SPACING --- */
        
        /* Mobile: Full width, smaller text to prevent overflow, readable padding */
        w-full py-4 px-6 text-sm tracking-wide leading-tight
        
        /* Tablet (sm): Slightly larger, relaxing the width */
        sm:text-base sm:tracking-wider sm:w-auto sm:px-10
        
        /* Desktop (md): Massive impact, big padding */
        md:text-xl lg:text-2xl md:py-5 md:px-12 md:tracking-widest
        
        /* --- OVERRIDES --- */
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `.replace(/\s+/g, ' ').trim()} // This cleans up newlines/extra spaces for the browser
      {...props}
    >
      {children}
    </button>
  );
}