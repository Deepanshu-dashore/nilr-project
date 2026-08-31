"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CollaborationSRM() {
  return (
    <section id="collaboration" className="py-16 md:py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ── Left Column: Featured Campus & Academic Building Photo ── */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[320px] sm:h-[420px] md:h-[480px] lg:h-[540px] w-full overflow-hidden rounded-2xl shadow-xl group border border-gray-100 bg-gray-50">
              <Image 
                src="/campus-img/srm-building.jpg" 
                alt="School of Rural Management (SRM) Academic Building" 
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* ── Right Column: Text & Academic Overview ── */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Dual-Tone Horizontal Accent Bar (Blue + Maroon/Red) */}
            <div className="flex items-center gap-0 mb-6 w-fit">
              <div className="h-[3.5px] w-24 md:w-36 bg-[#0d1a63]" />
              <div className="h-[3.5px] w-12 md:w-16 bg-[#B34141]" />
            </div>

            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-bold text-gray-900 mb-5 leading-tight tracking-tight">
              Academics &amp; School of Rural Management
            </h2>
            
            {/* Rich Detailed Paragraphs */}
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-[15px] font-normal">
              <p>
                CVRUK–NIRM is the natural meeting ground for high-octane academic-industry partnerships. Our School of Rural Management (SRM) and strategic academic bodies are actively involved in organizing, research, training, and education activities in collaboration with leading institutions, government missions, and corporate CSR entities.
              </p>
              
              <p>
                Through our diverse collaborations, we ensure that our students are exposed to national standards of education and real-life field environments. These partnerships provide our faculty and scholars with the opportunity to participate in cutting-edge grassroots research, furthering the institute’s objective of promoting indigenous rural innovation.
              </p>

              {/* ── Key Academic Pillars ── */}
              {/* <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  "University-recognized academic programs",
                  "AICTE-approved postgraduate education",
                  "Structured academic governance",
                  "Quality assurance & higher education standards"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs md:text-[13px] font-bold text-gray-700">
                    <span className="h-1.5 w-1.5 mt-1.5 rounded-full bg-[#B34141] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul> */}

              {/* ── Emphasis Blockquote Callout ── */}
              <blockquote className="italic text-primary font-bold border-l-[3px] border-[#B34141] pl-4 mt-4 bg-primary/5 py-3 pr-4 rounded-r-xl text-xs sm:text-sm">
                &ldquo;The curriculum emphasizes classroom learning, field immersion, internships, and applied research.&rdquo;
              </blockquote>
            </div>

            {/* ── Bottom Action Links with Dashed Underline ── */}
            <div className="mt-8 pt-2 flex flex-wrap items-center gap-8 md:gap-12">
              <Link 
                href="/programs"
                className="inline-flex flex-col items-start group cursor-pointer"
              >
                <span className="text-sm md:text-base font-bold text-[#0d1a63] group-hover:text-[#B34141] flex items-center gap-1.5 transition-colors">
                  Academics <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="w-full border-b border-dashed border-[#B34141] mt-1 group-hover:border-[#0d1a63] transition-colors" />
              </Link>
              
              <Link 
                href="/programs/srm"
                className="inline-flex flex-col items-start group cursor-pointer"
              >
                <span className="text-sm md:text-base font-bold text-[#0d1a63] group-hover:text-[#B34141] flex items-center gap-1.5 transition-colors">
                  School of Rural Management <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="w-full border-b border-dashed border-[#B34141] mt-1 group-hover:border-[#0d1a63] transition-colors" />
              </Link>

              <Link 
                href="/csr-partnerships"
                className="inline-flex flex-col items-start group cursor-pointer"
              >
                <span className="text-sm md:text-base font-bold text-[#0d1a63] group-hover:text-[#B34141] flex items-center gap-1.5 transition-colors">
                  Collaboration <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="w-full border-b border-dashed border-[#B34141] mt-1 group-hover:border-[#0d1a63] transition-colors" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
