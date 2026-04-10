"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

export function HighlightSlider({ highlights }: { highlights: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const isFirstSlide = activeIndex === 0;
  const isLastSlide = activeIndex === highlights.length - 1;

  const next = () => {
    if (isLastSlide) {
      setActiveIndex(0); // If auto-playing, we might want to loop
    } else {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (isFirstSlide) {
      setActiveIndex(highlights.length - 1);
    } else {
      setActiveIndex((prev) => prev - 1);
    }
  };

  // Safe navigation for manual clicks (can choose to disable loop here if user prefers linear)
  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isLastSlide) setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isFirstSlide) setActiveIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (highlights.length <= 1) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [highlights.length, activeIndex]);

  if (highlights.length === 0) return null;

  const current = highlights[activeIndex];

  return (
    <div className="relative w-full h-[500px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl group border border-white/10">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image with optimized scaling */}
          <div className="absolute inset-0">
             {current.url ? (
               <img 
                 src={current.url} 
                 className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-10000 ease-linear" 
                 alt={current.title} 
               />
             ) : (
                <div className="w-full h-full bg-slate-900" />
             )}
            {/* Multi-layered gradient for text readability and premium feel */}
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-transparent" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 p-8 md:p-20 flex flex-col justify-end z-10 text-left">
            <div className="flex items-center gap-6 mb-6">
               <span className="bg-accent text-white px-5 py-1.5 rounded-sm text-[10px] md:text-xs font-semibold uppercase tracking-[0.11em] shadow-lg shadow-accent/20">
                  {current.type === 'Event' ? 'CAMPUS EVENT' : 'MEDIA HIGHLIGHT'}
               </span>
               <span className="flex items-center gap-2.5 text-white/90 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                  <span className="w-2.5 h-2.5 bg-[#f3be34] rounded-full animate-pulse shadow-[0_0_10px_rgba(243,190,52,0.8)]" />
                  SPOTLIGHT
               </span>
            </div>

            <Link href={`/media-events/${current._id}`} className="group/title block">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-6xl font-black text-white max-w-4xl mb-6 leading-[1.05] tracking-tight font-heading group-hover/title:text-accent transition-colors"
              >
                 {current.title}
              </motion.h2>
            </Link>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 line-clamp-2 leading-relaxed font-medium"
            >
               {current.description || "Join us for this institutional highlight that brings together experts, faculty, and students for a transformative experience."}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mb-10"
            >
              <Link 
                href={`/media-events/${current._id}`}
                className="inline-flex items-center gap-2 text-white bg-accent px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-accent/90 transition-all transform hover:scale-105 shadow-xl shadow-accent/20"
              >
                Read More
                <ChevronRightIcon className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none z-20">
        <button 
          onClick={handlePrev}
          disabled={isFirstSlide}
          className={`pointer-events-auto p-4 rounded-full backdrop-blur-md text-white border border-white/10 transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center transform active:scale-95 ${
            isFirstSlide 
              ? 'bg-white/5 text-white/20 cursor-not-allowed border-transparent' 
              : 'bg-black/20 hover:bg-white/20 hover:scale-110'
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="w-7 h-7" />
        </button>
        <button 
          onClick={handleNext}
          disabled={isLastSlide}
          className={`pointer-events-auto p-4 rounded-full backdrop-blur-md text-white border border-white/10 transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center transform active:scale-95 ${
            isLastSlide 
              ? 'bg-white/5 text-white/20 cursor-not-allowed border-transparent' 
              : 'bg-black/20 hover:bg-white/20 hover:scale-110'
          }`}
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-7 h-7" />
        </button>
      </div>

      {/* Modern Bottom Navigation Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
        {highlights.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className="group/dot relative py-2"
          >
            <div className={`transition-all duration-500 rounded-full flex items-center justify-center ${
              activeIndex === idx 
                ? 'w-12 h-1.5 bg-accent shadow-[0_0_10px_rgba(218,57,72,0.5)]' 
                : 'w-4 h-1 bg-white/40 group-hover/dot:bg-white/60'
              }`} 
            />
          </button>
        ))}
      </div>
    </div>
  );
}

