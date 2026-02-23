"use client";

import React from "react";
import { contactData } from "@/src/data/contact-data";

export default function ContactHero() {
  return (
    <section className="bg-white pt-32 pb-16 px-4">
      <div className="container-wide text-center">
        <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="text-accent font-black tracking-[0.3em] uppercase text-xs block">
            Contact
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold text-text-dark tracking-tight leading-tight">
            Get in touch with <br/>
            <span className="text-primary italic font-serif">CVRUK – NLRI Campus</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted font-medium leading-relaxed max-w-2xl mx-auto">
            {contactData.hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}
