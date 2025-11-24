import React from 'react';
import { Calendar, Play } from 'lucide-react';
import Button from './ui/Button';

export default function HeroVSL() {
  return (
    <section className="relative max-w-5xl mx-auto px-4 pt-12 pb-20 flex flex-col items-center text-center z-10">
      
      {/* THE GLOW BACKGROUND */}
      <div className="glow-effect" />

      {/* The Audience Callout Banner */}
<div className="mb-4 inline-flex items-center gap-3 px-4 py-2 rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs md:text-sm font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.15)]">
  
  {/* The Pulsing Dot */}
  <span className="relative flex h-2 w-2 flex-shrink-0">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
  </span>

  {/* The Text */}
  <span className="text-center">
    Coaches, Consultants, & Agency Owners Who Want High-Ticket Clients From YouTube
  </span>

</div>

      {/* HEADLINE */}
<h1 className="text-xl md:text-4xl font-bold mb-4 tracking-tight text-white max-w-8xl mx-auto">
  In 30 Days We Will <span className="">Get Your YouTube Channel Booking Qualified Sales Calls</span>
  <span className="text-white"> — Completely Done-For-You </span>
    Even If You Have 0 Subscribers Now
  
</h1>

      {/* Subheadline */}
      <p className=" md:text-2xl text-300 font-sans mb-10 max-w- leading-relaxed">
       We handle everything from scripting, ideating, posting, and editing completely done-for-you. All you have to do is talk in front of a camera for 2 hours per month.
      </p>

      {/* Video Container - Matches TikScale's border style */}
      <div className="w-full md:w-3/4 mx-auto aspect-video bg-amber-500 border border-white/10 rounded-xl shadow-[0_0_60px_rgba(42,122,144,0.15)] relative overflow-hidden group mb-12">
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all cursor-pointer">
          {/* Play Button using Teal */}
          <div className="w-24 h-24 bg-brand-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center pl-2 shadow-2xl shadow-brand-primary/40 group-hover:scale-110 transition-transform duration-300">
            <Play className="w-10 h-10 text-white fill-white" />
          </div>
        </div>
        {/* Fake Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10">
          <div className="h-full w-[35%] bg-brand-accent"></div>
        </div>
      </div>

      {/* Call to Action */}
      <div className=" mx-auto flex flex-col items-center gap-4">
        <Button >
           &gt;&gt; Get Started Now &lt;&lt;
        </Button>
        {/* <p className="text-xs text-gray-500 font-medium">
          No pressure. No hard selling. Just strategy.
        </p> */}
      </div>
    </section>
  );
}