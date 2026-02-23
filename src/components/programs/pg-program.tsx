"use client";

import React from "react";
import { programsData } from "@/src/data/programs-data";
import { AcademicCapIcon, CheckBadgeIcon, BuildingOffice2Icon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function PostGraduateProgram() {
  const { title, course, type, eligibility, approval, intake, highlights } = programsData.pgProgram;

  return (
    <section className="section-padding bg-gray-50/50 border-y border-gray-200">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
           {/* Card Content */}
           <div className="flex-1 bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden group">
               <div className="relative z-10 space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                       <AcademicCapIcon className="h-4 w-4" />
                       {title}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black font-heading text-text-dark leading-tight">
                      {course}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                        <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Duration</span>
                        <span className="font-bold text-lg text-primary">{type}</span>
                     </div>
                     <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                        <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Intake</span>
                        <span className="font-bold text-lg text-accent">{intake}</span>
                     </div>
                     <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 md:col-span-2">
                        <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Eligibility</span>
                        <span className="font-medium text-text-main">{eligibility}</span>
                     </div>
                     <div className="flex items-center gap-2 pt-2 md:col-span-2">
                         <CheckBadgeIcon className="h-6 w-6 text-green-600 shrink-0" />
                         <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Approval: {approval}</span>
                     </div>
                  </div>
               </div>
           </div>
           
           {/* Highlights */}
           <div className="flex-1 flex flex-col justify-center space-y-8">
               <h3 className="text-2xl font-black font-heading text-text-dark">Program Highlights</h3>
               <div className="space-y-6">
                  {highlights.map((point, i) => (
                     <div key={i} className="flex gap-4 items-start group">
                        <div className="h-10 w-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-secondary shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                           {i === 0 ? <AcademicCapIcon className="h-5 w-5" /> : 
                            i === 1 ? <BuildingOffice2Icon className="h-5 w-5" /> :
                            i === 2 ? <UserGroupIcon className="h-5 w-5" /> :
                            <CheckBadgeIcon className="h-5 w-5" />}
                        </div>
                        <p className="text-lg font-medium text-text-muted pt-1 leading-relaxed decoration-primary/30 group-hover:text-primary transition-colors">
                           {point}
                        </p>
                     </div>
                  ))}
               </div>
           </div>
        </div>
      </div>
    </section>
  );
}
