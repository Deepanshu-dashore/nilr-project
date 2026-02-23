"use client";

import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  tag?: string;
  className?: string;
}

export default function Hero({ title, subtitle, tag, className = "" }: HeroProps) {
  return (
    <section className={`relative min-h-[350px] md:min-h-[300px] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/HeaderBg.png')",
        }}
      />
      
      {/* Overlay for text readability (subtle) */}
      <div className="absolute inset-0 z-10 bg-black/10" />

      {/* Content Layer */}
      <div className="container-wide relative z-20 px-4 text-center">
        <div className="flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-1000">
          {tag && (
            <span className="text-[14px] font-semibold md:text-[16px] text-white uppercase tracking-tight drop-shadow-md">
              {tag}
            </span>
          )}
          
          <h1 className="text-4xl md:text-5xl font-semibold! text-white leading-tight max-w-5xl drop-shadow-xl">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 font-medium max-w-3xl leading-relaxed drop-shadow-md mt-4 animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-200">
              {subtitle}
            </p>
          )}
          
          {/* Decorative line below title */}
          <div className="h-1 w-24 bg-white/20 rounded-full mt-2" />
        </div>
      </div>
      
      {/* Bottom Shadow/Border decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/10 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]" />
    </section>
  );
}