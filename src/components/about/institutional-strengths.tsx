"use client";

import React from "react";
import { aboutData } from "@/src/data/about-data";

export default function InstitutionalStrengths() {
  return (
    <section id="strength" className="section-padding bg-white border-y border-gray-100">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-12">
          <div className="max-w-2xl text-left">
             <h2 className="academic-section-title text-left!">The <span className="text-primary font-bold">NLRI</span> Edge</h2>
             <p className="text-text-muted text-lg font-medium mt-4 leading-relaxed">
               Pillars of academic and field excellence that define our institutional strength.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {aboutData.strengths.map((strength, index) => (
            <div key={index} className="group relative bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start gap-4 h-full border border-gray-100">
               <h3 className="font-bold text-xl text-primary">
                 {/* Assuming strength is a string, for a real title/desc structure we might need data update. 
                     If 'strength' is just a title string: */}
                 {strength.split(" ").slice(0, 2).join(" ")} <span className="text-accent">.</span> 
               </h3>
               <p className="text-gray-600 text-sm leading-relaxed">
                 {strength}
               </p>
               <div className="bg-linear-to-l absolute inset-x-0 bottom-0 from-accent to-primary h-0.5 w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
