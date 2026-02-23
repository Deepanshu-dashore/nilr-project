"use client";

import React from "react";
import { aboutData } from "@/src/data/about-data";

export default function ClosingStatement() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden border-t border-white/5 text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/HeaderBg.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-primary/40 mix-blend-multiply" />

      <div className="container-wide text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Simple, Minimalistic Quote */}
          <h2 className="text-2xl md:text-4xl font-bold leading-relaxed text-white/90 mb-10 tracking-tight">
            "{aboutData.closing}"
          </h2>

          <div className="flex justify-center items-center gap-4 opacity-50">
             <div className="h-px bg-white/20 w-12" />
             <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                The CVRUK–NLRI Promise
             </span>
             <div className="h-px bg-white/20 w-12" />
          </div>
        </div>
      </div>
    </section>
  );
}
