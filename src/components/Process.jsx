import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from './ui/Button'; // Assuming this path is correct based on previous context

const Process = () => {
  // Base color: #39879e (Muted Teal)
  // Bright accent for glow/pop: #22d3ee (Electric Cyan)
  
  return (
    // Updated background gradient for a subtle teal center hint
    <section className="w-full py-24 relative overflow-hidden border-t border-white/5 bg-gradient-to-r from-[#050505] via-[#05151a] to-[#050505]">      
      
      {/* Background Lively Glow Blob */}
      {/* Used the brighter cyan (#22d3ee) with higher opacity for a livelier backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[800px] bg-[#22d3ee]/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* --- 1. THE GLOWY SUBHEADING --- */}
        {/* Brighter border, brighter text, stronger cyan shadow glow */}
        <div className="mb-12 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#22d3ee]/50 bg-[#22d3ee]/10 shadow-[0_0_30px_rgba(34,211,238,0.5)] backdrop-blur-sm">
             <span className="text-[#22d3ee] font-bold uppercase tracking-widest text-xs md:text-sm drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                WHO THIS IS FOR
             </span>
        </div>

        {/* --- 2. THE HEADLINES --- */}
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
                You’ll Get the Best Results If You Are:
            </h2>
        </div>

        {/* --- 3. THE ANIMATED LIST --- */}
        <div className="w-full max-w-2xl flex flex-col gap-5 mb-20">
            
            {/* Item 1 */}
            <SlideInItem index={0}>
                <LivelyListItem text="A service-based business owner" />
            </SlideInItem>

            {/* Item 2 */}
            <SlideInItem index={1}>
                <LivelyListItem text="Selling a coaching or consulting offer" />
            </SlideInItem>

            {/* Item 3 (Highlighted with extra neon underline) */}
            <SlideInItem index={2}>
                <LivelyListItem text={<>Earning <span className="text-white font-extrabold border-b-2 border-[#22d3ee] drop-shadow-[0_2px_10px_rgba(34,211,238,0.8)]">$10k–$20k per month</span></>} />
            </SlideInItem>

            {/* Item 4 */}
            <SlideInItem index={3}>
                <LivelyListItem text="Looking to scale trust, authority, and conversions" />
            </SlideInItem>

            {/* Item 5 */}
            <SlideInItem index={4}>
                <LivelyListItem text="Ready to turn content into predictable revenue" />
            </SlideInItem>

        </div>

        {/* --- 4. BOTTOM NOTE --- */}
        <div className="text-center mb-12">
             {/* Updated border color to bright cyan */}
             <p className="text-gray-300 text-lg font-medium max-w-2xl mx-auto border-l-4 border-[#22d3ee] pl-6 md:border-none md:pl-0 py-2">
                This is for real businesses solving real problems.
            </p>
        </div>

        <div className='flex justify-center'>
          {/* Styled Button to match the lively theme */}
          <Button className=' mx-auto'>
             &gt;&gt; BOOK YOUR FREE STRATEGY CALL &lt;&lt;
          </Button>
        </div>
      </div>
    </section>  
  );
};

// --- SUB-COMPONENTS ---

// 1. Lively Themed List Item
function LivelyListItem({ text }) {
  return (
    // Uses base color for border, brighter tint for BG.
    // Hover state significantly increases glow intensity and switches border to bright cyan.
    <div className="flex items-center gap-6 p-6 rounded-3xl border border-[#39879e]/50 bg-[#39879e]/20 shadow-[0_0_25px_rgba(57,135,158,0.2)] hover:border-[#22d3ee] hover:bg-[#22d3ee]/20 hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] transition-all duration-500 group backdrop-blur-md">
        {/* Icon uses the bright cyan */}
        <div className="text-[#22d3ee] shrink-0 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-500">
            <CheckCircle2 size={32} strokeWidth={3} />
        </div>
        <span className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
            {text}
        </span>
    </div>
  );
}

// 2. Re-Triggering Slide-In Animation (Unchanged logic)
function SlideInItem({ children, index }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { 
                threshold: 0.2, 
                rootMargin: "0px 0px -50px 0px" 
            } 
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.disconnect();
        };
    }, []);

    const delay = `${index * 100}ms`;

    return (
        <div 
            ref={ref}
            style={{ transitionDelay: isVisible ? delay : '0ms' }}
            className={`transform transition-all duration-700 cubic-bezier(0.17, 0.55, 0.55, 1)
                ${isVisible 
                    ? 'opacity-100 translate-x-0 blur-0'
                    : 'opacity-0 -translate-x-20 blur-sm'
                }
            `}
        >
            {children}
        </div>
    );
}

export default Process;