"use client";

import React from "react";
import { aboutData } from "@/src/data/about-data";
import { GlobeAltIcon, MapIcon } from "@heroicons/react/24/outline";

export default function LearningApproach() {
  return (
    <section className="section-padding bg-bg-section border-y border-border-light relative overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          
          {/* Approach Section */}
          <div className="flex-1 bg-white p-12 lg:p-16 rounded-[3rem] border border-gray-100 shadow-soft group">
            <div className="space-y-12">
              <div className="flex items-center gap-6">
                <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <GlobeAltIcon className="h-8 w-8" />
                </div>
                <h3 className="academic-section-title text-left! mb-0">{aboutData.approach.title}</h3>
              </div>
              
              <p className="text-gray-600 text-lg font-medium leading-relaxed">
                {aboutData.approach.content}
              </p>

              <div className="grid grid-cols-1 gap-6">
                {aboutData.approach.methods.map((method, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl border border-transparent group/item hover:bg-white hover:border-gray-100 hover:shadow-lg transition-all">
                    <div className="text-2xl font-black text-primary/20 group-hover/item:text-primary transition-colors">0{i+1}</div>
                    <span className="text-xs font-black uppercase tracking-widest text-text-dark">{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Campus Section */}
          <div className="flex-1 bg-primary text-white p-12 lg:p-16 rounded-[3rem] shadow-premium relative overflow-hidden group">
            {/* Atmospheric Background overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-1/3 bg-white/5 skew-x-12 translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10 space-y-12 h-full flex flex-col justify-between">
              <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center text-accent shadow-inner border border-white/5">
                    <MapIcon className="h-8 w-8" />
                  </div>
                  <h3 className="academic-section-title text-left! mb-0 text-white">{aboutData.campus.title}</h3>
                </div>
                
                <p className="text-gray-300 text-lg font-medium leading-relaxed italic border-l-2 border-accent pl-6">
                  {aboutData.campus.content}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 pt-4">
                  {aboutData.campus.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 group/item">
                       <div className="h-1.5 w-1.5 rounded-full bg-accent group-hover/item:scale-150 transition-transform" />
                       <span className="text-[11px] font-bold uppercase tracking-widest text-gray-200 group-hover/item:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-12 border-t border-white/10 text-center">
                 <span className="text-[10px] font-black uppercase tracking-[0.6em] text-accent opacity-60">Immersive Residential Learning</span>
              </div>
            </div>

            {/* Glowing orb in background */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-1000" />
          </div>

        </div>
      </div>
    </section>
  );
}
