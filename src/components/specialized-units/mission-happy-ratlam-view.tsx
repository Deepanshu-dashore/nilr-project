"use client";

import React, { useState } from "react";
import Image from "next/image";
import SharedCtaBanner from "@/src/components/shared/unit-cta-banner";
import {
  CheckIcon,
  HeartIcon,
  UserGroupIcon,
  AcademicCapIcon,
  SunIcon,
  GlobeAsiaAustraliaIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function MissionHappyRatlamView() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const stats = [
    { value: "50+", label: "Model Happy Villages", detail: "Malwa & Ratlam Region" },
    { value: "12,000+", label: "Women Empowered", detail: "950+ Active SHGs" },
    { value: "150+", label: "Water Structures", detail: "Check dams & ponds" },
    { value: "35,000+", label: "Lives Transformed", detail: "Direct rural impact" },
  ];

  const pillars = [
    {
      id: "water",
      title: "Water Security & Watershed Management",
      badge: "Environmental Security",
      icon: SunIcon,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000",
      description: "Building year-round water resilience across drought-prone Ratlam farming clusters through check dams, solar pumping, and groundwater recharge.",
      metrics: [
        { label: "Structures Built", val: "150+" },
        { label: "Cropland Irrigated", val: "3,500+ Ha" },
        { label: "Water Kiosks", val: "25 RO Units" },
      ],
      bullets: [
        "Constructed 150+ check dams, farm ponds, and percolation tanks",
        "Installed solar-powered micro-irrigation and lift irrigation systems",
        "Established Village Water & Sanitation Committees (VWSCs)"
      ]
    },
    {
      id: "women",
      title: "Women Empowerment & SHG Micro-Enterprises",
      badge: "Social & Financial Inclusion",
      icon: UserGroupIcon,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000",
      description: "Mobilizing rural women into Self-Help Groups (SHGs) and guiding micro-enterprise ventures in dairy, food processing, organic bio-inputs, and handlooms.",
      metrics: [
        { label: "Active SHGs", val: "950+" },
        { label: "Credit Linkage", val: "₹4.5 Cr+" },
        { label: "Women Leaders", val: "12,000+" },
      ],
      bullets: [
        "950+ active Self-Help Groups with bank loan linkages",
        "Training in tailoring, vermicomposting, and pulses processing",
        "Establishing women-led dairy cooperative collection centers"
      ]
    },
    {
      id: "farming",
      title: "Sustainable Farming & Organic Inputs",
      badge: "Livelihood & Agriculture",
      icon: GlobeAsiaAustraliaIcon,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000",
      description: "Transforming smallholder agriculture through chemical-free natural farming, seed banks, high-density orchards, and livestock breed improvement.",
      metrics: [
        { label: "Farmers Trained", val: "5,000+" },
        { label: "Bio-Plots", val: "200+" },
        { label: "Seed Banks", val: "12 Hubs" },
      ],
      bullets: [
        "Certified organic inputs & vermicompost production units",
        "High-density fruit orchards (Guava, Mango, Citrus)",
        "Seed multiplication plots linked with NIRM Ratlam campus"
      ]
    },
    {
      id: "health",
      title: "Health, Hygiene & Community Sanitation",
      badge: "Healthcare & Sanitation",
      icon: HeartIcon,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000",
      description: "Ensuring 100% open-defecation-free villages, clean drinking water access, maternal health nutrition drives, and regular multi-specialty medical camps.",
      metrics: [
        { label: "ODF Status", val: "100%" },
        { label: "RO Water Kiosks", val: "25 Units" },
        { label: "Health Camps", val: "60+/Year" },
      ],
      bullets: [
        "Clean drinking water RO filtration kiosks installed in 25 villages",
        "Household sanitation units and liquid waste management",
        "Child & maternal health checkups in partnership with district health cells"
      ]
    },
    {
      id: "education",
      title: "Quality Education & Rural Youth Skilling",
      badge: "Youth & Future",
      icon: AcademicCapIcon,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000",
      description: "Upgrading government primary schools with digital smart classrooms, solar electrification, and delivering technical skill courses for rural youth.",
      metrics: [
        { label: "Smart Schools", val: "30 Units" },
        { label: "Youth Skilled", val: "1,500+" },
        { label: "IT Labs", val: "5 Hubs" },
      ],
      bullets: [
        "30+ village primary schools upgraded with Smart Classrooms & Solar Power",
        "Vocational skill training in tractor repair, solar technician, and IT at NIRM",
        "Scholarships & computer literacy programs for rural children"
      ]
    }
  ];

  const processSteps = [
    { step: "01", title: "Community Immersion & PRA", desc: "Participatory rural appraisal & household mapping with villagers." },
    { step: "02", title: "Water & Natural Resource Work", desc: "Constructing check dams, farm ponds, and RO drinking kiosks." },
    { step: "03", title: "Women SHG & Credit Mobilization", desc: "Forming savings groups, bank linkages, and micro-enterprises." },
    { step: "04", title: "Health Camps & Smart Schools", desc: "Upgrading village schools, health drives, and sanitation." },
    { step: "05", title: "Self-Sustaining VDC Governance", desc: "Handing over long-term project management to Village Committees." }
  ];

  const activePillar = pillars[activePillarIndex];

  return (
    <div className="bg-slate-50 text-gray-900 space-y-16 md:space-y-24 pb-0 overflow-hidden">
      
      {/* ── 1. KEY STATISTICS & AFFILIATION RIBBON (WHITE THEME) ── */}
      <section className="bg-white text-gray-900 py-6 md:py-8 border-b border-gray-200/80 shadow-xs relative overflow-hidden">
        <div className="container-wide px-4 md:px-8 relative z-10 space-y-5">
          
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-4 py-1.5 rounded-full shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Initiated by Gramin Vikas Trust (GVT) & KRIBHCO | Executed by NIRM Ratlam</span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {stats.map((st, idx) => (
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
                  <p className="text-xs text-gray-500 font-medium leading-tight">
                    {st.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 2. INSTITUTIONAL MISSION OVERVIEW ── */}
      <section id="overview" className="container-wide px-4 md:px-8">
        <div className="bg-white rounded-3xl p-6 md:p-12 border border-gray-200/80 shadow-sm space-y-8">
          
          <div className="space-y-4 max-w-4xl">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              Mission Overview & Blueprint
            </span>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              Creating Self-Sustaining, Prosperous & Happy Villages in Central India
            </h2>

            <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
              <strong>Mission Happy Ratlam</strong> is the flagship rural transformation campaign spearheaded by 
              <strong> Gramin Vikas Trust (GVT)</strong> — an organization established by <strong>KRIBHCO</strong> — 
              and headquartered at the <strong>National Institute of Rural Management (NIRM)</strong> in Bhadwasa, Ratlam.
            </p>

            <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
              The mission adopts a holistic 360-degree village development framework targeting 5 core dimensions: 
              water security, women empowerment, natural farming, community health, and smart education. By establishing 
              active Village Development Committees (VDCs), the mission ensures long-term community ownership and self-reliance.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100 space-y-4">
            <p className="text-xs font-extrabold uppercase tracking-widest text-gray-400">
              Core Strategic Commitments
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Government & CSR partnership model backed by KRIBHCO and local district administration",
                "Community-first participatory planning through Village Development Committees (VDCs)",
                "Full integration with NIRM Ratlam campus demonstration plots and field research labs",
                "Long-term sustainability framework ensuring villages self-manage projects after 36 months"
              ].map((point, idx) => (
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

      {/* ── 3. INTERACTIVE 5 PILLARS SHOWCASE (WHITE THEME) ── */}
      <section className="container-wide px-4 md:px-8 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
            Interactive Pillar Explorer
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
            The 5 Pillars of Mission Happy Ratlam
          </h2>
          <p className="text-gray-500 text-xs md:text-base font-medium">
            Select a pillar below to explore key interventions, metrics, and community deliverables.
          </p>
        </div>

        {/* Tabbed Pillar Layout (Clean White Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Tabs (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            {pillars.map((plr, index) => {
              const IconComp = plr.icon;
              const isActive = index === activePillarIndex;

              return (
                <button
                  key={plr.id}
                  onClick={() => setActivePillarIndex(index)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-white border-primary text-gray-900 shadow-lg border-l-4"
                      : "bg-white/80 border-gray-200/80 text-gray-600 hover:bg-white hover:text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-primary text-white font-bold"
                          : "bg-slate-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary"
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary block">
                        Pillar 0{index + 1}
                      </span>
                      <h4 className="text-xs md:text-sm font-extrabold truncate leading-tight">
                        {plr.title.split("&")[0]}
                      </h4>
                    </div>
                  </div>

                  <ChevronRightIcon
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? "text-primary translate-x-1" : "text-gray-400 group-hover:text-gray-700"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Active Pillar Card (8 Cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-gray-200/90 overflow-hidden shadow-xl flex flex-col justify-between animate-in fade-in zoom-in-95 duration-500">
            
            {/* Top Image Banner */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-slate-900">
              <Image
                src={activePillar.image}
                alt={activePillar.title}
                fill
                className="object-cover object-center brightness-95"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-slate-950/20" />
              
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-white bg-primary/90 backdrop-blur-md px-3.5 py-1 rounded-full shadow-md">
                  {activePillar.badge}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h3 className="text-xl md:text-3xl font-black text-white leading-snug drop-shadow-md">
                  {activePillar.title}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 space-y-6">
              <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed">
                {activePillar.description}
              </p>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-3 gap-3">
                {activePillar.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-50 border border-gray-200/80 p-3.5 rounded-xl text-center space-y-0.5">
                    <p className="text-base md:text-xl font-black text-primary">{m.val}</p>
                    <p className="text-[10px] md:text-xs font-extrabold text-gray-900">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Checklist */}
              <div className="space-y-2.5 pt-4 border-t border-gray-100">
                <p className="text-xs font-extrabold uppercase tracking-widest text-gray-400">
                  Key Field Deliverables:
                </p>
                {activePillar.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-800 font-semibold">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                      <CheckIcon className="w-3 h-3 stroke-3" />
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ── 4. MODEL VILLAGE TRANSFORMATION ROADMAP ── */}
      <section className="bg-primary/5 py-14 md:py-20 border-y border-primary/10">
        <div className="container-wide px-4 md:px-8 space-y-12 max-w-6xl mx-auto">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
              Implementation Roadmap
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
              5-Phase Village Transformation Roadmap
            </h2>
            <p className="text-gray-600 text-xs md:text-base font-medium max-w-2xl mx-auto">
              Our 36-month methodology taking a village from initial appraisal to self-sustaining governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            {processSteps.map((st, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs space-y-3 flex flex-col justify-between hover:shadow-md transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-primary/40">{st.step}</span>
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <h4 className="text-sm font-extrabold text-gray-900 leading-snug">
                  {st.title}
                </h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. FINAL CALL TO ACTION BANNER ── */}
      <SharedCtaBanner
        title="Partner with Mission Happy Ratlam"
        subtitle="Join hands with NIRM Ratlam and Gramin Vikas Trust (GVT) to adopt a village, sponsor CSR initiatives, or participate in rural development projects."
        primaryBtnText="CSR & Partner Contact"
        primaryBtnHref="/contact"
        secondaryBtnText="Explore Specialized Units"
        secondaryBtnHref="/specialized-units"
      />

    </div>
  );
}
