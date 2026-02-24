"use client";

import React from "react";
import { contactData } from "@/src/data/contact-data";

export default function ContactHero() {
  const { hero } = contactData;

  return (
    <section className="relative pt-30 pb-20 overflow-hidden">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 z-0 bg-linear-to-r from-primary via-[#4a0e1c] to-primary" />
      
      {/* Decorative Overlay */}
      <div className="absolute inset-0 z-10 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="container-wide relative z-20 px-4 text-center text-white">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="text-[12px] bg-gray-200/20 p-2 mb-4 rounded-full font-semibold tracking-wide opacity-80">
            CONTACT US
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-5xl mx-auto mt-3">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/80 max-w-3xl mx-auto">
            {hero.tagline}
          </p>
          <div className="h-0.5 w-24 bg-white/20 mx-auto rounded-full" />
          <p className="text-sm font-medium text-white/60">
            {hero.address}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 max-w-4xl mx-auto">
            {hero.quickContact.map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 group">
                <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold tracking-wide">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
