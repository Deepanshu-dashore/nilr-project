"use client";

import React from "react";
import { campusData } from "@/src/data/campus-data";
import { TrophyIcon, UserGroupIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function SportsWellness() {
  return (
    <section className="section-padding bg-gray-50/50 border-y border-gray-200">
      <div className="container-wide">
         <div className="text-center mb-16 space-y-4">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm block">Physical Intelligence</span>
            <h2 className="academic-section-title">Sports & <span className="text-primary">Wellness</span></h2>
            <p className="text-text-muted text-lg font-medium max-w-2xl mx-auto">
              Fostering teamwork, competitive spirit, and holistic health through professional-grade sporting arenas.
            </p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campusData.sports.map((sport, index) => (
               <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col items-center text-center">
                  <div className="h-16 w-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center text-secondary mb-6 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white transition-all shadow-inner">
                     {sport.icon === 'trophy' && <TrophyIcon className="h-8 w-8" />}
                     {sport.icon === 'user-group' && <UserGroupIcon className="h-8 w-8" />}
                     {sport.icon === 'sparkles' && <SparklesIcon className="h-8 w-8" />}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-gray-800 mb-2">{sport.name}</h3>
                  <p className="font-medium text-sm text-gray-500 block leading-normal">
                    {sport.size || sport.details}
                  </p>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
}
