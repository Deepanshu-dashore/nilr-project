"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  ChevronLeftIcon, 
  ChevronRightIcon 
} from "@heroicons/react/24/outline";

interface Milestone {
  year: string;
  title: string;
  event: string;
  image: string;
}

const milestones: Milestone[] = [
  {
    year: "2025–26",
    title: "CVRUK University Campus Partnership",
    event: "Official academic collaboration with Dr. C.V. Raman University (CVRUK), establishing a university campus and pioneering higher education in rural management.",
    image: "/campus-img/srm-building.jpg",
  },
  {
    year: "2023",
    title: "41,000+ Development Cadres Trained",
    event: "Milestone achievement of conducting 1,200+ residential training programs and empowering over 41,000+ rural development professionals across India.",
    image: "/campus-img/campusDron-2.jpeg",
  },
  {
    year: "2021",
    title: "MANAGE Hyderabad Incubation Cell",
    event: "Recognized by MANAGE Hyderabad as an official training and incubation center under the prestigious AC&ABC scheme for agri-entrepreneurs.",
    image: "/campus-img/last.jpg",
  },
  {
    year: "2017",
    title: "Agro-Farms & Seed Demonstration",
    event: "Expansion into seed multiplication, organic farming demonstration plots, and high-yield horticulture nurseries across 10+ hectares of green campus.",
    image: "/campus-img/green-bg.png",
  },
  {
    year: "2014",
    title: "School of Rural Management (SRM)",
    event: "Launch of the AICTE-approved School of Rural Management (SRM) offering postgraduate education (PGD-RM) in rural development and management.",
    image: "/campus-img/srm-building.jpg",
  },
  {
    year: "2012",
    title: "GIS & Remote Sensing Laboratory",
    event: "Establishment of specialized GIS & Remote Sensing Laboratory for geo-spatial rural planning, mapping, and natural resource management.",
    image: "/campus-img/IMG_3587.JPG",
  },
  {
    year: "2010",
    title: "Multi-State Watershed & CSR Projects",
    event: "Implementation of major watershed development, participatory irrigation management, and corporate CSR projects across MP, Gujarat, and Rajasthan.",
    image: "/campus-img/campusDron-1.jpeg",
  },
  {
    year: "2008",
    title: "Grassroots PRI & SHG Capacity Building",
    event: "Initiated large-scale capacity building for Panchayati Raj Institutions (PRIs), Self-Help Groups (SHGs), and grassroots development cadres.",
    image: "/campus-img/WhatsApp Image 2025-12-16 at 11.11.25 AM.jpeg",
  },
  {
    year: "2006",
    title: "Foundation by Gramin Vikas Trust",
    event: "NIRM Ratlam established by Gramin Vikas Trust (GVT) as a national resource and capacity-building institute for rural development and sustainable livelihoods.",
    image: "/campus-img/campusImg.jpeg",
  },
];

export default function JourneyImpact() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const total = milestones.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-scroll every 6 seconds with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentItem = milestones[current];

  // Framer Motion slide variants
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 240, damping: 26 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring" as const, stiffness: 240, damping: 26 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section 
      id="journey" 
      className="py-16 md:py-24 bg-white text-gray-900 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-wide">

        {/* ── Top Header ── */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-8 md:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            A Legacy Carved in Milestones
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Over the years, CVRU Khandwa – NIRM Campus has evolved, adapting to the ever-changing landscape of higher education and rural training while staying true to its core values of commitment to learning, community empowerment, and a rich developmental heritage.
          </p>

          <p className="text-gray-500 text-xs sm:text-sm font-medium">
            From its early years as a hub for capacity building and livelihood promotion to a full-fledged university campus, the institution has witnessed a transformational journey:
          </p>
        </div>

        {/* ── Horizontal Interactive Year Track (Always fully visible, no scroll clipping) ── */}
        <div className="max-w-5xl mx-auto mb-12 md:mb-16 px-2 sm:px-4">
          <div className="flex items-center justify-between gap-1 select-none w-full">
            {milestones.map((item, idx) => {
              const isActive = current === idx;
              const isNextActive = current === idx + 1;

              return (
                <React.Fragment key={item.year}>
                  <button
                    onClick={() => {
                      setDirection(idx > current ? 1 : -1);
                      setCurrent(idx);
                    }}
                    className={`transition-all duration-300 cursor-pointer font-sans whitespace-nowrap text-center shrink-0 ${
                      isActive
                        ? "text-[#B34141] font-black text-sm sm:text-lg md:text-xl lg:text-2xl scale-105 tracking-tight px-1 sm:px-2 py-1"
                        : "text-gray-400 hover:text-gray-800 font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base hover:bg-gray-50 px-1 sm:px-2 py-1 rounded"
                    }`}
                  >
                    {item.year}
                  </button>

                  {/* Dynamic CSS dashed line connector that expands/shrinks */}
                  {idx < milestones.length - 1 && (
                    <div 
                      className={`h-0 border-b border-dashed flex-grow min-w-[6px] max-w-[12px] sm:max-w-[32px] md:max-w-[48px] lg:max-w-[64px] transition-colors duration-300 ${
                        isActive || isNextActive ? "border-[#B34141]/60" : "border-gray-300"
                      }`}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ── Main Feature Milestone Card Slider Wrapper (Overflow visible for pop-out) ── */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-12 md:px-16">
          
          {/* Main Card Container with 3D Pop-out styling */}
          <div className="relative rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#0d1a63] via-[#1c1346] to-[#3a1332] text-white min-h-[380px] sm:min-h-[420px] md:min-h-[460px] flex items-center shadow-2xl">
            
            {/* Background Image with Overlay from closing-statement */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat opacity-30 mix-blend-luminosity pointer-events-none rounded-2xl md:rounded-3xl"
              style={{ backgroundImage: "url('/HeaderBg.png')" }}
            />

            {/* Right Side Pattern from NavigationLinkModel */}
            <div className="absolute right-0 top-0 bottom-0 z-0 pointer-events-none opacity-40 mix-blend-screen overflow-hidden rounded-r-2xl md:rounded-r-3xl hidden sm:block">
              <Image
                src="/leftPattern.svg"
                alt=""
                width={184}
                height={638}
                className="h-full w-auto object-cover object-right scale-x-[-1]"
                aria-hidden="true"
              />
            </div>

            {/* Slider Content */}
            <div className="relative z-10 w-full p-6 sm:p-10 md:p-14 lg:p-16">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={currentItem.year}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  {/* Left Column: Milestone Text */}
                  <div className="lg:col-span-6 space-y-4 text-left pl-2 sm:pl-4">
                    <span className="text-gray-300 font-sans text-sm sm:text-base font-bold uppercase tracking-wider block mb-1">
                      {currentItem.year}
                    </span>

                    <h3 className="text-xl sm:text-2xl md:text-[1.85rem] font-bold text-white leading-snug tracking-tight font-serif">
                      {currentItem.title}
                    </h3>

                    <p className="text-slate-200 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal pt-1 font-sans">
                      {currentItem.event}
                    </p>
                  </div>

                  {/* Right Column: Featured Milestone Photo (Mobile view) */}
                  <div className="lg:hidden block flex justify-center mt-4">
                    <div className="relative w-full h-44 sm:h-50 rounded-md overflow-hidden border border-white/20 shadow-xl bg-black/40">
                      <Image
                        src={currentItem.image}
                        alt={currentItem.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  {/* Empty space on desktop to let absolute image overlay cleanly */}
                  <div className="hidden lg:block lg:col-span-6" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Desktop Overlapping 3D Pop-out Image */}
            <div className="hidden lg:block absolute right-8 lg:right-12 top-[-28px] bottom-[-28px] w-[46%] z-20">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={currentItem.year}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.55)] bg-black/40 group"
                >
                  <Image
                    src={currentItem.image}
                    alt={currentItem.title}
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="46vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* ── Left & Right Circular Chevron Navigation Buttons (Perfectly positioned on boundaries) ── */}
          <button
            onClick={prevSlide}
            className="absolute left-1 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/30 bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-all duration-300 shadow-2xl active:scale-95 cursor-pointer z-30 backdrop-blur-md"
            aria-label="Previous milestone"
            title="Previous milestone"
          >
            <ChevronLeftIcon className="w-5 h-5 stroke-[2.5]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-1 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/30 bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-all duration-300 shadow-2xl active:scale-95 cursor-pointer z-30 backdrop-blur-md"
            aria-label="Next milestone"
            title="Next milestone"
          >
            <ChevronRightIcon className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* ── Bottom Narrative Caption ── */}
          <div className="text-center mt-12 md:mt-16 px-4 max-w-4xl mx-auto">
            <p className="text-gray-600 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal">
              Today, CVRU Khandwa – NIRM Campus continues to shape future development leaders, with specialized academic faculties, GIS labs, seed multiplication demonstration farms, and pan-India training outreach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
