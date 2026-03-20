"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Button from "./Button";

const TESTIMONIALS = [
  { id: 1, quote: "We entrusted Rahmon & his team with our YouTube channel and was BLOWN with their execution!...", name: "Daniel", role: "CEO, BRANDOXEL" },
  { id: 2, quote: "Working with Rahmon and his team completely leveled up our YouTube videos...", name: "Auret", role: "Essetino Media" },
  { id: 4, quote: "Rahmon is an extremely enthusiastic and fun character to work with...", name: "Niel", role: "Founder BBR" }
];

// ADDED FAILSAFE: Defaults to true
export default function Reviews({ isDarkMode = true }) {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    // FIXED: Dynamically changes background instead of hardcoding bg-black
    <section className={`w-full py-20 px-4 flex flex-col items-center transition-colors duration-500 font-sans antialiased ${isDarkMode ? "bg-black" : "bg-white"}`}>
      
      {/* HIGH-END TYPOGRAPHY: Matches the Hero section's heavy tracking and adapts to theme */}
      <h2 className={`text-2xl md:text-4xl font-black tracking-tighter mb-12 uppercase text-center transition-colors duration-500 ${isDarkMode ? "text-white" : "text-black"}`}>
        What our clients say about us:
      </h2>
      
      {/* FIXED: Dynamic borders and background for the testimonial box */}
      <div className={`relative w-full max-w-[900px] border-[1px] p-10 md:p-16 flex flex-col items-center text-center transition-colors duration-500 ${isDarkMode ? "border-zinc-800 bg-black text-white" : "border-zinc-200 bg-zinc-50 text-black shadow-sm"}`}>
        <Quote className="text-brand-teal mb-8 opacity-50" size={40} />
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={current} 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }} 
            className="flex flex-col items-center"
          >
            {/* TYPOGRAPHY SPLIT: Sleek light italic for the quote, bold for the author */}
            <p className={`text-lg md:text-3xl font-light italic leading-relaxed mb-10 transition-colors duration-500 ${isDarkMode ? "text-zinc-300" : "text-zinc-700"}`}>
              "{TESTIMONIALS[current].quote}"
            </p>
            <p className="font-black tracking-tight text-xl">{TESTIMONIALS[current].name}</p>
            <p className="text-brand-teal text-xs uppercase font-bold tracking-[0.2em] mt-2">
              {TESTIMONIALS[current].role}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-1/2 -translate-y-1/2 w-full left-0 px-0 md:px-4 flex justify-between pointer-events-none">
          <button 
            onClick={prev} 
            className="pointer-events-auto text-brand-teal hover:scale-125 transition-transform"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          <button 
            onClick={next} 
            className="pointer-events-auto text-brand-teal hover:scale-125 transition-transform"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>
        </div>
      </div>
      <div className="mt-8 md:mt-12 relative z-20">
        <Button/>
      </div>
    </section>
  );
}