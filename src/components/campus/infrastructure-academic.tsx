"use client";

import React from "react";
import { campusData } from "@/src/data/campus-data";
import { 
  BuildingLibraryIcon, 
  UserGroupIcon, 
  ArrowRightIcon,
  MicrophoneIcon,
  VideoCameraIcon
} from "@heroicons/react/24/outline";

export default function InfrastructureAcademic() {
  return (
    <section id="infrastructure" className="section-padding bg-gray-50/50 border-y border-gray-200">
      <div className="container-wide">
         <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-3xl space-y-4">
               <span className="text-secondary font-bold tracking-wider uppercase text-sm block">Academic Ecosystem</span>
               <h2 className="academic-section-title text-left!">Infrastructure & <span className="text-primary">Facilities</span></h2>
               <p className="text-text-muted text-lg font-medium leading-relaxed max-w-2xl">
                 Designed to foster learning, collaboration, and administrative excellence.
               </p>
            </div>
         </div>
         
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Training Centre Card */}
            <div className="lg:col-span-2 bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
               <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="h-14 w-14 bg-gray-50 rounded-xl flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <UserGroupIcon className="h-7 w-7" />
                     </div>
                     <h3 className="text-2xl font-bold font-heading text-gray-800">{campusData.infrastructure.trainingCentre.title}</h3>
                  </div>
                  
                  <p className="text-text-muted text-base mb-8 leading-relaxed font-medium">
                    Accommodates {campusData.infrastructure.trainingCentre.capacity} with advanced facilities.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {campusData.infrastructure.trainingCentre.features.map((feature, i) => (
                        <div key={i} className="flex gap-3">
                           <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                           <span className="text-sm font-semibold text-gray-600 leading-snug">{feature}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Admin Block Card */}
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div>
                   <div className="h-14 w-14 bg-gray-50 rounded-xl flex items-center justify-center text-secondary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <BuildingLibraryIcon className="h-7 w-7" />
                   </div>
                   <h3 className="text-xl font-bold font-heading mb-4 text-gray-800">{campusData.infrastructure.adminAcademic.title}</h3>
                   <ul className="space-y-4">
                      {campusData.infrastructure.adminAcademic.features.map((feature, i) => (
                         <li key={i} className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-start gap-3 border-b border-gray-100 pb-2 last:border-0">
                            {feature}
                         </li>
                      ))}
                   </ul>
                </div>
            </div>

            {/* Auditorium Card */}
            <div className="lg:col-span-3 bg-primary text-white p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
               <div className="relative z-10 max-w-2xl">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">Cultural Hub</span>
                  <h4 className="text-3xl font-bold font-heading mb-4 leading-tight">{campusData.infrastructure.auditorium.title}</h4>
                  <p className="text-white/80 text-base leading-relaxed font-medium">
                     {campusData.infrastructure.auditorium.features.join(" • ")}
                  </p>
               </div>
               <div className="relative z-10 shrink-0">
                  <div className="flex gap-4">
                     <span className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                        <MicrophoneIcon className="h-6 w-6 text-white" />
                     </span>
                     <span className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                        <VideoCameraIcon className="h-6 w-6 text-white" />
                     </span>
                  </div>
               </div>
               
               {/* Decorative Background */}
               <div className="absolute top-0 right-0 h-full w-1/2 bg-white/5 skew-x-12 translate-x-1/2 pointer-events-none" />
            </div>
         </div>
      </div>
    </section>
  );
}
