import Hero from "@/src/components/shared/hero";
import AdmissionIntro from "@/src/components/admissions/admission-intro";
import ProgramsOpen from "@/src/components/admissions/programs-open";
import WhyChooseData from "@/src/components/admissions/why-choose-us";
import AdmissionProcess from "@/src/components/admissions/admission-process";
import DocumentsRequired from "@/src/components/admissions/documents-required";
import FeeStructure from "@/src/components/admissions/fee-structure";
import ImportantDates from "@/src/components/admissions/important-dates";
import AdmissionHelp from "@/src/components/admissions/admission-help";
import { admissionsData } from "@/src/data/admissions-data";

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* 1. Hero Section */}
      <Hero 
        tag={admissionsData.hero.tag}
        title={admissionsData.hero.title}
        subtitle={admissionsData.hero.subtitle}
        className="bg-primary text-white"
      />

      {/* 2. Welcome Intro */}
      <AdmissionIntro />

      {/* 3. Programs Open */}
      <ProgramsOpen />

      {/* 4. Why Choose Us */}
      <WhyChooseData />

      {/* 5. Admission Process */}
      <AdmissionProcess />

      {/* 6. Documents Required */}
      <DocumentsRequired />

      {/* 7. Fee Structure */}
      <FeeStructure />

      {/* 8. Important Dates */}
      <ImportantDates />

      {/* 9. Help & Contact (Includes CTA) */}
      {/* <AdmissionHelp /> */}
    </div>
  );
}
