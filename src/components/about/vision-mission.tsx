"use client";

import React from "react";
import { aboutData } from "@/src/data/about-data";

export default function VisionMission() {
  return (
    <section id="vision" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          
          {/* Left Column: Vision */}
          <div className="space-y-8">
            <h4 className="text-gray-500 font-bold text-lg">Vision</h4>
            <div className="space-y-6">
              <p className="text-primary text-3xl md:text-[1.7rem] font-bold leading-tight tracking-tight">
                {aboutData.visionMission.vision}
              </p>
              <div className="h-1 w-64 bg-accent rounded-full" />
            </div>
          </div>

          {/* Right Column: Mission */}
          <div className="space-y-8">
            <h4 className="text-gray-500 font-bold text-lg">Mission</h4>
            <ul className="space-y-6">
              {aboutData.visionMission.mission.map((item, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2.5 shrink-0" />
                  <p className="text-gray-600 text-lg leading-relaxed">
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
