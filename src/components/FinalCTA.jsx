import React from 'react';

const FinalCTA = () => {
  return (
    <section className="w-full py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      
      {/* Background Radiance (Final Push) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
          Ready To Build An Asset That <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Pays You For Years?
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mb-12">
          Stop relying on cold outreach and volatile ads. Build an organic machine that brings qualified leads to your doorstep on autopilot.
        </p>

        {/* The Big Button */}
        <div className="w-full max-w-md">
            
            <p className="mt-6 text-sm text-gray-500 font-medium">
                No pressure. No hard selling. Just a strategy session.
            </p>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;