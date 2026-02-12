import React, { useEffect, useState, useRef } from 'react';
import { Check } from 'lucide-react';
import Button from './ui/Button';
import report from "../assets/image/igearweeklyreport.jpeg";


const OfferSection = () => {
  // Theme Color: Electric Indigo (#6366f1) to keep it lively but distinct
  
  return (
    <section className="w-full py-8 relative overflow-hidden">
      
      {/* Background Ambience - Updated to Electric Indigo with higher opacity for vibrancy */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6366f1]/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#818cf8]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center">

        {/* --- 1. HEADLINE (Centered & Glowy) --- */}
        <div className="mb-20 text-center max-w-4xl flex flex-col items-center">
            
            {/* THE GLOWY SUBHEADING PILL - Updated Colors */}
            <div className="mb-8 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#6366f1]/50 bg-[#6366f1]/10 shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_45px_rgba(99,102,241,0.6)] transition-shadow duration-300 backdrop-blur-sm">
                <span className="text-[#818cf8] font-bold uppercase tracking-widest text-xs md:text-sm drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]">
                    Here’s How We Solve That Problem For You
                </span>
            </div>

            <h3 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8 drop-shadow-lg">
                The YouTube Fast Track Offer
            </h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                We take your expertise and turn it into a lead-generating, trust-building YouTube channel that works for your business while you do what you do best.
            </p>
        </div>

        {/* --- 2. WHAT WE DO LIST (Centered Block, Left-Aligned Text) --- */}
        <div className="mb-24 w-full flex flex-col items-center">
            <h4 className="text-2xl font-bold text-white mb-10 text-center drop-shadow-md">
                We give you:
            </h4>
            
            {/* The list container - Updated Border & Shadow */}
            <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-[#6366f1]/30 p-8 md:p-10 rounded-2xl w-full max-w-2xl shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:border-[#6366f1]/60 transition-colors duration-500">
                <ul className="space-y-5">
                    <ListItem text="4 - 8 Long Form Videos/Month. " />
                    <ListItem text=" Well Researched Topics in a Content Calendar" />
                    <ListItem text="High-converting YouTube Scripts" />
                    <ListItem text="Monthly Strategy Session." />
                    <ListItem text="YouTube SEO" />
                    <ListItem text="Channel Management." />
                    <ListItem text="Weekly Performance Reports." />
                    <ListItem text=" High CTR Thumbnails" />
                    <ListItem text="World-class editing" />
                </ul>
            </div>
        </div>

        {/* --- 3. HOW WE DELIVER (Centered) --- */}
        <div className="mb-24 text-center w-full max-w-4xl">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
                HOW WE DELIVER YOUR YOUTUBE DFY SYSTEM
            </h4>
            
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
                We run your YouTube engine in-house (literally). Because our team is physically together, communication is faster, creativity is higher, and the final product is consistently premium.
            </p>

            {/* Placeholder for Team Screenshot - Updated Hover Glow */}
            {/* <div className="w-full aspect-video bg-[#111] border border-white/10 rounded-xl flex items-center justify-center text-gray-600 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#6366f1]/5 group-hover:bg-[#6366f1]/20 transition-colors duration-500"></div>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">[Screenshot of Team]</span>
            </div> */}
        </div>

        {/* --- 4. TRANSPARENCY (Centered) --- */}
        <div className="mb-24 text-center w-full max-w-4xl">
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                You’ll never wonder what’s happening behind the scenes. Because every week, we send you a clear project overview showing what’s done, what’s in progress, and what’s coming next. 
            </p>

             {/* Placeholder for Weekly Overview Screenshot - Updated Hover Glow */}
             <div className="w-full aspect-video bg-[#111] border border-white/10 rounded-xl flex items-center justify-center text-gray-600 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#6366f1]/5 group-hover:bg-[#6366f1]/20 transition-colors duration-500"></div>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300"><img src={report} alt="" /></span>
            </div>
        </div>

        {/* --- 5. RESULTS (ANIMATED COUNTERS) --- */}
        <div className="mb-20 w-full text-center">
            <h4 className="text-2xl font-bold text-white mb-12 drop-shadow-md">
                Here’s what it produces for clients:
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Result 1: 30 Calls */}
                <CounterBox 
                    target={30} 
                    suffix="+" 
                    label="Qualified Calls / Month" 
                />

                {/* Result 2: $10,000 */}
                <CounterBox 
                    prefix="$" 
                    target={27000} 
                    suffix="+" 
                    label="In Digital Product Sales" 
                    
                />

                {/* Result 3: Trust (Static text, styled to match) */}
                <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0a0a0a] border border-[#6366f1]/30 hover:border-[#6366f1] shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] transition-all duration-300 group">
                    <div className="text-4xl md:text-5xl font-black text-white mb-2 h-[48px] md:h-[60px] flex items-center group-hover:scale-110 transition-transform duration-300">
                        100%
                    </div>
                    <p className="text-[#818cf8] font-bold uppercase tracking-wider text-sm mt-2 group-hover:text-[#6366f1] transition-colors">
                        Trust before your first discovery call
                    </p>
                </div>

            </div>
        </div>

        {/* --- 6. CLOSING --- */}
        <div className="pt-12 border-t border-white/10 text-center w-full">
            <p className="text-xl md:text-2xl text-white font-medium mb-10">
                You record for 1–2 hours per month. We do the rest.
            </p>
        </div>
        
        <div className="flex justify-center w-full">
            {/* Button needs to match theme. Assuming Button accepts styling or wrapper does it */}
            <Button 
             mobileText="&gt;&gt; Book Now &lt;&lt;" 
            desktopText="&gt;&gt;Book Your Free Strategy Call &lt;&lt;"
             />
        </div>

      </div>
    </section>
  );
};

// --- SUB-COMPONENTS ---

// 1. Simple List Item - Updated Icon Color
function ListItem({ text }) {
    return (
        <li className="flex items-start gap-4 text-left group">
            <div className="mt-1 text-[#6366f1] shrink-0 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] transition-all duration-300">
                <Check size={24} strokeWidth={3} />
            </div>
            <span className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors duration-300">{text}</span>
        </li>
    );
}

// 2. Animated Counter Box - Updated Colors & Shadows
function CounterBox({ target, label, prefix = "", suffix = "" }) {
    const [count, setCount] = useState(0);
    const boxRef = useRef(null);

    // Simple Intersection Observer to trigger count only when visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Start Animation
                    let start = 0;
                    const duration = 2000; // 2 seconds
                    const increment = target / (duration / 16); // 60fps
                    
                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= target) {
                            setCount(target);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );

        if (boxRef.current) observer.observe(boxRef.current);

        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={boxRef} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#0a0a0a] border border-[#6366f1]/30 transition-all duration-300 hover:-translate-y-1 hover:border-[#6366f1] hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] shadow-lg group">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2 h-[48px] md:h-[60px] flex items-center group-hover:scale-105 transition-transform duration-300">
                {prefix}{count.toLocaleString()}{suffix}
            </div>
            <p className="text-[#818cf8] font-bold uppercase tracking-wider text-sm mt-2 group-hover:text-[#6366f1] transition-colors">
                {label}
            </p>
        </div>
    );
}

export default OfferSection;