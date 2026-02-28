"use client";

import React, { useState, useEffect, useRef } from "react";
import { aboutData } from "@/src/data/about-data";
import {
  UserGroupIcon,
  HomeModernIcon,
  FolderOpenIcon,
  BeakerIcon,
  StarIcon,
  GlobeAltIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

/* ─── CountUp Hook ─── */
function useCountUp(target: number, isActive: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isActive || target === 0) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16.66);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16.66);
    return () => clearInterval(timer);
  }, [target, isActive]);
  return count;
}

/* ─── Solid Flat Stat Card ─── */
const solidColors = ["bg-[#1a3a6e]", "bg-[#b71c3c]", "bg-[#00897b]", "bg-[#e59a00]", "bg-[#6a1b9a]"];

function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const numericStr = value.replace(/[^0-9]/g, "");
  const isNumeric = numericStr.length > 0;
  const numericVal = isNumeric ? parseInt(numericStr) : 0;
  const suffix = isNumeric ? value.replace(/[0-9,]/g, "") : "";
  const count = useCountUp(numericVal, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setActive(true); obs.disconnect(); }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${solidColors[index % solidColors.length]} flex flex-col items-center justify-center text-center px-6 py-10 rounded-xl hover:brightness-110 transition-all duration-300 cursor-default shadow-md`}
    >
      <p className="text-5xl font-black text-white tracking-tight leading-none">
        {isNumeric ? count.toLocaleString() : value}
        <span className="text-4xl font-black">{suffix}</span>
      </p>
      <p className="text-white/85 text-xs font-semibold uppercase tracking-widest mt-3">{label}</p>
    </div>
  );
}

/* ─── Achievement items with rich descriptions ─── */
const achievementDetails: { title: string; desc: string; icon: React.ElementType }[] = [
  {
    title: "41,000+ Individuals Trained",
    desc: "Over 41,000 individuals have been trained through 1,200+ residential training events spanning 17 years, covering farmers, NGO workers, government functionaries, and rural entrepreneurs across India.",
    icon: UserGroupIcon,
  },
  {
    title: "400+ Rural Development Projects",
    desc: "Successfully implemented 400+ rural development projects in partnership with KRIBHCO, NABARD, BPCL, Grasim Industries, PHED, and other leading national organizations, covering multiple states.",
    icon: HomeModernIcon,
  },
  {
    title: "4,500+ Quintals Seed Distributed",
    desc: "Produced and distributed over 4,500 quintals of certified soybean seed annually under the Seed Multiplication Program, supporting hundreds of farming families in improving crop yield and income.",
    icon: BeakerIcon,
  },
  {
    title: "Pan-India Training Outreach",
    desc: "Hosted specialized training for Patwaries, Panchayati Raj Institution (PRI) members, Self Help Groups (SHGs), NGOs, and Farmer Producer Organizations (FPOs) from across the country.",
    icon: GlobeAltIcon,
  },
  {
    title: "Pioneered Rural Development Models",
    desc: "Pioneered evidence-based development models in watershed management, participatory irrigation, organic farming, and women's empowerment that have been adopted and replicated nationally.",
    icon: FolderOpenIcon,
  },
  {
    title: "State-of-the-Art Infrastructure",
    desc: "Developed a world-class GIS Lab, e-learning and virtual media center, and real-time demonstration plots, providing students and trainees with industry-grade technology for practical learning.",
    icon: CpuChipIcon,
  },
  {
    title: "MANAGE Hyderabad Recognition",
    desc: "Officially recognized by MANAGE Hyderabad (National Institute of Agricultural Extension Management) as an authorized training institute under the prestigious AC&ABC scheme.",
    icon: StarIcon,
  },
];

/* ─── Section Sub-Heading ─── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h3 className="text-2xl md:text-2xl text-gray-900 tracking-tight">
        {children}
      </h3>
      <div className="w-10 h-1 rounded-full bg-linear-to-r from-primary to-transparent shrink-0" />
    </div>
  );
}

export default function InstitutionalStrengths() {
  return (
    <section id="strength" className="section-padding bg-[#f8f9fb] relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container-wide relative z-10 space-y-8">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/8 border border-primary/15 px-4 py-2 rounded-full">
            Achievements & Impact
          </span>
          <h2 className="academic-section-title">
            Our <span className="text-primary">Achievements</span>
          </h2>
          <div className="h-1 w-16 rounded-full bg-secondary mx-auto -mt-4" />
          <p className="text-gray-500 text-base font-medium leading-relaxed max-w-5xl">
            Over 17 years of measurable impact in rural development, education, and livelihood promotion across India — driven by expertise, partnerships, and purpose.
          </p>
        </div>

        {/* ── Impact by Numbers ── */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
            {aboutData.journey.stats.map((stat: { value: string; label: string }, index: number) => (
              <StatCard key={index} value={stat.value} label={stat.label} index={index} />
            ))}
          </div>
        </div>

        {/* ── Major Achievements — rich expanded cards ── */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
            {achievementDetails.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white p-7 rounded-xl overflow-hidden border border-gray-200 border-b-4 border-b-transparent hover:border-b-secondary hover:shadow-2xl transition-all duration-500 flex flex-col gap-5"
              >
                {/* Icon */}
                {/* <div className="w-12 h-12 rounded-xl bg-primary/8 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                  <item.icon className="w-6 h-6" />
                </div> */}

                {/* Title */}
                <h3 className="font-extrabold text-lg text-gray-900 leading-snug">
                  {item.title}
                  <span className="text-secondary"> .</span>
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm font-medium leading-relaxed flex-1">
                  {item.desc}
                </p>

                {/* Animated bottom bar */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-accent to-primary rounded-full scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
