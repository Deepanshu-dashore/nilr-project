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
    color: "bg-[#4a6741]",   // forest green
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-10 rounded-xl overflow-hidden shadow-md border border-gray-200">
          {programCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white flex flex-col border-r last:border-r-0 border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                {/* Coloured Header */}
                <div className={`${cat.color} text-white flex items-center gap-3 px-5 py-4`}>
                  <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm leading-tight">{cat.label}</span>
                </div>

                {/* Bullet List */}
                <ul className="px-5 py-5 space-y-3 flex-1">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-full ${cat.color} flex items-center justify-center shrink-0`}>
                        <CheckIcon className="w-3 h-3 text-white" />
                      </span>
                      <span className="text-sm text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* PGD-RM Feature Banner */}
        <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 flex flex-col md:flex-row mb-10 bg-white">
          {/* Left: Image */}
          <div className="relative md:w-[40%] min-h-[220px] shrink-0 overflow-hidden">
            <Image
              src="/home/admissions-campus.png"
              alt="Students at NLRI Campus"
              fill
              className="object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Fallback gradient if image missing */}
            {/* <div className="absolute inset-0 bg-linear-to-br from-primary/80 to-primary-dark/90 flex items-center justify-center">
              <AcademicCapIcon className="w-24 h-24 text-white/30" />
            </div> */}
          </div>

          {/* Right: Details */}
          <div className="flex-1 flex flex-col">
            {/* Dark header bar */}
            <div className="bg-[#1e3a5f] text-white px-6 py-4">
              <h3 className="text-lg md:text-xl font-bold">
                Post Graduate Diploma in Rural Management (PGD-RM)
              </h3>
              <p className="text-xs text-white/70 mt-1">AICTE Approved &bull; 2 Years Full-Time &bull; 60 Seats</p>
            </div>

            {/* Feature Grid */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 flex-1">
              {/* Left column – key program details */}
              <ul className="space-y-3">
                {pgdFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#1e3a5f] flex items-center justify-center shrink-0">
                      <CheckIcon className="w-3 h-3 text-white" />
                    </span>
                    <span className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">{f.label}:</span>{" "}
                      {f.value}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Right column – extra benefits */}
              <ul className="space-y-3">
                {pgdExtras.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#4a6741] flex items-center justify-center shrink-0">
                      <CheckIcon className="w-3 h-3 text-white" />
                    </span>
                    <span className="text-sm text-gray-700 font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Now CTA */}
            <div className="px-6 pb-6">
              <button className="px-7 py-2.5 bg-[#1e3a5f] text-white text-sm font-semibold rounded hover:bg-primary transition-colors">
                Apply Now
              </button>
            </div>
          </div>
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
