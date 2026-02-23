"use client";

import React from "react";
import { campusData } from "@/src/data/campus-data";
import { HomeModernIcon, UserGroupIcon, WifiIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function HostelFacilities() {
  return (
    <section id="hostels" className="section-padding bg-white border-y border-gray-100">
      <div className="container-wide">
         <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl space-y-4">
               <span className="text-secondary font-bold tracking-wider uppercase text-sm block">Residential Living</span>
               <h2 className="academic-section-title text-left!">
                  Campus <span className="text-primary">Life</span>
               </h2>
               <p className="text-text-muted text-lg font-medium leading-relaxed max-w-xl">
                 Two fully residential training blocks offer comfortable, secure, and inclusive accommodation.
               </p>
            </div>
         </div>
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {campusData.hostels.map((hostel, index) => (
               <div key={index} className="bg-gray-50/80 p-8 md:p-10 rounded-3xl border border-gray-100 hover:border-secondary/20 hover:bg-white hover:shadow-premium transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-8">
                     <div className="h-14 w-14 bg-white text-secondary rounded-2xl flex items-center justify-center border border-gray-200 shadow-sm group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all">
                        <HomeModernIcon className="h-7 w-7" />
                     </div>
                     <span className="px-4 py-1.5 bg-white border border-gray-200 text-gray-600 text-[11px] font-bold uppercase tracking-widest rounded-full group-hover:border-secondary group-hover:text-secondary transition-colors">
                        {hostel.capacity}
                     </span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{hostel.type}</span>
                    <h3 className="text-3xl font-bold font-heading text-gray-800 group-hover:text-primary transition-colors">{hostel.name}</h3>
                  </div>
                  
                  <ul className="space-y-4 border-t border-gray-200 pt-8">
                     {hostel.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                           <ShieldCheckIcon className="h-4 w-4 text-secondary/60" /> 
                           {detail}
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
}
