"use client";

import React from "react";
import { campusData } from "@/src/data/campus-data";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function CampusIntroduction() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Content Side */}
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <h2 className="academic-section-title text-left!">
              {campusData.introduction.title}
            </h2>
            
            <div className="space-y-6 text-lg text-text-muted font-medium leading-relaxed">
              {campusData.introduction.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {campusData.introduction.features.map((feature, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircleIcon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-gray-700 leading-tight">{feature}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xl font-semibold text-primary border-l-4 border-accent pl-6 py-2 mt-8">
              {campusData.introduction.closing}
            </p>
          </div>

          {/* Image Side - Placeholder until real image is provided */}
          <div className="w-full lg:w-5/12 sticky top-24">
             <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                <img 
                  src="/campus-img/campusDron-2.jpeg" 
                  alt="CVRUK NLRI Campus" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                   <span className="text-xs font-bold tracking-widest uppercase opacity-80 mb-2 block">Est. by Gramin Vikas Trust</span>
                   <span className="text-3xl font-heading font-bold">Centre of Excellence</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
