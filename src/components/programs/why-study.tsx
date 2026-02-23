"use client";

import React from "react";
import { programsData } from "@/src/data/programs-data";
import { StarIcon } from "@heroicons/react/24/solid";

export default function WhyStudy() {
  const { title, points } = programsData.whyStudy;

  return (
    <section id="approach" className="section-padding bg-bg-section border-t border-gray-200">
      <div className="container-wide">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black font-heading text-text-dark">{title}</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {points.map((item, i) => (
               <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group">
                  <div className="h-12 w-12 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-50 group-hover:text-yellow-500 transition-colors">
                     <StarIcon className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-text-main mb-2 leading-tight">{item.title}</h4>
                  <p className="text-xs font-medium text-text-muted leading-relaxed">{item.desc}</p>
               </div>
            ))}
         </div>
         
         <div className="mt-16 bg-blue-50 border border-blue-100 p-8 rounded-2xl text-center max-w-4xl mx-auto">
            <p className="text-sm md:text-base font-medium text-blue-900 leading-relaxed">
               <span className="font-black text-blue-600 block mb-2 uppercase tracking-wide text-xs">Important Information</span>
               {programsData.importantNote}
            </p>
         </div>
         
         <div className="mt-12 text-center">
             <button className="bg-primary hover:bg-primary-dark text-white text-lg font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Apply Now
             </button>
         </div>
      </div>
    </section>
  );
}
