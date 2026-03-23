"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimony from "../../assets/video/Essetino Testimonial 2.mp4"
import Button from "./Button";

export default function Hero({ isDarkMode = true }) {
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleToggle = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = false;

    if (!hasStarted) {
      video.currentTime = 0;
      video.play().then(() => {
        setHasStarted(true);
        setIsPaused(false);
      }).catch(() => {
        video.muted = true;
        video.play();
      });
    } else {
      if (video.paused) {
        video.play();
        setIsPaused(false);
      } else {
        video.pause();
        setIsPaused(true);
      }
    }
  };

  return (
    <section className="w-full flex flex-col justify-center items-center pt-24 md:pt-32 pb-10 px-4 md:px-10 overflow-hidden transition-colors duration-500">
      
      <div className="text-center mb-8 md:mb-12 w-full mx-auto px-2">
        {/* FIXED: Reduced mobile font size (text-base sm:text-xl) to force a maximum of 2 lines */}
        <h1 className={`text-base sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-black tracking-tight leading-snug md:leading-[1.15] transition-colors duration-500 ${isDarkMode ? "text-white" : "text-black"}`}>
          Congratulations! You Just Found Your<br />
          <span className="italic">YouTube Content Production Team!</span>
        </h1>
      </div>

      <div 
        className="relative w-full max-w-6xl aspect-video mx-auto group cursor-pointer"
        onClick={handleToggle}
      >
        
        {/* === REFINED SUBTLE RED GLOW === */}
        <div className="absolute inset-0 pointer-events-none z-0">
          
          {/* LAYER 1: Core - Softened the opacity and pulled the blur closer to the video */}
          <div className={`absolute -inset-1 md:-inset-2 transition-all duration-500 blur-[15px] md:blur-[25px] rounded-3xl bg-red-600 ${
            hasStarted && !isPaused 
              ? "opacity-60" 
              : "opacity-0 group-hover:opacity-60" 
          }`} />

          {/* LAYER 2: Bloom - Pulled the spread way in, lowered opacity, but kept the organic rounded shape */}
          <div className={`absolute -inset-4 md:-inset-8 transition-all duration-1000 blur-[30px] md:blur-[60px] rounded-[50%] bg-red-600 ${
            hasStarted && !isPaused 
              ? "opacity-30 scale-100" 
              : "opacity-0 group-hover:opacity-40 group-hover:scale-[1.05]" 
          }`} />

        </div>
        {/* =============================== */}

        <div className={`relative z-10 w-full h-full overflow-hidden rounded-2xl border-2 transition-all duration-300 bg-black ${
          hasStarted && !isPaused 
            ? 'border-red-600 shadow-lg shadow-red-600/20' 
            : (isDarkMode ? 'border-white/10' : 'border-zinc-200')
        }`}>
          <video
            ref={videoRef} 
            autoPlay 
            muted 
            loop 
            playsInline
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              hasStarted && !isPaused ? "opacity-100" : "opacity-40"
            }`}
          >
            <source src={testimony} type="video/mp4" />
          </video>

          <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
            hasStarted && !isPaused ? "bg-transparent" : "bg-black/40"
          }`} />

          <div className="relative z-20 flex h-full items-center justify-center pointer-events-none">
            <AnimatePresence>
              {(isPaused || !hasStarted) && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full border border-white/40 bg-black/40 backdrop-blur-sm pointer-events-auto"
                >
                  <svg className="ml-1 h-8 w-8 md:h-10 md:w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-16 relative z-20">
        <Button>Work With Us</Button>
      </div>

    </section>
  );
}