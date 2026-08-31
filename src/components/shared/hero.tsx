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
    <section className={`bg-slate-900 relative text-white py-12 md:py-20 overflow-hidden ${className}`}>
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/HeaderBg.png')",
        }}
      />
      {/* Subtle angular depth accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-32 pointer-events-none" />
      
      {/* Content Layer (Unified SRM / The Campus / Approvals style) */}
      <div className={`container mx-auto px-4 md:px-6 relative z-10 max-w-4xl ${isLeft ? "text-left" : "text-center"}`}>
        <div className={`flex flex-col ${isLeft ? "items-start text-left" : "items-center text-center"}`}>
          {tag && (
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 md:mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm shadow-xs">
              <TagIcon className="w-4 h-4 md:w-5 md:h-5 text-indigo-400 inline-block shrink-0" />
              <span className="text-xs md:text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent capitalize tracking-wider">
                {tag}
              </span>
            </div>
          )}
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-4 md:mb-6">
            {title}
          </h1>

          {subtitle && (
            <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed font-medium">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}