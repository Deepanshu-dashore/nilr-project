"use client";

import React from "react";
import Image from "next/image";
import { aboutData } from "@/src/data/about-data";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function CollaborationSRM() {
  return (
    <section id="collaboration" className="section-padding bg-gray-100 border-y border-gray-100 overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image with Decorative Elements */}
          <div className="w-full lg:w-1/2 relative">
             <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full overflow-hidden rounded-2xl shadow-premium group">
                <Image 
                  src="/campus-img/campusDron-1.jpeg" 
                  alt="University Collaboration Building" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
             </div>
             {/* Decorative element (blue/red lines) - hidden on very small screens */}
             <div className="absolute top-8 -right-4 hidden md:flex items-center gap-1 z-20">
                <div className="h-1.5 w-32 md:w-44 bg-primary shadow-sm" /> 
                <div className="h-1.5 w-10 md:w-12 bg-accent shadow-sm" /> 
             </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Academics & <span className="text-primary">School of Rural Management</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-sm md:text-base px-2 md:px-0">
              <p className="font-medium">
                {aboutData.collaboration.content}
              </p>
              
              <p className="font-medium hidden sm:block">
                {aboutData.srm.content}
              </p>

              {/* Added Points List - Responsive Grid */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-4">
                 {[
                    "University-recognized academic programs",
                    "AICTE-approved postgraduate education",
                    "Structured academic governance",
                    "Quality assurance & higher education standards"
                 ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm font-bold text-gray-700 text-left">
                       <span className="h-2 w-2 mt-1.5 rounded-full bg-accent shrink-0" />
                       {item}
                    </li>
                 ))}
              </ul>
              
              {/* Preparing Impact Leaders Tags */}
              <div className="pt-4">
                 <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Preparing Industry Leaders For:</h4>
                 <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {[
                       "Rural development organizations",
                       "CSR initiatives", 
                       "Government programs",
                       "Development consulting"
                    ].map((tag, i) => (
                       <span key={i} className="px-3 py-1.5 bg-white border border-gray-200 shadow-sm text-gray-700 text-[10px] md:text-xs font-bold rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-default">
                          {tag}
                       </span>
                    ))}
                 </div>
              </div>

              <blockquote className="italic text-primary font-bold border-l-4 border-accent pl-4 mt-6 text-left bg-primary/5 py-4 pr-4 rounded-r-xl">
                 "The curriculum emphasizes classroom learning, field immersion, internships, and applied research."
              </blockquote>
            </div>

            <div className="mt-8 md:mt-12 flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10">
              <button className="group flex items-center gap-2 text-primary font-black text-xs md:text-sm tracking-widest uppercase hover:text-accent transition-colors">
                Academics 
                <ArrowLongRightIcon className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <button className="group flex items-center gap-2 text-accent font-black text-xs md:text-sm tracking-widest uppercase hover:text-primary transition-colors">
                Collaboration
                <ArrowLongRightIcon className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
