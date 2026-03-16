"use client";

import {
  AcademicCapIcon,
  CheckIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const programCategories = [
  {
    icon: AcademicCapIcon,
    label: "Postgraduate Program",
    color: "bg-primary",   // forest green
    description: "A comprehensive 2-year postgraduate diploma designed to build strong leadership and management skills for rural development and allied sectors.",
    link: "/programs#postgraduate",
    items: [
      "PGD in Rural Management",
      "2 Years | AICTE Approved",
      "100% Placement Support",
    ],
  },
  {
    icon: DocumentTextIcon,
    label: "Diploma Programs",
    color: "bg-[#c47c2b]",   // amber
    description: "1-year skill-based diploma courses focusing on practical knowledge in areas like organic farming and community development.",
    link: "/programs#diploma",
    items: [
      "Organic Farming",
      "Community Development",
      "1 Year Skill-Based Courses",
    ],
  },
  {
    icon: SparklesIcon,
    label: "Certificate Courses",
    color: "bg-[#2b6b8a]",   // steel blue
    description: "Short-term 3-month specialized certification programs aimed at quick skill acquisition and career advancement.",
    link: "/programs#certificate",
    items: [
      "3 Month Short-Term",
      "14 Specialized Programs",
      "Career Advancement",
    ],
  },
  {
    icon: WrenchScrewdriverIcon,
    label: "Specialized Training",
    color: "bg-[#4a6741]",   // forest green (same as first)
    description: "Focused training modules on watershed management, FPOs, and climate resilience for targeted professional growth.",
    link: "/programs#training",
    items: [
      "Watershed & FPO",
      "Agri-Business Courses",
      "Climate & Livelihood",
    ],
  },
];

const pgdFeatures = [
  { label: "Duration", value: "2 Years (Full-Time Residential)" },
  { label: "Eligibility", value: "Graduate (50% | 45% SC/ST)" },
  { label: "Approved By", value: "AICTE, New Delhi" },
  { label: "Total Seats", value: "60 Seats Available" },
];
const pgdExtras = [
  "Fieldwork & Internships",
  "Community Projects",
  "Dissertation & Industry Exposure",
  "100% Placement Support",
];

export default function Admissions() {
  return (
    <section
      className="section-padding bg-amber-50/80 relative overflow-hidden"
      id="admissions"
    >
      <div className="container-wide relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text-dark mb-3 leading-snug">
            <span className="text-primary">Academic &amp; Skill Development Programs</span>{" "}
            at CVRU Khandwa &ndash; NLRI Campus
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            We deliver academically strong and field-oriented programs designed to build leadership,
            and rural development skills.
          </p>
        </div>

        {/* Four Program Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-0 mb-10 rounded-2xl overflow-hidden shadow-premium border border-gray-100 bg-gray-100 md:bg-white">
          {programCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                href={cat.link}
                key={idx}
                className="bg-white flex flex-col border-b last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                {/* Coloured Header / Entire Card */}
                <div className={`${cat.color} text-white flex flex-col justify-center items-center text-center gap-3 px-4 py-8 md:py-10 h-full relative z-10 transition-transform duration-300 group-hover:scale-[1.02]`}>
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-sm md:text-base leading-tight tracking-wide">{cat.label}</span>
                  {/* <div className="flex items-center gap-2 mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs uppercase tracking-wider font-semibold">Explore</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div> */}
                </div>
                {/* Background overlay on hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20" />
              </Link>
            );
          })}
        </div>

        {/* View All Courses CTA */}
        <div className="flex justify-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary hover:text-primary hover:bg-white font-bold text-sm bg-primary text-white transition-all duration-200 shadow-sm"
          >
            View All Courses
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
