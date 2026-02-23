"use client";

import React from "react";
import { admissionsData } from "@/src/data/admissions-data";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function WhyChooseData() {
  return (
    <section className="section-padding bg-main relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
           <div className="flex-1 space-y-8">
              <div className="space-y-4">
                 <span className="text-primary font-bold tracking-wider uppercase text-sm block">Why Choose Use</span>
                 <h2 className="text-3xl md:text-5xl font-black font-heading text-text-dark">
                    Why Choose <br/><span className="text-accent">CVRUK-NLRI Campus?</span>
                 </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                 {admissionsData.whyChoose.map((point, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-x-1 duration-300 group">
                       <CheckCircleIcon className="h-6 w-6 text-primary/80 group-hover:text-primary transition-colors" />
                       <span className="font-bold text-gray-700">{point}</span>
                    </div>
                 ))}
              </div>
           </div>
           
           <div className="flex-1 relative">
              <div className="aspect-[4/5] md:aspect-square bg-gray-100 rounded-[3rem] overflow-hidden relative shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700">
                 <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80" alt="Students" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                 <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-bold text-xl">Building Leaders for <br/>Rural Transformation</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
