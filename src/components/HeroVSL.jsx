import React, { useRef, useState } from 'react';
import { Volume2, Play } from 'lucide-react';
import Button from './ui/Button';

export default function HeroVSL() {
  const videoRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleUnmuteAndPlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0; // Restart video from 0 so they hear the hook
      videoRef.current.loop = false;    // Stop looping
      videoRef.current.controls = true; // Show controls
      videoRef.current.play();
      setHasInteracted(true);
    }
  };

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 pt-12 pb-20 flex flex-col items-center text-center z-10">
      
      {/* =======================================================
          THE ENHANCED GLOW (Replacing simple .glow-effect)
      ======================================================= */}
      {/* 1. Large ambient blue center glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      {/* 2. Focused brighter glow behind video area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[400px] bg-blue-500/10 blur-[90px] rounded-full pointer-events-none -z-10"></div>


      {/* --- 1. The Audience Callout Banner --- */}
      <div className="mb-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-lg border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs md:text-sm font-bold uppercase tracking-widest shadow-[0_0_25px_rgba(59,130,246,0.25)] backdrop-blur-md">
        
        {/* The Pulsing Dot */}
        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
        </span>

        {/* The Text */}
        <span className="text-center text- overflow-hidden whitespace-nowrap text-ellipsis">
             Online service based business owners, coaches, & consultants who want High-Ticket Clients, Qualified Calls, & Digital Sales From YouTube. 
        </span>
      </div>

      {/* --- 2. HEADLINE --- */}
     <h1 className="text-xl md:text-4xl font-bold mb-4 tracking-tight text-white max-w-8xl mx-auto">

 Get High-Ticket Clients, Qualified Calls & Digital Sales Using YouTube (Without Worrying About Filming Every Week, Editing, Or Doing SEO).



 

</h1>
      {/* --- 3. Subheadline --- */}
      <p className="text-lg md:text-2xl text-gray-300 font-sans mb-12 max-w-3xl leading-relaxed">
          Watch This Video To See How We Help You Do That 
      </p>

      {/* =======================================================
           THE VIDEO PLAYER (Autoplay Mute -> Click to Sound)
      ======================================================= */}
      <div 
        className="w-full max-w-4xl aspect-video bg-black rounded-2xl border border-blue-500/30 shadow-[0_0_60px_rgba(37,99,235,0.3)] overflow-hidden mb-12 relative z-20 group cursor-pointer"
        onClick={!hasInteracted ? handleUnmuteAndPlay : undefined}
      >
        
        <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline
            controls={hasInteracted} // Only show controls after interaction
        >
            <source src="/public/VSL VIDEO (CAPCUT).mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        {/* --- OVERLAY: CLICK TO UNMUTE --- */}
        {/* Only visible if user hasn't interacted yet */}
        {!hasInteracted && (
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center z-30 transition-all duration-300 group-hover:bg-black/30">
                
                {/* Pulsing Play Button */}
                <div className="relative mb-4">
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            handleUnmuteAndPlay();
                        }}
                        className="relative w-20 h-20 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-transform duration-300 hover:scale-110"
                    >                
                        <Play size={32} fill="currentColor" />
                    </button>
                </div>

                
            </div>
        )}
      </div>

      {/* --- 4. Call to Action --- */}
      <div className="mx-auto flex flex-col items-center gap-4">
        <Button className="">
           &gt;&gt; Book Your Free Strategy Call &lt;&lt;
        </Button>
      </div>

    </section>
  );
}