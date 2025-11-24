import React from "react";

export default function VSLSection({ videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ" }) {
  return (
    <section className="py-16 bg-[--color-brand-navy] text-white">
      <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="h2">Watch How It Works</h2>
          <p className="mt-4 text-white/90">A short walkthrough on how we build your sales pipeline using YouTube content.</p>

          <div className="mt-6">
            <a href="#apply-form" className="inline-block px-6 py-3 bg-[--color-brand-orange] rounded-md font-semibold text-[--color-brand-navy]">
              Apply to Join
            </a>
          </div>
        </div>

        <div className="w-full">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              title="explainervideo"
              src={videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg border-4 border-[--color-brand-teal]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
