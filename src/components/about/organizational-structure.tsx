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
          <span className="text-gray-600 inline-flex items-center gap-1.5 border-gray-300 font-medium capitalize border w-fit px-3 py-1.5 rounded-full text-[10px] md:text-xs mb-3 shadow-xs mx-auto">
            <BuildingOffice2Icon className="w-4 h-4 inline-block text-primary" />
            Organizational Framework
          </span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {structure.map((block, index) => {
            const Icon = iconMap[block.icon] ?? ShieldCheckIcon;

            return (
              <div
                key={index}
                className="group flex flex-col justify-between bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top highlight bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-indigo-500 to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div>
                  {/* Header: Icon + Category */}
                  <div className="flex items-start gap-3.5 mb-3.5 pb-3.5 border-b border-gray-100">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <span className="text-[10px] font-extrabold text-primary/70 uppercase tracking-widest block mb-0.5">
                        Pillar 0{index + 1}
                      </span>
                      <h3 className="font-extrabold text-gray-900 text-base md:text-[17px] leading-snug">
                        {block.category}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-[13px] leading-relaxed font-medium mb-4">
                    {block.desc}
                  </p>
                </div>

                {/* List Items */}
                <ul className="space-y-2 pt-3 border-t border-dashed border-gray-100 mt-2">
                  {block.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-gray-700 text-xs sm:text-[13px] font-medium leading-snug"
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
