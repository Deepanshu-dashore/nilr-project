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
      {/* 1. Hero Section */}
      <Hero 
        tag="OUR CAMPUS" 
        title={campusData.introduction.title} 
      />

      {/* 2. Introduction */}
      <CampusIntroduction />

      {/* 3. Campus Location & Connectivity */}
      <CampusLocation />

      {/* 4. Infrastructure & Academic Facilities */}
      <InfrastructureAcademic />

      {/* 5. Laboratories & Learning Spaces */}
      <SpecializedLabs />

      {/* 6. Hostel & Residential Facilities */}
      <HostelFacilities />

      {/* 7. Knowledge Hub & Library */}
      <KnowledgeResourceCenter />

      {/* 8. Sports & Wellness */}
      {/* <SportsWellness /> */}

      {/* 9. Training Farms & Pedagogy */}
      <TrainingFarms />

      {/* 10. Sustainability Initiatives */}
      <GreenInitiatives />

      {/* 11. Safety & Amenities Grid */}
      {/* <CampusAmenities /> */}
    </div>
  );
}
