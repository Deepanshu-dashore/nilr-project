"use client";

import React from "react";
import { admissionsData } from "@/src/data/admissions-data";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function AdmissionProcess() {
  return (
    <section id="process" className="section-padding bg-bg-section border-y border-gray-200">
      <div className="container-wide">
        <div className="text-center mb-16 space-y-4">
           <span className="text-secondary font-bold tracking-wider uppercase text-sm block">Step-by-step Guide</span>
           <h2 className="text-3xl md:text-5xl font-black font-heading text-text-dark">
             Admission <span className="text-primary">Process</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden lg:block absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 -z-0 border-t-2 border-dashed border-gray-300" />
           
           {admissionsData.process.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10 group">
                 <div className="h-24 w-24 bg-white rounded-full border-4 border-gray-100 flex items-center justify-center text-primary font-black text-xl shadow-lg mb-6 group-hover:border-accent group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                    {i + 1}
                 </div>
                 <h3 className="text-lg font-black font-heading text-gray-800 mb-3">{step.title}</h3>
                 <p className="text-sm font-medium text-gray-500 leading-relaxed px-4">
                    {step.description}
                 </p>
                 
                 {i === 0 && (
                    <button className="mt-6 px-6 py-2 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-primary-dark transition-all shadow-md hover:shadow-lg">
                       Apply Now
                    </button>
                 )}
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}
