import React from "react";
import Link from "next/link";
import { SpecializedUnitData } from "@/src/data/specialized-units-data";
import PortraitFeatureCard from "./portrait-feature-card";
import SharedCtaBanner from "@/src/components/shared/unit-cta-banner";
import {
  CheckIcon,
  ShieldCheckIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

interface UnitDetailViewProps {
  unit: SpecializedUnitData;
}

export default function UnitDetailView({ unit }: UnitDetailViewProps) {
  return (
    <div className="bg-slate-50 space-y-16 md:space-y-24 pb-0">
      
      {/* ── Key Statistics & Affiliation Ribbon (White Theme - Balanced Size) ── */}
      <section className="bg-white text-gray-900 py-6 md:py-8 border-b border-gray-200/80 shadow-xs relative overflow-hidden">
        <div className="container-wide px-4 md:px-8 relative z-10 space-y-5">
          
          {unit.affiliation && (
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 text-xs md:text-sm font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-4 py-1.5 rounded-full shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>{unit.affiliation}</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {unit.stats.map((st, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 border border-gray-200/80 p-4 md:p-5 rounded-2xl flex items-center gap-4 hover:bg-white hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="text-2xl md:text-3xl font-black text-primary shrink-0 tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {st.value}
                </div>
                <div className="min-w-0 flex-1 space-y-0.5">
                  <p className="text-xs md:text-sm font-extrabold text-gray-900 leading-snug">
                    {st.label}
                  </p>
                  {st.detail && (
                    <p className="text-xs text-gray-500 font-medium leading-tight">
                      {st.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 1. OVERVIEW SECTION ── */}
      <section id="overview" className="container-wide px-4 md:px-8">
        <div className="bg-white rounded-3xl p-6 md:p-12 border border-gray-200/80 shadow-sm space-y-8">
          
          <div className="space-y-4 max-w-4xl">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              Institutional Overview
            </span>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              {unit.overview.title}
            </h2>

            <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
              {unit.overview.paragraph1}
            </p>

            <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
              {unit.overview.paragraph2}
            </p>
          </div>

          {/* Key Points 2-Column Grid */}
          <div className="pt-6 border-t border-gray-100 space-y-4">
            <p className="text-xs font-extrabold uppercase tracking-widest text-gray-400">
              Program Highlights & Key Deliverables
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {unit.overview.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-gray-100 text-xs md:text-sm font-semibold text-gray-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3.5 h-3.5 stroke-3" />
                  </div>
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. PORTRAIT FEATURES / SPECIALIZED MODULES ── */}
      <section className="container-wide px-4 md:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
            Key Pillars & Programs
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
            Specialized Features & Offerings
          </h2>
          <p className="text-gray-500 text-xs md:text-base font-medium">
            Explore the core components, field modules, and technical capabilities of {unit.shortTitle}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {unit.features.map((ft, index) => (
            <PortraitFeatureCard key={index} feature={ft} index={index} />
          ))}
        </div>
      </section>

      {/* ── 3. ELIGIBILITY & PROCESS SECTION ── */}
      {unit.eligibilityOrProcess && (
        <section className="container-wide px-4 md:px-8">
          <div className="bg-linear-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-3xl p-6 md:p-12 border border-primary/10 shadow-sm space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-primary uppercase tracking-widest">
                Requirements & Framework
              </span>
              <h2 className="text-xl md:text-3xl font-extrabold text-gray-900">
                {unit.eligibilityOrProcess.title}
              </h2>
              <p className="text-gray-600 text-xs md:text-sm font-medium">
                {unit.eligibilityOrProcess.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {unit.eligibilityOrProcess.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs flex items-start gap-3 hover:border-primary/40 transition-all"
                >
                  <span className="w-7 h-7 rounded-xl bg-primary text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-xs md:text-sm font-semibold text-gray-800 leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. BENEFITS & HIGHLIGHTS GRID ── */}
      <section className="container-wide px-4 md:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            {unit.benefits.title}
          </h2>
          <p className="text-gray-500 text-xs md:text-sm font-medium">
            Key impact factors and institutional advantages at NLRI Ratlam.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {unit.benefits.items.map((b, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-lg transition-all duration-300 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-700 flex items-center justify-center">
                <SparklesIcon className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-sm md:text-base text-gray-900">
                {b.title}
              </h3>
              <p className="text-gray-500 text-xs font-medium leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. FINAL CALL TO ACTION BAR ── */}
      <SharedCtaBanner
        title={unit.ctaTitle || `Ready to Connect with ${unit.shortTitle}?`}
        subtitle={`Reach out to our Nodal Cell at NLRI Ratlam Campus for enrollment details, batch schedules, project partnerships, or seed availability.`}
        primaryBtnText="Contact Nodal Cell"
        primaryBtnHref="/contact"
        secondaryBtnText="Explore All Specialized Units"
        secondaryBtnHref="/specialized-units"
      />

    </div>
  );
}
