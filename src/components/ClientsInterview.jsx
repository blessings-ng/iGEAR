import React, { useEffect, useRef, useState } from 'react';
import { Play, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './ui/Button';

// --- MOCK DATA FOR CAROUSEL ---
const TESTIMONIALS = [
  {
    id: 1,
    quote: "Rahmon is an asset to any creative... thoughtful, proactive and very creative. His team helped me grow my youtube channel... Highly, highly recommend him!",
    name: "Happy Client",
    role: "Founder / CEO"
  },
  {
    id: 2,
    quote: "The best investment we've made for our brand this year. The strategy was spot on, and the editing quality completely separates us from the competition.",
    name: "Sarah Jenkins",
    role: "Marketing Director"
  },
  {
    id: 3,
    quote: "I didn't have to touch a thing. I just recorded the raw video, sent it over, and woke up to a fully optimized upload that brought in leads immediately.",
    name: "Michael Ross",
    role: "High-Ticket Coach"
  }
];

const ClientInterview = () => {
  // Theme: SHARP NEON CYAN (#00F3FF)
  
  return (
    <section className="w-full py-20 relative overflow-hidden border-t border-white/10">
      
      {/* 1. BACKGROUND GLOW - Sharper, less muddy */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[#00F3FF]/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">

        {/* 2. HEADER */}
        <div className="mb-16 flex flex-col items-center text-center">
            {/* Sharp Neon Pill */}
            <div className="mb-6 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#00F3FF] bg-[#00F3FF]/10 shadow-[0_0_20px_rgba(0,243,255,0.4)] backdrop-blur-md">
                <span className="text-[#00F3FF] font-black uppercase tracking-widest text-xs md:text-sm drop-shadow-[0_0_5px_rgba(0,243,255,1)]">
                    STILL NOT SURE?
                </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                Why You Can Trust Us
            </h3>
        </div>

        {/* --- POINT 1: PUBLIC PROOF (Video Embed) --- */}
        <div className="mb-24 w-full flex flex-col items-center text-center max-w-3xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">
                 You can watch us do everything we teach publicly.
            </h4>
            
            <p className="text-gray-300 text-base mb-8">
                We share all our methods for free on our YouTube channel.
            </p> 
            
            {/* YOUTUBE EMBED - Sharp Neon Border */}
            <div className="w-full aspect-video bg-black rounded-3xl overflow-hidden border border-[#00F3FF]/50 shadow-[0_0_30px_rgba(0,243,255,0.15)] mb-8 group hover:border-[#00F3FF] hover:shadow-[0_0_50px_rgba(0,243,255,0.4)] transition-all duration-300 relative z-20">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/rA8Cks8Cl2c?rel=0" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                (We plan to use that channel’s ad revenue to <span className="text-white font-bold border-b-2 border-[#00F3FF] shadow-[0_10px_20px_-10px_rgba(0,243,255,0.5)]">sponsor educational programs in Africa.</span> Your growth fuels global impact.)
            </p>
        </div>

        {/* --- POINT 2: CLIENT PROOF (Stacked) --- */}
        <div className="mb-24 w-full flex flex-col items-center">
             <h4 className="text-xl md:text-4xl font-bold text-white mb-10 text-center">
                Our clients speak for us.
            </h4>

            <div className="flex flex-col gap-8 w-full max-w-3xl">
                
                {/* A. Video Testimonial Placeholder */}
                <div className="w-full aspect-video bg-[#0a0a0a] border border-[#00F3FF]/30 rounded-3xl flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(0,243,255,0.3)] hover:border-[#00F3FF] transition-all duration-300">
                    <div className="absolute inset-0 bg-[#00F3FF]/5 group-hover:bg-[#00F3FF]/10 transition-all"></div>
                    <div className="w-20 h-20 bg-[#00F3FF] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,243,255,0.8)] z-10 group-hover:scale-110 transition-transform duration-300">
                        <Play className="text-black fill-black ml-1" size={32} />
                    </div>
                    <span className="mt-6 text-[#00F3FF] text-sm font-bold tracking-widest z-10 uppercase group-hover:text-white transition-colors drop-shadow-[0_0_5px_rgba(0,243,255,0.8)]">[Video Testimonial Placeholder]</span>
                </div>

                {/* B. CAROUSEL SLIDER (Text Review) */}
                <TestimonialCarousel />

            </div>
        </div>


        {/* --- POINT 3: PROVEN RESULTS --- */}
        <div className="mb-24 w-full flex flex-col items-center text-center">
            <h4 className="text-xl md:text-3xl font-bold text-white mb-10">
                 Proven capability. Real results.
            </h4>

            <div className="w-full max-w-3xl flex flex-col gap-8">
                
                {/* List Container */}
                <div className="bg-[#0a0a0a] border border-[#00F3FF]/30 p-8 rounded-3xl w-full shadow-[0_0_30px_rgba(0,243,255,0.1)] backdrop-blur-sm">
                    <h5 className="text-[#00F3FF] font-black uppercase tracking-wider text-xs mb-6 text-left drop-shadow-[0_0_5px_rgba(0,243,255,0.8)]">We’ve helped clients:</h5>
                    <ul className="space-y-5 text-left">
                        <ListItem text={<>Grow from <span className="text-white font-bold">0 → 500 subscribers</span></>} />
                        <ListItem text={<>Grow from <span className="text-white font-bold">800 → nearly 2,000 subscribers</span></>} />
                        <ListItem text={<>Generate <span className="text-white font-bold">thousands of views</span> on videos</>} />
                        <ListItem text="Turn YouTube traffic into actual revenue" />
                    </ul>
                </div>

                {/* B. The Counters */}
                <div className="w-full">
                    <p className="text-gray-400 text-sm italic mb-6">
                        Combined client results driven by our content:
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 w-full">
                        <NeonCounterBox target={100000} suffix="+" label="Total Views Generated" />
                        <NeonCounterBox prefix="$" target={999} suffix="" label="Est. Revenue Generated" isRevenue={true} />
                    </div>
                </div>

            </div>
        </div>


        {/* --- POINT 4: BRANDS THAT TRUST US --- */}
        <div className="w-full flex flex-col items-center text-center">
             <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                 Brands that trust our work:
            </h4>
            
            {/* THE BRAND GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl mb-12">
                <BrandGridItem 
                    image="https://randomuser.me/api/portraits/men/32.jpg"
                    logoColor="bg-orange-500"
                    logoInitials="SB"
                    name="Steady Bow"
                    count="10k+ Followers"
                />
                 <BrandGridItem 
                    image="https://randomuser.me/api/portraits/women/44.jpg"
                    logoColor="bg-white text-black"
                    logoInitials="ARI"
                    name="Ari the Creator"
                    count="Creator Cohort"
                />
                 <BrandGridItem 
                    image="https://randomuser.me/api/portraits/women/65.jpg"
                    logoColor="bg-purple-600"
                    logoInitials="EM"
                    name="Essetino Media"
                    count="63k Subscribers"
                />
                 <BrandGridItem 
                    image="https://randomuser.me/api/portraits/men/85.jpg"
                    logoColor="bg-orange-600"
                    logoInitials="BC"
                    name="Brandcool"
                    count="5k+ Followers"
                />
            </div>

            <p className="text-white text-lg font-medium max-w-3xl border-l-4 border-[#00F3FF] pl-6 py-4 bg-gradient-to-r from-[#00F3FF]/10 to-transparent text-left mx-auto rounded-r-xl shadow-[inset_10px_0_20px_-10px_rgba(0,243,255,0.3)]">
                You’re not guessing whether we can deliver. Our work proves it.
            </p>
        </div>

      </div>
      <Button className=' mx-auto mt-10' >
          &gt;&gt; BOOK YOUR FREE STRATEGY CALL &lt;&lt;
        </Button>
    </section>
  );
};


// ==============================
// SUB-COMPONENTS
// ==============================

// 1. CAROUSEL COMPONENT
function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % TESTIMONIALS.length);
  const prevSlide = () => setCurrent((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const currentTestimonial = TESTIMONIALS[current];

  return (
    <div className="w-full bg-[#0a0a0a] border border-[#00F3FF]/30 rounded-3xl p-8 relative shadow-lg hover:border-[#00F3FF] hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] transition-all duration-300 min-h-[240px] flex flex-col justify-between group">
       <Quote className="text-[#00F3FF] absolute top-6 left-6 opacity-80 drop-shadow-[0_0_5px_rgba(0,243,255,0.8)]" size={40} />
       
       {/* Animated Content */}
       <div className="pl-12 relative z-10 transition-opacity duration-500 ease-in-out mt-4">
          <p className="text-white text-lg italic leading-relaxed mb-6 drop-shadow-md">
              "{currentTestimonial.quote}"
          </p>
          
          <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full border border-[#00F3FF]/50 shrink-0"></div> 
              <div className="text-left">
                  <div className="text-white font-bold text-sm">{currentTestimonial.name}</div>
                  <div className="text-[#00F3FF] text-[10px] uppercase font-black tracking-wider drop-shadow-[0_0_2px_rgba(0,243,255,1)]">{currentTestimonial.role}</div>
              </div>
          </div>
       </div>

       {/* Controls */}
       <div className="absolute bottom-6 right-6 flex items-center gap-2">
         <button onClick={prevSlide} className="p-2 rounded-full bg-black border border-[#00F3FF]/30 hover:bg-[#00F3FF] hover:text-black text-[#00F3FF] transition-all shadow-[0_0_10px_rgba(0,243,255,0.1)]">
           <ChevronLeft size={18} />
         </button>
         <button onClick={nextSlide} className="p-2 rounded-full bg-black border border-[#00F3FF]/30 hover:bg-[#00F3FF] hover:text-black text-[#00F3FF] transition-all shadow-[0_0_10px_rgba(0,243,255,0.1)]">
           <ChevronRight size={18} />
         </button>
       </div>

       {/* Dots */}
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {TESTIMONIALS.map((_, idx) => (
             <button 
               key={idx} 
               onClick={() => setCurrent(idx)}
               className={`h-1.5 rounded-full transition-all duration-300 shadow-[0_0_5px_rgba(0,243,255,0.8)] ${current === idx ? 'bg-[#00F3FF] w-6' : 'bg-[#00F3FF]/30 w-2'}`}
             />
          ))}
       </div>
    </div>
  );
}

// 2. LIST ITEM
function ListItem({ text }) {
    return (
        <li className="flex items-start gap-4 group">
            <div className="mt-1 text-[#00F3FF] shrink-0 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,243,255,1)] transition-all duration-300">
                <CheckCircle2 size={24} />
            </div>
            <span className="text-gray-200 text-lg leading-relaxed group-hover:text-white transition-colors shadow-black drop-shadow-sm">
                {text}
            </span>
        </li>
    );
}

// 3. COUNTER BOX
function NeonCounterBox({ target, label, prefix = "", suffix = "", isRevenue = false }) {
    const [count, setCount] = useState(0);
    const boxRef = useRef(null);

    useEffect(() => {
        const currentRef = boxRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let start = 0;
                    const duration = 2000; 
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
                    observer.unobserve(currentRef);
                }
            },
            { threshold: 0.2 }
        );

        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.disconnect();
        };
    }, [target]);

    return (
        <div ref={boxRef} className="flex-1 flex flex-col items-center justify-center p-8 rounded-3xl bg-[#0a0a0a] border border-[#00F3FF]/30 shadow-[0_0_15px_rgba(0,243,255,0.1)] text-center group hover:border-[#00F3FF] hover:shadow-[0_0_40px_rgba(0,243,255,0.3)] transition-all duration-300">
            <div className="text-4xl md:text-6xl font-black text-white mb-2 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_2px_5px_rgba(0,0,0,1)]">
                {isRevenue && target === 999 ? '$xxx' : `${prefix}${count.toLocaleString()}${suffix}`}
            </div>
            <p className="text-[#00F3FF] font-bold uppercase tracking-wider text-[10px] md:text-xs drop-shadow-[0_0_5px_rgba(0,243,255,0.8)]">
                {label}
            </p>
        </div>
    );
}

// 4. BRAND GRID ITEM
function BrandGridItem({ image, logoColor, logoInitials, name, count }) {
    return (
        <div className="flex flex-col items-center gap-4 group">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-2 border-[#00F3FF]/20 group-hover:border-[#00F3FF] group-hover:shadow-[0_0_40px_rgba(0,243,255,0.4)] transition-all duration-300">
                <img src={image} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className={`absolute top-3 right-3 w-12 h-12 rounded-full border-2 border-white/20 shadow-lg flex items-center justify-center z-10 ${logoColor} text-white transform group-hover:scale-110 transition-transform`}>
                     <span className="font-bold text-xs leading-none">{logoInitials}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="text-center w-full">
                <div className="text-white font-bold text-lg mb-1 group-hover:text-[#00F3FF] transition-colors">{name}</div>
                <div className="text-[#00F3FF] text-xs font-bold bg-[#111] border border-[#00F3FF]/20 px-3 py-1 rounded-full inline-block group-hover:bg-[#00F3FF]/10 group-hover:border-[#00F3FF] transition-all shadow-[0_0_10px_rgba(0,243,255,0.1)]">
                    {count}
                </div>
            </div>
        </div>
    );
}

export default ClientInterview;