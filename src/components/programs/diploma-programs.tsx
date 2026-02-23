"use client";

import React from "react";
import { programsData } from "@/src/data/programs-data";
import { BookOpenIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function DiplomaPrograms() {
  const { title, courses, focusAreas } = programsData.diplomaPrograms;

  return (
    <section id="diplomas" className="section-padding bg-white">
      <div className="container-wide">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 order-2 lg:order-1">
               <div>
                  <span className="text-accent font-bold tracking-wider uppercase text-sm block mb-4">Undergraduate & Specialization</span>
                  <h2 className="text-3xl md:text-5xl font-black font-heading text-text-dark">{title}</h2>
               </div>
               
               <div className="bg-linear-to-br from-primary to-primary-dark p-8 md:p-10 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden group">
                  <div className="relative z-10 space-y-6">
                     <h3 className="text-xl font-bold font-heading uppercase tracking-widest opacity-90 border-b border-white/20 pb-4">Focus Areas</h3>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {focusAreas.map((area, i) => (
                           <li key={i} className="flex items-start gap-3 text-sm font-semibold">
                              <SparklesIcon className="h-5 w-5 text-yellow-400 shrink-0" />
                              {area}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
               </div>
            </div>
            
            <div className="order-1 lg:order-2 grid gap-6">
                {courses.map((course, i) => (
                   <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                      <div className="flex items-center gap-4 mb-2">
                         <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                            <BookOpenIcon className="h-6 w-6" />
                         </div>
                         <h3 className="text-xl font-bold font-heading text-text-main">{course}</h3>
                      </div>
                   </div>
                ))}
            </div>
         </div>
      </div>
    </section>
  );
}
