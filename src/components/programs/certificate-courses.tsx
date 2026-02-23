"use client";

import React from "react";
import { programsData } from "@/src/data/programs-data";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

export default function CertificateCourses() {
  const { title, subtitle, courses } = programsData.certificateCourses;

  return (
    <section id="certificates" className="section-padding bg-gray-50/50 border-y border-gray-200">
      <div className="container-wide">
         <div className="text-center mb-16 space-y-4">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm block">Skill Enhancement</span>
            <h2 className="text-3xl md:text-5xl font-black font-heading text-text-dark">
              {title}
            </h2>
            <p className="text-text-muted text-lg font-medium max-w-2xl mx-auto">
               {subtitle}
            </p>
         </div>
         
         <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-soft bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-primary text-white text-sm font-bold uppercase tracking-widest">
               <div className="p-6 md:col-span-2">Course Name</div>
               <div className="p-6 border-l border-white/10 hidden md:block">Duration</div>
            </div>
            <div className="divide-y divide-gray-100">
               {courses.map((course, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-3 hover:bg-gray-50 transition-colors group">
                     <div className="p-6 md:col-span-2 flex items-start gap-4">
                        <ClipboardDocumentCheckIcon className="h-5 w-5 text-gray-400 mt-0.5 shrink-0 group-hover:text-primary transition-colors" />
                        <span className="font-bold text-text-main group-hover:text-primary transition-colors text-base leading-snug">{course.name}</span>
                     </div>
                     <div className="p-4 md:p-6 pl-14 md:pl-6 border-l-0 md:border-l border-gray-100 flex items-center">
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold uppercase tracking-wider group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                           {course.duration}
                        </span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </section>
  );
}
