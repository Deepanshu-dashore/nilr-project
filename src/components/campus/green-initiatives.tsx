"use client";

import React from "react";
import {
  MapIcon,
  GlobeAsiaAustraliaIcon,
  BeakerIcon,
  SparklesIcon,
  SunIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const cards = [
  {
    icon: MapIcon,
    titleGreen: "10.49 HECTARES",
    titleDark: "OF ECO-RESTORED LAND",
    description: "Reviving nature and creating a thriving green ecosystem.",
  },
  {
    icon: GlobeAsiaAustraliaIcon,
    titleGreen: "OVER 5,000 TREES",
    titleDark: "NURTURING OUR FUTURE",
    description: "A lush canopy that purifies air and supports biodiversity.",
  },
  {
    icon: BeakerIcon,
    titleGreen: "ORGANIC FARMING",
    titleDark: "PLOTS & SEED PRODUCTION",
    description: "Promoting chemical-free farming and self-sustaining food systems.",
  },
  {
    icon: SparklesIcon,
    titleGreen: "10,000+ SAPLINGS",
    titleDark: "PRODUCED ANNUALLY",
    description: "On-campus nurseries growing change, one sapling at a time.",
  },
  {
    icon: SunIcon,
    titleGreen: "SOLAR ENERGY",
    titleDark: "ZERO-WASTE MODEL",
    description: "Harnessing the sun to power our campus sustainably.",
  },
  {
    icon: AcademicCapIcon,
    titleGreen: "WATER HARVESTING",
    titleDark: "RECHARGING AQUIFERS",
    description: "Year-round systems ensuring water conservation and balance.",
  },
];

export default function GreenInitiatives() {
  return (
    <section
      id="green"
      className="relative bg-[#f7faf6] overflow-hidden py-10 md:py-16 border-t border-gray-100"
    >
      {/* Seamless Full-Width Background Image Layer with Horizontal Gradient Mask */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-right bg-no-repeat z-0"
        style={{ backgroundImage: "url('/green-campusBg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f7faf6] via-[#f7faf6]/85 to-transparent z-0" />

      <div className="container-wide px-5 lg:px-8 relative z-10 mx-auto">
        {/* Top Header Section */}
        <div className="max-w-2xl mb-6 md:mb-8">
          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.02] mb-3">
            <span className="text-[#0a3a24] block">GREEN</span>
            <span className="text-[#4fa838] block">CAMPUS INITIATIVES</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base font-bold text-gray-800 mb-1.5">
            <span className="text-[#2e7d32]">Sustainability</span> in Action. Innovation in Every Step.
          </p>

          {/* Paragraph */}
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-xl font-medium">
            Our green campus initiatives integrate eco-conscious practices into education, research, and daily operations to create a smarter, cleaner, and healthier tomorrow.
          </p>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 relative z-10 max-w-7xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 md:p-5 border border-slate-100 shadow-sm shadow-slate-200/50 hover:shadow-md transition-all duration-200 flex items-center gap-4 group"
              >
                {/* Solid Icon Badge */}
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#e6f4ea] flex items-center justify-center text-[#2e7d32] shrink-0">
                  <Icon className="w-5.5 h-5.5 md:w-6 md:h-6 text-[#2e7d32]" />
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs md:text-sm font-extrabold tracking-wide uppercase leading-tight">
                    <span className="text-[#2e7d32] block">{card.titleGreen}</span>
                    <span className="text-gray-800 block mt-0.5">{card.titleDark}</span>
                  </h3>
                  <p className="text-[11px] md:text-xs text-gray-500 mt-1 leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}





