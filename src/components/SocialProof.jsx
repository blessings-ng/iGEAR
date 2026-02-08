import React from 'react';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import Button from './ui/Button';

const SocialProof = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Background Blue Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-800/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-8 inline-block">
            <div className="px-8 py-2 rounded-full border border-blue-600 bg-blue-900/20 text-blue-400 text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              THE CORE PROBLEM
            </div>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            You’re Running a Real Business... But YouTube Is Still a Missed Opportunity Because:
          </h3>
        </div>

        {/* Stacked Layout Container */}
        {/* CHANGED: Switched from grid to flex-col to force block layout on all screens */}
        <div className="flex flex-col gap-8 mb-16 max-w-2xl mx-auto w-full">
          
          {/* Card 1: The Problem */}
          <div className="w-full group relative p-8 rounded-3xl bg-gray-900/50 border border-blue-500/30 hover:border-blue-400 transition-all duration-300 overflow-hidden">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-all duration-300 rounded-3xl pointer-events-none"></div>
        
            <ul className="space-y-6">
              <li className="flex items-start">
                <XCircle className="w-6 h-6 text-blue-500 mr-4 flex-shrink-0" />
                <span className="text-gray-300 text-lg">
                  You don’t have the time to script, edit, optimize, and upload weekly
                </span>
              </li>
              <li className="flex items-start">
                <XCircle className="w-6 h-6 text-blue-500 mr-4 flex-shrink-0" />
                <span className="text-gray-300 text-lg">
                  You’ve posted before… but it didn’t convert into clients
                </span>
              </li>
              <li className="flex items-start">
                <XCircle className="w-6 h-6 text-blue-500 mr-4 flex-shrink-0" />
                <span className="text-gray-300 text-lg">
                  You know competitors are using YouTube to close high-ticket deals, but you don’t know how
                </span>
              </li>
            </ul>
          </div>

          {/* Middle Text */}
          <h4 className="text-3xl font-bold text-white text-center py-4">
             And You Know That YouTube Can Get You:
          </h4>

          {/* Card 2: The Desire */}
          <div className="w-full group relative p-8 rounded-3xl bg-gray-900/50 border border-blue-500/30 hover:border-blue-400 transition-all duration-300 overflow-hidden">
          
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-all duration-300 rounded-3xl pointer-events-none"></div>

            <ul className="space-y-6">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" />
                <span className="text-gray-300 text-lg">
                  Predictable High-ticket inbound clients (That pay faster than cold outreach or referrals)
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" />
                <span className="text-gray-300 text-lg">
                  Qualified Sales Calls
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" />
                <span className="text-gray-300 text-lg">
                  Thousands of dollars in digital product sales
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line & CTA */}
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The Bottom Line Is, You Know Youtube Works, But You Don’t Have A Proven System To Make It Work For Your Business.
          </p>
          <div className="flex justify-center">
            <Button>
              &gt;&gt; BOOK YOUR FREE STRATEGY CALL &lt;&lt;
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;