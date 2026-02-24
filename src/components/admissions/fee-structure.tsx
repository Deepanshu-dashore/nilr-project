"use client";

import React from "react";
import { admissionsData } from "@/src/data/admissions-data";
import { BanknotesIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function FeeStructure() {
  return (
    <section id="fees" className="section-padding bg-main/5 border-y border-gray-200">
      <div className="container-wide">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
               <div className="space-y-4">
                  <h2 className="academic-section-title text-left! mx-0!">
                     Fee <span className="text-primary">Structure</span>
                  </h2>
                  <p className="academic-section-subtitle text-left! mx-0!">
                     Affordable and industry-competitive fee structure designed to be inclusive.
                  </p>
               </div>
               
               <div className="space-y-6">
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                         <BanknotesIcon className="h-24 w-24 text-primary" />
                      </div>
                      <h3 className="text-xl font-black font-heading text-primary mb-2">PGD-RM</h3>
                      <p className="text-gray-600 font-medium text-lg leading-relaxed">
                         {admissionsData.fees.pg}
                      </p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all">
                      <h3 className="text-xl font-black font-heading text-accent mb-2">Certificate & Diploma</h3>
                      <p className="text-gray-600 font-medium text-lg leading-relaxed">
                         {admissionsData.fees.others}
                      </p>
                  </div>
               </div>
            </div>
            
            <div className="bg-linear-to-br from-primary to-primary-dark rounded-[3rem] p-10 md:p-14 text-white relative shadow-2xl skew-x-2 hover:skew-x-0 transition-transform duration-500">
               <div className="relative z-10 text-center space-y-6">
                  <div className="h-20 w-20 bg-white/10 rounded-full flex items-center justify-center mx-auto backdrop-blur-md border border-white/20">
                     <SparklesIcon className="h-10 w-10 text-yellow-300" />
                  </div>
                  <h3 className="text-3xl font-black font-heading">Scholarships Available</h3>
                  <p className="text-white/80 text-lg font-medium leading-relaxed">
                     {admissionsData.fees.scholarship}
                  </p>
                  <div className="pt-6">
                     <span className="inline-block px-6 py-3 bg-white text-primary font-bold rounded-full text-sm uppercase tracking-widest hover:bg-secondary hover:text-white transition-colors cursor-pointer shadow-lg">
                        Check Eligibility
                     </span>
                  </div>
               </div>
               
               {/* Background Pattern */}
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />
            </div>
         </div>
      </div>
    </section>
  );
}
