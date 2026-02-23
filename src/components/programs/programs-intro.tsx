"use client";

import React from "react";
import { programsData } from "@/src/data/programs-data";

export default function ProgramsIntro() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-4">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs block">
               Academic Overview
            </span>
            <h2 className="academic-section-title">
              {programsData.intro.title}
            </h2>
          </div>
          
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
          
          <p className="academic-section-text">
            {programsData.intro.description}
          </p>
        </div>
      </div>
    </section>
  );
}
