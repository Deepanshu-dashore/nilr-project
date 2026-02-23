"use client";

import React from "react";
import { campusData } from "@/src/data/campus-data";

export default function KnowledgeResourceCenter() {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-wide">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
               <div className="space-y-4">
                  <span className="text-secondary font-bold tracking-wider uppercase text-sm block">Knowledge Hub</span>
                  <h2 className="academic-section-title text-left!">
                     Institutional <br /><span className="text-primary">Resource Center</span>
                  </h2>
               </div>
               
               <p className="text-text-muted text-lg font-medium leading-relaxed border-l-4 border-primary/20 pl-6 py-2">
                  {campusData.library.collection}
               </p>

               <ul className="space-y-4">
                  {campusData.library.resources.map((res, i) => (
                     <li key={i} className="flex items-center gap-4 text-lg text-gray-700 font-medium">
                        <div className="h-2 w-2 rounded-full bg-secondary" />
                        {res}
                     </li>
                  ))}
               </ul>
               
               <div className="pt-6">
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Key Collections</p>
                  <div className="flex flex-wrap gap-3">
                     {campusData.library.topics.map((subj, i) => (
                        <span key={i} className="px-5 py-2 bg-gray-50 rounded-full text-xs font-bold text-gray-600 border border-gray-200 shadow-sm hover:border-primary hover:text-primary transition-all cursor-default">
                           {subj}
                        </span>
                     ))}
                  </div>
               </div>
            </div>
            
            <div className="w-full aspect-square bg-gray-100 rounded-[3rem] border border-gray-200 shadow-xl flex items-center justify-center overflow-hidden relative group">
               {/* Replace with actual Library Image */}
               <img 
                 src="/campus-img/campusDron-1.jpeg" 
                 alt="Library" 
                 className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
               <div className="absolute bottom-10 left-10 text-white">
                  <span className="text-3xl font-bold font-heading block mb-2">E-Library Portal</span>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80 text-secondary-light">Digital Learning</span>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
