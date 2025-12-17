import React from 'react';
import { Check, ArrowRight,  } from 'lucide-react';
import Button from './ui/Button';

const OtherInformation = () => {
  // Theme: BRAND ORANGE (#F79F1A)
  // Interaction: Entire Section is Clickable
  
  return (
    <a 
      href="#book-call" // Replace with your actual booking link
      className="block w-full py-24 bg-[#050505] relative overflow-hidden border-t border-white/10 group cursor-pointer"
    >
      
      {/* 1. BACKGROUND GLOW - Intense Orange Ambience */}
      {/* These glows intensify on hover (group-hover) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F79F1A]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen group-hover:bg-[#F79F1A]/20 transition-all duration-500"></div>
      
      {/* 2. HOVER BORDER EFFECT */}
      <div className="absolute inset-0 border-y-2 border-transparent group-hover:border-[#F79F1A]/50 transition-colors duration-500 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">

        {/* 3. HEADER */}
        <div className="mb-12 flex flex-col items-center">
            
            {/* GLOWY PILL - Brand Orange */}
            <div className="mb-8 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#F79F1A] bg-[#F79F1A]/10 shadow-[0_0_30px_rgba(247,159,26,0.3)] group-hover:shadow-[0_0_50px_rgba(247,159,26,0.6)] transition-all duration-500 backdrop-blur-md">
                <span className="text-[#F79F1A] font-black uppercase tracking-widest text-xs md:text-sm drop-shadow-[0_0_8px_rgba(247,159,26,0.8)]">
                    FINAL STEP
                </span>
            </div>

            <h3 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                Book A Free Strategy Call And Get:
            </h3>
        </div>

        {/* 4. THE LIST (Orange Checks) */}
        <div className="bg-[#0a0a0a] border border-[#F79F1A]/30 p-8 md:p-12 rounded-3xl w-full max-w-3xl shadow-[0_0_40px_rgba(247,159,26,0.1)] group-hover:border-[#F79F1A] group-hover:shadow-[0_0_60px_rgba(247,159,26,0.3)] group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
            
            {/* Internal Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F79F1A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <ul className="space-y-6 text-left relative z-10">
                <ListItem text="A full breakdown of the opportunities you’re missing" />
                <ListItem text="The exact content angles that convert in your niche" />
                <ListItem text="A personalized YouTube growth & revenue plan" />
            </ul>

        </div>

        {/* 5. MASSIVE CTA BUTTON (Simulated) */}
        <div className="mt-16 relative">
            <div className="absolute inset-0 bg-[#F79F1A] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 rounded-full"></div>
            
            <Button>
              &gt;&gt; BOOK YOUR FREE STRATEGY CALL &lt;&lt;
            </Button>
            
            
        </div>

      </div>
    </a>
  );
};

// ==============================
// SUB-COMPONENTS
// ==============================

function ListItem({ text }) {
    return (
        <li className="flex items-start gap-5">
            <div className="mt-1 text-[#F79F1A] shrink-0 drop-shadow-[0_0_8px_rgba(247,159,26,0.8)]">
                <Check size={28} strokeWidth={3} />
            </div>
            <span className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                {text}
            </span>
        </li>
    );
}

export default OtherInformation;