import React from "react";
import Link from "next/link";
import Hero from "@/src/components/shared/hero";
import SharedCtaBanner from "@/src/components/shared/unit-cta-banner";
import {
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  BriefcaseIcon,
  ArrowRightIcon,
  ClockIcon,
  SparklesIcon,
  ChevronRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

interface WorkUnderProgressProps {
  title: string;
  tag?: string;
  description?: string;
  expectedDate?: string;
}

export default function WorkUnderProgress({
  title,
  tag = "MODULE UNDER DEVELOPMENT",
  description = "Our team is actively working on building this section to bring you rich content, media galleries, and interactive features.",
  expectedDate = "Academic Session 2026",
}: WorkUnderProgressProps) {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Admissions-Style Hero Banner */}
      <Hero
        tag={tag}
        title={title}
        subtitle={description}
        tagIcon={WrenchScrewdriverIcon}
      />

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-slate-100/80 border-b border-gray-200/80 py-3.5">
        <div className="container-wide px-4 md:px-8 max-w-6xl mx-auto flex items-center gap-2 text-xs md:text-sm text-gray-500 font-medium tracking-wide">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRightIcon className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-600">{tag}</span>
          <ChevronRightIcon className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-semibold truncate">{title}</span>
        </div>
      </div>

      {/* Main Full-Width Page Content (Clean, No-Card Look) */}
      <main className="flex-1 py-16 md:py-24 bg-linear-to-b from-slate-50 via-white to-slate-50">
        <div className="container-wide px-4 md:px-8 max-w-5xl mx-auto space-y-16">
          
          {/* Status & Progress Section */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            {/* Live Indicator Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs md:text-sm font-bold tracking-wide">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              Module Rollout In Progress • Launch Target: {expectedDate}
            </div>

            {/* Page Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              {title} Page Coming Soon
            </h2>

            {/* Subtext */}
            <p className="text-base md:text-lg text-gray-600 font-normal leading-relaxed">
              We are currently populating comprehensive institutional data, high-resolution photo archives, faculty details, and interactive resources for <strong className="text-gray-900 font-semibold">{title}</strong>.
            </p>

            {/* Progress Checklist / Highlights Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs md:text-sm font-medium text-gray-500">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 border border-gray-200 text-gray-700">
                <SparklesIcon className="w-4 h-4 text-amber-500" /> Content Curation
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 border border-gray-200 text-gray-700">
                <ClockIcon className="w-4 h-4 text-emerald-500" /> Final Review Phase
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 border border-gray-200 text-gray-700">
                <WrenchScrewdriverIcon className="w-4 h-4 text-indigo-500" /> Media Optimization
              </span>
            </div>
          </div>

          {/* Quick Explore Section - Clean Horizontal Grid */}
          <div className="pt-8 border-t border-gray-200/80 space-y-6">
            <div className="text-center space-y-1">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-primary">
                Explore Available Sections
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-medium">
                Navigate to related institutional pages while this module is being updated
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/campus"
                className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BuildingOffice2Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors flex items-center justify-between">
                    Campus & Infrastructure
                    <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    Explore hostel facilities, modern laboratories, library, and Ratlam campus amenities.
                  </p>
                </div>
              </Link>

              <Link
                href="/programs"
                className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <AcademicCapIcon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors flex items-center justify-between">
                    Academic Programs
                    <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    View PG Diploma in Rural Management (PGD-RM), specialized certifications, and curriculum details.
                  </p>
                </div>
              </Link>

              <Link
                href="/placements"
                className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BriefcaseIcon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors flex items-center justify-between">
                    Placements & Career
                    <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    Check placement records, key recruiters, packages, and alumni success statistics.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-md active:scale-95"
            >
              <EnvelopeIcon className="w-4 h-4" />
              Contact Information Desk
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm px-8 py-3.5 rounded-xl transition-all active:scale-95"
            >
              Back to Home Page
            </Link>
          </div>

        </div>
      </main>

      {/* Unified Admissions-Style CTA Banner with Zero Gap to Footer */}
      <SharedCtaBanner
        title={`Have Questions About ${title}?`}
        subtitle="Reach out to our information desk at NIRM Ratlam Campus for assistance, course details, or campus visits."
        primaryBtnText="Contact Helpline"
        primaryBtnHref="/contact"
        secondaryBtnText="Return to Home"
        secondaryBtnHref="/"
      />
    </div>
  );
}
