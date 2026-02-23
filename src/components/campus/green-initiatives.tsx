"use client";

import React from "react";
import { campusData } from "@/src/data/campus-data";
import { SparklesIcon, SunIcon, GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";

export default function GreenInitiatives() {
  return (
    <section id="green" className="section-padding bg-bg-section border-y border-gray-200">
      <div className="container-wide">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="order-2 lg:order-1 space-y-10">
               <div className="space-y-4">
                  <span className="text-secondary font-bold tracking-wider uppercase text-sm block">Sustainability</span>
                  <h2 className="academic-section-title text-left!">Green Campus <br /><span className="text-primary">Philosophy</span></h2>
                  <p className="text-lg text-text-muted font-medium leading-relaxed">
                     {campusData.greenInitiatives.description}
                  </p>
               </div>
               
               <div className="grid grid-cols-1 gap-6">
                  {campusData.greenInitiatives.points.map((item, index) => (
                     <div key={index} className="flex gap-5 items-start p-6 bg-white rounded-2xl border border-gray-100 shadow-sm group hover:border-primary/30 transition-all hover:-translate-x-1">
                        <div className="h-10 w-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all mt-1">
                           <SparklesIcon className="h-5 w-5" />
                        </div>
                        <p className="font-bold text-sm text-gray-700 leading-snug">{item}</p>
                     </div>
                  ))}
               </div>
            </div>

            <div className="order-1 lg:order-2 bg-white p-2 rounded-[3.5rem] shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
               <div className="relative rounded-[3.2rem] overflow-hidden aspect-[4/5] group">
                  <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80" alt="Green Campus" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
                  
                  {/* Floating Eco Badge */}
                  <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/40 max-w-xs">
                     <div className="flex items-center gap-4 mb-3">
                        <SunIcon className="h-8 w-8 text-yellow-500" />
                        <span className="text-xs font-black uppercase tracking-widest text-gray-500">Zero Waste</span>
                     </div>
                     <p className="text-sm font-bold text-gray-800 leading-tight">Solar powered planning & clean energy advocacy.</p>
                  </div>
               </div>
            </div>

         </div>
      </div>
    </section>
  );
}
