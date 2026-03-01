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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-0 mb-10 rounded-2xl overflow-hidden shadow-premium border border-gray-100 bg-gray-100 md:bg-white">
          {programCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white flex flex-col border-b last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Coloured Header */}
                <div className={`${cat.color} text-white flex items-center gap-3 px-6 py-4`}>
                  <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm leading-tight tracking-wide">{cat.label}</span>
                </div>

                {/* Bullet List */}
                <ul className="px-6 py-6 space-y-3.5 flex-1">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-full ${cat.color} flex items-center justify-center shrink-0`}>
                        <CheckIcon className="w-3 h-3 text-white" />
                      </span>
                      <span className="text-xs md:text-sm text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* PGD-RM Feature Banner */}
        <div className="rounded-2xl overflow-hidden shadow-premium border border-gray-100 flex flex-col md:flex-row mb-12 bg-white">
          {/* Left: Image */}
          <div className="relative w-full md:w-[40%] h-[240px] md:h-auto shrink-0 overflow-hidden">
            <Image
              src="/home/admissions-campus.png"
              alt="Students at NLRI Campus"
              fill
              className="object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>

          {/* Right: Details */}
          <div className="flex-1 flex flex-col">
            {/* Dark header bar */}
            <div className="bg-primary text-white px-6 md:px-8 py-5">
              <h3 className="text-lg md:text-xl font-bold leading-tight">
                Post Graduate Diploma in Rural Management (PGD-RM)
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                <span className="text-[10px] md:text-xs text-white/80 uppercase tracking-widest font-semibold flex items-center gap-1.5 border-r border-white/20 pr-4">AICTE Approved</span>
                <span className="text-[10px] md:text-xs text-white/80 uppercase tracking-widest font-semibold flex items-center gap-1.5 border-r border-white/20 pr-4">2 Years Full-Time</span>
                <span className="text-[10px] md:text-xs text-white/80 uppercase tracking-widest font-semibold">60 Seats Available</span>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 flex-1 bg-white">
              {/* Left column – key program details */}
              <ul className="space-y-4">
                {pgdFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-xs md:text-sm text-gray-700">
                      <span className="font-bold text-gray-900">{f.label}:</span>{" "}
                      {f.value}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Right column – extra benefits */}
              <ul className="space-y-4">
                {pgdExtras.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon className="w-3 h-3 text-green-600" />
                    </span>
                    <span className="text-xs md:text-sm text-gray-700 font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Now CTA */}
            <div className="px-6 md:px-8 pb-8">
              <button className="w-full sm:w-auto px-8 py-3 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-all shadow-md hover:shadow-lg active:scale-95">
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
