"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants, PanInfo } from "framer-motion";
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

  // Touch / Swipe handler for mobile devices
  const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  // Auto-scroll forward every 6 seconds
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
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 260, damping: 28 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring" as const, stiffness: 260, damping: 28 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <section 
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#0a122c] via-[#1b1540] to-[#3a1332] text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
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
      <div className="absolute top-1/4 left-5 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* ── Top Header ── */}
      <div className="container mx-auto px-4 relative z-20 text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white/95 font-heading">
          Student Voices & Testimonials
        </h2>
        <p className="text-xs sm:text-sm text-indigo-200/80 mt-1 max-w-md mx-auto">
          Hear real experiences from scholars driving rural impact
        </p>
      </div>

      {/* ── Main Split View Container ── */}
      <div className="container mx-auto px-4 sm:px-8 md:px-14 lg:px-20 relative z-20 max-w-6xl">
        <div className="relative min-h-[460px] sm:min-h-[420px] md:min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={currentItem.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center cursor-grab active:cursor-grabbing"
            >
              {/* ── Left Column: Headline Quote, Details & Author ── */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
                {/* Rating & Category Tag */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: currentItem.rating }).map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 border border-white/15 text-indigo-200">
                    {currentItem.tag}
                  </span>
                </div>

                {/* Big Statement Headline */}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-bold text-white leading-snug sm:leading-tight tracking-tight max-w-2xl">
                  &ldquo;{currentItem.headline}&rdquo;
                </h3>

                {/* Testimonial Excerpt / Full Story */}
                <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-normal">
                  {currentItem.content}
                </p>

                {/* Interactive Author Badge with Plus (+) icon */}
                <div 
                  onClick={() => setShowFullStory(!showFullStory)}
                  className="inline-flex items-center gap-3 pt-1 sm:pt-2 cursor-pointer group select-none"
                >
                  <div className="w-8 h-8 sm:w-7 sm:h-7 rounded-full border border-white/40 flex items-center justify-center text-white text-xs group-hover:border-white group-hover:bg-white/20 transition-all">
                    <PlusIcon className="w-4 h-4 transition-transform group-hover:rotate-90 duration-300" />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {currentItem.name}
                    </span>
                    <span className="text-xs text-white/70 font-medium">
                      {currentItem.role} • {currentItem.batch}
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Right Column: Featured Arch Shaped Student Photo ── */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative">
                  {/* Subtle Glowing Ring behind the Arch */}
                  <div className="absolute -inset-2 bg-gradient-to-t from-fuchsia-500/25 to-indigo-500/25 rounded-t-[120px] sm:rounded-t-[160px] lg:rounded-t-[170px] rounded-b-3xl sm:rounded-b-4xl blur-md pointer-events-none" />

                  {/* Responsive Arch Image Frame Container */}
                  <div className="relative w-44 h-56 sm:w-56 sm:h-72 md:w-68 md:h-84 lg:w-[300px] lg:h-[380px] rounded-t-[110px] sm:rounded-t-[150px] lg:rounded-t-[160px] rounded-b-3xl sm:rounded-b-4xl overflow-hidden border-2 border-white/25 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] bg-[#1e1335]">
                    <Image
                      src={currentItem.avatar}
                      alt={currentItem.name}
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 640px) 180px, (max-width: 1024px) 270px, 320px"
                    />
                    
                    {/* Subtle bottom gradient shadow inside frame */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Desktop Left & Right Nav Chevron Buttons (Hidden on mobile to prevent overlay clipping) ── */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute md:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white hover:bg-white/10 items-center justify-center transition-all duration-300 shadow-lg active:scale-90 cursor-pointer z-30"
          aria-label="Previous testimonial"
          title="Previous testimonial"
        >
          <ChevronLeftIcon className="w-5 h-5 stroke-[2.5]" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute md:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white hover:bg-white/10 items-center justify-center transition-all duration-300 shadow-lg active:scale-90 cursor-pointer z-30"
          aria-label="Next testimonial"
          title="Next testimonial"
        >
          <ChevronRightIcon className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

      {/* ── Bottom Section: Mobile Navigation, Dots & View All Link ── */}
      <div className="container mx-auto px-4 relative z-20 mt-8 sm:mt-10 md:mt-12 flex flex-col items-center gap-3.5 sm:gap-4">
        {/* Mobile Swipe / Arrow Controls & Dots */}
        <div className="flex items-center gap-4">
          {/* Mobile Prev Button */}
          <button
            onClick={prevSlide}
            className="flex md:hidden w-8 h-8 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white hover:bg-white/10 items-center justify-center active:scale-90 cursor-pointer transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Carousel Pagination Indicator Dots */}
          <div className="flex items-center gap-2">
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

          {/* Mobile Next Button */}
          <button
            onClick={nextSlide}
            className="flex md:hidden w-8 h-8 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white hover:bg-white/10 items-center justify-center active:scale-90 cursor-pointer transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* View All Link */}
        <Link
          href="/success-stories"
          className="inline-flex flex-col items-center group cursor-pointer mt-1"
        >
          <span className="text-xs sm:text-sm font-semibold text-white/90 group-hover:text-white flex items-center gap-1.5 transition-colors tracking-wide">
            View All Stories <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="w-24 border-b border-dashed border-white/40 mt-1 group-hover:border-white transition-colors" />
        </Link>
      </div>
    </section>
  );
}
