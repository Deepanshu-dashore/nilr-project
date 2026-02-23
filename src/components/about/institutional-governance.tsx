"use client";

import React from "react";
import { aboutData } from "@/src/data/about-data";
import { BuildingLibraryIcon, ChevronRightIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function InstitutionalGovernance() {
  return (
    <section id="governance" className="section-padding bg-white relative overflow-hidden">
      <div className="container-wide px-4">
        {/* Main Content Box */}
        <div className="bg-[#050B20] text-white rounded-[3.5rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl group">
          
          {/* Atmosperic Background */}
          <div className="absolute top-0 right-0 h-full w-1/3 bg-white/5 pointer-events-none skew-x-12 translate-x-1/2 transition-transform duration-1000 group-hover:translate-x-1/3" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 relative z-10">
            
            {/* Column 1: Core Institutional Statement */}
            <div className="lg:col-span-4 lg:border-r border-white/10 lg:pr-16 space-y-12">
              <div className="h-20 w-20 bg-primary/20 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center text-white mb-10 shadow-inner">
                 <BuildingLibraryIcon className="h-10 w-10 text-accent" />
              </div>
              
              <div className="space-y-6 text-left">
                <h2 className="academic-section-title text-left!">
                  Academic <br /> 
                  <span className="text-accent italic font-serif">Governance</span>
                </h2>
                <div className="h-1.5 w-16 bg-accent rounded-full" />
              </div>

              <blockquote className="relative">
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-accent/30 rounded-full" />
                <p className="text-gray-300 leading-relaxed text-xl font-medium italic pl-6 py-2">
                  {aboutData.governance.trust}
                </p>
              </blockquote>
            </div>
            
            {/* Column 2: Academy Oversight */}
            <div className="lg:col-span-4 space-y-12">
               
              <ul className="space-y-6">
                {aboutData.governance.board.map((item, index) => (
                  <li key={index} className="flex gap-6 items-center group/item cursor-default">
                    <div className="h-10 w-10 rounded-xl border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-accent group-hover/item:border-accent group-hover/item:rotate-3 transition-all duration-300">
                      <ChevronRightIcon className="h-4 w-4 text-accent-soft group-hover/item:text-white" />
                    </div>
                    <span className="text-xs font-black uppercase text-white opacity-80 group-hover/item:opacity-100 transition-opacity tracking-widest leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Strategic Principles */}
            <div className="lg:col-span-4 space-y-12">
               
              <div className="grid grid-cols-1 gap-6">
                {aboutData.governance.principles.map((item, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group/principle">
                    <div className="flex gap-5">
                      <ShieldCheckIcon className="h-7 w-7 text-accent shrink-0 group-hover/principle:scale-110 transition-transform" />
                      <span className="text-[11px] font-black uppercase tracking-widest text-gray-300 group-hover/principle:text-white transition-colors leading-relaxed">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
