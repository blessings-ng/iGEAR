import React from "react";

export default function HighlightHeaders() {
  return (
    <section className="bg-gradient-to-b from-[--color-brand-teal-light] to-white">
      
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
    </section>
  );
}
