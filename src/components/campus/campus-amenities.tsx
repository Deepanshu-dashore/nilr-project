"use client";

import React from "react";
import { campusData } from "@/src/data/campus-data";
import { 
  WifiIcon, 
  ShieldCheckIcon, 
  HeartIcon, 
  BuildingLibraryIcon 
} from "@heroicons/react/24/outline";

export default function CampusAmenities() {
  return (
    <section className="section-padding bg-white pb-32">
      <div className="container-wide">
         <div className="bg-gray-50 border border-gray-100 p-10 lg:p-16 rounded-[2.5rem] shadow-sm">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-8">
               {campusData.safetyAmenities.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center group">
                     <div className="h-20 w-20 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm border border-gray-100 group-hover:shadow-md group-hover:-translate-y-2 transition-all duration-300">
                        {item.includes('Wi-Fi') ? <WifiIcon className="h-8 w-8" /> :
                         item.includes('security') ? <ShieldCheckIcon className="h-8 w-8" /> :
                         item.includes('water') ? <div className="text-xl font-black tracking-tighter">H2O</div> :
                         item.includes('First-aid') ? <HeartIcon className="h-8 w-8" /> :
                         <BuildingLibraryIcon className="h-8 w-8" />}
                     </div>
                     <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500 leading-tight block group-hover:text-primary transition-colors">
                        {item}
                     </span>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </section>
  );
}
