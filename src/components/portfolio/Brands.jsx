"use client";
import React from "react";

// Make sure these paths correctly point to your assets folder!
import daniel from "../../assets/image/daniel-igear.jpeg";
import auret from "../../assets/image/auret-igear.jpeg";
import arithecreator from "../../assets/image/arithecreator-igear.jpeg";
import arithecreatorlogo from "../../assets/image/arithecreator-logo-igear.jpeg";
import essetinomedialogo from "../../assets/image/essentomedialogo-igear.jpeg";
import essentomedia from "../../assets/image/essetinomedia-igear.jpeg";
import steadybowlogo from "../../assets/image/steadybow-logo-igear.jpeg";
import steadybow from "../../assets/image/steadybow-igear.jpeg";
import brandoxel from "../../assets/image/brandoxel-igear.jpeg";
import Button from "./Button";

const brandsData = [
  { 
    name: "Steady Bow", 
    count: "10k+ Followers", 
    image: steadybow, 
    logoimage: steadybowlogo 
  },
  { 
    name: "Ari the Creator", 
    count: "5k subscribers", 
    image: arithecreator, 
    logoimage: arithecreatorlogo 
  },
  { 
    name: "Essetino Media", 
    count: "63k Subscribers", 
    image: essentomedia, 
    logoimage: essetinomedialogo 
  },
  { 
    name: "Brandoxel", 
    count: "2k+ Subscribers", 
    image: daniel, 
    logoimage: brandoxel 
  }
];

export default function Brands({ isDarkMode = true }) {
  return (
    <section className={`w-full py-16 px-4 flex flex-col items-center border-t transition-colors duration-500 font-sans antialiased ${isDarkMode ? "border-white/10 bg-black" : "border-zinc-200 bg-zinc-50"}`}>
      
      <p className="text-[10px] uppercase tracking-[0.3em] mb-12 font-bold text-zinc-500">
        Brands we've worked with
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl">
        {brandsData.map((brand) => (
          <div key={brand.name} className="flex flex-col items-center gap-4 group w-full">
            
            {/* THE IMAGE SQUARE */}
            <div className={`relative w-full aspect-square rounded-2xl md:rounded-3xl overflow-hidden border-2 transition-all duration-300 group-hover:border-[#14b8a6] group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] ${
              isDarkMode ? "border-white/10" : "border-zinc-300"
            }`}>
              
              {/* Main Brand Image */}
              <img 
                src={brand.image} 
                alt={brand.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
              
              {/* Floating Logo Top Right */}
              <div className="absolute top-3 right-3 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/20 shadow-lg flex items-center justify-center z-10 bg-black transform group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                {brand.logoimage ? (
                  <img src={brand.logoimage} alt={`${brand.name} logo`} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-bold text-xs text-white leading-none">{brand.name[0]}</span>
                )}
              </div>
              
              {/* Bottom Shadow Gradient to make the border pop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>
            </div>

            {/* TEXT & PILL BELOW IMAGE */}
            <div className="text-center w-full px-1">
              <div className={`font-bold text-sm md:text-lg mb-2 transition-colors truncate ${
                isDarkMode ? "text-white group-hover:text-[#14b8a6]" : "text-black group-hover:text-[#14b8a6]"
              }`}>
                {brand.name}
              </div>
              
              <div className={`text-[#14b8a6] text-[10px] md:text-xs font-bold border border-[#14b8a6]/40 px-3 py-1.5 rounded-full inline-block transition-all shadow-sm ${
                isDarkMode ? "bg-black group-hover:bg-[#14b8a6]/10" : "bg-white group-hover:bg-[#14b8a6]/10"
              }`}>
                {brand.count}
              </div>
            </div>

          </div>
        ))}
      </div>
      <div className="mt-10 md:mt-12 relative z-20">
        <Button/>
      </div>
    </section>
  );
}