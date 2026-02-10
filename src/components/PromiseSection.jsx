import React, { useEffect, useRef, useState } from 'react';
import { Target, HeartHandshake } from 'lucide-react';

const PromiseSection = () => {
  // Theme: ELECTRIC AZURE (#00C9FF)
  // Concept: A super-charged, neon version of the Brand Teal.
  
  return (
    <section className="w-full py-24 bg-[#050505] relative overflow-hidden border-t border-white/10">
      
      {/* 1. BACKGROUND GLOW - Intense Electric Blue */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00C9FF]/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00C9FF]/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center">

        {/* 2. HEADER */}
        <div className="mb-20 text-center max-w-4xl flex flex-col items-center">
            
            {/* GLOWY PILL - High Intensity */}
            <div className="mb-8 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#00C9FF] bg-[#00C9FF]/10 shadow-[0_0_30px_rgba(0,201,255,0.4)] backdrop-blur-md">
                <span className="text-[#00C9FF] font-black uppercase tracking-widest text-xs md:text-sm drop-shadow-[0_0_8px_rgba(0,201,255,1)]">
                    OUR PROMISE TO YOU + 2026 MISSION
                </span>
            </div>

            <h3 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                What You Can Expect From Us
            </h3>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                We consistently deliver top-quality, high-conversion YouTube content tailored to your voice, brand, and audience. And we manage your YouTube channel with care.
            </p>
        </div>

        {/* 3. PROMISE & MISSION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-24">

            {/* CARD 1: THE PROMISE */}
            <div className="bg-[#0a0a0a] border border-[#00C9FF]/40 p-10 rounded-3xl relative overflow-hidden group hover:border-[#00C9FF] hover:shadow-[0_0_50px_rgba(0,201,255,0.3)] transition-all duration-300">
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C9FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-start h-full">
                    <div className="w-16 h-16 bg-[#00C9FF]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#00C9FF]/50 shadow-[0_0_20px_rgba(0,201,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                        <HeartHandshake className="text-[#00C9FF] w-9 h-9 drop-shadow-[0_0_10px_rgba(0,201,255,0.8)]" />
                    </div>
                    
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00C9FF] transition-colors drop-shadow-md">
                        Our 2026 Promise:
                    </h4>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Deliver better results for our customers, month after month.
                    </p>
                </div>
            </div>

            {/* CARD 2: THE MISSION (With Counter) */}
            <div className="bg-[#0a0a0a] border border-[#00C9FF]/40 p-10 rounded-3xl relative overflow-hidden group hover:border-[#00C9FF] hover:shadow-[0_0_50px_rgba(0,201,255,0.3)] transition-all duration-300">
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-bl from-[#00C9FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col items-start h-full">
                    <div className="w-16 h-16 bg-[#00C9FF]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#00C9FF]/50 shadow-[0_0_20px_rgba(0,201,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                        <Target className="text-[#00C9FF] w-9 h-9 drop-shadow-[0_0_10px_rgba(0,201,255,0.8)]" />
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00C9FF] transition-colors drop-shadow-md">
                        Our 2026 Mission:
                    </h4>
                    
                    <div className="text-gray-300 text-lg leading-relaxed">
                        Help <span className="text-white font-bold border-b-2 border-[#00C9FF] shadow-[0_2px_10px_rgba(0,201,255,0.5)]">10 service-based business owners</span> generate:
                        <div className="my-6">
                            <AzureCounter target={300000} prefix="$" />
                        </div>
                        through our YouTube Fast Track System.
                    </div>
                </div>
            </div>

        </div>

        {/* 4. CLOSING CTA */}
        <div className="text-center flex flex-col items-center">
            <p className="text-white text-xl md:text-2xl font-medium mb-10 drop-shadow-md">
                If you want to be one of them, the next step is simple.
            </p>
            
            
        </div>

      </div>
    </section>
  );
};


// 1. AZURE COUNTER
function AzureCounter({ target, prefix = "" }) {
    const [count, setCount] = useState(0);
    const boxRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let start = 0;
                    const duration = 2500; 
                    const increment = target / (duration / 16);
                    
                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                    observer.unobserve(boxRef.current);
                }
            },
            { threshold: 0.5 }
        );

        if (boxRef.current) observer.observe(boxRef.current);

        return () => observer.disconnect();
    }, [target]);

    return (
        <span 
            ref={boxRef} 
            className="block text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00C9FF] drop-shadow-[0_0_20px_rgba(0,201,255,0.6)]"
        >
            {prefix}{count.toLocaleString()}
        </span>
    );
}

export default PromiseSection;