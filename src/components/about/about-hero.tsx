"use client";

import React from "react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-32 pb-24 overflow-hidden bg-[#050B20] text-white">
      <div className="container-wide px-4 relative z-20">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="h-1.5 w-24 bg-[#F3BE34] mb-10" />
          <h1 className="text-5xl md:text-8xl font-black font-heading mb-8 tracking-tighter leading-tight">
            About <span className="text-primary italic font-serif serif-italic">CVRUK–NLRI</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl opacity-90 transition-all duration-700 delay-300">
            A unique synergy of academic excellence and grassroots transformation, building leaders for the rural landscape.
          </p>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 h-full w-1/3 bg-white/5 skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,102,204,0.15),transparent)] opacity-40" />
      
      {/* Floating accent shapes */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
    </section>
  );
}
