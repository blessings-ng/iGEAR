import React from 'react';
import { Brain, PenTool, MonitorPlay, Image as ImageIcon, Package, Search, ArrowRight, ArrowDown, ArrowLeft } from 'lucide-react';
import Button from './ui/Button';

const OfferSection = () => {
  return (
<section className="w-full py-24 relative overflow-hidden border-t border-white/5 
                    bg-gradient-to-r from-[#050505] via-[#05151a] to-[#050505]">      
      {/* Background Brand Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[800px]  blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* =========================================
            PART 1: THE OFFER GRID
           ========================================= */}

        {/* 1. TOP BADGE */}
        <div className="mb-8 inline-block">
          <div className="px-6 py-2 rounded-full border border-brand-primary/50 bg-brand-primary/10 text-brand-primary text-xs md:text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            Here's Our Offer To You...
          </div>
        </div>

        {/* 2. HEADLINES */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 text-center leading-tight max-w-4xl">
          We'll Run Everything For You... All You Do Is <span className="text-brand-primary">Yap Infront Of a Camera</span> Once-Per-Week
        </h2>
        
        <p className="text-gray-400 text-lg font-medium text-center mb-16">
          We handle everything completely done-for-you...
        </p>

        {/* 3. THE 6-CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
          <OfferCard icon={<Brain size={32} />} colorClass="bg-blue-500" title="Video Ideation">
            We research what's working in your niche, analyze your offers, and map out a full content calendar designed to <span className="text-white underline decoration-white/30 underline-offset-4">attract the exact type of clients you want.</span>
          </OfferCard>

          <OfferCard icon={<PenTool size={32} />} colorClass="bg-emerald-500" title="Video Scripting">
            We ask one thing of you: Record once a week. We make this even simpler by scripting out the entire video for you. <span className="text-white underline decoration-white/30 underline-offset-4">So that you can focus 99% of your time on your business.</span>
          </OfferCard>

          <OfferCard icon={<MonitorPlay size={32} />} colorClass="bg-purple-500" title="Video Editing">
            We handle all editing with a focus on <span className="text-white underline decoration-white/30 underline-offset-4">clarity, retention, and attention to detail.</span> We don't use templates - your style is unique.
          </OfferCard>

          <OfferCard icon={<ImageIcon size={32} />} colorClass="bg-yellow-500" title="Thumbnail Design">
            Most thumbnails look like a Canva template. <span className="text-white underline decoration-white/30 underline-offset-4">Ours are designed to actually get clicked, based on what's trending and proven.</span>
          </OfferCard>

          <OfferCard icon={<Package size={32} />} colorClass="bg-teal-500" title="Video Packaging">
            We handle the boring stuff: titles, descriptions, tags, timestamps, pinned comments, metadata, <span className="text-white underline decoration-white/30 underline-offset-4">all done properly so your video gets discovered.</span>
          </OfferCard>

          <OfferCard icon={<Search size={32} />} colorClass="bg-orange-500" title="Search Engine Optimization">
            YouTube is the second biggest search engine. We make sure your content is optimized to rank for the right keywords - <span className="text-white underline decoration-white/30 underline-offset-4">showing up when your buyers go looking.</span>
          </OfferCard>
        </div>

        {/* 4. MID-SECTION CTA BUTTON */}
        <div className="mb-24">
         <Button>
            &gt;&gt; Get Started Now &lt;&lt;
         </Button>
        </div>


        {/* =========================================
            PART 2: THE SNAKE DIAGRAM (Workflow)
           ========================================= */}
        
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-16 text-center">
          Here's What That Looks Like (If You're Curious)
        </h3>

        {/* The Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8 w-full max-w-4xl relative">

          {/* --- ROW 1 (Left to Right) --- */}
          
          <WorkflowBox 
            text="Onboarding Form" 
            bgColor="bg-white"
            arrow={<ArrowRight className="hidden md:block text-gray-400" size={32} />} 
            mobileArrow={<ArrowDown className="md:hidden text-gray-400" size={24} />}
          />

          <WorkflowBox 
            text="Research + Develop Content Strategy" 
            bgColor="bg-white"
            arrow={<ArrowRight className="hidden md:block text-gray-400" size={32} />} 
            mobileArrow={<ArrowDown className="md:hidden text-gray-400" size={24} />}
          />

          <WorkflowBox 
            text="Present The Strategy on Our Onboarding Call" 
            bgColor="bg-white"
            // Arrow goes DOWN
            arrow={<div className="hidden md:flex absolute -bottom-16 left-1/2 -translate-x-1/2 h-16 w-px border-l-2 border-dashed border-gray-600 items-end justify-center"><ArrowDown className="text-gray-400 translate-y-2 translate-x-[-1px]" size={32} /></div>} 
            mobileArrow={<ArrowDown className="md:hidden text-gray-400" size={24} />}
          />

          {/* --- ROW 2 (Right to Left) --- */}

          {/* Box 4: Write Scripts (Visually Right) */}
          <div className="md:col-start-3 relative flex flex-col items-center">
             <div className="w-48 h-32 bg-[#f0fdf4] rounded-xl flex items-center justify-center text-center p-4 shadow-lg z-10 border border-green-200">
                <span className="text-gray-900 font-bold text-sm">Write 4 Video Scripts</span>
             </div>
             {/* Arrow LEFT */}
             <ArrowLeft className="hidden md:block text-gray-400 absolute -left-10 top-1/2 -translate-y-1/2" size={32} />
             <ArrowDown className="md:hidden text-gray-400 mt-4" size={24} />
          </div>

          {/* Box 5: YOU RECORD (Visually Center) - The "Your Job" Box */}
          <div className="md:col-start-2 relative flex flex-col items-center">
             
             {/* The "Your Job" Annotation */}
             <div className="absolute -top-16 -right-16 md:-right-20 z-20 hidden md:block">
                <p className="text-red-600 font-bold text-xl mb-1 transform rotate-6">Your Job</p>
                {/* CSS Drawn Arrow for "Your Job" */}
                <div className="w-12 h-12 border-b-2 border-r-2 border-red-600 rounded-br-full transform rotate-45 mt-[-10px] ml-4"></div>
             </div>

             {/* The Box */}
             <div className="relative w-48 h-32 bg-[#fff7ed] rounded-xl flex items-center justify-center text-center p-4 shadow-[0_0_40px_rgba(251,146,60,0.4)] z-10 border-2 border-orange-200">
                {/* Red Circle */}
                <div className="absolute -inset-3 border-4 border-red-600 rounded-[50%] opacity-80 pointer-events-none transform -rotate-1"></div>
                <span className="text-gray-900 font-bold text-sm">You Record</span>
             </div>

             {/* Arrow LEFT */}
             <ArrowLeft className="hidden md:block text-gray-400 absolute -left-10 top-1/2 -translate-y-1/2" size={32} />
             <ArrowDown className="md:hidden text-gray-400 mt-4" size={24} />
          </div>

          {/* Box 6: Editing (Visually Left) */}
          <div className="md:col-start-1 relative flex flex-col items-center">
             <div className="w-48 h-32 bg-[#f0fdf4] rounded-xl flex items-center justify-center text-center p-4 shadow-lg z-10 border border-green-200">
                <span className="text-gray-900 font-bold text-sm">Editing</span>
             </div>
             {/* Arrow DOWN */}
             <div className="hidden md:flex absolute -bottom-16 left-1/2 -translate-x-1/2 h-16 w-px border-l-2 border-dashed border-gray-600 items-end justify-center">
                 <ArrowDown className="text-gray-400 translate-y-2 translate-x-[-1px]" size={32} />
             </div>
             <ArrowDown className="md:hidden text-gray-400 mt-4" size={24} />
          </div>

          {/* --- ROW 3 (Left to Right) --- */}

          <div className="relative flex flex-col items-center">
             <div className="w-48 h-32 bg-[#f0fdf4] rounded-xl flex items-center justify-center text-center p-4 shadow-lg z-10 border border-green-200">
                <span className="text-gray-900 font-bold text-sm">Thumbnail</span>
             </div>
             {/* Arrow RIGHT */}
             <ArrowRight className="hidden md:block text-gray-400 absolute -right-10 top-1/2 -translate-y-1/2" size={32} />
             <ArrowDown className="md:hidden text-gray-400 mt-4" size={24} />
          </div>

          <div className="relative flex flex-col items-center">
             <div className="w-48 h-32 bg-[#f0fdf4] rounded-xl flex items-center justify-center text-center p-4 shadow-lg z-10 border border-green-200">
                <span className="text-gray-900 font-bold text-sm">SEO</span>
             </div>
             {/* Arrow RIGHT */}
             <ArrowRight className="hidden md:block text-gray-400 absolute -right-10 top-1/2 -translate-y-1/2" size={32} />
             <ArrowDown className="md:hidden text-gray-400 mt-4" size={24} />
          </div>

          <div className="relative flex flex-col items-center">
             <div className="w-48 h-32 bg-[#f0fdf4] rounded-xl flex items-center justify-center text-center p-4 shadow-lg z-10 border border-green-200">
                <span className="text-gray-900 font-bold text-sm">Post For You</span>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

// ------------------------------------
// SUB-COMPONENTS
// ------------------------------------

function OfferCard({ icon, colorClass, title, children }) {
  return (
    <div className="group border border-white/10 bg-[#080808] p-8 rounded-2xl flex flex-col items-center text-center hover:border-brand-primary/40 transition-all duration-300 hover:-translate-y-1 h-full shadow-lg">
      <div className={`mb-6 w-16 h-16 rounded-xl ${colorClass} bg-opacity-10 flex items-center justify-center border border-white/5 shadow-inner`}>
        <div className={`${colorClass} w-full h-full bg-opacity-20 flex items-center justify-center rounded-xl border border-white/10 group-hover:bg-opacity-30 transition-all`}>
            {React.cloneElement(icon, { className: "text-white opacity-90" })}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
        {children}
      </p>
    </div>
  );
}

function WorkflowBox({ text, bgColor, arrow, mobileArrow }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center relative">
      <div className={`w-48 h-32 ${bgColor} rounded-xl flex items-center justify-center text-center p-4 shadow-lg z-10`}>
        <span className="text-gray-900 font-bold text-sm">{text}</span>
      </div>
      
      {/* Desktop Arrow */}
      <div className="hidden md:block absolute -right-10 z-0">
        {arrow}
      </div>

      {/* Mobile Arrow */}
      <div className="md:hidden mt-4">
        {mobileArrow}
      </div>
    </div>
  );
}

export default OfferSection;