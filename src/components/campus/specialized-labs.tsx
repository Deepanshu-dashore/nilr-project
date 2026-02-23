"use client";

import React from "react";
import { campusData } from "@/src/data/campus-data";
import { BeakerIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

export default function SpecializedLabs() {
  return (
    <section id="labs" className="section-padding bg-bg-section">
      <div className="container-wide">
         <div className="text-center mb-16 space-y-4">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm block">Advanced Discovery</span>
            <h2 className="academic-section-title">Specialized <span className="text-primary">Laboratories</span></h2>
            <p className="text-text-muted text-lg font-medium max-w-2xl mx-auto">
              Equipped for advanced research, data analysis, and rural development planning.
            </p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campusData.labs.map((lab, index) => (
               <div key={index} className="flex flex-col p-8 bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex items-start gap-6 mb-6">
                      <div className="h-16 w-16 bg-gray-50 rounded-2xl flex items-center justify-center text-secondary border border-gray-100 group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                        {lab.name.includes('GIS') ? <BeakerIcon className="h-8 w-8" /> : <ComputerDesktopIcon className="h-8 w-8" />}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold font-heading text-gray-800 group-hover:text-primary transition-colors">{lab.name}</h3>
                        <p className="text-sm font-medium text-gray-500 mt-2 leading-relaxed">{lab.description}</p>
                      </div>
                  </div>

                  <div className="pl-0 md:pl-22">
                     <ul className="space-y-3">
                        {(lab.uses || lab.features || []).map((item, i) => (
                           <li key={i} className="text-sm font-semibold text-gray-700 flex items-start gap-3">
                              <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
}
