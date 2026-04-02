import React from "react";
import StudentResearch from "@/src/components/research/student-research";
import ResearchOverview from "@/src/components/research/research-overview";
import ResearchStats from "@/src/components/research/research-stats";
import ResearchAreas from "@/src/components/research/research-areas";
import ResearchersServices from "@/src/components/research/researchers-services";
import ResearchPapers from "@/src/components/research/research-papers";
import { BeakerIcon } from "@heroicons/react/24/outline";

export default function ResearchPage() {
  // Flag to hide header if no laboratory/academic data is present
  const hasContent = true; 

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* 1. Hero Section - Show only if research data exists */}
      {hasContent && (
        <section className="bg-text-dark relative text-white py-12 md:py-20 overflow-hidden shadow-inner border-b border-white/5">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: "url('/HeaderBg.png')" }}
          />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 -skew-x-12 translate-x-24 blur-3xl" />
          
          <div className="container mx-auto px-6 text-center max-w-4xl relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-black/10">
              <BeakerIcon className="w-4 h-4 md:w-5 md:h-5 text-indigo-400" />
              <span className="text-xs md:text-sm font-bold tracking-widest text-indigo-300 uppercase">
                RESEARCH & DEVELOPMENT CELL
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6 tracking-tight">
              Pioneering Innovations for Rural Transformation
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-400 leading-relaxed font-medium">
              Driven by a commitment to grassroots development, our research initiatives bridge theoretical knowledge with on-ground realities to build sustainable and thriving communities.
            </p>
          </div>
        </section>
      )}

      {/* 2. Student & Research Related Best Suitable Gen Content */}
      <StudentResearch />

      {/* 3. Overview Section */}
      <ResearchOverview />

      {/* 4. Stats / State Section */}
      {/* <ResearchStats /> */}

      {/* 5. Research Areas */}
      <ResearchAreas />

      {/* 6. Researchers & Services - Replaces the Research & Development Cell section */}
      {/* <ResearchersServices /> */}

      {/* 7. Research Papers / Publications */}
      <ResearchPapers />
    </div>
  );
}
