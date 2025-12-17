import React from 'react';
import { Check } from 'lucide-react';
import Button from './ui/Button';
const ComparisonSection = () => {
  return (
    <section className="w-full py-8 relative overflow-hidden">
      
      {/* 1. BACKGROUND SPOTLIGHT (Blue Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* 2. TOP BADGE */}
        <div className="mb-8 inline-block">
          <div className="px-8 py-2 rounded-full border border-blue-600 bg-blue-900/20 text-blue-400 text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            THE CORE PROBLEM
          </div>
        </div>

        {/* 3. HEADLINE */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-16 text-center leading-tight max-w-4xl">
         You’re Running a Real Business… But YouTube Is Still a Missed Opportunity Because:
        </h2>

        {/* 4. THE COMPARISON CARDS */}
          
          <div className="bg-brand-dark-accent border border-white/5 p-8 md:p-12 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none relative z-0 lg:mr-[-20px]">
            <ul className="space-y-6">
              <ListItem text="You don’t have the time to script, edit, optimize, and upload weekly" dimmed />
              <ListItem text="You’ve posted before… but it didn’t convert into clients" dimmed />
              <ListItem text="You know competitors are using YouTube to close high-ticket deals, but you don’t know how" dimmed />
            </ul>
          </div>

          <h3 className="text-xl md:text-2xl font-extrabold text-white mb-8 text-center lg:text-left shadow-black drop-shadow-sm">
                Yet You Know That YouTube Can Get You:
            </h3>
          
          
          <div className="bg-brand-primary p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(34,211,238,0.2)] relative z-10 transform lg:scale-105 border border-white/20">
            <ul className="space-y-6">
              <ListItem text="Predictable High-ticket inbound clients (That pay faster than cold outreach or referrals)" bold />
              <ListItem text="Qualified Sales Calls" bold />
              <ListItem text="Thousands of dollars in digital product sales " bold />
            </ul>
          </div>
          

        {/* 5. YOUR CUSTOM BUTTON */}
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The Bottom Line Is, You Know Youtube Works, But You Don’t Have A Proven System To Make It Work For Your Business.
          </p>
          <Button>
             &gt;&gt; BOOK YOUR FREE STRATEGY CALL &lt;&lt;
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