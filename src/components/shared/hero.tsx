import React from "react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

interface HeroProps {
  title: string;
  subtitle?: string;
  tag?: string;
  className?: string;
  tagIcon?: React.ElementType;
  align?: "center" | "left";
}

export default function Hero({
  title,
  subtitle,
  tag,
  className = "",
  tagIcon: TagIcon = AcademicCapIcon,
  align = "center",
}: HeroProps) {
  const isLeft = align === "left";

  return (
    <section className={`bg-text-dark relative text-white py-14 md:py-24 overflow-hidden ${className}`}>
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/HeaderBg.png')",
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-32 pointer-events-none" />
      
      {/* Content Layer (Matched 100% to Admissions Hero Style) */}
      <div className={`container-wide relative z-10 px-4 md:px-8 max-w-4xl ${isLeft ? "text-left" : "mx-auto text-center"}`}>
        <div className={`flex flex-col ${isLeft ? "items-start text-left" : "items-center text-center"} animate-in fade-in zoom-in-95 duration-1000`}>
          {tag && (
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
              <TagIcon className="w-4 h-4 md:w-5 md:h-5 text-indigo-400 inline-block" />
              <span className="text-xs md:text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent capitalize tracking-wider">
                {tag}
              </span>
            </div>
          )}
          
          <h1 className="text-2xl md:text-5xl font-semibold! leading-tight! text-white mb-6 tracking-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="max-w-3xl mx-auto text-sm md:text-lg text-gray-300 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-200">
              {subtitle}
            </p>
          )}

          {/* Decorative separator */}
          {!subtitle && (
            <div className="w-24 h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mt-4" />
          )}
        </div>
      </div>
    </section>
  );
}