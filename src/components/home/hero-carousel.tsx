"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Lightbulb,
  Globe,
  Compass,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SlideItem {
  image: string;
  tag?: string;
  icon?: LucideIcon;
  title?: string;
  subtitle?: string;
  stat?: string;
  statText?: string;
}

const slides: SlideItem[] = [
  {
    image: "/campus-img/campusDron-1.jpeg",
    tag: "RESEARCH & INNOVATION",
    icon: Lightbulb,
    title: "Innovating Rural Future",
    subtitle: "Pioneering sustainable technologies, grassroots leadership, and high-impact research for national transformation.",
    stat: "5000+",
    statText: "Research Publications",
  },
  {
    image: "/campus-img/campusDron-2.jpeg",
    tag: "GLOBAL PERSPECTIVE",
    icon: Globe,
    title: "Empowering Next-Gen Leaders",
    subtitle: "World-class education fostering innovation, ethical leadership, and extensive strategic industry partnerships.",
    stat: "100+",
    statText: "Strategic Partnerships",
  },
  {
    image: "/campus-img/campusImg.jpeg",
    tag: "CAMPUS EXPERIENCE",
    icon: Compass,
    title: "Vibrant Campus Life",
    subtitle: "Modern infrastructure, green eco-friendly grounds, and dynamic student communities designed for holistic growth.",
    stat: "10k+",
    statText: "Active Community",
  },
  {
    image: "/campus-img/IMG_3587.jpg",
    tag: "ACADEMIC EXCELLENCE",
    icon: GraduationCap,
    title: "National Center of Excellence",
    subtitle: "Setting the gold standard in rural management education, enterprise incubation, and grassroots development.",
    stat: "#1",
    statText: "in Rural Management",
  },
  {
    image: "/campus-img/last.png",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const hasContent = Boolean(
    slides[current]?.title || slides[current]?.subtitle || slides[current]?.tag
  );

  const CurrentBadgeIcon = slides[current]?.icon;

  return (
    <section className="relative h-[85dvh] sm:h-[90dvh] md:h-[88dvh] w-full overflow-hidden bg-slate-950 select-none">
      
      {/* Background Slides — Seamless Cross-Fade Layering (No Blackout) */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, idx) => {
          const isActive = idx === current;
          return (
            <motion.div
              key={slide.image}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 1.06,
              }}
              transition={{
                opacity: { duration: 1.4, ease: "easeInOut" },
                scale: { duration: 7, ease: "easeOut" },
              }}
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: isActive ? 1 : 0 }}
            >
              <Image
                src={slide.image}
                alt={slide.title || "Campus Slide"}
                fill
                priority={idx === 0}
                className="object-cover"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Cinematic Lighting Overlays — Softened & Balanced for Natural Vibrancy */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 z-[2] pointer-events-none ${
          hasContent
            ? "bg-gradient-to-r from-slate-950/75 via-slate-950/40 to-transparent/10"
            : "bg-slate-950/20"
        }`}
      />
      <div
        className={`absolute inset-0 transition-opacity duration-700 z-[2] pointer-events-none ${
          hasContent
            ? "bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/25"
            : "bg-gradient-to-t from-slate-950/35 via-transparent to-slate-950/15"
        }`}
      />

      {/* Slide Content */}
      {hasContent && (
        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center">
          <div className="max-w-3xl pt-12 sm:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Category Pill Tag */}
                {slides[current].tag && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
                    {CurrentBadgeIcon && (
                      <CurrentBadgeIcon className="w-3.5 h-3.5 text-white/80 shrink-0" />
                    )}
                    <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-white/95 uppercase">
                      {slides[current].tag}
                    </span>
                  </div>
                )}

                {/* Slide Heading */}
                {slides[current].title && (
                  <h1 className="text-3.5xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.12] drop-shadow-md">
                    {slides[current].title}
                  </h1>
                )}

                {/* Subtitle */}
                {slides[current].subtitle && (
                  <p className="text-base sm:text-lg lg:text-xl text-[#F0F4F8]/90 font-normal leading-relaxed max-w-2xl drop-shadow-sm">
                    {slides[current].subtitle}
                  </p>
                )}

                {/* Action Buttons & Stat Counter */}
                <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-primary hover:bg-primary/90 active:scale-[0.98] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-primary/30 transition-all duration-200 group"
                  >
                    <span>Explore Programs</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm tracking-wide border border-white/25 backdrop-blur-md transition-all duration-200"
                  >
                    <span>Admissions Info</span>
                  </Link>

                  {/* Highlight Metric Badge */}
                  {slides[current].stat && (
                    <div className="hidden sm:flex items-center gap-3 pl-2 border-l border-white/20">
                      <span className="text-2xl sm:text-3xl font-extrabold text-white">
                        {slides[current].stat}
                      </span>
                      <span className="text-xs text-white/80 font-medium leading-tight max-w-[100px]">
                        {slides[current].statText}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Previous & Next Navigation Arrows (Left & Right) */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-950/40 hover:bg-slate-950/80 text-white/90 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-950/40 hover:bg-slate-950/80 text-white/90 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Pagination Indicators (Bottom Center) */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/15 shadow-md">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
              current === idx
                ? "w-8 bg-white shadow-sm"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
