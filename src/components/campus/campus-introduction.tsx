"use client";

import React from "react";
import { campusData } from "@/src/data/campus-data";
import { CheckCircleIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function CampusIntroduction() {
  return (
    <section id="introduction" className="bg-white">

      {/* ── 2. Full-Width Panoramic Campus Image ── */}
      <div className="relative w-full h-[55vh] md:h-[90vh] overflow-hidden group border-b border-gray-100">
        <div className="pt-24 absolute z-10 pb-12 text-center inset-0 mx-auto px-6 space-y-6 bg-linear-to-t from-transparent to-black/50">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
          <AcademicCapIcon className="w-5 h-5 text-indigo-400 inline-block" />
          <span className="text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Campus
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
          Experience Life and Learning at
          <br />
          CVRU Khandwa – NLRI Ratlam
        </h1>
        
        <p className="text-white/70 text-lg md:text-base leading-relaxed font-medium max-w-3xl mx-auto">
          The CVRUK – NLRI Campus, located in Bhadwasa, Ratlam (Madhya Pradesh), features top-notch academic and training infrastructure amid a sustainable, green environment.
        </p>
      </div>
        <Image
          src="/campus-img/campusDron-2.jpeg"
          alt="CVRUK NLRI campus panoramic aerial view"
          fill
          priority
          className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-5000"
          sizes="100vw"
        />
        {/* Subtle vignette for depth */}
        <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* ── 3. Introduction Text + Features ── */}
      <div className="container-wide py-20 space-y-16">
        
        {/* Intro paragraphs */}
        <div className="w-full">
          <div className="space-y-6 text-gray-600 text-[1.1rem] font-medium leading-[1.8]">
            {campusData.introduction.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-10 text-xl font-bold text-primary border-l-4 border-accent pl-6 py-2">
            {campusData.introduction.closing}
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campusData.introduction.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary/15 transition-all duration-300 group"
            >
              <CheckCircleIcon className="h-6 w-6 text-primary shrink-0 mt-0.5 group-hover:text-accent transition-colors duration-300" />
              <span className="text-[15px] font-bold text-gray-700 leading-snug">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
