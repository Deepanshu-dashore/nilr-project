"use client";

import React from "react";
import { aboutData } from "@/src/data/about-data";

export default function OrganizationalStructure() {
  return (
    <section id="governance" className="section-padding bg-primary border-y border-white/5 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/HeaderBg.png')" }}
      />
      <div className="absolute inset-0 z-0 bg-primary/50 mix-blend-multiply" />

      {/* Background Decorative Text - Reduced Opacity for dark bg */}
      {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden text-white z-0">
        <span className="text-[20vw] font-black uppercase tracking-tighter whitespace-nowrap -rotate-6">STRUCTURE</span>
      </div> */}

      <div className="container-wide relative z-10">
        <div className="text-center mb-10 max-w-4xl mx-auto space-y-6">
          <h2 className="academic-section-title text-white!">
            Institutional <span className="text-accent font-bold">Ecosystem</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-6" />
          <p className="academic-section-subtitle text-gray-300!">
            A multi-layered structure designed for absolute transparency, academic rigor, and scalable social impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.structure.map((block, index) => (
            <div key={index} className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-500 flex flex-col group h-full backdrop-blur-sm">
              <div className="mb-6">
                <h4 className="font-bold text-white font-heading text-lg mb-4 leading-tight flex items-center gap-3">
                   <div className="h-2 w-2 rounded-full bg-accent group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                   {block.category}
                </h4>
                <div className="h-px bg-white/10 w-full" />
              </div>
              
              <ul className="space-y-4 grow">
                {block.items.map((item, i) => (
                  <li key={i} className="text-[12px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors flex items-start gap-3 leading-relaxed group/item">
                     <span className="h-1.5 w-1.5 rounded-full bg-white/20 mt-1.5 shrink-0 group-hover/item:bg-accent transition-all" />
                     {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
