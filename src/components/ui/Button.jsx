import React from 'react';

export default function Button({ children, className = "", fullWidth = false, ...props }) {
  
  const baseStyles = `
    flex items-center justify-center text-center gap-2
    transition-all duration-300 transform hover:-translate-y-1 
    text-white shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_50px_rgba(249,115,22,0.8)]
    uppercase font-black rounded-lg
    
    /* MOBILE (Default - Smallest Screen) */
    
    w-full           /* Force full width on phones */
    py-4 px-3        /* Minimal side padding to prevent overflow */
    text-sm          /* Smaller font to fit long text */
    tracking-wide    /* Reduced spacing so text fits */
    whitespace-normal /* Allow text to wrap if it really has to */

    /* TABLET (sm - 640px+) */
    sm:text-lg       
    sm:px-8
    sm:tracking-wider

    /* DESKTOP (md - 768px+) */
    md:w-auto        /* Let width grow naturally */
    md:text-3xl      /* Massive Text */
    md:py-6 md:px-12 /* Massive Padding */
    md:tracking-widest /* Massive Spacing */
  `;
  
  const variants = "btn-primary"; 

  return (
    <button 
      className={`${baseStyles} ${variants} ${className} ${fullWidth ? 'w-full' : ''}`} 
      {...props}
    >
      {children}
    </button>
  );
}