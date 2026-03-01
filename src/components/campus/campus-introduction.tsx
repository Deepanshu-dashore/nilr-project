"use client";

import React from "react";
import { campusData } from "@/src/data/campus-data";
import { CheckCircleIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function CampusIntroduction() {
  return (
    <section id="introduction" className="bg-white">

      {/* ── 2. Full-Width Panoramic Campus Image ── */}
      <div className="relative w-full min-h-[500px] h-[70vh] md:h-[90vh] overflow-hidden group border-b border-gray-100">
        <div className="pt-12 md:pt-24 absolute z-10 pb-8 md:pb-12 text-center inset-0 mx-auto px-6 space-y-6 flex flex-col items-center justify-center md:justify-start bg-linear-to-t from-transparent to-black/60">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-2 md:mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
          <AcademicCapIcon className="w-5 h-5 text-indigo-400 inline-block" />
          <span className="text-xs md:text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Campus
          </span>
        </div>
        
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight font-extrabold md:font-normal">
          Experience Life and Learning at
          <br className="hidden md:block" />
          CVRU Khandwa – NLRI Ratlam
        </h1>
        
        <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed font-medium max-w-3xl mx-auto">
          The CVRUK – NLRI Campus, located in Bhadwasa, Ratlam (Madhya Pradesh), features top-notch academic and training infrastructure amid a sustainable, green environment.
        </p>
      </div>
        <Image
          src="/campus-img/campusDron-2.jpeg"
          alt="CVRUK NLRI campus panoramic aerial view"
          fill
          priority
          className="object-cover object-center group-hover:scale-110 transition-transform duration-[5000ms] ease-out"
          sizes="100vw"
        />
      </div>

      {/* ── 3. Introduction Text + Features ── */}
      <div className="container-wide md:ml-0 pl-5 py-12 md:py-20 space-y-12 md:space-y-16">
        
        {/* Intro paragraphs */}
        <div className="w-full">
          <div className="space-y-6 text-gray-600 text-sm md:text-left text-justify md:text-[1.1rem] font-medium leading-[1.8]">
            {campusData.introduction.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-8 md:mt-10 text-lg md:text-xl font-bold text-primary border-l-4 border-accent pl-6 py-2">
            {campusData.introduction.closing}
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {campusData.introduction.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-primary/15 transition-all duration-300 group"
            >
              <CheckCircleIcon className="h-6 w-6 text-primary shrink-0 mt-0.5 group-hover:text-accent transition-colors duration-300" />
              <span className="text-sm md:text-[15px] font-bold text-gray-700 leading-snug">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
