import React from 'react';

export default function Button({ children, className = "", fullWidth = false, href, ...props }) {
  
  // 1. SET YOUR GLOBAL DEFAULT LINK HERE
  // If you don't provide a specific link, it will use this one.
  const DEFAULT_LINK = "https://calendly.com/shittuabdulrahmon82/30min"; 
  
  // Logic: Use the provided 'href', or fall back to the default.
  // Note: We check if 'props.onClick' or 'type="submit"' exists so we don't accidentally turn form buttons into links.
  const finalHref = (href || DEFAULT_LINK);
  const isLink = !props.onClick && !props.type && finalHref;

  const buttonStyles = `
    /* --- BASE STYLES --- */
    relative flex items-center justify-center text-center gap-3
    transition-all duration-300 ease-out transform hover:-translate-y-1 
    text-white uppercase font-black rounded-lg decoration-0 cursor-pointer
    
    /* --- COLORS & SHADOWS (Brand Orange) --- */
    bg-[#F79F1A] hover:bg-[#e08e12]
    shadow-[0_0_30px_rgba(247,159,26,0.4)] hover:shadow-[0_0_50px_rgba(247,159,26,0.7)]
    
    /* --- RESPONSIVE TYPOGRAPHY & SPACING --- */
    w-full py-4 px-6 text-sm tracking-wide leading-tight
    sm:text-base sm:tracking-wider sm:w-auto sm:px-10
    md:text-xl lg:text-2xl md:py-5 md:px-12 md:tracking-widest
    
    /* --- OVERRIDES --- */
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  // 2. RENDER AS LINK (If it's a link)
  if (isLink) {
    return (
      <a 
      target="_blank"
        href={finalHref} 
        className={buttonStyles} 
        {...props}
      >
        {children}
      </a>
    );
  }

  // 3. RENDER AS BUTTON (If it has onClick or type="submit")
  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
}