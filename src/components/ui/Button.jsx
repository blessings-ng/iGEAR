import React from 'react';

export default function Button({ 
  children, 
  className = "", 
  fullWidth = false, 
  href, 
  mobileText, 
  desktopText,
  iconStart, 
  iconEnd,   
  ...props 
}) {
  
  const DEFAULT_LINK = "https://calendly.com/shittuabdulrahmon82/30min"; 
  const finalHref = href || DEFAULT_LINK;
  const isLink = !props.onClick && !props.type;

  // --- WIDTH LOGIC ---
  // If fullWidth is true: Always 100% width (w-full).
  // If false: 100% on mobile, but "Auto" size on Desktop (sm:w-auto).
  const widthClasses = fullWidth ? "w-full max-w-6xl" : "w-full sm:w-auto";

  const buttonStyles = `
    relative flex items-center justify-center text-center gap-2
    transition-all duration-300 ease-out transform hover:-translate-y-1 
    text-white uppercase font-black rounded-lg decoration-0 cursor-pointer
    bg-[#F79F1A] hover:bg-[#e08e12]
    shadow-[0_0_30px_rgba(247,159,26,0.4)] hover:shadow-[0_0_50px_rgba(247,159,26,0.7)]
    
    /* Typography & Padding */
    py-4 px-6 text-sm tracking-wide leading-tight
    sm:text-base sm:tracking-wider sm:px-10
    md:text-xl lg:text-2xl md:py-5 md:px-12 md:tracking-widest
    
    /* Inject the Smart Width Logic */
    ${widthClasses}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  // --- CONTENT RENDERING ---
  const renderContent = () => (
    <>
      {iconStart && <span className="shrink-0 flex items-center">{iconStart}</span>}

      {mobileText && desktopText ? (
        <>
          <span className="md:hidden">{mobileText}</span>
          <span className="hidden md:inline">{desktopText}</span>
        </>
      ) : (
        children
      )}

      {iconEnd && <span className="shrink-0 flex items-center">{iconEnd}</span>}
    </>
  );

  if (isLink) {
    return (
      <a target="_blank" rel="noopener noreferrer" href={finalHref} className={buttonStyles} {...props}>
        {renderContent()}
      </a>
    );
  }

  return (
    <button className={buttonStyles} {...props}>
      {renderContent()}
    </button>
  );
}