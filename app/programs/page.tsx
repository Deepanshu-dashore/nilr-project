import Hero from "@/src/components/shared/hero";
import ProgramsIntro from "@/src/components/programs/programs-intro";
import PostGraduateProgram from "@/src/components/programs/pg-program";
import DiplomaPrograms from "@/src/components/programs/diploma-programs";
import CertificateCourses from "@/src/components/programs/certificate-courses";
import SpecializedTraining from "@/src/components/programs/specialized-training";
import WhyStudy from "@/src/components/programs/why-study";
import { programsData } from "@/src/data/programs-data";

export default function ProgramsPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* 1. Hero Section */}
      <Hero 
        tag={programsData.hero.tag}
        title={programsData.hero.title}
        subtitle={programsData.hero.subtitle}
        className="bg-primary text-white"
      />

      {/* 2. Intro Section */}
      <ProgramsIntro />

      {/* 3. PG Program */}
      <PostGraduateProgram />

      {/* 4. Diploma Programs */}
      <DiplomaPrograms />

      {/* 5. Certificate Courses */}
      <CertificateCourses />

      {/* 6. Specialized Training */}
      <SpecializedTraining />

      {/* 7. Why Study Here & Final CTA */}
      <WhyStudy />
    </div>
  );
}
