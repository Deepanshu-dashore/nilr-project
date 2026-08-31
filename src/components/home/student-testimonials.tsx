"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  PlusIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  batch: string;
  tag: string;
  headline: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rahul Verma",
    role: "PGD-RM Scholar",
    batch: "Class of 2024–26",
    tag: "Agribusiness & Livelihoods",
    headline: "Studying Rural Management at CVRUK–NIRM transformed my vision into grassroots impact...",
    content: "The seamless blend of classroom theory and live village immersion equipped me to design sustainable value chains and lead real-world rural transformation.",
    avatar: "/testimonial/image.png",
    rating: 5,
  },
  {
    id: "2",
    name: "Amit Singh",
    role: "Management Trainee",
    batch: "Alumni (2022–24)",
    tag: "CSR & Community Governance",
    headline: "The field immersion projects and faculty mentorship at NIRM opened doors to top CSR foundations...",
    content: "Being part of the CVRUK–NIRM ecosystem provided me the exact leadership tools and grassroots exposure needed to drive community development programs.",
    avatar: "/testimonial/image1.png",
    rating: 5,
  },
  {
    id: "3",
    name: "Vivek Kumar",
    role: "Research Scholar",
    batch: "Rural Innovation Cell",
    tag: "Sustainable Agriculture",
    headline: "Hands-on access to advanced agro labs and training farms made research practical and impactful...",
    content: "At CVRUK–NIRM, research goes straight from laboratories to farming communities. The campus provides a truly world-class environment for grassroots innovation.",
    avatar: "/testimonial/image2.png",
    rating: 5,
  },
  {
    id: "4",
    name: "Pooja Sharma",
    role: "Rural Development Officer",
    batch: "Alumni (2021–23)",
    tag: "FPO & Community Enterprises",
    headline: "Working with Farmer Producer Organizations prepared me for scalable grassroots leadership...",
    content: "The real-world problem solving approach and fieldwork phases gave me the confidence to manage rural farmer cooperatives and social enterprises.",
    avatar: "/testimonial/image.png",
    rating: 5,
  },
];

export default function StudentTestimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [showFullStory, setShowFullStory] = useState(false);

  const total = testimonials.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
    setShowFullStory(false);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
    setShowFullStory(false);
  }, [total]);

  // Auto-scroll left (forward) every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentItem = testimonials[current];

  // Motion variants for smooth slide + scale + fade transitions
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 240, damping: 26 },
        opacity: { duration: 0.45 },
        scale: { duration: 0.45 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: "spring" as const, stiffness: 240, damping: 26 },
        opacity: { duration: 0.35 },
      },
    }),
  };

  return (
    <section 
      className="relative overflow-hidden py-16 md:py-18 bg-gradient-to-r from-[#0a122c] via-[#1b1540] to-[#3a1332] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Low-Poly Polygonal Facet Geometric Background Overlay ── */}
      <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay">
        <svg className="w-full h-full object-cover" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none">
          <polygon points="0,0 400,0 200,300" fill="url(#poly-grad-1)" opacity="0.6" />
          <polygon points="400,0 900,0 600,400" fill="url(#poly-grad-2)" opacity="0.5" />
          <polygon points="900,0 1440,0 1200,350" fill="url(#poly-grad-3)" opacity="0.6" />
          <polygon points="0,0 200,300 0,600" fill="url(#poly-grad-2)" opacity="0.5" />
          <polygon points="200,300 600,400 350,700" fill="url(#poly-grad-1)" opacity="0.7" />
          <polygon points="600,400 1200,350 900,800" fill="url(#poly-grad-3)" opacity="0.6" />
          <polygon points="1200,350 1440,0 1440,500" fill="url(#poly-grad-1)" opacity="0.5" />
          <polygon points="0,600 350,700 0,800" fill="url(#poly-grad-3)" opacity="0.6" />
          <polygon points="350,700 900,800 1440,800" fill="url(#poly-grad-2)" opacity="0.5" />
          <polygon points="1200,350 1440,500 1440,800" fill="url(#poly-grad-2)" opacity="0.7" />
          
          <defs>
            <linearGradient id="poly-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
            <linearGradient id="poly-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#2e1065" />
            </linearGradient>
            <linearGradient id="poly-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d946ef" />
              <stop offset="100%" stopColor="#4c0519" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Ambient Lighting Flares */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* ── Top Header ── */}
      <div className="container mx-auto px-4 relative z-20 text-center mb-10 md:mb-14">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white/90">
          Testimonials
        </h2>
      </div>

      {/* ── Main Split View Container ── */}
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 relative z-20 max-w-6xl">
        <div className="relative min-h-[350px] sm:min-h-[380px] md:min-h-[420px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={currentItem.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              {/* ── Left Column: Headline Quote & Author Tag ── */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
                {/* Rating & Category Tag */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: currentItem.rating }).map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 border border-white/15 text-indigo-200">
                    {currentItem.tag}
                  </span>
                </div>

                {/* Big Statement Headline */}
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-[2.2rem] font-bold text-white leading-[1.25] tracking-tight max-w-2xl">
                  &ldquo;{currentItem.headline}&rdquo;
                </h3>

                {/* Testimonial Excerpt / Full Story */}
                <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-normal">
                  {currentItem.content}
                </p>

                {/* Interactive Author Badge with Plus (+) icon */}
                <div 
                  onClick={() => setShowFullStory(!showFullStory)}
                  className="inline-flex items-center gap-3 pt-2 cursor-pointer group select-none"
                >
                  <div className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center text-white text-xs group-hover:border-white group-hover:bg-white/20 transition-all">
                    <PlusIcon className="w-4 h-4 transition-transform group-hover:rotate-90 duration-300" />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-base md:text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {currentItem.name}
                    </span>
                    <span className="text-xs text-white/60 font-medium">
                      {currentItem.role} • {currentItem.batch}
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Right Column: Featured Arch Shaped Student Photo ── */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Subtle Glowing Ring behind the Arch */}
                  <div className="absolute -inset-2 bg-gradient-to-t from-fuchsia-500/20 to-indigo-500/20 rounded-t-[170px] rounded-b-4xl blur-lg pointer-events-none" />

                  {/* Arch Image Frame Container */}
                  <div className="relative w-60 h-76 sm:w-68 sm:h-88 md:w-76 md:h-96 lg:w-[320px] lg:h-[400px] rounded-t-[160px] md:rounded-t-[170px] rounded-b-4xl overflow-hidden border-2 border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] bg-[#1e1335]">
                    <Image
                      src={currentItem.avatar}
                      alt={currentItem.name}
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 260px, 340px"
                    />
                    
                    {/* Subtle bottom gradient shadow inside frame */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Left & Right Nav Chevron Buttons ── */}
        <button
          onClick={prevSlide}
          className="absolute -left-2 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white hover:bg-white/10 flex items-center justify-center transition-all duration-300 shadow-lg active:scale-90 cursor-pointer z-30"
          aria-label="Previous testimonial"
          title="Previous testimonial"
        >
          <ChevronLeftIcon className="w-5 h-5 stroke-[2.5]" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-2 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white hover:bg-white/10 flex items-center justify-center transition-all duration-300 shadow-lg active:scale-90 cursor-pointer z-30"
          aria-label="Next testimonial"
          title="Next testimonial"
        >
          <ChevronRightIcon className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      {/* ── Bottom Section: View All Link with Dashed Line & Dots ── */}
      <div className="container mx-auto px-4 relative z-20 mt-10 md:mt-14 flex flex-col items-center gap-4">
        {/* View All Link */}
        <Link
          href="/success-stories"
          className="inline-flex flex-col items-center group cursor-pointer"
        >
          <span className="text-sm font-semibold text-white/90 group-hover:text-white flex items-center gap-1.5 transition-colors tracking-wide">
            View All <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="w-24 border-b border-dashed border-white/40 mt-1 group-hover:border-white transition-colors" />
        </Link>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center gap-2 mt-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                current === i
                  ? "w-7 bg-white shadow-xs"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
