"use client";

import React from "react";
import Image from "next/image";
import { aboutData } from "@/src/data/about-data";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function CollaborationSRM() {
  return (
    <section id="collaboration" className="bg-gray-100 py-16 md:py-24 border-y border-gray-100 overflow-hidden">
      <div className="pr-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2 relative min-h-[400px]">
             <div className="relative h-full w-full overflow-hidden shadow-xl">
                <Image 
                  src="/campus-img/campusDron-1.jpeg" 
                  alt="University Collaboration Building" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
             </div>
             {/* Decorative element from reference (blue/red lines) */}
             <div className="absolute top-5 -right-10 md:-right-10 hidden md:flex items-center gap-1">
                <div className="h-1.5 w-44 bg-primary" /> {/* Dark Blue */}
                <div className="h-1.5 w-12 bg-accent" /> {/* Red */}
             </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Academics & <span className="text-[#1a237e]">School of Rural Management</span>
            </h2>
            
            <div className="space-y-3 text-gray-600 leading-relaxed text-base">
              <p>
                {aboutData.collaboration.content}
              </p>
              
              {/* Added SRM Paragraph */}
              <p>
                {aboutData.srm.content}
              </p>

              {/* Added Points List */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                 {[
                    "University-recognized academic programs",
                    "AICTE-approved postgraduate education",
                    "Structured academic governance",
                    "Quality assurance & higher education standards"
                 ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-medium text-gray-700">
                       <span className="h-1.5 w-1.5 mt-2 rounded-full bg-[#b71c1c] shrink-0" />
                       {item}
                    </li>
                 ))}
              </ul>
              
              {/* Preparing Impact Leaders */}
              <div className="pt-4">
                 <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-3">Preparing Industry Leaders For:</h4>
                 <div className="flex flex-wrap gap-2">
                    {[
                       "Rural development organizations",
                       "CSR initiatives", 
                       "Government programs",
                       "Development consulting"
                    ].map((tag, i) => (
                       <span key={i} className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-bold rounded hover:bg-[#1a237e] hover:text-white transition-colors cursor-default">
                          {tag}
                       </span>
                    ))}
                 </div>
              </div>

              <blockquote className="italic text-[#1a237e] font-medium border-l-2 border-[#b71c1c] pl-4 mt-4">
                 "The curriculum emphasizes classroom learning, field immersion, internships, and applied research."
              </blockquote>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <button className="group flex items-center gap-2 text-[#1a237e] font-bold text-sm tracking-wide uppercase hover:underline underline-offset-4">
                Academics 
                <ArrowLongRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center gap-2 text-[#b71c1c] font-bold text-sm tracking-wide uppercase hover:underline underline-offset-4">
                Collaboration
                <ArrowLongRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
