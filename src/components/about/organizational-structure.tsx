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
      className="section-padding bg-primary border-y border-white/5 relative overflow-hidden"
    >
      
      <div style={{backgroundImage:"url('/bg-svg.svg')"}} className="absolute top-0 left-0 w-full h-full opacity-5 bg-repeat-space"/>
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.06]"
        style={{ backgroundImage: "url('/HeaderBg.png')" }}
      />
      <div className="pointer-events-none absolute -top-60 right-0 w-[700px] h-[700px] bg-accent/10 rounded-full blur-[180px] z-0" />
      <div className="pointer-events-none absolute bottom-0 -left-40 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] z-0" />

      <div className="container-wide relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/75 text-xs font-bold uppercase tracking-widest">
            <BuildingOffice2Icon className="w-3.5 h-3.5" />
            Organizational Framework
          </div>
          <h2 className="academic-section-title text-white!">
            Institutional <span className="text-accent">Ecosystem</span>
          </h2>
          <div className="h-[3px] w-14 rounded-full bg-accent mx-auto" />
          <p className="text-gray-300/90 text-base md:text-base leading-relaxed font-medium max-w-5xl mx-auto">
            A dynamic, well-structured framework integrating leadership, academics, field research,
            and support functions to drive education, governance, and rural impact.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {structure.map((block, index) => {
            const Icon = iconMap[block.icon] ?? ShieldCheckIcon;
            const color = palette[index % palette.length];

            return (
              <div
                key={index}
                className={`group relative flex flex-col bg-white/10 border border-white/10 border-l-4 ${color.border} rounded-2xl overflow-hidden hover:bg-white/8 transition-all duration-300`}
              >
                {/* Card header row */}
                <div className={`flex items-center gap-4 px-6 pt-6 pb-5 border-b border-white/8 ${color.bg}`}>
                  <div className={`w-10 h-10 rounded-lg ${color.icon} text-white flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 block mb-0.5">
                      0{index + 1}
                    </span>
                    <h4 className="font-extrabold text-white text-[15px] leading-tight truncate">
                      {block.category}
                    </h4>
                  </div>
                </div>

                {/* Desc */}
                <p className="text-gray-400 text-xs font-medium leading-relaxed px-6 pt-4 pb-3">
                  {block.desc}
                </p>

                {/* Items */}
                <ul className="px-6 pb-6 space-y-2.5 flex-1">
                  {block.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-gray-300 hover:text-white transition-colors text-[13px] font-medium leading-snug group/item"
                    >
                      <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-accent/60 group-hover/item:bg-accent shrink-0 transition-colors" />
                      {item}
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
