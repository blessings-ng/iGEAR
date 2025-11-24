import React from 'react';
import { Play } from 'lucide-react';
import Button from './ui/Button';

const ClientsInterview = () => {
  return (
    <section className="w-full py-24 bg-[#050505] relative overflow-hidden">
      
      {/* 1. BACKGROUND VIGNETTE (Deep Blue Spotlight) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1000px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center relative z-10">

        {/* 2. HEADER SECTION */}
        <div className="text-center mb-12 flex flex-col items-center">
            
            {/* BADGE */}
            <div className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs">
                    Does It Actually Work?
                </span>
            </div>

            {/* HEADLINE */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Client Interviews & Testimonials
            </h2>
        </div>

        {/* 3. MASTER CARD (Eddie) - Text Top, Video Bottom */}
        <div className="w-full max-w-3xl mb-8 border-2 border-blue-600 bg-[#080808] rounded-sm p-8 flex flex-col items-center gap-8 shadow-2xl shadow-blue-900/20">
            
            {/* Text Header */}
            <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-3 mb-4">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Eddie" className="w-14 h-14 rounded-full border border-white/20" />
                    <div className="text-left">
                        <div className="text-white font-bold text-base">Eddie Cumberbatch</div>
                        <div className="text-gray-500 text-xs uppercase tracking-wider">Founder - Growth Operator</div>
                    </div>
                </div>
                <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-xl">
                    Eddie, the original "growth operator" was able to scale his business <br className="hidden md:block"/>
                    from <span className="text-white font-bold underline decoration-white/30 underline-offset-4">$54,000/mo to $430,000/mo in 4 months working with us...</span>
                </p>
            </div>

            {/* Video Thumbnail */}
            <div className="w-full aspect-video bg-black rounded-sm relative group cursor-pointer overflow-hidden border border-white/10">
                {/* Fake Thumbnail Image Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111]">
                    <h3 className="text-white font-black text-3xl md:text-5xl uppercase italic transform -rotate-2">
                        FROM <span className="text-yellow-400">$54K/MO</span>
                    </h3>
                    <h3 className="text-white font-black text-4xl md:text-6xl uppercase italic transform -rotate-2 mt-2">
                        TO $420,156
                    </h3>
                </div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                    <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play className="text-white w-10 h-10 fill-white" />
                    </div>
                </div>
            </div>
        </div>

        {/* 4. THE 2x2 GRID - Text Top, Video Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
            
            {/* Card 1 */}
            <InterviewCard 
                name="Daniel Fazio" 
                role="Client Acquisition" 
                img="https://randomuser.me/api/portraits/men/45.jpg"
                quote={<span>"I'd definitely attribute a massive amount of working with you on <span className="text-white font-bold underline decoration-white/30">the YouTube to about $100k/mo to this day"</span></span>}
                thumbText="$100K IN 32 DAYS"
            />
            
            {/* Card 2 */}
            <InterviewCard 
                name="Matt Lucero" 
                role="Agency Scaling" 
                img="https://randomuser.me/api/portraits/men/22.jpg"
                quote={<span>"I didn't even do anything... our videos ranked in search and got <span className="text-white font-bold underline decoration-white/30">3 calls booked. They were all insanely qualified."</span></span>}
                thumbText="+$20,000 FROM YOUTUBE"
            />
            
            {/* Card 3 */}
            <InterviewCard 
                name="Othmane" 
                role="Growth Partner" 
                img="https://randomuser.me/api/portraits/men/64.jpg"
                quote={<span>"I collected <span className="text-white font-bold underline decoration-white/30">$4.5k after about 3 weeks...</span> doing the less work with only a few videos."</span>}
                thumbText="CLOSED A DEAL IN 3 WEEKS"
            />
            
            {/* Card 4 */}
            <InterviewCard 
                name="Charles Tichenor" 
                role="Disrupter School" 
                img="https://randomuser.me/api/portraits/men/85.jpg"
                quote={<span>"Absolutely love seeing my videos... <span className="text-white font-bold underline decoration-white/30">YouTube referrals going up, the revenue of my business going up."</span></span>}
                thumbText="$76,000 / MONTH"
            />

        </div>

        {/* 5. BOTTOM CTA BUTTON */}
        <div className="mt-12 w-full max-w-3xl">
             <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-xl py-5 rounded-sm shadow-[0_0_30px_rgba(59,130,246,0.6)] uppercase tracking-wider border-none">
                &gt;&gt; GET STARTED NOW &lt;&lt;
            </Button>
        </div>

      </div>
    </section>
  );
};

// REUSABLE CARD COMPONENT
function InterviewCard({ name, role, img, quote, thumbText }) {
    return (
        <div className="w-full border border-blue-600 bg-[#080808] rounded-sm p-6 flex flex-col gap-6">
            
            {/* Header & Quote */}
            <div className="text-center flex flex-col items-center">
                <div className="flex items-center gap-3 mb-3">
                    <img src={img} alt={name} className="w-10 h-10 rounded-full border border-white/20" />
                    <div className="text-left">
                        <div className="text-white font-bold text-sm">{name}</div>
                        <div className="text-gray-500 text-[10px] uppercase tracking-wider">{role}</div>
                    </div>
                </div>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed h-12 flex items-center justify-center">
                    {quote}
                </p>
            </div>

            {/* Video Thumbnail */}
            <div className="w-full aspect-video bg-[#111] rounded-sm relative group cursor-pointer overflow-hidden border border-white/10 flex items-center justify-center">
                 {/* Fake Thumb Text */}
                 <h4 className="text-white font-black text-2xl uppercase italic text-center px-4 transform -rotate-3 text-shadow-lg">
                    {thumbText}
                 </h4>
                 
                 {/* Play Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                         <Play className="text-white w-6 h-6 fill-white" />
                    </div>
                 </div>
            </div>
        </div>
    );
}

export default ClientsInterview;