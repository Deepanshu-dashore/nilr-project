import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/src/components/shared/hero";
import SharedCtaBanner from "@/src/components/shared/unit-cta-banner";
import { specializedUnitsData } from "@/src/data/specialized-units-data";
import { BuildingLibraryIcon, ArrowRightIcon, SparklesIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Specialized Units | NLRI Ratlam – CVRU Khandwa Campus",
  description: "Explore NLRI Ratlam's specialized operational units: AC&ABC (Agri-Clinics & Agri-Business Centres), SMU (Seed Manufacturing Unit), and Mission Happy Ratlam.",
};

export default function SpecializedUnitsHubPage() {
  const unitsList = Object.values(specializedUnitsData);

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      
      {/* Hero Banner */}
      <Hero
        tag="SPECIALIZED UNITS"
        title="Institutional Operational Units & Initiatives"
        subtitle="Bridging academic excellence with specialized agri-entrepreneurship, seed technology, and holistic rural transformation across Central India."
        tagIcon={BuildingLibraryIcon}
      />

      {/* Overview Hub Intro */}
      <section className="py-12 md:py-20 container-wide px-4 md:px-8 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
            Specialized Excellence
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Driving Innovation, Livelihoods & Community Well-being
          </h2>
          <p className="text-gray-600 text-xs md:text-base font-medium leading-relaxed">
            NLRI Ratlam operates three dedicated specialized units designed to deliver targeted impact—from training certified agripreneurs under Ministry of Agriculture guidelines to producing 4,500+ quintals of seeds annually and empowering model villages.
          </p>
        </div>

        {/* Specialized Units Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {unitsList.map((unit) => (
            <div
              key={unit.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Card Header & Portrait Accent */}
              <div>
                <div className="relative w-full aspect-[16/10] bg-slate-900 overflow-hidden">
                  <Image
                    src={unit.features[0]?.image || "/HeaderBg.png"}
                    alt={unit.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {unit.shortTitle}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className="text-lg md:text-xl font-extrabold text-white leading-tight">
                      {unit.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs md:text-sm text-amber-600 font-extrabold tracking-wide uppercase">
                    {unit.tag}
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed line-clamp-3">
                    {unit.heroDescription}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    {unit.stats.slice(0, 2).map((st, i) => (
                      <div key={i} className="flex items-center justify-between text-xs text-gray-700 font-semibold">
                        <span className="text-gray-500">{st.label}:</span>
                        <span className="font-extrabold text-primary">{st.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="p-6 pt-0">
                <Link
                  href={`/specialized-units/${unit.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold text-xs md:text-sm px-5 py-3 rounded-xl transition-all shadow-md group-hover:shadow-lg active:scale-95"
                >
                  Explore {unit.shortTitle} Page
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* Shared Unified CTA Banner */}
      <SharedCtaBanner
        title="Collaborate with NLRI Specialized Units"
        subtitle="Whether you are an aspiring agripreneur, progressive farmer, research institution, or development partner, connect with our team at NLRI Ratlam Campus."
        primaryBtnText="Contact Nodal Desk"
        primaryBtnHref="/contact"
        secondaryBtnText="Explore Campus Infrastructure"
        secondaryBtnHref="/campus"
      />

    </div>
  );
}
