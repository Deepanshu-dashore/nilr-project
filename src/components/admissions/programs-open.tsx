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
           <span className="text-secondary font-bold tracking-wider uppercase text-sm block">Academic Offerings</span>
           <h2 className="text-3xl md:text-5xl font-black font-heading text-text-dark">
             Programs <span className="text-primary">Open for Admission</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* PG Program - Featured */}
           <div className="lg:col-span-3 bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden group">
              <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
                 <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                       <AcademicCapIcon className="h-4 w-4" />
                       {admissionsData.programs.pg.title}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black font-heading text-gray-800">
                      {admissionsData.programs.pg.course}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                       <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Duration</span>
                          <span className="block text-lg font-bold text-primary">{admissionsData.programs.pg.details.duration}</span>
                       </div>
                       <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Seats Available</span>
                          <span className="block text-lg font-bold text-accent">{admissionsData.programs.pg.details.seats}</span>
                       </div>
                       <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 md:col-span-2">
                          <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Eligibility</span>
                          <span className="block text-base font-medium text-gray-700">{admissionsData.programs.pg.details.eligibility}</span>
                       </div>
                       <div className="flex items-center gap-2 text-sm font-bold text-gray-500 md:col-span-2">
                          <ClipboardDocumentCheckIcon className="h-5 w-5 text-green-600" />
                          Approved By: {admissionsData.programs.pg.details.approval}
                       </div>
                    </div>
                 </div>
                 
                 {/* Decorative Graphic Side */}
                 <div className="w-full md:w-1/3 aspect-square md:aspect-auto self-stretch bg-linear-to-br from-primary to-primary-dark rounded-3xl flex items-center justify-center relative overflow-hidden p-8 text-center text-white">
                    <div className="relative z-10">
                       <UserGroupIcon className="h-20 w-20 mx-auto mb-4 text-white/50" />
                       <p className="text-xl font-bold">Shape the Future of <br/> Rural India</p>
                    </div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
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
