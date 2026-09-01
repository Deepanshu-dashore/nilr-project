"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

export default function CollaborationSRM() {
  return (
    <section id="collaboration" className="py-12 sm:py-16 md:py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container-wide px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          
          {/* ── Left Column: Featured Campus & Academic Building Photo ── */}
          <div className="lg:col-span-6 relative w-full">
            <div className="relative h-[220px] xs:h-[260px] sm:h-[340px] md:h-[420px] lg:h-[500px] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl group border border-gray-100 bg-gray-50">
              <Image 
                src="/campus-img/srm-building.jpg" 
                alt="School of Rural Management (SRM) Academic Building" 
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* ── Right Column: Text & Academic Overview ── */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Standard Badge */}
            <span className="text-gray-600 inline-flex items-center gap-1.5 border-gray-300 font-medium capitalize border w-fit px-3 py-1.5 rounded-full text-[10px] md:text-xs mb-3 shadow-xs">
              <AcademicCapIcon className="w-4 h-4 inline-block text-primary" />
              Academic Collaboration
            </span>

            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-extrabold text-gray-900 mb-4 sm:mb-5 leading-tight tracking-tight">
              Academics &amp; <span className="text-primary">School of Rural Management</span>
            </h2>

            {/* Dual-Tone Horizontal Accent Bar (Blue + Maroon/Red) */}
            <div className="flex items-center gap-0 mb-5 w-fit">
              <div className="h-[3.5px] w-20 sm:w-28 md:w-36 bg-[#0d1a63]" />
              <div className="h-[3.5px] w-10 sm:w-14 md:w-16 bg-[#ba303b]" />
            </div>
            
            {/* Rich Detailed Paragraphs */}
            <div className="space-y-3.5 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-[15px] font-normal text-justify sm:text-left">
              <p>
                CVRUK–NIRM is the natural meeting ground for high-octane academic-industry partnerships. Our School of Rural Management (SRM) and strategic academic bodies are actively involved in organizing, research, training, and education activities in collaboration with leading institutions, government missions, and corporate CSR entities.
              </p>
              
              <p>
                Through our diverse collaborations, we ensure that our students are exposed to national standards of education and real-life field environments. These partnerships provide our faculty and scholars with the opportunity to participate in cutting-edge grassroots research, furthering the institute’s objective of promoting indigenous rural innovation.
              </p>

              {/* ── Emphasis Blockquote Callout ── */}
              <blockquote className="italic text-primary font-bold border-l-[3px] border-[#ba303b] pl-3.5 sm:pl-4 mt-3 sm:mt-4 bg-primary/5 py-2.5 sm:py-3 pr-3 sm:pr-4 rounded-r-xl text-xs sm:text-sm">
                &ldquo;The curriculum emphasizes classroom learning, field immersion, internships, and applied research.&rdquo;
              </blockquote>
            </div>

            {/* ── Bottom Action Links with Dashed Underline ── */}
            <div className="mt-6 sm:mt-8 pt-2 flex flex-wrap items-center gap-5 sm:gap-8 md:gap-10">
              <Link 
                href="/programs"
                className="inline-flex flex-col items-start group cursor-pointer"
              >
                <span className="text-xs sm:text-sm md:text-base font-bold text-[#0d1a63] group-hover:text-[#ba303b] flex items-center gap-1.5 transition-colors">
                  Academics <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="w-full border-b border-dashed border-[#ba303b] mt-1 group-hover:border-[#0d1a63] transition-colors" />
              </Link>
              
              <Link 
                href="/programs/srm"
                className="inline-flex flex-col items-start group cursor-pointer"
              >
                <span className="text-xs sm:text-sm md:text-base font-bold text-[#0d1a63] group-hover:text-[#ba303b] flex items-center gap-1.5 transition-colors">
                  School of Rural Management <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="w-full border-b border-dashed border-[#ba303b] mt-1 group-hover:border-[#0d1a63] transition-colors" />
              </Link>

              <Link 
                href="/csr-partnerships"
                className="inline-flex flex-col items-start group cursor-pointer"
              >
                <span className="text-xs sm:text-sm md:text-base font-bold text-[#0d1a63] group-hover:text-[#ba303b] flex items-center gap-1.5 transition-colors">
                  Collaboration <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="w-full border-b border-dashed border-[#ba303b] mt-1 group-hover:border-[#0d1a63] transition-colors" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
