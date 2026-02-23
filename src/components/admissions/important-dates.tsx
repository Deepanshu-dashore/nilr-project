"use client";

import React from "react";
import { admissionsData } from "@/src/data/admissions-data";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

export default function ImportantDates() {
  return (
    <section id="dates" className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16 space-y-4">
           <span className="text-primary font-bold tracking-wider uppercase text-sm block">Timeline</span>
           <h2 className="text-3xl md:text-5xl font-black font-heading text-text-dark">
             Important <span className="text-accent">Dates</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {admissionsData.dates.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 text-center hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                 <div className="absolute top-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 
                 <CalendarDaysIcon className="h-10 w-10 text-gray-400 mx-auto mb-6 group-hover:text-primary transition-colors" />
                 
                 <span className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3 group-hover:text-secondary transition-colors">
                    {item.event}
                 </span>
                 <span className="block text-2xl font-black font-heading text-gray-800 group-hover:text-primary transition-colors">
                    {item.date}
                 </span>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}
