import React from 'react';

export default function StudentResearch() {
  return (
    <section className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/research/reasearchHero.png" 
          alt="Student Research in Lab" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Right-aligned dark blue overlay block */}
      <div className="absolute right-0 top-0 bottom-0 w-full bg-linear-to-r from-[#1c355e]/10 to-[#1c355e] z-10 clip-path-slant flex items-center justify-end pr-6 lg:pr-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug tracking-wide uppercase mb-4">
            BREAKING BOUNDARIES,<br />
            ELEVATING RESEARCH CULTURE
          </h2>
          <div className="w-16 h-1 bg-white mb-6"></div>
          <p className="text-white/90 text-sm md:text-base font-normal max-w-md leading-relaxed">
            Empowering students and faculty to drive impactful discoveries and sustainable innovations for the rural landscape and beyond.
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          .clip-path-slant {
            clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
          }
        }
      `}} />
    </section>
  );
}
