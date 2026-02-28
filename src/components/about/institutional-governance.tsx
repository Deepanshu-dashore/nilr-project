"use client";

import React from "react";
import { aboutData } from "@/src/data/about-data";
import {
  BuildingLibraryIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  StarIcon,
  CheckCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const principleIcons = [StarIcon, ShieldCheckIcon, UserGroupIcon, GlobeAltIcon];

export default function InstitutionalGovernance() {
  return (
    <section id="governance" className="section-padding bg-[#f8f9fb] relative overflow-hidden">

      {/* Subtle decorative blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />

      <div className="container-wide relative z-10 space-y-16">

        {/* ── Section Header ── */}
        <div className="max-w-5xl space-y-4 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-primary text-xs font-bold uppercase tracking-widest ">
            <BuildingLibraryIcon className="w-4 h-4" />
            GVT · Est. 1992
          </div>
          <h2 className="academic-section-title">
            Governance &{" "}
            <span className="text-primary">Board of Trustees</span>
          </h2>
          <div className="h-[3px] w-14 rounded-full bg-secondary" />
          <p className="text-gray-500 text-base leading-relaxed font-medium text-center">
            The CVRU Khandwa – NLRI Campus operates under the leadership of Gramin Vikas Trust (GVT) — ensuring transparent, accountable, and impact-oriented institutional governance since 1992.
          </p>
        </div>

        {/* ── Trust Description Banner ── */}
        <div className="flex gap-6 items-start bg-primary p-7 md:p-10 rounded-2xl shadow-lg">
          <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
            <BuildingLibraryIcon className="w-7 h-7 text-accent" />
          </div>
          <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
            {aboutData.governance.trust}
          </p>
        </div>

        {/* ── Two column: Board + Principles ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Board Composition */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Card Header */}
            <div className="px-8 py-6 border-b border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/8 text-primary flex items-center justify-center">
                <UserGroupIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-gray-900">Board Composition</h3>
                <p className="text-xs text-gray-400 font-medium">Apex policy-making body for NLRI</p>
              </div>
            </div>

            {/* Description + List */}
            <div className="px-8 py-6 space-y-5">
              <p className="text-gray-500 text-sm leading-relaxed">
                The Board of Trustees of Gramin Vikas Trust serves as the apex policy-making and oversight body — composed of professionals, administrators, and subject experts.
              </p>
              <ul className="space-y-3">
                {aboutData.governance.board.map((item, index) => (
                  <li
                    key={index}
                    className="group flex gap-4 items-start p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md hover:border-primary/15 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/8 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <CheckCircleIcon className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 text-sm font-semibold leading-relaxed pt-0.5">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Governance Principles */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Card Header */}
            <div className="px-8 py-6 border-b border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                <ShieldCheckIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-gray-900">Governance Principles</h3>
                <p className="text-xs text-gray-400 font-medium">Values guiding all decisions</p>
              </div>
            </div>

            {/* Description + Principles */}
            <div className="px-8 py-6 space-y-5">
              <p className="text-gray-500 text-sm leading-relaxed">
                Guided by principles that uphold institutional integrity, social equity, and alignment with national development priorities and SDGs.
              </p>
              <div className="space-y-3">
                {aboutData.governance.principles.map((item, index) => {
                  const Icon = principleIcons[index % principleIcons.length];
                  return (
                    <div
                      key={index}
                      className="group flex gap-4 items-start p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md hover:border-secondary/15 transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-secondary/8 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700 text-sm font-semibold leading-relaxed pt-0.5">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
