"use client";

import React from "react";
import { aboutData } from "@/src/data/about-data";
import {
  ShieldCheckIcon,
  UsersIcon,
  AcademicCapIcon,
  BeakerIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const iconMap: Record<string, React.ElementType> = {
  shield:   ShieldCheckIcon,
  users:    UsersIcon,
  academic: AcademicCapIcon,
  beaker:   BeakerIcon,
  building: BuildingOffice2Icon,
  globe:    GlobeAltIcon,
};

const palette = [
  { border: "border-l-sky-400",     bg: "bg-sky-400", icon: "bg-sky-600"     },
  { border: "border-l-emerald-400", bg: "bg-emerald-400", icon: "bg-emerald-600" },
  { border: "border-l-violet-400",  bg: "bg-violet-400", icon: "bg-violet-600"  },
  { border: "border-l-amber-400",   bg: "bg-amber-400", icon: "bg-amber-600"   },
  { border: "border-l-rose-400",    bg: "bg-rose-400", icon: "bg-rose-600"    },
  { border: "border-l-teal-400",    bg: "bg-teal-400", icon: "bg-teal-600"    },
];

type StructureBlock = { category: string; icon: string; desc: string; items: string[] };

export default function OrganizationalStructure() {
  const structure = aboutData.structure as StructureBlock[];

  return (
    <section
      id="structure"
      className="section-padding bg-bg-section border-y border-border-light relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] z-0" />
      <div className="pointer-events-none absolute bottom-0 -left-40 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] z-0" />

      <div className="container-wide relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/15 text-primary text-xs font-bold uppercase tracking-widest">
            <BuildingOffice2Icon className="w-4 h-4" />
            Organizational Framework
          </div>
          <h2 className="academic-section-title text-gray-900 text-3xl md:text-5xl font-extrabold tracking-tight">
            Institutional <span className="text-primary">Ecosystem</span>
          </h2>
          <div className="h-1 w-16 rounded-full bg-accent mx-auto" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium max-w-3xl mx-auto pt-1">
            A dynamic, well-structured framework integrating leadership, academics, field research,
            and support functions to drive education, governance, and rural impact.
          </p>
        </div>

        {/* ── Clean Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {structure.map((block, index) => {
            const Icon = iconMap[block.icon] ?? ShieldCheckIcon;

            return (
              <div
                key={index}
                className="group flex flex-col bg-white border border-gray-200/80 rounded-2xl p-6 shadow-xs hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                {/* Header: Icon + Category */}
                <div className="flex items-start gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                      0{index + 1}
                    </span>
                    <h3 className="font-bold text-gray-900 text-base md:text-lg leading-snug">
                      {block.category}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium mb-4">
                  {block.desc}
                </p>

                {/* List Items */}
                <ul className="space-y-2.5 mt-auto pt-2">
                  {block.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-gray-700 text-xs md:text-sm font-medium leading-snug"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
