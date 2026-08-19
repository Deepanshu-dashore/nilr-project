import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SpecializedUnitData } from "@/src/data/specialized-units-data";
import { AcademicCapIcon, ArrowRightIcon, ChevronRightIcon, HomeIcon, SparklesIcon } from "@heroicons/react/24/outline";

interface UnitHeroProps {
  unit: SpecializedUnitData;
}

export default function UnitHero({ unit }: UnitHeroProps) {
  const bgImage = unit.heroImage || "/HeaderBg.png";

  return (
    <section className="relative text-white py-16 md:py-28 overflow-hidden bg-slate-950 border-b border-white/10">
      
      {/* ── Background Image with Rich Vibrant Gradient Overlay ── */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src={bgImage}
          alt={unit.title}
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/95 to-primary/80" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950/60" />
      </div>
      
      {/* ── Dynamic Glowing Accent Elements ── */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/25 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent/20 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container-wide relative z-10 px-4 md:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-300/80 mb-8 font-medium tracking-wide">
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5">
            <HomeIcon className="w-4 h-4 text-gray-400" /> Home
          </Link>
          <ChevronRightIcon className="w-3.5 h-3.5 text-gray-500" />
          <Link href="/specialized-units" className="hover:text-white transition-colors">
            Specialized Units
          </Link>
          <ChevronRightIcon className="w-3.5 h-3.5 text-gray-500" />
          <span className="text-amber-300 font-semibold truncate max-w-[220px] md:max-w-none">
            {unit.shortTitle}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-inner">
              <SparklesIcon className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest bg-linear-to-r from-amber-300 via-amber-200 to-white bg-clip-text text-transparent">
                {unit.tag}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight! tracking-tight text-white drop-shadow-md">
              {unit.title}
            </h1>

            <p className="text-base md:text-xl font-bold text-amber-300 leading-snug">
              {unit.tagline}
            </p>

            <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed max-w-3xl">
              {unit.heroDescription}
            </p>

            {unit.affiliation && (
              <div className="pt-3 border-t border-white/15 text-xs md:text-sm font-semibold text-emerald-300 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <span>{unit.affiliation}</span>
              </div>
            )}

            {/* Quick Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#overview"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs md:text-sm px-7 py-3.5 rounded-xl transition-all shadow-xl active:scale-95"
              >
                Explore Unit Details
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs md:text-sm px-7 py-3.5 rounded-xl transition-all backdrop-blur-md hover:border-white/40"
              >
                Contact Nodal Cell
              </Link>
            </div>

          </div>

          {/* Quick Stats Glassmorphism Box */}
          <div className="lg:col-span-4">
            <div className="bg-white/10 border border-white/20 backdrop-blur-2xl rounded-3xl p-7 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <h3 className="text-xs uppercase font-black tracking-widest text-gray-200">
                  Key Unit Highlights
                </h3>
                <span className="w-2 h-2 rounded-full bg-amber-400" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {unit.stats.map((st, idx) => (
                  <div key={idx} className="bg-black/30 p-4 rounded-2xl border border-white/10 hover:border-amber-400/40 transition-colors">
                    <p className="text-xl md:text-3xl font-black text-amber-400 tracking-tight">{st.value}</p>
                    <p className="text-xs font-bold text-white mt-1 leading-tight">{st.label}</p>
                    {st.detail && (
                      <p className="text-[10px] text-gray-300/80 font-medium mt-1 leading-tight">{st.detail}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
