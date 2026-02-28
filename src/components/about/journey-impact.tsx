"use client";

import React from "react";
import { aboutData } from "@/src/data/about-data";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

/* ─── Timeline Item ─── */
function TimelineItem({ year, event, index }: { year: string; event: string; index: number }) {
  const isEven = index % 2 === 0;
  const card = (
    <div className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl p-6 group">
      <span className="text-accent font-black text-2xl block tracking-tight mb-2 leading-none">{year}</span>
      <p className="text-gray-200 text-base font-medium leading-relaxed">{event}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-6 lg:gap-10">
      {/* Left */}
      <div className={isEven ? "flex justify-end" : ""}>{isEven ? card : <span />}</div>

      {/* Centre node */}
      <div className="flex flex-col items-center pt-6">
        <div className="w-4 h-4 rounded-full bg-accent border-2 border-primary shadow-[0_0_0_4px_rgba(255,255,255,0.15)] shrink-0" />
      </div>

      {/* Right */}
      <div>{!isEven ? card : <span />}</div>
    </div>
  );
}

export default function JourneyImpact() {
  return (
    <section
      id="background"
      className="section-padding bg-primary text-white relative overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 -left-40 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />

      <div className="container-wide relative z-10 space-y-20">

        {/* ── Section Header ── */}
        <div className="max-w-6xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest">
            <RocketLaunchIcon className="w-4 h-4" />
            Est. 2006 · Gramin Vikas Trust
          </div>
          <h2 className="academic-section-title text-white!">
            The Journey of <span className="text-accent">NLRI</span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed font-medium">
            {aboutData.journey.description}
          </p>
        </div>

        {/* ── Journey Highlights (Timeline only now) ── */}
        <div>
          {/* <div className="flex items-center gap-4 mb-14">
            <span className="w-1 h-8 bg-accent rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">Our Journey Highlights</h3>
          </div> */}

          <div className="relative">
            {/* vertical stem */}
            <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-white/15" />

            <div className="flex flex-col gap-10 relative z-10">
              {aboutData.journey.timeline.map(
                (item: { year: string; event: string }, index: number) => (
                  <TimelineItem key={index} year={item.year} event={item.event} index={index} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
