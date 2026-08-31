import React from "react";
import StudentResearch from "@/src/components/research/student-research";
import ResearchOverview from "@/src/components/research/research-overview";
import ResearchStats from "@/src/components/research/research-stats";
import ResearchAreas from "@/src/components/research/research-areas";
import ResearchersServices from "@/src/components/research/researchers-services";
import ResearchPapers from "@/src/components/research/research-papers";
import { BeakerIcon } from "@heroicons/react/24/outline";

import Hero from "@/src/components/shared/hero";

export default function ResearchPage() {
  // Flag to hide header if no laboratory/academic data is present
  const hasContent = true; 

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* 1. Hero Section - Show only if research data exists */}
      {hasContent && (
        <Hero
          tag="RESEARCH & DEVELOPMENT CELL"
          tagIcon={BeakerIcon}
          title="Pioneering Innovations for Rural Transformation"
          subtitle="Driven by a commitment to grassroots development, our research initiatives bridge theoretical knowledge with on-ground realities to build sustainable and thriving communities."
        />
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
