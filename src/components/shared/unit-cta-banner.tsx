import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface SharedCtaBannerProps {
  title: React.ReactNode | string;
  highlightText?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  id?: string;
}

export default function SharedCtaBanner({
  title,
  highlightText,
  subtitle = "Reach out to our Nodal Cell at NIRM Ratlam Campus for enrollment details, batch schedules, project partnerships, or seed availability.",
  primaryBtnText = "Apply / Enquire Online",
  primaryBtnHref = "/contact",
  secondaryBtnText = "View All Specialized Units",
  secondaryBtnHref = "/specialized-units",
  id,
}: SharedCtaBannerProps) {
  return (
    <section id={id} className="bg-linear-to-r from-primary to-accent relative overflow-hidden text-white py-12 md:py-16 border-t border-white/10">
      
      {/* Background Pattern Overlay */}
      <div className="absolute w-full h-full bg-contain bg-no-repeat bg-right bg-full top-0 bg-[url('/patternSvg.svg')] opacity-25 pointer-events-none z-0" />
      
      <div className="container-wide px-6 md:px-8 flex flex-col md:flex-row justify-between items-center relative z-10 max-w-7xl mx-auto gap-6 md:gap-10">
        
        {/* Left Side Info */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="cta-title">
            {typeof title === "string" && highlightText ? (
              <>
                {title} <span>{highlightText}</span>
              </>
            ) : (
              title
            )}
          </h3>
          {subtitle && (
            <p className="cta-subtitle max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right Side Action Buttons */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 shrink-0">
          {primaryBtnText && primaryBtnHref && (
            <Link
              href={primaryBtnHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white text-primary font-extrabold px-5 py-2.5 md:px-6 md:py-3 text-xs md:text-sm shadow-lg hover:bg-white/90 hover:scale-105 transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              {primaryBtnText}
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          )}

          {secondaryBtnText && secondaryBtnHref && (
            <Link
              href={secondaryBtnHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold px-5 py-2.5 md:px-6 md:py-3 text-xs md:text-sm shadow-md hover:bg-white hover:text-primary transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              {secondaryBtnText}
            </Link>
          )}
        </div>

      </div>
    </section>
  );
}
