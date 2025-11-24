import React from 'react';
import { Play } from 'lucide-react';
import Button from './ui/Button';

const SocialProof = () => {
  return (
<section className="w-full py-20 relative overflow-hidden border-t border-white/5 
                    bg-[#050505] 
                    bg-[radial-gradient(ellipse_at_center,_#0B1221_0%,_#050505_70%)]">      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[800px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center relative z-10">

        {/* 1. HEADLINE & BADGE */}
        <div className="text-center mb-12 flex flex-col items-center">
            
            {/* GLOWING BLUE BADGE */}
            <div className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-xs">
                    Does It Actually Work?
                </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
            We've Built & Scaled YouTube Channels For The Biggest <br className="hidden md:block"/>
            Coaches & Agency Owners In The Space
            </h2>
        </div>

        {/* 2. MASTER CARD (Tablet: Equal Parts, Desktop: Large Video) */}
        <div className="w-full max-w-2xl lg:max-w-5xl mb-8 border-2 border-blue-600 bg-[#080808] rounded-sm p-6 md:p-10 flex flex-col md:flex-col items-center gap-8">
            
            {/* Text Side */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center gap-3 mb-4">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Eddie" className="w-16 h-16 rounded-full border border-white/20" />
                    <div>
                        <div className="text-white font-bold text-lg">Eddie Cumberbatch</div>
                        <div className="text-gray-500 text-xs uppercase tracking-wider">Founder - Growth Operator</div>
                    </div>
                </div>
                <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                    Eddie, the original "growth operator" was able to scale his business <br className="hidden lg:block"/>
                    from <span className="text-white font-bold underline decoration-white/30 underline-offset-4">$54,000/mo to $430,000/mo in 4 months working with us...</span>
                </p>
            </div>

            {/* Video Side */}
            <div className="w-full md:w-1/2 aspect-video bg-[#D9D9D9] rounded-sm relative group cursor-pointer overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="text-gray-500 w-20 h-20 opacity-50 group-hover:scale-110 transition-transform" />
                </div>
            </div>
        </div>

        {/* 3. THE GRID (Tablet: Block, Desktop: 2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-5xl">
            
            <GridCard 
                name="Daniel Fazio" role="Client Acquisition" img="https://randomuser.me/api/portraits/men/45.jpg"
                quote={<span>"I'd definitely attribute a massive amount of working with you on <span className="text-white font-bold underline decoration-white/30">the YouTube to about $100k/mo to this day"</span></span>}
            />
            <GridCard 
                name="Matt Lucero" role="Agency Scaling" img="https://randomuser.me/api/portraits/men/22.jpg"
                quote={<span>"I didn't even do anything... our videos ranked in search and got <span className="text-white font-bold underline decoration-white/30">3 calls booked. They were all insanely qualified."</span></span>}
            />
            <GridCard 
                name="Othmane" role="Growth Partner" img="https://randomuser.me/api/portraits/men/64.jpg"
                quote={<span>"I collected <span className="text-white font-bold underline decoration-white/30">$4.5k after about 3 weeks...</span> doing the less work with only a few videos."</span>}
            />
            <GridCard 
                name="Charles Tichenor" role="Disrupter School" img="https://randomuser.me/api/portraits/men/85.jpg"
                quote={<span>"Absolutely love seeing my videos... <span className="text-white font-bold underline decoration-white/30">YouTube referrals going up, the revenue of my business going up."</span></span>}
            />

        </div>

        {/* 4. BOTTOM CTA (Using Your Custom Component) */}
        <div className="mt-12">
            <Button>
                      &gt;&gt; Get Started Now &lt;&lt;
            </Button>
                
        </div>

      </div>
    </section>
  );
};

// GRID CARD COMPONENT
function GridCard({ name, role, img, quote }) {
    return (
        <div className="w-full border border-blue-600 bg-[#080808] rounded-sm p-6 flex flex-col gap-6">
            {/* Header & Quote */}
            <div className="text-center flex flex-col items-center">
                <div className="flex items-center gap-3 mb-3">
                    <img src={img} alt={name} className="w-12 h-12 rounded-full border border-white/20" />
                    <div className="text-left">
                        <div className="text-white font-bold text-sm">{name}</div>
                        <div className="text-gray-500 text-[10px] uppercase tracking-wider">{role}</div>
                    </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed h-12 flex items-center justify-center">
                    {quote}
                </p>
            </div>
            {/* Video Placeholder */}
            <div className="w-full aspect-video bg-[#D9D9D9] rounded-sm relative flex items-center justify-center">
                 <Play className="text-gray-500 w-10 h-10 opacity-50" />
            </div>
        </div>
    );
}

export default SocialProof;