"use client";

import React, { useState, useEffect, useRef } from "react";
import { aboutData } from "@/src/data/about-data";

// Achievement Card Color Palette
const COLORS = [
  "bg-[#0d47a1]", // Dark Blue
  "bg-[#b71c1c]", // Red
  "bg-[#00897b]", // Teal
  "bg-[#ffa000]", // Amber/Orange
];

// CountUp Component Updated to Match Reference Image 4
// Solid Color Background for each card, bold white number, white label
const CountUp = ({ value, label, colorClass }: { value: string, label: string, colorClass: string }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  
  const numericString = value.replace(/[^0-9]/g, "");
  const isNumeric = numericString.length > 0;
  const numericValue = isNumeric ? parseInt(numericString) : 0;
  const suffix = isNumeric ? value.replace(/[0-9,]/g, "") : "";

  useEffect(() => {
    if (!isNumeric) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
            let start = 0;
            const end = numericValue;
            const duration = 2000;
            const increment = end / (duration / 16.66);
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16.66);
            observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [numericValue, isNumeric]);

  return (
    <div ref={elementRef} className={`${colorClass} rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:scale-105 transition-transform duration-300 h-full min-h-[160px]`}>
      <p className="text-5xl md:text-4xl font-black text-white tracking-tight mb-2">
        {isNumeric ? count.toLocaleString() : value}
        <span className="text-xl ml-1 align-top">{suffix}</span>
      </p>
      <h4 className="text-white font-medium text-sm md:text-base uppercase tracking-wider opacity-90">
        {label}
      </h4>
    </div>
  );
};


export default function JourneyImpact() {
  return (
    <section id="background" className="section-padding bg-primary text-white border-y border-border-light overflow-hidden relative">
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto space-y-4">
          <h2 className="academic-section-title text-white!">
            Journey & <span className="text-accent-soft">Impact Footprint</span>
          </h2>
          <p className="academic-section-subtitle text-gray-300!">
            A decade of commitment to rural transformation, marked by academic excellence and social innovation across the heart of India.
          </p>
        </div>
        
        {/* Simplified Timeline based on Reference Image */}
        <div className="relative mb-32 md:mb-40">
          {/* Central Stem Line */}
          <div className="absolute h-full left-[19px] lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/20" />
          
          <div className="relative z-10 flex flex-col gap-12 lg:gap-24">
            {aboutData.journey.timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="flex flex-col lg:flex-row w-full relative group">
                  
                  {/* LEFT SIDE (Even items on Desktop) */}
                  <div className={`w-full lg:w-1/2 lg:pr-16 lg:text-right relative ${isEven ? 'lg:block' : 'hidden lg:block lg:invisible'}`}>
                      {/* Desktop Layout: Ring | Text */}
                           <div className="absolute right-0 -top-2 bg-white/30 h-[1.5px] w-96"></div>
                      <div className="hidden lg:flex flex-row items-start justify-end gap-6">
                           <div className="text-right bg-white  py-1.5 px-3 -mr-6">
                               <span className="text-accent font-black text-3xl block tracking-tight">{item.year}</span>
                               <p className="text-gray-700 font-medium text-lg leading-relaxed max-w-md">{item.event}</p>
                           </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="border-primary border-b-[3px] h-14 w-14 md:h-20 md:w-20" viewBox="0 0 82 95">
                                <defs>
                                    <linearGradient id="linear-gradient" x1="0.5" x2="0.834" y2="0.57" gradientUnits="objectBoundingBox">
                                    <stop offset="0" stopColor="#fff"/>
                                    <stop offset="1" stopColor="#fff"/>
                                    </linearGradient>
                                    <clipPath id="clip-path">
                                    <rect id="Rectangle_1122" data-name="Rectangle 1122" width="82" height="100" transform="translate(23421.109 21495.506)" fill="url(#linear-gradient)"/>
                                    </clipPath>
                                </defs>
                                <g id="Mask_Group_2" data-name="Mask Group 2" transform="translate(-23421.109 -21495.506)" clipPath="url(#clip-path)">
                                    <path id="Path_731" data-name="Path 731" d="M-444.826-445.357l20.884-3.518-8.206,19.075Zm-12.616,20.819,21.109-3.447-13.1-16.073Zm36.629,20.2,11.361-19.462h-19.685ZM-477-456.89v3.544l2.332-3.544Zm15.939,29.786,8.033-19.575-20.325-.011Zm41.815-29.786h-1.982l.881,1.5Zm-28.177,52.364,11.855-18.983-21.561,3.521Zm48.8-52.364H-413.81l-2.711,3.683,24.4,4.3ZM-443.5-402.57h18.741l-7.619-17.811Zm-29.772,0h21.934l-9.6-15.3Zm56.9-46.34,10.453,18.266,13.256-14.088Zm27.3,50.888h-27.461l10.532,17.482Zm-16.661-23.493L-416.8-402.57h28.569Zm-22.323-6.828h18.446l-10.53-18.4Zm4.007-24.778-2.219-3.768h-13.7l-6.2,7.5Zm-27.424,55.1H-473.2l12.207,15.228Zm4.071,1.711-9.525,15.253,21.275,3.462Zm26.829.02-7.96,19.115h19.476Zm-3.962-1.731H-443.34l11.3,18Zm40.683-58.868h-9.1l5.128,6.29Zm4.842,67.426v-8.558h-8.324Zm0-13.107v-9.278L-388-402.57Zm-66.661-54.32h-5.754l1.875,4.688Zm31.873,95h15.184l-7.98-9.789Zm20.849,0h9.1l4.842-7.671v-3.066h-22.692Zm9.213-87.078,4.726-.732v-6.756Zm-4.3,40.109,9.023-9.336v-5.6H-401.85Zm9.023-29.971v-6.548l-5.152.8Zm-9.441-3.937-13.573,14.425h23.014v-4.342l-.213.215Zm-14.662,65.592h24.1v-5.957l-9.187-9.446ZM-477-422.472v17.527l12.269-15.22Zm0,26.726v17.519l12.085-2.443Zm0-48.553v17.208l12.245,2.3Zm20.9-12.591h-13.343l-3.942,5.991,19.681.01Zm28.549,84.262,6.324,10.738h1.982l7.9-10.738Zm-12.431,10.738h13.7l-5.7-9.675Zm-17.3-14.622,5.85,14.622h5.754l9.285-11.223ZM-477-373.6v11.706h2.332l9.243-14.049Zm7.556,11.706H-456.1l-5.04-12.621Z" transform="translate(23898.625 21952.398)" fill="url(#linear-gradient)"/>
                                </g>
                              </svg>
                      </div>
                           <div className="absolute right-0 -bottom-2 bg-white/30 h-0.5 w-96"></div>
                  </div>

                  {/* RIGHT SIDE (Odd items on Desktop + All Mobile Content) */}
                  <div className={`w-full lg:w-1/2 lg:pl-16 relative pl-16 ${!isEven ? 'lg:block' : 'lg:block lg:invisible'}`}>
                      
                      {/* Mobile Node on Stem */}
                      <div className="absolute left-[14px] top-3 w-3 h-3 rounded-full bg-accent border border-white lg:hidden z-20" />
                           <div className="absolute left-0 -top-2 bg-white/30 h-[1.5px] w-96"></div>
           
                      {/* Desktop Content (Visible only if Odd) */}
                      <div className={`hidden lg:flex flex-row items-start justify-start gap-6 text-left ${!isEven ? 'opacity-100' : 'opacity-0'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="border-primary border-b-[3px] h-14 w-14 md:h-20 md:w-20" viewBox="0 0 82 95">
                          <defs>
                              <linearGradient id="linear-gradient" x1="0.5" x2="0.834" y2="0.57" gradientUnits="objectBoundingBox">
                              <stop offset="0" stopColor="#fff"/>
                              <stop offset="1" stopColor="#fff"/>
                              </linearGradient>
                              <clipPath id="clip-path">
                              <rect id="Rectangle_1122" data-name="Rectangle 1122" width="82" height="100" transform="translate(23421.109 21495.506)" fill="url(#linear-gradient)"/>
                              </clipPath>
                          </defs>
                          <g id="Mask_Group_2" data-name="Mask Group 2" transform="translate(-23421.109 -21495.506)" clipPath="url(#clip-path)">
                              <path id="Path_731" data-name="Path 731" d="M-444.826-445.357l20.884-3.518-8.206,19.075Zm-12.616,20.819,21.109-3.447-13.1-16.073Zm36.629,20.2,11.361-19.462h-19.685ZM-477-456.89v3.544l2.332-3.544Zm15.939,29.786,8.033-19.575-20.325-.011Zm41.815-29.786h-1.982l.881,1.5Zm-28.177,52.364,11.855-18.983-21.561,3.521Zm48.8-52.364H-413.81l-2.711,3.683,24.4,4.3ZM-443.5-402.57h18.741l-7.619-17.811Zm-29.772,0h21.934l-9.6-15.3Zm56.9-46.34,10.453,18.266,13.256-14.088Zm27.3,50.888h-27.461l10.532,17.482Zm-16.661-23.493L-416.8-402.57h28.569Zm-22.323-6.828h18.446l-10.53-18.4Zm4.007-24.778-2.219-3.768h-13.7l-6.2,7.5Zm-27.424,55.1H-473.2l12.207,15.228Zm4.071,1.711-9.525,15.253,21.275,3.462Zm26.829.02-7.96,19.115h19.476Zm-3.962-1.731H-443.34l11.3,18Zm40.683-58.868h-9.1l5.128,6.29Zm4.842,67.426v-8.558h-8.324Zm0-13.107v-9.278L-388-402.57Zm-66.661-54.32h-5.754l1.875,4.688Zm31.873,95h15.184l-7.98-9.789Zm20.849,0h9.1l4.842-7.671v-3.066h-22.692Zm9.213-87.078,4.726-.732v-6.756Zm-4.3,40.109,9.023-9.336v-5.6H-401.85Zm9.023-29.971v-6.548l-5.152.8Zm-9.441-3.937-13.573,14.425h23.014v-4.342l-.213.215Zm-14.662,65.592h24.1v-5.957l-9.187-9.446ZM-477-422.472v17.527l12.269-15.22Zm0,26.726v17.519l12.085-2.443Zm0-48.553v17.208l12.245,2.3Zm20.9-12.591h-13.343l-3.942,5.991,19.681.01Zm28.549,84.262,6.324,10.738h1.982l7.9-10.738Zm-12.431,10.738h13.7l-5.7-9.675Zm-17.3-14.622,5.85,14.622h5.754l9.285-11.223ZM-477-373.6v11.706h2.332l9.243-14.049Zm7.556,11.706H-456.1l-5.04-12.621Z" transform="translate(23898.625 21952.398)" fill="url(#linear-gradient)"/>
                          </g>
                        </svg>
                    <div className="text-left bg-white py-1.5 px-3 -ml-6">
                               <span className="text-accent font-black text-3xl block tracking-tight">{item.year}</span>
                               <p className="text-gray-700 font-medium text-lg leading-relaxed max-w-md ml-auto">{item.event}</p>
                           </div>
                           <div className="absolute left-0 -bottom-2 bg-white/30 h-[1.5px] w-96"></div>

                      </div>

                      {/* Mobile Content (Visible for ALL items) */}
                      <div className="block lg:hidden text-left pb-2">
                           <span className="text-accent font-black text-2xl mb-1 block tracking-tight">{item.year}</span>
                           <p className="text-white/80 font-medium text-base leading-relaxed">{item.event}</p>
                      </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-full max-w-7xl mx-auto">
          {aboutData.journey.achievements.map((stat, index) => (
             <CountUp 
                key={index} 
                value={stat.value} 
                label={stat.label} 
                colorClass={COLORS[index % COLORS.length]} 
             />
          ))}
        </div>
      </div>
    </section>
  );
}
