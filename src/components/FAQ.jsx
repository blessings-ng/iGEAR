import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const FAQ = () => {
  // State to track which question is open (null = all closed)
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What exactly do you help with?",
      answer: "We build and scale profitable YouTube channels for business owners. We handle the strategy, scripting, editing, thumbnails, and SEO. You just record the content."
    },
    {
      question: "Why YouTube?",
      answer: "YouTube is the only platform where content lives forever. Unlike Instagram or TikTok where posts die in 24 hours, YouTube videos generate leads for years after posting."
    },
    {
      question: "I'm already seeing good results from other client acquisition methods. Why do I need this?",
      answer: "Diversification. If your main channel gets banned or costs rise, you're stuck. YouTube adds a high-trust, organic inbound channel that works while you sleep."
    },
    {
      question: "How much time will this take me?",
      answer: "About 2 hours per month. We batch script everything, so you just sit down once a week (or once a month) to record. We handle the rest."
    },
    {
      question: "How do I know this will actually work for me?",
      answer: "We don't guess. We use proven frameworks and data-backed topics that are already working in your niche to ensure your videos get traction."
    },
    {
      question: "Do I need to come up with the content ideas myself?",
      answer: "No. We research your niche, analyze competitors, and provide you with a full content calendar of pre-validated video ideas."
    },
    {
      question: "What kind of results can I expect?",
      answer: "While results vary, our goal is to get you qualified sales calls. Typically clients see traction within the first 30-60 days of consistent posting."
    },
    {
      question: "How is this different from hiring a video editor or freelancer?",
      answer: "A freelancer just edits. We are growth partners. We build the strategy, the funnel, the thumbnails, and the SEO to actually drive revenue, not just pretty views."
    },
    {
      question: "Do I need a big audience for this to work?",
      answer: "No. You need the *right* audience. We optimize for search intent, so your videos get found by people actively looking for your solution, regardless of sub count."
    },
    {
      question: "How quickly can we get started?",
      answer: "Immediately. Once you onboard, we start the strategy phase and can have your first scripts ready within 5-7 days."
    },
    {
      question: "What if I've tried YouTube before and it didn't work?",
      answer: "Most people fail because they treat YouTube like a vlog or TV show. We treat it like a search engine and a sales funnel. It's a completely different approach."
    }
  ];

  return (
    <section className="w-full py-24 bg-[#050505] relative overflow-hidden">
      
      {/* Background Glow (Blue to match the border) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* THE MAIN CONTAINER BOX */}
        <div className="w-full border border-blue-600 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 bg-[#080808] relative">
          
          {/* LEFT COLUMN: Title */}
          <div className="w-full md:w-1/3 flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Frequently <br />
              Asked <br />
              Questions
            </h2>
            {/* The small decorative line under the title */}
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          </div>

          {/* RIGHT COLUMN: The Questions */}
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                
                {/* QUESTION BUTTON (Pill Shape) */}
                <button 
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between p-4 px-6 rounded-full border transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-blue-600 border-blue-600 text-white' 
                      : 'border-blue-600 text-gray-300 hover:bg-blue-900/20'
                  }`}
                >
                  <span className="text-sm md:text-base font-bold text-left">
                    {faq.question}
                  </span>
                  
                  {/* Icon */}
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <ChevronDown size={20} className="text-white" />
                    ) : (
                      <ChevronRight size={20} className="text-blue-500 group-hover:text-white transition-colors" />
                    )}
                  </div>
                </button>

                {/* ANSWER DROPDOWN */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4 mb-2 pl-6' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                    {faq.answer}
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;