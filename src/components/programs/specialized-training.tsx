"use client";

import React from "react";
import { programsData } from "@/src/data/programs-data";
import { BoltIcon } from "@heroicons/react/24/solid";

export default function SpecializedTraining() {
  const { title, subtitle, courses } = programsData.specializedTraining;

  return (
    <section id="short-term" className="section-padding bg-white">
      <div className="container-wide">
         <div className="bg-text-main rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-center text-white">
            <div className="relative z-10 max-w-5xl mx-auto">
               <span className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/5 backdrop-blur-sm">
                  {subtitle}
               </span>
               <h2 className="text-3xl md:text-5xl font-black font-heading mb-12 leading-tight">
                  {title}
               </h2>
               
               <div className="flex flex-wrap justify-center gap-4">
                  {courses.map((course, i) => (
                     <div key={i} className="bg-white/10 hover:bg-white hover:text-primary border border-white/10 px-6 py-4 rounded-xl backdrop-blur-md transition-all duration-300 cursor-default group shadow-lg">
                        <p className="font-bold text-sm md:text-base leading-tight flex items-center gap-2">
                           <BoltIcon className="h-4 w-4 text-secondary group-hover:text-secondary opacity-80" />
                           {course}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
            
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none -ml-20 -mb-20" />
         </div>
      </div>
    </section>
  );
}
