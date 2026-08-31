"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    image: "/campus-img/campusDron-1.jpeg",
    title: "Innovating Rural Future",
    subtitle: "Excellence in Research & Development",
    stat: "5000+",
    statText: "Research Publications",
    color: "from-blue-900/60 to-blue-600/30",
  },
  {
    image: "/campus-img/campusDron-2.jpeg",
    title: "Empowering Next Gen",
    subtitle: "Global Standards of Education",
    stat: "100+",
    statText: "Strategic Partnerships",
    color: "from-green-900/60 to-green-600/30",
  },
  {
    image: "/campus-img/campusImg.jpeg",
    title: "Vibrant Campus Life",
    subtitle: "A Hub for Innovation",
    stat: "10k+",
    statText: "Active Community",
    color: "from-purple-900/60 to-purple-600/30",
  },
  {
    image: "/campus-img/IMG_3587.jpg",
    title: "A Grade Accreditation",
    subtitle: "Recognized for Academic Excellence",
    stat: "#1",
    statText: "in Rural Management",
    color: "from-red-900/60 to-red-600/30",
  },
  {
    image: "/campus-img/last.png",
    title: "",
    subtitle: "",
    stat: "",
    statText: "",
    color: "from-gray-900/60 to-gray-600/30",
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
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-bg-dark">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full"
        >
          {/* Background Image */}
          <motion.div 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            className="relative h-full w-full"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              priority
              className="object-cover"
            />
            {/* Overlay Effect for Light */}
            <div className={`absolute inset-0 bg-linear-to-r ${slides[current].color} mix-blend-multiply opacity-50`} />
            {/* Gradient Dark to Transparent for Image Visibility */}
            {slides?.length-1!==current&&<div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent" />}
          </motion.div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-20 lg:px-32">
            <div className="max-w-4xl text-white">
              {slides[current].subtitle && (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                  className="flex items-center gap-4 mb-4"
                >
                  <div className="bg-accent-soft p-1 rounded-full text-primary flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Plus size={20} />
                    </motion.div>
                  </div>
                  <p className="text-lg md:text-xl font-medium tracking-wide uppercase font-heading text-accent-soft whitespace-nowrap">
                    {slides[current].subtitle}
                  </p>
                  <div className="flex items-center gap-2 grow max-w-[100px] md:max-w-[150px]">
                    <div className="h-[2px] w-full bg-accent-soft/70 rounded-full"></div>
                    <motion.div
                      animate={{ rotate: 180 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="text-accent-soft shrink-0"
                    >
                      <Plus size={16} />
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {slides[current].title && (
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-8"
                >
                  {slides[current].title}
                </motion.h1>
              )}

              {slides[current].stat && (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                  className="flex items-center gap-6"
                >
                    <div className="relative group">
                      <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="absolute -inset-10 opacity-20 transition-opacity flex items-center justify-center"
                      >
                          <Plus className="text-white w-16 h-16" />
                      </motion.div>
                      <div className="flex items-baseline gap-2 relative z-10">
                          <span className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-white drop-shadow-2xl">
                          {slides[current].stat}
                          </span>
                          <span className="text-lg md:text-xl font-medium text-white/90 font-sans opacity-80">
                          {slides[current].statText}
                          </span>
                      </div>
                    </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-12 left-6 md:left-20 flex items-center gap-4 z-20">
        <button
          onClick={prevSlide}
          className="p-3 border border-white/20 rounded-full hover:bg-white/10 text-white transition-all active:scale-90"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 border border-white/20 rounded-full hover:bg-white/10 text-white transition-all active:scale-90"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Indicators */}
        <div className="flex gap-2 ml-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1 transition-all duration-300 rounded-full ${
                current === idx ? "w-8 bg-accent-soft" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Extra rotating plus symbols scattered */}
      <div className="absolute top-1/4 right-1/4 opacity-10 pointer-events-none">
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
            <Plus size={120} className="text-white" />
        </motion.div>
      </div>
      <div className="absolute bottom-1/4 right-[40%] opacity-5 pointer-events-none">
        <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
            <Plus size={80} className="text-white" />
        </motion.div>
      </div>
    </section>
  );
}
