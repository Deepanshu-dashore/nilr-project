"use client";

import React from "react";
import { campusData } from "@/src/data/campus-data";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function TrainingFarms() {
  return (
    <section className="py-20 bg-white">
       <div className="container-wide">
          <div className="bg-primary rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl group cursor-pointer">
             <div className="relative z-10 flex flex-col items-center">
                <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 border border-white/20">
                  {campusData.farms.title}
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black font-heading mb-4 leading-tight tracking-tight">
                   {campusData.farms.subtitle}
                </h2>
                
                <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-8">
                   {campusData.farms.description}
                </p>
                
                <button className="bg-white text-primary hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3">
                   Explore Innovations <ArrowRightIcon className="h-5 w-5" />
                </button>
             </div>
             
             {/* Abstract Background pattern */}
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
             <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.3),transparent)] pointer-events-none" />
             
             {/* Subtle animated grain or overlay */}
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
          </div>
       </div>
    </section>
  );
}
