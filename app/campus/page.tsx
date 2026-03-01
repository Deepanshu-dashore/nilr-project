import Hero from "@/src/components/shared/hero";
import CampusIntroduction from "@/src/components/campus/campus-introduction";
import CampusLocation from "@/src/components/campus/campus-location";
import InfrastructureAcademic from "@/src/components/campus/infrastructure-academic";
import SpecializedLabs from "@/src/components/campus/specialized-labs";
import HostelFacilities from "@/src/components/campus/hostel-facilities";
import KnowledgeResourceCenter from "@/src/components/campus/knowledge-resource-center";
import SportsWellness from "@/src/components/campus/sports-wellness";
import TrainingFarms from "@/src/components/campus/training-farms";
import GreenInitiatives from "@/src/components/campus/green-initiatives";
import CampusAmenities from "@/src/components/campus/campus-amenities";
import { campusData } from "@/src/data/campus-data";

export default function CampusPage() {
  return (
    <div className="flex flex-col bg-white font-sans text-text-main">
      {/* 1. Introduction & Campus Hero Image */}
      <CampusIntroduction />

      {/* 3. Campus Location & Connectivity */}
      <CampusLocation />

      {/* 3. Infrastructure & Academic Facilities (Consolidated 6-card grid) */}
      <InfrastructureAcademic />

      {/* 8. Sports & Wellness */}
      {/* <SportsWellness /> */}

      {/* 4. Sustainability Initiatives (Dark Green Banner) */}
      <GreenInitiatives />

      {/* Closing Statement */}
      <section className="relative py-16 md:py-24 overflow-hidden border-t border-white/5 text-white bg-primary">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/HeaderBg.png')" }}
        />
        <div className="absolute inset-0 z-0 bg-primary/40 mix-blend-multiply" />

        <div className="container-wide text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Simple, Minimalistic Quote */}
            <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed text-white/90 mb-10 tracking-tight">
              "The CVRUK-NLRI campus is not just an academic facility — it’s a hands-on innovation hub where students, professionals, and rural communities collaborate to solve real-world challenges in agriculture, livelihood, and sustainable development"
            </h2>

            <div className="flex justify-center items-center gap-4 opacity-50">
               <div className="h-px bg-white/20 w-12" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                  CVRUK–NLRI Campus
               </span>
               <div className="h-px bg-white/20 w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Safety & Amenities Grid */}
      {/* <CampusAmenities /> */}
    </div>
  );
}
