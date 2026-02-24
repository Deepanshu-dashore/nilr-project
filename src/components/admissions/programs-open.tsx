"use client";

import React from "react";
import { admissionsData } from "@/src/data/admissions-data";
import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  ClipboardDocumentCheckIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

export default function ProgramsOpen() {
  return (
    <section id="eligibility" className="section-padding bg-gray-50/50 border-y border-gray-200">
      <div className="container-wide">
        <div className="text-center mb-16 space-y-4">
           <h2 className="academic-section-title">
             Programs <span className="text-primary">Open for Admission</span>
           </h2>
           <p className="academic-section-subtitle">
             Explore our diverse range of AICTE-approved academic offerings.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* PG Program - Featured */}
           <div className="lg:col-span-3 bg-white p-6 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden group">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                 <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                       <AcademicCapIcon className="h-4 w-4" />
                       {admissionsData.programs.pg.title}
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-4xl font-black font-heading text-text-dark leading-tight">
                        {admissionsData.programs.pg.course}
                      </h3>
                      <div className="h-1 w-20 bg-accent/20 rounded-full" />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                       <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 group-hover:bg-white group-hover:shadow-sm transition-all">
                          <span className="block text-[9px] font-black text-text-muted uppercase tracking-widest mb-1">Duration</span>
                          <span className="block text-lg font-bold text-primary">{admissionsData.programs.pg.details.duration}</span>
                       </div>
                       <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 group-hover:bg-white group-hover:shadow-sm transition-all">
                          <span className="block text-[9px] font-black text-text-muted uppercase tracking-widest mb-1">Annual Intake</span>
                          <span className="block text-lg font-bold text-accent">{admissionsData.programs.pg.details.seats} Seats</span>
                       </div>
                       <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 sm:col-span-2 group-hover:bg-white group-hover:shadow-sm transition-all">
                          <span className="block text-[9px] font-black text-text-muted uppercase tracking-widest mb-1">Eligibility Criteria</span>
                          <span className="block text-base font-semibold text-text-main leading-snug">{admissionsData.programs.pg.details.eligibility}</span>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-green-50/50 rounded-xl border border-green-100/50 w-fit">
                       <ClipboardDocumentCheckIcon className="h-6 w-6 text-green-600" />
                       <span className="text-sm font-bold text-gray-600">
                          Approved By: <span className="text-green-700 uppercase tracking-wide">{admissionsData.programs.pg.details.approval}</span>
                       </span>
                    </div>
                 </div>
                 
                 <div className="lg:col-span-5 h-full min-h-[300px]">
                    <div className="h-full bg-linear-to-br from-primary via-primary-dark to-primary rounded-4xl flex flex-col items-center justify-center relative overflow-hidden p-6 text-center text-white shadow-inner">
                       <div className="relative z-10 flex flex-col items-center gap-4">
                          <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                             <UserGroupIcon className="h-8 w-8 text-white" />
                          </div>
                          <div className="space-y-1">
                             <p className="text-xl font-black font-heading leading-tight italic">Shape the Future of <br/> Rural India</p>
                             <div className="h-0.5 w-10 bg-accent mx-auto rounded-full" />
                          </div>
                          <p className="text-white/60 text-xs font-medium max-w-[200px]">
                             Join a legacy of excellence in sustainable rural development.
                          </p>
                          <button className="mt-2 px-6 py-3 bg-white text-primary font-bold text-xs uppercase tracking-widest rounded-full hover:bg-accent hover:text-white transition-all transform hover:scale-105 shadow-xl">
                             Apply Now
                          </button>
                       </div>
                       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                       {/* Decorative Light Glows */}
                       <div className="absolute -top-20 -right-20 h-64 w-64 bg-accent/20 rounded-full blur-3xl" />
                       <div className="absolute -bottom-20 -left-20 h-64 w-64 bg-primary-dark/40 rounded-full blur-3xl" />
                    </div>
                 </div>
              </div>
           </div>

           {/* Diploma Programs */}
           <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                 <BookOpenIcon className="h-4 w-4" />
                 1 Year
              </div>
              <h3 className="text-2xl font-black font-heading text-gray-800 mb-6">{admissionsData.programs.diploma.title}</h3>
              <ul className="space-y-4">
                 {admissionsData.programs.diploma.courses.map((course, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-semibold text-gray-600 group-hover:text-primary transition-colors">
                       <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                       {course}
                    </li>
                 ))}
              </ul>
           </div>

           {/* Certificate Courses */}
           <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                 <ClipboardDocumentCheckIcon className="h-4 w-4" />
                 3 Months
              </div>
              <h3 className="text-2xl font-black font-heading text-gray-800 mb-6">{admissionsData.programs.certificate.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                 {admissionsData.programs.certificate.courses.map((course, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-semibold text-gray-600 group-hover:text-primary transition-colors list-none">
                       <div className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                       {course}
                    </li>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
