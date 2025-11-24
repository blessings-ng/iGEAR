import React from 'react';
import { PhoneCall, Mail, Ghost, DollarSign, BedDouble, Users } from 'lucide-react';
import Button from './ui/Button';

const BreakdownSection = () => {
  return (
<section className="w-full py-24 relative overflow-hidden border-t border-white/5 
                    bg-gradient-to-r from-[#050505] via-[#051a05] to-[#050505]">      
      {/* 1. INTENSIFIED BACKGROUND GLOW */}
      {/* Increased opacity and changed color for a brighter ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[700px] bg-green-500/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* 2. SHINIER TOP BADGE */}
        <div className="mb-8 inline-block">
          {/* Added stronger shadow and a subtle inner glow gradient */}
          <div className="px-6 py-2 rounded-full border border-green-400/80 bg-gradient-to-r from-green-950/50 to-green-900/50 text-green-300 text-xs md:text-sm font-bold uppercase tracking-widest shadow-[0_0_25px_rgba(74,222,128,0.4)] backdrop-blur-md">
            Here's How We Make Your YouTube Print...
          </div>
        </div>

        {/* 3. GLOWING HEADLINES */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 text-center leading-tight">
          Here's what you can expect with just one video a week, <br className="hidden md:block" />
          {/* Added text shadow to make the green pop like neon */}
          <span className="text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]">done right.</span>
        </h2>

        <div className="text-center text-gray-400 space-y-2 mb-16 text-sm md:text-base font-medium max-w-3xl">
          <p>You don't need to become a YouTuber. You don't need a massive audience. You don't need to reinvent your content strategy.</p>
          <p className="text-white font-bold">Just one video per week, with the right strategy can...</p>
        </div>

        {/* 4. THE ULTRA-SHINY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16">
          
          <GreenCard icon={<PhoneCall size={24} />} title="Consistently book your best sales calls">
            YouTube is where prospects go when their pain is at its peak. They're searching. Ready to pay someone who gets it. <span className="text-white underline underline-offset-4 decoration-green-500/50">When your content shows up in that moment, it's a lay-up deal.</span>
          </GreenCard>

          <GreenCard icon={<Mail size={24} />} title="Improve results on your ads, emails, and cold outreach, instantly">
            When you post on YouTube, suddenly your ads get higher ROAS. Your cold email replies are warmer. <span className="text-white underline underline-offset-4 decoration-green-500/50">Your lead quality improves across the board because they've already seen your content before hand.</span>
          </GreenCard>

          <GreenCard icon={<Ghost size={24} />} title='Fewer no-shows, ghosted DMs, and "just curious" leads'>
            YouTube filters out the time-wasters. People self-qualify through your content, so by the time they hit <span className="text-white underline underline-offset-4 decoration-green-500/50">"Book a Call," they already know they want in.</span>
          </GreenCard>

          <GreenCard icon={<DollarSign size={24} />} title="Your Closers (or you) turn into cashiers, not salespeople">
            When someone watches 45 minutes of your content before the call, <span className="text-white underline underline-offset-4 decoration-green-500/50">they show up ready to buy, not to be sold.</span> You don't need to build rapport or "press their pain" - just the link to the invoice.
          </GreenCard>

          <GreenCard icon={<BedDouble size={24} />} title="Create compounding lead flow (even while you sleep)">
            Unlike ads or short-form, YouTube content ranks and shows up in feeds months, even years, after it goes live - <span className="text-white underline underline-offset-4 decoration-green-500/50">bringing in leads on autopilot from videos you forgot you even posted.</span>
          </GreenCard>

          <GreenCard icon={<Users size={24} />} title="You become the obvious choice, even in a crowded market">
            When you show up in the right person's feed with the right message, over and over, you instantly become the one they trust. YouTube makes that possible, <span className="text-white underline underline-offset-4 decoration-green-500/50">without needing a massive audience.</span>
          </GreenCard>

        </div>

        {/* 5. SHINY BOTTOM SUMMARY BOX */}
        <div className="w-full max-w-4xl relative group">
            {/* The Glow Effect behind the box */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            
            {/* The Box content */}
            <div className="relative border border-green-500/80 bg-[#0a0a0a] rounded-2xl p-8 text-center shadow-[0_0_50px_rgba(34,197,94,0.2)] backdrop-blur-xl">
                <p className="text-white text-lg md:text-xl font-bold leading-relaxed">
                Done right, one YouTube video per week can book you <span className="text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.8)] underline decoration-green-500 underline-offset-4">10–30 qualified, inbound sales calls per week</span>, with leads who show up already trusting you.
                </p>
            </div>
        </div>

        {/* 6. CTA BUTTON */}
        <div className="mt-12">
            <Button>
           &gt;&gt; Get Started Now &lt;&lt;
            </Button>
        </div>

      </div>
    </section>
  );
};

// THE REUSABLE "SHINY" GREEN CARD
function GreenCard({ icon, title, children }) {
  return (
    // Added group for hover states on children
    // Added shadow-md and shadow-green-900/20 for default depth
    // Added hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] for intense hover glow
    // Changed border color to be brighter
    <div className="group p-6 md:p-8 rounded-2xl border border-green-500/50 bg-gradient-to-br from-[#0a0a0a] to-[#050505] hover:from-green-950/30 hover:to-[#0a0a0a] transition-all duration-500 flex items-start gap-5 h-full shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_50px_rgba(34,197,94,0.4)] hover:border-green-400 relative overflow-hidden">
      
      {/* Subtle inner sheen effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-500/0 via-green-500/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Icon with its own glow */}
      <div className="text-green-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]">
        {icon}
      </div>

      {/* Text Content */}
      <div className="relative z-10">
        <h4 className="text-white font-bold text-base md:text-lg leading-tight mb-3 group-hover:text-green-300 transition-colors drop-shadow-sm">
          {title}
        </h4>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed group-hover:text-gray-300">
          {children}
        </p>
      </div>

    </div>
  );
}

export default BreakdownSection;