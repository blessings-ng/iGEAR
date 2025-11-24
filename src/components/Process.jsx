import React from 'react';
import { Pencil, User, TrendingUp } from 'lucide-react';

const Process = () => {
  return (
<section className="w-full py-24 relative overflow-hidden border-t border-white/5 
                    bg-gradient-to-r from-[#050505] via-[#1a0505] to-[#050505]">      
      {/* Background Red Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* 1. THE "SHADE" BADGE */}
        <div className="mb-8 inline-block">
          <div className="px-4 py-1.5 rounded-full border border-red-600 bg-red-600/10 text-red-500 text-xs md:text-sm font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(220,38,38,0.3)]">
            I'm Not Throwing Shade At You But...
          </div>
        </div>

        {/* 2. THE HEADLINES */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 text-center">
          You're a Business Owner, Not a YouTuber
        </h2>

        <div className="text-center text-gray-400 space-y-2 mb-12 text-sm md:text-base font-medium max-w-3xl">
          <p>Let's be real - the problem isn't that you don't believe in YouTube.</p>
          <p>You already know it's the move. You see the channels. You've watched your competitors blow up. You've probably even tried it yourself.</p>
          <p className="pt-4 text-white font-bold">But why isn't it working for you?</p>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-12 text-center">
          The way to make YouTube work, isn't to:
        </h3>

        {/* 3. THE 2x2 RED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          
          {/* CARD 1: Random Editor */}
          <RedCard 
            icon={<Pencil size={28} />}
            title="Hire a random editor and hope for the best"
          >
            YouTube success isn't about flashy cuts and cool music; <span className="text-white underline underline-offset-4 decoration-white/40">it's about strategy - what to say, how to say it, and how to link it back to your offer.</span>
            <br /><br />
            <span className="text-white underline underline-offset-4 decoration-white/40">Most editors can't help with that. They just make things "look" nice and try to make flashy edits.</span>
          </RedCard>

          {/* CARD 2: Trust Value */}
          <RedCard 
            icon={<User size={28} />}
            title='Trust that your "value" will be enough to book calls'
          >
            Yes, valuable content is important. But <span className="text-white underline underline-offset-4 decoration-white/40">so is the packaging, SEO, thumbnail, editing.</span>
            <br /><br />
            Without the proper strategy and packaging, the <span className="text-white underline underline-offset-4 decoration-white/40">'Gamma Doc Presentation' you spent 3 hours building will be for nothing.</span>
          </RedCard>

          {/* CARD 3: Viral Content */}
          <RedCard 
            icon={<TrendingUp size={28} />}
            title="Study what makes content go viral & try to replicate it"
          >
            Understanding how Mr. Beast grew a 400M subscriber audience isn't going to help your coaching program book more sales calls... neither is reverse engineering Alex Hormozi content.
            <br /><br />
            <span className="text-white underline underline-offset-4 decoration-white/40">You need to understand the fundamentals of content that books calls for YOUR offer.</span>
          </RedCard>

          {/* CARD 4: Do Everything Yourself */}
          <RedCard 
            icon={<User size={28} />}
            title="Try to do everything yourself"
          >
            Scriptwriting, Filming, Editing, Thumbnails, SEO, Posting. If you're handling it all, <span className="text-white underline underline-offset-4 decoration-white/40">no wonder YouTube instantly goes on the back-burner when you sign a new client.</span>
            <br /><br />
            Consistency is everything with YouTube - <span className="text-white underline underline-offset-4 decoration-white/40">you can't afford to have big gaps between uploads.</span>
          </RedCard>

        </div>

      </div>
    </section>
  );
};

// THE REUSABLE RED CARD COMPONENT
function RedCard({ icon, title, children }) {
  return (
    <div className="p-8 rounded-2xl border border-red-600 bg-[#050505] hover:bg-red-950/10 transition-colors duration-300 flex flex-col gap-4 h-full">
      
      {/* Header: Icon + Title */}
      <div className="flex items-start gap-4">
        <div className="text-red-500 flex-shrink-0 mt-1">
          {icon}
        </div>
        <h4 className="text-white font-bold text-lg leading-tight">
          {title}
        </h4>
      </div>

      {/* Body Text */}
      <div className="text-gray-400 text-sm leading-relaxed">
        {children}
      </div>

    </div>
  );
}

export default Process;