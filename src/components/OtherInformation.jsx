import React from 'react';
import Button from './ui/Button';

const OtherInformation = () => {
  return (
    <section className="w-full py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      
      {/* 1. BOTTOM BLUE GLOW (The Gradient at the bottom of your screenshot) */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-900/40 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* 2. "STILL SCROLLING?" BADGE */}
        <div className="mb-8 w-full max-w-xs">
          <div className="w-full py-3 rounded-full border border-blue-800 bg-[#0a0a0a] text-blue-500 font-bold text-lg shadow-[0_0_20px_rgba(30,58,138,0.3)] hover:shadow-[0_0_30px_rgba(30,58,138,0.5)] transition-shadow cursor-default">
            Still Scrolling?
          </div>
        </div>

        {/* 3. HEADLINE */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          What Other Information Could You Possibly Need?
        </h2>

        {/* 4. SUBTEXT */}
        <p className="text-white text-base md:text-lg font-medium mb-12 max-w-2xl">
          Click below, book a call, and turn YouTube into your number 1 inbound acquisition channel now...
        </p>

        {/* 5. MASSIVE CTA BUTTON */}
        <div className="">
            <Button className="">
                 &gt;&gt; Get Started Now &lt;&lt;
            </Button>
        </div>
       
      </div>
    </section>
  );
};

export default OtherInformation;