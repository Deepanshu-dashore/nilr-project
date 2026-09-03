"use client";

import React, { useState, useEffect } from "react";
import SharedCtaBanner from "@/src/components/shared/unit-cta-banner";
import { admissionsData } from "@/src/data/admissions-data";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, AcademicCapIcon, CheckCircleIcon, ClockIcon, CalendarIcon, IdentificationIcon, UserPlusIcon, ClipboardDocumentCheckIcon, DocumentTextIcon, BriefcaseIcon, DocumentArrowDownIcon, XMarkIcon, ArrowPathIcon, ChevronLeftIcon, ChevronRightIcon, SparklesIcon, BuildingLibraryIcon, CurrencyRupeeIcon } from "@heroicons/react/24/outline";

type Program = {
  _id: string;
  name: string;
  description?: string;
  duration: number;
  fee: number;
  eligibility: string[];
  feeStructureDoc?: string;
  programType?: { name: string };
};

const PAGE_LIMIT = 6;

export default function AdmissionsClient() {
  const [programs, setPrograms]         = useState<Program[]>([]);
  const [loadingPrograms, setLoading]   = useState(true);
  const [openPdfId, setOpenPdfId]       = useState<string | null>(null);
  const [page, setPage]                 = useState(1);
  const [totalPages, setTotalPages]     = useState(1);
  const [total, setTotal]               = useState(0);

  const [siteInfo, setSiteInfo]         = useState({
    contactAddress: "CVRU Khandwa – NIRM Campus, Bhadwasa, Mhow-Neemuch Road, Ratlam, Madhya Pradesh 457222",
    contactEmail: "admissions@nirm.cvruk.in",
    contactPhone: "+91 12345-67890",
    helplinePhone: "+91 09876-54321",
    officeHours: "Monday to Saturday: 10:00 AM – 6:00 PM (Closed Sundays & Holidays)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.255252157876!2d75.07872367512006!3d23.523320078826014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39640419d441a225%3A0x53063056acb1832d!2sNational%20Livelihood%20Resource%20Institute!5e0!3m2!1sen!2sin!4v171567929771!5m2!1sen!2sin"
  });

  useEffect(() => {
    fetch("/api/site-info")
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data) {
          setSiteInfo((prev) => ({
            ...prev,
            ...res.data,
          }));
        }
      })
      .catch((err) => console.error("Error fetching site info on admissions page:", err));
  }, []);

  useEffect(() => {
    setLoading(true);
    setOpenPdfId(null);
    fetch(`/api/admissions/eligibility-fees?page=${page}&limit=${PAGE_LIMIT}`)
      .then((res) => res.json())
      .then((data) => {
        setPrograms(data.programs ?? []);
        setTotalPages(data.totalPages ?? 1);
        setTotal(data.total ?? 0);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [page]);

  return (
    <div className="flex flex-col bg-white">
      
      {/* 1. HERO SECTION (Matched to Programs Page) */}
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
              Admissions 2026–28
            </span>
          </div>
          <h1 className="text-2xl md:text-5xl font-semibold! leading-tight text-white mb-6">
            Your Gateway to a Career in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Rural Transformation</span>
          </h1>
          <p className="max-w-3xl md:pr-0 pr-5 mx-auto text-sm md:text-lg text-gray-300 leading-relaxed text-justify md:text-center">
            Begin your journey in rural management, sustainable agriculture, and livelihood development 
            through AICTE-approved and skill-oriented programs at CVRU Khandwa – NIRM Campus.
          </p>
        </div>
      </section>

      {/* 2. WELCOME / INTRODUCTION SECTION */}
      <section className="py-14 md:py-24 bg-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] z-0" />

        <div className="container-wide pl-5 md:pl-0 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Heading & Content */}
            <div className="lg:w-1/2 space-y-5">
              <span className="text-gray-600 inline-flex items-center gap-1.5 border-gray-300 font-medium capitalize border w-fit px-3 py-1.5 rounded-full text-[10px] md:text-xs shadow-xs">
                <SparklesIcon className="w-4 h-4 inline-block text-primary" />
                Welcome to NIRM
              </span>

              <h2 className="academic-section-title text-gray-900 text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight">
                Welcome to <span className="text-primary">CVRUK – NIRM</span> Admissions
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base text-justify md:text-left">
                <p className="text-gray-800 font-medium text-base md:text-lg leading-relaxed">
                  Start your journey towards a meaningful career in rural management, sustainable development, and livelihood innovation.
                </p>
                <p className="text-gray-600">
                  At NIRM, we offer a wide range of AICTE-approved postgraduate programs, diploma courses, and specialized certificate courses designed to meet the evolving needs of society and industry.
                </p>
              </div>

              {/* Quick Feature Badges */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                {[
                  "AICTE Approved Programs",
                  "Experiential Field Learning",
                  "100% Placement Support"
                ].map((feat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/70 text-xs font-semibold text-slate-700"
                  >
                    <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Campus Image Frame */}
            <div className="lg:w-1/2 relative w-full">
               <div className="aspect-[4/3] sm:aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl relative group border border-gray-100">
                  <img 
                    src="/srm-campus-building.jpg" 
                    alt="School of Rural Management Campus Building" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
               </div>
               <div className="absolute -top-4 -left-4 bg-white p-4 shadow-xl rounded-xl z-10 border border-gray-100 hidden md:block">
                  <p className="text-primary font-bold text-base leading-tight">Build your <br/>Future here</p>
               </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. ADMISSION PROCEDURE (Step Layout based on Reference Image) */}
      <section id="process" className="py-12 md:py-24 bg-primary/5">
        <div className="container-wide pl-5 md:pl-0 max-w-6xl">

          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl academic-section-title font-bold text-gray-900 mb-4 tracking-tight">
              Application Process (Indian Students)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-0 relative">
            
            {/* Steps simulated from image */}
            {[
              {
                step: "01",
                desc: "Apply online on our portal and submit registration form",
              },
              {
                step: "02",
                desc: "Appear for entrance test and personal screening / interview",
              },
              {
                step: "03",
                desc: "Check Merit List and receive Admission Offer Letter",
              },
              {
                step: "04",
                desc: "Complete fee payment (1st Instalment) & document verification",
              }
            ].map((item, index) => (
              <div key={index} className="flex relative md:px-4">
                <div className="flex gap-0 items-start relative z-10 w-full pr-4 lg:pr-0 border-l-2 border-[#d34c5b] pl-5 lg:border-none lg:pl-0">
                  <div className="flex flex-col items-center bg-accent p-2 px-3 shrink-0">
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Step</span>
                    <span className="text-3xl md:text-4xl font-light text-white leading-none mb-2">{item.step}</span>
                  </div>
                  <div className="lg:border-l-2 lg:border-[#d34c5b] lg:pl-4 mt-1">
                    <p className="text-sm md:ml-0 ml-3 md:text-[15px] text-gray-900 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>



      {/* 5. IMPORTANT DATES SECTION */}
      <section id="dates" className="py-12 md:py-24 bg-gray-50/50">
        <div className="container-wide px-12 md:px-0 max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-xl md:text-4xl academic-section-title font-bold">
              Important Dates <span className="md:inline-block hidden">(2026–28)</span>
            </h2>
            <div className="w-20 h-1 mb-2 bg-[#21325b]/20 mx-auto rounded-full" />
            <p className="academic-section-text text-sm md:text-base">
              Key dates for the 2026–28 academic session
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: "Application Opens", date: "15 May 2026", icon: ClockIcon },
              { label: "Last Date to Apply", date: "31 July 2026", icon: CalendarIcon },
              { label: "Entrance Test / Interview", date: "10 August 2026", icon: IdentificationIcon },
              { label: "Admission Confirmation", date: "1 September 2026", icon: UserPlusIcon }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white p-6 md:p-8 relative rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-200 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-6 flex items-center absolute top-0 right-0 justify-center rounded-bl-2xl bg-primary/70 text-white transition-all">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 animate-pulse" />
                  </div>
                  <h3 className="font-serif font-bold text-[#21325b] text-base md:text-lg mb-2 ">{item.label}</h3>
                  <div className="w-10 h-px bg-gray-200 mb-2" />
                  <p className="text-sm md:text-base text-gray-600 font-medium">{item.date}</p>
                  <div className="w-12 h-4 md:w-16 md:h-6 flex items-center absolute bottom-0 left-0 justify-center rounded-tr-full bg-primary/20 text-white transition-colors"/>
                  <div className="w-10 h-4 md:w-12 md:h-6 flex items-center absolute bottom-0 left-0 justify-center rounded-tr-full bg-primary/20 text-white transition-colors"/>
                  <div className="w-8 h-4 md:w-8 md:h-6 flex items-center absolute bottom-0 left-0 justify-center rounded-tr-full bg-primary/20 text-white transition-colors"/>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. COURSE ELIGIBILITY & FEES SECTION — API Driven */}
      <section id="fees" className="py-12 md:py-24 bg-white border-t border-gray-100">
        <div className="container-wide px-5 md:px-0 max-w-6xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl academic-section-title">
              Course Eligibility &amp; Fees
            </h2>
            <div className="w-24 h-1 bg-[#21325b]/20 mx-auto rounded-full mb-3" />
            <p className="academic-section-text text-sm md:text-base">
              Complete details on requirements and session investment for 2026–28.
            </p>
          </div>

          {/* 6-Card Grid Layout (matching reference design) */}
          {loadingPrograms ? (
            <div className="flex items-center justify-center py-20 gap-3 text-gray-400">
              <ArrowPathIcon className="w-5 h-5 animate-spin text-primary" />
              <span className="text-sm font-medium">Loading programs…</span>
            </div>
          ) : programs.length === 0 ? (
            <div className="text-center py-16 text-gray-400 text-sm bg-gray-50 rounded-lg border border-dashed border-gray-200">
              No programs found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((prog) => (
                <div
                  key={prog._id}
                  className="bg-white border border-gray-200 rounded-sm shadow-2xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Top Card Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    {prog.programType && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/5 px-2.5 py-0.5 rounded-full w-fit mb-3">
                        {prog.programType.name}
                      </span>
                    )}
                    <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug tracking-tight mb-2 group-hover:text-primary transition-colors">
                      {prog.name}
                    </h3>
                    <p className="text-xs md:text-[13px] text-gray-600 leading-relaxed font-normal line-clamp-3 mb-4">
                      {prog.description || (prog.eligibility && prog.eligibility.length > 0 ? prog.eligibility.join(". ") : "Comprehensive career-oriented program with hands-on grassroots immersion.")}
                    </p>
                  </div>

                  {/* Bottom Info & Action Bar (Duration + Annual Fee + Fee Structure Button) */}
                  <div className="border-t border-gray-100 bg-gray-50/70 px-5 py-3.5 flex items-center justify-between gap-3 mt-auto">
                    <div className="flex items-center gap-3 sm:gap-4 divide-x divide-gray-200 min-w-0">
                      {/* Duration */}
                      <div className="flex items-center gap-1.5">
                        <ClockIcon className="w-4 h-4 text-gray-400 shrink-0" />
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-medium leading-none mb-1">Duration</span>
                          <span className="text-xs font-bold text-gray-800 leading-none">
                            {prog.duration} {prog.duration === 1 ? 'Year' : 'Years'}
                          </span>
                        </div>
                      </div>

                      {/* Annual Fee */}
                      <div className="pl-3 sm:pl-4">
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-medium leading-none mb-1">Annual Fee</span>
                        <span className="text-xs font-bold text-[#21325b] leading-none">
                          ₹{prog.fee.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    {/* Fee Structure Action */}
                    {prog.feeStructureDoc ? (
                      <button
                        onClick={() => setOpenPdfId(prog._id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#21325b] text-white text-xs font-bold hover:bg-[#9b2928] transition-colors cursor-pointer shadow-2xs shrink-0"
                      >
                        <DocumentArrowDownIcon className="w-3.5 h-3.5" />
                        <span>Fee Structure</span>
                      </button>
                    ) : (
                      <span className="text-[11px] text-gray-400 italic shrink-0">No PDF attached</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!loadingPrograms && total > 0 && (
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400 font-medium tracking-wide">
                Showing <span className="font-bold text-gray-700">{(page - 1) * PAGE_LIMIT + 1}</span>–<span className="font-bold text-gray-700">{Math.min(page * PAGE_LIMIT, total)}</span> of{" "}
                <span className="font-bold text-gray-900">{total}</span>
              </p>
              <div className="inline-flex items-center gap-1.5 p-1 bg-gray-50/80 rounded-lg border border-gray-200/60 shadow-2xs">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold text-gray-600 hover:text-gray-900 hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-600 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  <ChevronLeftIcon className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Prev</span>
                </button>
                <div className="h-4 w-px bg-gray-200" />
                <div className="flex items-center gap-1 px-1">
                  {Array.from({ length: Math.max(1, totalPages) }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`min-w-7 h-7 px-2 flex items-center justify-center rounded-md text-xs font-bold transition-all cursor-pointer ${
                        p === page
                          ? "bg-[#21325b] text-white shadow-xs"
                          : "text-gray-500 hover:text-gray-900 hover:bg-white"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                <div className="h-4 w-px bg-gray-200" />
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages || totalPages <= 1}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold text-gray-600 hover:text-gray-900 hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-600 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRightIcon className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 md:mt-12 space-y-4 max-w-7xl mx-auto">
            <div className="flex gap-4 p-4 md:p-5 items-center rounded-sm bg-orange-50/50 border-l-2 border-accent shadow-sm">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <AcademicCapIcon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <p className="text-accent text-xs md:text-sm font-medium leading-relaxed italic">
                Special fee waivers available for SC/ST, BPL, and women candidates. Scholarships may be offered under government schemes and CSR sponsorships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PDF MODAL (Refined & crisp styling) ── */}
      {(() => {
        const activeProg = programs.find((p) => p._id === openPdfId);
        if (!activeProg?.feeStructureDoc) return null;
        
        const fileName = activeProg.feeStructureDoc.split("/").pop() || "fee-structure.pdf";

        return (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`Fee Structure — ${activeProg.name}`}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-900/75 backdrop-blur-xs transition-opacity"
              onClick={() => setOpenPdfId(null)}
            />

            {/* Modal Panel */}
            <div className="relative z-10 bg-white rounded-lg shadow-2xl w-full max-w-5xl flex flex-col overflow-hidden" style={{ height: '88vh' }}>

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50 gap-3 shrink-0">
                <div className="flex items-center gap-2.5 min-w-0 pr-2">
                  <span className="p-1.5 rounded-md bg-[#21325b]/10 text-[#21325b] shrink-0">
                    <DocumentArrowDownIcon className="w-4 h-4" />
                  </span>
                  <div className="truncate">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Fee Structure Document</span>
                    <h3 className="text-sm md:text-base font-bold text-slate-900 truncate leading-snug">{activeProg.name}</h3>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={activeProg.feeStructureDoc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#21325b] text-white text-xs font-semibold hover:bg-[#9b2928] transition-colors"
                  >
                    <span>Open in New Tab</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <button
                    onClick={() => setOpenPdfId(null)}
                    className="p-1.5 rounded-md text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer Container */}
              <div className="flex-1 w-full h-full bg-slate-100 relative">
                <object
                  data={`${activeProg.feeStructureDoc}#toolbar=1&navpanes=0`}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <iframe
                    src={`${activeProg.feeStructureDoc}#toolbar=1&navpanes=0`}
                    className="w-full h-full border-0"
                    title={`Fee Structure — ${activeProg.name}`}
                  >
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                      <p className="text-slate-600 text-sm font-medium mb-3">Your browser does not support inline PDF viewing.</p>
                      <a
                        href={activeProg.feeStructureDoc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#21325b] text-white text-xs font-bold rounded-md"
                      >
                        Download / View Document
                      </a>
                    </div>
                  </iframe>
                </object>
              </div>

            </div>
          </div>
        );
      })()}

      {/* 6. ADMISSIONS - CONTACT US (Based on provided Map Image Layout) */}
      <section id="contact-admissions" className="py-12 md:py-20 bg-white border-t border-gray-100">
        <div className="container-wide px-5 md:px-8 max-w-7xl mx-auto">
          
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl academic-section-title">
              Admissions – Contact Us
            </h2>
            <div className="w-20 h-1 mb-3 bg-[#21325b]/20 mx-auto rounded-full" />
            <p className="academic-section-text text-sm md:text-base">
              Have questions about the admission process, scholarships, or program details? Our team is here to help you every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left side: Maps Iframe Container */}
            <div className="lg:col-span-6 w-full h-[380px] md:h-[460px] lg:h-full bg-gray-100 rounded-2xl overflow-hidden shadow-md border border-gray-200/80 relative group">
              <iframe 
                src={siteInfo.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.255252157876!2d75.07872367512006!3d23.523320078826014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39640419d441a225%3A0x53063056acb1832d!2sNational%20Livelihood%20Resource%20Institute!5e0!3m2!1sen!2sin!4v171567929771!5m2!1sen!2sin"} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-semibold shadow-md border border-gray-100 text-gray-800 flex items-center gap-2 pointer-events-none">
                <MapPinIcon className="w-4 h-4 text-primary" />
                <span>NIRM Campus, Ratlam</span>
              </div>
            </div>

            {/* Right side: Contact Details Cards (Matching Map Height) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-3.5">
              {/* Campus Address Box */}
              <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-r from-slate-50 to-gray-50/80 border border-gray-100 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-1">
                  <MapPinIcon className="w-4 h-4" />
                  <span>Campus Address</span>
                </div>
                <h3 className="text-lg md:text-xl font-extrabold text-gray-900 tracking-tight">
                  CVRU Khandwa – NIRM Campus
                </h3>
                <p className="text-xs md:text-sm text-gray-600 font-medium mt-1 leading-relaxed">
                  {siteInfo.contactAddress}
                </p>
              </div>

              {/* Information Cards Stack */}
              <div className="space-y-3 flex-1 flex flex-col justify-between">
                {/* Office Hours */}
                <div className="p-3.5 md:p-4 rounded-xl bg-white border border-gray-100 shadow-2xs flex gap-3.5 items-start">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs md:text-sm font-bold text-gray-900 block mb-0.5">Office Hours</span>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
                      {siteInfo.officeHours}
                    </p>
                  </div>
                </div>

                {/* Campus Location */}
                <div className="p-3.5 md:p-4 rounded-xl bg-white border border-gray-100 shadow-2xs flex gap-3.5 items-start">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs md:text-sm font-bold text-gray-900 block mb-0.5">Campus Location</span>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
                      Centrally located at the NIRM Campus, Bhadwasa, Ratlam, ideal for hands-on rural immersion.
                    </p>
                  </div>
                </div>

                {/* Contact Numbers */}
                <div className="p-3.5 md:p-4 rounded-xl bg-white border border-gray-100 shadow-2xs flex gap-3.5 items-start">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs md:text-sm font-bold text-gray-900 block mb-0.5">Contact Numbers</span>
                    <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-4 text-xs md:text-sm">
                      <a href={`tel:${siteInfo.contactPhone.replace(/[^0-9+]/g, '')}`} className="text-gray-700 hover:text-primary font-semibold transition-colors">
                        {siteInfo.contactPhone} <span className="font-normal text-gray-400">(Main Office)</span>
                      </a>
                      {siteInfo.helplinePhone && (
                        <a href={`tel:${siteInfo.helplinePhone.split("/")[0].replace(/[^0-9+]/g, '')}`} className="text-gray-700 hover:text-primary font-semibold transition-colors">
                          {siteInfo.helplinePhone} <span className="font-normal text-gray-400">(Helpdesk)</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Email Enquiries */}
                <div className="p-3.5 md:p-4 rounded-xl bg-white border border-gray-100 shadow-2xs flex gap-3.5 items-start">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <EnvelopeIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs md:text-sm font-bold text-gray-900 block mb-0.5">Email Enquiries</span>
                    <p className="text-xs text-gray-500 mb-0.5">For general admissions and course-related queries, write to:</p>
                    <a href={`mailto:${siteInfo.contactEmail}`} className="text-xs md:text-sm text-primary hover:underline font-bold block">
                      {siteInfo.contactEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FINAL APPLY CTA */}
      <SharedCtaBanner
        id="apply"
        title="Take the First Step"
        highlightText="Toward Your Future"
        subtitle="Build a career in sustainable development, grassroots leadership, and social innovation."
        primaryBtnText="Apply Online"
        primaryBtnHref="/apply-now"
        secondaryBtnText=""
      />

    </div>
  );
}
