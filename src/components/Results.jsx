import React from 'react';

export default function Results() {
  return (
    <section className="bg-brand-card py-24 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Stop Chasing Clients. <br/>Let Them Come To You.
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Inbound leads are the holy grail of agency scaling. Our content systems build trust at scale so prospects are already sold before they hop on a call.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-black/30 border border-white/10">
              <div className="text-3xl font-bold text-blue-500">10M+</div>
              <div className="text-sm text-gray-500">Views Generated</div>
            </div>
            <div className="p-4 rounded-lg bg-black/30 border border-white/10">
              <div className="text-3xl font-bold text-blue-500">2x</div>
              <div className="text-sm text-gray-500">Revenue Increase</div>
            </div>
          </div>
        </div>

        {/* Visual representation of a viral video graph */}
        <div className="relative h-80 bg-black/50 rounded-xl border border-white/10 p-6 flex items-end justify-center gap-2 overflow-hidden">
            {/* Fake Bars */}
            {[40, 60, 35, 50, 80, 65, 90, 100, 85, 95].map((height, i) => (
                <div key={i} 
                     className="w-full bg-blue-600/20 hover:bg-blue-500 transition-all rounded-t-sm" 
                     style={{ height: `${height}%` }}>
                </div>
            ))}
            <div className="absolute top-6 left-6">
                <div className="text-sm text-gray-400">Last 30 Days</div>
                <div className="text-2xl font-bold text-white">+142.5% <span className="text-green-500 text-sm">▲</span></div>
            </div>
        </div>

      </div>
    </section>
  );
}