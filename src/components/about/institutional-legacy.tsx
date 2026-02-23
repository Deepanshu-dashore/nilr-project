"use client";

import React from "react";
import { aboutData } from "@/src/data/about-data";
import { BeakerIcon } from "@heroicons/react/24/outline";

export default function InstitutionalLegacy() {
  return (
    <section id="background" className="section-padding bg-gray-50/50">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square bg-white rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden group">
               <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="h-full w-full flex items-center justify-center">
                 <div className="text-center p-12">
                   <div className="h-24 w-24 bg-blue-50 text-primary rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform">
                     <BeakerIcon className="h-12 w-12" />
                   </div>
                   <h4 className="text-2xl font-black text-text-dark mb-4">Bridging Theory & <br /> Practice</h4>
                   <p className="text-gray-500 font-medium">Real-world rural challenges meet academic rigor.</p>
                 </div>
               </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-6 -left-6 grid grid-cols-4 gap-2 opacity-20">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 bg-primary rounded-full" />
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
            <div>
              <h2 className="academic-section-title text-left!">
                {aboutData.legacy.title}
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              {aboutData.legacy.content}
            </p>
            <div className="space-y-4">
              <p className="font-black text-xs uppercase tracking-[0.2em] text-primary">Core Expertise Areas:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aboutData.legacy.focusAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-accent/20 transition-all">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="text-[13px] font-bold text-gray-700 uppercase tracking-wide">{area}</span>
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
