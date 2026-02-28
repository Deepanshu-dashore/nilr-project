import Hero from "@/src/components/shared/hero";
import InstitutionalOverview from "@/src/components/about/institutional-overview";
import InstitutionalLegacy from "@/src/components/about/institutional-legacy";
import JourneyImpact from "@/src/components/about/journey-impact";
import VisionMission from "@/src/components/about/vision-mission";
import CollaborationSRM from "@/src/components/about/collaboration-srm";
import OrganizationalStructure from "@/src/components/about/organizational-structure";
import InstitutionalGovernance from "@/src/components/about/institutional-governance";
import LearningApproach from "@/src/components/about/learning-approach";
import InstitutionalStrengths from "@/src/components/about/institutional-strengths";
import ClosingStatement from "@/src/components/about/closing-statement";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* 🏛️ Main Page Title / Banner */}
      <Hero 
        tag="ABOUT US" 
        title="CVRU Khandwa – NLRI Ratlam Campus" 
      />

      {/* 1. About the Institution (Overview) */}
      <InstitutionalOverview />

      {/* 3 & 4. Vision & Mission */}
      <VisionMission />

      {/* Extra: Impact Footprint (Stats & Timeline) */}
      <JourneyImpact />
      <InstitutionalStrengths />
      <OrganizationalStructure />

      {/* 2. Institutional Legacy & Background */}
      {/* <InstitutionalLegacy /> */}

      {/* 5 & 6. Academic Collaboration & School of Rural Management (SRM) */}
      {/* <CollaborationSRM /> */}

      {/* Governance & Leadership Structure */}
      <InstitutionalGovernance />

      {/* 7 & 8. Campus, Learning Environment & Approach to Development */}
      {/* <LearningApproach /> */}

      {/* 9. Institutional Strengths */}

      {/* 10. Commitment to Rural Development (Closing) */}
      <ClosingStatement />
    </div>
  );
}
