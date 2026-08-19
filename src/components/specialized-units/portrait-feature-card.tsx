import React from "react";
import Image from "next/image";
import { UnitFeature } from "@/src/data/specialized-units-data";
import { CheckIcon } from "@heroicons/react/24/outline";

interface PortraitFeatureCardProps {
  feature: UnitFeature;
  index: number;
}

export default function PortraitFeatureCard({ feature, index }: PortraitFeatureCardProps) {
  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col justify-between h-full"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* ── Clean Image Header ── */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 shrink-0">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {feature.category && (
          <span className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider text-slate-900 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md shadow-xs">
            {feature.category}
          </span>
        )}
      </div>

      {/* ── Clean Card Body ── */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-xs md:text-sm font-normal leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* Simple Highlights Checklist */}
        {feature.highlights && feature.highlights.length > 0 && (
          <div className="space-y-2 pt-4 border-t border-gray-100">
            {feature.highlights.map((hl, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700 font-medium">
                <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                  <CheckIcon className="w-3 h-3 stroke-3" />
                </div>
                <span className="leading-snug">{hl}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
