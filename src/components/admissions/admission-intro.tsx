"use client";

import React from "react";
import { admissionsData } from "@/src/data/admissions-data";

export default function AdmissionIntro() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-4">
            <span className="text-accent font-black tracking-[0.3em] uppercase text-xs block mb-4">
               Start Your Journey
            </span>
            <h2 className="academic-section-title">
              Welcome to CVRUK – NLRI Admissions
            </h2>
            <p className="academic-section-subtitle opacity-80">
              Your gateway to excellence in Rural Management and Sustainable Development.
            </p>
          </div>
          
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-10" />
          
          <div className="space-y-8">
            {admissionsData.intro.description.map((para, index) => (
              <p key={index} className="academic-section-text text-lg! text-gray-700!">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
