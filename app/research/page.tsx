import React from "react";
import StudentResearch from "@/src/components/research/student-research";
import ResearchOverview from "@/src/components/research/research-overview";
import ResearchStats from "@/src/components/research/research-stats";
import ResearchAreas from "@/src/components/research/research-areas";
import ResearchersServices from "@/src/components/research/researchers-services";
import ResearchPapers from "@/src/components/research/research-papers";
import { BeakerIcon } from "@heroicons/react/24/outline";

export default function ResearchPage() {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-text-dark relative text-white py-14 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/HeaderBg.png')" }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-32" />
        
        <div className="container-wide px-4 md:px-0 text-center mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
            <BeakerIcon className="w-4 h-4 md:w-5 md:h-5 text-indigo-400 inline-block" />
            <span className="text-xs md:text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              RESEARCH & DEVELOPMENT CELL
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold! leading-tight text-white mb-6">
            Pioneering Innovations for Rural Transformation
          </h1>
          <p className="max-w-3xl mx-auto px-4 md:px-0 text-sm md:text-lg text-gray-300 leading-relaxed text-center">
            Driven by a commitment to grassroots development, our research initiatives bridge theoretical knowledge with on-ground realities to build sustainable and thriving communities.
          </p>
        </div>
      </section>

      {/* 2. Student & Research Related Best Suitable Gen Content */}
      <StudentResearch />

      {/* 3. Overview Section */}
      <ResearchOverview />

      {/* 4. Stats / State Section */}
      <ResearchStats />

      {/* 5. Research Areas */}
      <ResearchAreas />

      {/* 6. Researchers & Services - Replaces the Research & Development Cell section */}
      {/* <ResearchersServices /> */}

      {/* 7. Research Papers / Publications */}
      <ResearchPapers />
    </div>
  );
}
