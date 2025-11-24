import React from 'react';
import { Check } from 'lucide-react';
import Button from './ui/Button';
const ComparisonSection = () => {
  return (
    <section className="w-full py-24 bg-[#050505] relative overflow-hidden">
      
      {/* 1. BACKGROUND SPOTLIGHT (Blue Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* 2. TOP BADGE */}
        <div className="mb-8 inline-block">
          <div className="px-8 py-2 rounded-full border border-blue-600 bg-blue-900/20 text-blue-400 text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            YouTube = The King 👑
          </div>
        </div>

        {/* 3. HEADLINE */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-16 text-center leading-tight max-w-4xl">
          Leads That Watch Your YouTube Videos Before Sales Calls <br className="hidden md:block" />
          Simply Show Up & Close WAY Easier...
        </h2>

        {/* 4. THE COMPARISON CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full max-w-5xl mb-16 items-center">
          
          {/* --- LEFT CARD (The "Bad" Way - Darker/Receded) --- */}
          {/* Note: In the design, this card looks slightly smaller or darker to show it's inferior */}
          <div className="bg-brand-dark-accent border border-white/5 p-8 md:p-12 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none relative z-0 lg:mr-[-20px]">
            <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-8 text-center lg:text-left">
              Leads That <span className="text-gray-500">Don't Watch</span> <br />
              Your YouTube Content
            </h3>
            
            <ul className="space-y-6">
              <ListItem text="Need 2-3 follow-ups just to make a decision" dimmed />
              <ListItem text="Are cruel, guarded, and cold" dimmed />
              <ListItem text="Ask 'what do you do again?' halfway through the call" dimmed />
              <ListItem text="Sling out tons of objections" dimmed />
            </ul>
          </div>

          {/* --- RIGHT CARD (The "Good" Way - Bright Blue/Popped) --- */}
          {/* Note: This card has a bright background and shadow to pop forward */}
          <div className="bg-brand-primary p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(34,211,238,0.2)] relative z-10 transform lg:scale-105 border border-white/20">
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-8 text-center lg:text-left shadow-black drop-shadow-sm">
              Leads That Watch Your <br />
              YouTube Content
            </h3>
            
            <ul className="space-y-6">
              <ListItem text="Show up already sold on working with you" bold />
              <ListItem text="Repeat your messaging back to you word-for-word" bold />
              <ListItem text="Already see you as the expert in the space" bold />
              <ListItem text="Show up to sales calls informed, not asking surface level questions" bold />
              <ListItem text="Come in warm, educated, and ready to buy" bold />
            </ul>
          </div>

        </div>

        {/* 5. YOUR CUSTOM BUTTON */}
        <div className="w-full max-w-2xl">
            <Button  className="bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] hover:from-blue-500 hover:to-cyan-400 text-white font-black text-xl md:text-2xl py-6 rounded-lg shadow-[0_0_40px_rgba(59,130,246,0.6)] uppercase tracking-widest border-none w-full">
                 &gt;&gt; GET STARTED NOW &lt;&lt;
            
            </Button>
               
            
               
        </div>

      </div>
    </section>
  );
};

// Helper Component for List Items
function ListItem({ text, dimmed = false, bold = false }) {
  return (
    <div className={`flex items-start gap-3 ${dimmed ? 'opacity-60' : 'opacity-100'}`}>
      {/* Checkmark Icon */}
      <div className={`mt-1 min-w-[20px] ${bold ? 'text-white' : 'text-gray-500'}`}>
        <Check size={20} strokeWidth={bold ? 4 : 2} />
      </div>
      
      {/* Text */}
      <p className={`text-base md:text-lg leading-tight ${bold ? 'text-white font-bold' : 'text-gray-300 font-medium'}`}>
        {text}
      </p>
    </div>
  );
}

export default ComparisonSection;