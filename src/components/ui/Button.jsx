import React from 'react';

export default function Button({ children, className = "", fullWidth = false, ...props }) {
  
  
  
  const baseStyles = "py-6 px-26 font-black text-4xl md:text-3xl rounded-lg transition-all duration-300 flex items-center justify-center gap-3 text-white shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_50px_rgba(249,115,22,0.8)] transform hover:-translate-y-1 uppercase tracking-widest";
  
  // 2. YOUR CUSTOM COLOR CLASS
  // This preserves the specific orange you defined in your CSS as .btn-primary
  const variants = "btn-primary"; 
  
  const width = fullWidth ? "w-full" : "w-full md:w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants} ${width} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}