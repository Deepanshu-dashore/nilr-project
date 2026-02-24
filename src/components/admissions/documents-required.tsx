"use client";

import React from "react";
import { admissionsData } from "@/src/data/admissions-data";
import { DocumentCheckIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function DocumentsRequired() {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-wide">
         <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 w-full aspect-square bg-gray-50 border border-gray-100 rounded-[3rem] flex items-center justify-center text-primary/5 italic text-2xl font-heading text-center p-12 relative overflow-hidden group">
               <DocumentCheckIcon className="h-40 w-40 mb-8 opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700" />
               <div className="relative z-10 text-center">
                   <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Checklist</p>
                   <h3 className="text-3xl font-black font-heading text-primary">Verification<br/>Ready?</h3>
               </div>
               
               {/* Decorative Circles */}
               <div className="absolute top-10 right-10 h-20 w-20 rounded-full border border-primary/10" />
               <div className="absolute bottom-10 left-10 h-32 w-32 rounded-full border border-primary/10" />
            </div>
            
            <div className="flex-1 space-y-10 animate-in fade-in slide-in-from-right-8 duration-1000">
               <div>
                   <h2 className="academic-section-title text-left! mx-0!">Essential <span className="text-primary">Documents</span></h2>
                   <p className="academic-section-subtitle text-left! mx-0!">Prerequisites for a smooth admission experience.</p>
               </div>
               
               <p className="text-text-muted text-lg font-medium leading-relaxed">
                 Please ensure you have digital and physical copies of the following documents available.
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                  {admissionsData.documents.map((doc, index) => (
                     <div key={index} className="flex gap-4 items-start group">
                        <div className="h-6 w-6 rounded-md bg-green-50 flex items-center justify-center text-green-600 shrink-0 mt-0.5 group-hover:bg-green-600 group-hover:text-white transition-all">
                           <DocumentCheckIcon className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-bold text-gray-700 leading-snug group-hover:text-primary transition-colors">{doc}</span>
                     </div>
                  ))}
               </div>
               
               <div className="bg-yellow-50 p-6 rounded-2xl border-l-4 border-yellow-500 flex gap-4 items-start">
                  <ExclamationCircleIcon className="h-6 w-6 text-yellow-600 shrink-0 mt-0.5" />
                  <div>
                      <p className="text-xs font-bold text-yellow-700 uppercase tracking-widest mb-1">Important Note</p>
                      <p className="text-sm font-medium text-yellow-800 leading-relaxed">
                        Original documents must be presented at the time of final admission for physical verification.
                      </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
