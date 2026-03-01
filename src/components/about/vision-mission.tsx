"use client";

import React from "react";
import { aboutData } from "@/src/data/about-data";

export default function VisionMission() {
  return (
    <section id="vision" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start">
          
          {/* Left Column: Vision */}
          <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
            <div className="flex items-center gap-3">
              <div className="h-6 w-1 bg-accent rounded-full" />
              <h4 className="text-gray-500 font-bold text-base md:text-lg uppercase tracking-widest">Vision</h4>
            </div>
            <div className="space-y-6">
              <p className="text-primary text-2xl md:text-[1.8rem] font-extrabold leading-tight tracking-tight">
                {aboutData.visionMission.vision}
              </p>
              <div className="h-1 w-32 md:w-64 bg-accent/20 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-accent" />
              </div>
            </div>
          </div>

          {/* Right Column: Mission */}
          <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-right-4 duration-1000 delay-200">
            <div className="flex items-center gap-3">
              <div className="h-6 w-1 bg-primary rounded-full" />
              <h4 className="text-gray-500 font-bold text-base md:text-lg uppercase tracking-widest">Mission</h4>
            </div>
            <ul className="space-y-5 md:space-y-6">
              {aboutData.visionMission.mission.map((item, index) => (
                <li key={index} className="flex gap-4 items-start group">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2.5 shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
