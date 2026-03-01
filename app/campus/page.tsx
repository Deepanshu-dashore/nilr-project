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
      <section className="bg-primary text-white py-16 px-4 md:px-0 text-center">
        <div className="max-w-5xl mx-auto space-y-4">
          <p className="text-lg md:text-xl font-medium leading-relaxed">
           "The CVRUK-NLRI campus is not just an academic facility — it’s a hands-on innovation hub where students, professionals, and rural communities collaborate to solve real-world challenges in agriculture, livelihood, and sustainable development"
          </p>
        </div>
      </section>

      {/* 11. Safety & Amenities Grid */}
      {/* <CampusAmenities /> */}
    </div>
  );
}
