"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  AcademicCapIcon, 
  GlobeAltIcon
} from "@heroicons/react/24/outline";

export default function SRMClient() {

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-text-dark relative text-white py-14 md:py-24 overflow-hidden">
        {/* Subtle background element */}
        <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/HeaderBg.png')",
        }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-32" />
        <div className="container-wide pl-5 md:pl-0 text-center max-w-4xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
            <AcademicCapIcon className="w-4 h-4 md:w-5 md:h-5 text-indigo-400 inline-block" />
            <span className="text-xs md:text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              School of Rural Management
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold! leading-tight text-white mb-6">
            School of Rural Management (SRM)
          </h1>
          <p className="max-w-3xl mx-auto pr-5 md:pr-0 text-sm md:text-lg text-gray-300 leading-relaxed text-justify md:text-center">
            Established in 2014 | AICTE & MoHRD Recognized  </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide max-w-6xl">
            <div className="grid lg:grid-cols-10 gap-12 items-center">
                <div className="space-y-6 lg:col-span-7">
                    <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">About SRM</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#21325b]">Charting Excellence in Rural Development Education</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        The School of Rural Management (SRM) was established in 2014 and since then, it has been offering a two-year post-graduate diploma program in rural management. 
                        It is an institute recognized both by the <strong>All-India Council for Technical Education (AICTE)</strong> and the <strong>Ministry of Human Resource Development (MoHRD)</strong>, Govt. of India.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        In these seven years, it has charted its own course in the world of professional rural development education. The course combines classroom work with two rigorous field work phases, when the students are placed with sector organizations to work with hands-on and live projects.
                    </p>
                </div>
                <div className="relative lg:col-span-3">
                    <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-xl">
                        <Image src="/SRM.png" alt="SRM Logo" fill className="object-contain p-10" priority />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SRM Highlights */}
      <section className="py-12 md:py-16 bg-gray-50/50">
        <div className="container-wide max-w-6xl px-5 md:px-0">
            <h2 className="text-xl font-bold text-gray-900 mb-8">SRM Highlights</h2>

            <ul className="space-y-6">
                {[
                  "In-house placement opportunities – KRIBHCO, GVT, NLRI, and SRM are the part of in-house institutions.",
                  "27+ Corporate connect sessions & Master classes with companies like KRIBHCO, Amazon, Axis Bank, P&G, Pushpanjali, AKRSP, Nestle, NABARD, IPCA, KVK, The Institute of Cost Accountants of India & many more.",
                  "Along with specialization in Rural Management, SRM offers one additional major specialization in HR/Marketing/ Finance/ Business Analytics, with the first year consisting of theoretical learning and final year consisting of practical application-based 3-month internships.",
                  "Hostel & Mess facility is available."
                ].map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 leading-relaxed md:text-[17px]">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                        <span>{highlight}</span>
                    </li>
                ))}
            </ul>
        </div>
      </section>

      {/* Course Offered */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide max-w-5xl px-5 md:px-0">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#21325b] mb-4">Courses Offered at SRM</h2>
                <p className="text-gray-500 font-medium">Join our flagship industry-aligned postgraduate program</p>
            </div>
            
            <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 md:p-14 shadow-premium border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
                
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                    <div className="space-y-4 flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent text-white/90 rounded-lg text-[10px] font-semibold uppercase tracking-widest">
                            2 Years | AICTE Approved
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                            Post Graduate Diploma Program in Rural Management (PGD-RM)
                        </h3>
                        <p className="text-gray-600 font-medium text-lg leading-relaxed">
                            With Specialization in <span className="text-primary">Rural Enterprise Management & Entrepreneurship</span>
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                            {[
                                "Industry-aligned Curriculum",
                                "Dual Specialization Options",
                                "3-Month Intensive Internship",
                                "100% Placement Assistance"
                            ].map((feat, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="flex flex-col gap-4 w-full md:w-auto">
                        <Link href="/apply-now?program=PGD-RM" className="bg-primary text-white text-center px-10 py-4 rounded-full font-bold shadow-xl hover:bg-primary/90 hover:-translate-y-1 transition-all active:scale-95">
                            Apply Now
                        </Link>
                        <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest">Limited Seats Available</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Recruiters Section */}
      {/* <section className="py-20 md:py-32 bg-white">
        <div className="container-wide max-w-6xl px-5 md:px-0">
            <div className="text-center mb-20">
                <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Partners in Change</span>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter" style={{ fontFamily: 'var(--font-heading), serif' }}>
                    List of Recruiters
                </h2>
                <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 max-w-6xl mx-auto">
                {[
                  "Development Support Centre",
                  "Development Credit Bank",
                  "Gramin Vikas Trust(East)",
                  "Aga Khan Rural Support Programme (India)",
                  "Development Quest Foundation",
                  "AROH Foundation",
                  "Educate Girls",
                  "Vrutti",
                  "KRIBHCO, Noida",
                  "Foundation to Educate Girls",
                  "NABCONS",
                  "Spandana Sphoorty Financial Limited",
                  "Utthan NGO",
                  "UDYOGINI",
                  "Asra Samajik Lok Kalyan Samiti"
                ].sort().map((name, idx) => (
                    <div key={idx} className="group flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-transparent hover:border-gray-100">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-sm font-bold text-primary border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors">
                            {idx + 1}
                        </div>
                        <span className="text-[15px] md:text-[17px] font-semibold text-gray-700 leading-tight group-hover:text-primary transition-colors">
                            {name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </section> */}
      
      {/* Final CTA */}
      <section className="bg-linear-to-r from-primary to-accent relative overflow-hidden text-white py-14 md:py-20 text-center border-t border-white/10">
        <div className="absolute w-full h-full bg-contain bg-no-repeat bg-right bg-full top-0 bg-[url('/patternSvg.svg')] opacity-20" />
        <div className="container-wide pl-5 md:pl-0 flex flex-col md:flex-row justify-between items-center relative z-10 max-w-6xl mx-auto gap-8 md:gap-14">
            <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
            Ready to Build a Career <br className="hidden md:block"/> in Rural Development?
          </h3>
          <p className="text-base md:text-lg text-white/90 max-w-2xl">
            Join a community of impact makers and leaders dedicated to sustainable transformation.
          </p>
            </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link href="/programs" className="w-full md:w-auto h-fit border-2 cursor-pointer border-white/40 bg-white/5 backdrop-blur-sm text-white font-bold px-8 py-3 text-sm md:text-base rounded-md hover:bg-white/10 transition-all duration-300 active:scale-95 whitespace-nowrap">
              Explore Programs
            </Link>
            <Link href="/apply-now" className="w-full md:w-auto h-fit border-2 cursor-pointer border-white/20 bg-white/10 backdrop-blur-md text-white font-bold px-8 py-3 text-sm md:text-base rounded-md shadow-2xl hover:bg-white hover:text-primary transition-all duration-300 active:scale-95 whitespace-nowrap">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
