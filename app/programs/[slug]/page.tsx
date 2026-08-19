"use client";

import React, { useEffect, useState, use, useRef, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import {
  AcademicCapIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  ChevronRightIcon,
  ArrowDownTrayIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { SemesterAccordion } from "@/src/components/programs/SemesterAccordion";
import { API_ENDPOINTS } from "@/src/config/api.config";

interface ProgramStructureItem {
  sem: string;
  courseType: string;
  courseName: string;
  credits: number;
}

interface Program {
  _id: string;
  name: string;
  description: string;
  duration: number;
  fee: number;
  lastApplyDate?: string;
  eligibility: string[];
  highlights: string[];
  termsAndConditions: string[];
  outcomes: string[];
  careerPaths: string[];
  feeStructureDoc?: string;
  brochureDoc?: string;
  programType: { _id: string; name: string };
  programStructure: ProgramStructureItem[];
  slug: string;
}

interface ProgramType {
  _id: string;
  name: string;
}

const sections = [
  { id: "overview", label: "Programme Overview" },
  { id: "highlights", label: "Programme Highlights" },
  { id: "eligibility", label: "Eligibility" },
  { id: "structure", label: "Programme Structure" },
  { id: "duration", label: "Duration & Fees" },
  { id: "career", label: "Career Prospects" },
  { id: "outcomes", label: "Programme Outcomes" },
  { id: "terms", label: "Terms & Conditions" },
];

export default function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [program, setProgram] = useState<Program | null>(null);
  const [programTypes, setProgramTypes] = useState<ProgramType[]>([]);
  const [activeSection, setActiveSection] = useState("overview");
  const [isLoading, setIsLoading] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [progRes, typesRes] = await Promise.all([
          axios.get(API_ENDPOINTS.PROGRAMS.GET_BY_SLUG(slug)),
          axios.get(API_ENDPOINTS.PROGRAM_TYPES.GET_ALL),
        ]);
        if (progRes.data.success) setProgram(progRes.data.data);
        if (typesRes.data.success) setProgramTypes(typesRes.data.data);
      } catch (err) {
        console.error("Error fetching program details:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  // Scroll-spy with IntersectionObserver
  useEffect(() => {
    if (!program) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [program]);

  const scrollToSection = useCallback((id: string) => {
    setActiveSection(id);
    isClickScrolling.current = true;
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  }, []);

  // Group program structure by semester
  const groupedStructure = (program?.programStructure || []).reduce(
    (acc: Record<string, ProgramStructureItem[]>, item) => {
      const key = item.sem || "General";
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    },
    {}
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-red-100 border-t-red-600 rounded-full animate-spin" />
          <p className="text-gray-400 font-medium text-sm animate-pulse">
            Loading programme details…
          </p>
        </div>
      </div>
    );
  }

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <AcademicCapIcon className="w-16 h-16 text-gray-300 mb-6" />
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Programme Not Found
        </h1>
        <p className="text-gray-500 mb-8 max-w-md">
          The programme you are looking for may have been moved or no longer
          exists.
        </p>
        <Link
          href="/programs"
          className="bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-accent transition-colors"
        >
          Back to Programmes
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="relative h-[300px] md:h-[420px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/HeaderBg.png"
            alt={program.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Programme type panel – right side */}
        <div className="absolute right-0 top-0 h-full hidden lg:flex flex-col bg-primary w-64 z-10">
          <div className="px-6 py-5 border-b border-primary/50">
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest">
              Explore
            </p>
          </div>
          {programTypes.map((type) => (
            <Link
              key={type._id}
              href={`/programs#${type.name.toLowerCase()}`}
              className="flex items-center justify-between px-6 py-4 text-white text-sm font-bold border-b border-white/10 hover:bg-primary/5 transition-colors group"
            >
              <span>{type.name} Programmes</span>
              <ChevronRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

        {/* Hero text */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-10 px-4 md:px-12 lg:pr-72">
          <nav className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Link href="/programs" className="hover:text-white transition-colors">
              Programmes
            </Link>
            <ChevronRightIcon className="w-3 h-3" />
            <span className="text-white/50">{program.programType?.name}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 max-w-2xl">
            {program.name}
          </h1>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/apply-now?program=${program.name}`}
              className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-sm hover:bg-accent hover:text-white transition-all shadow-xl"
            >
              Apply Now
            </Link>
            {program.feeStructureDoc && (
              <a
                href={program.feeStructureDoc}
                target="_blank"
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <ArrowDownTrayIcon className="w-4 h-4" />
                Download Brochure
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────── MAIN LAYOUT ─────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16 flex flex-col lg:flex-row gap-10">
        {/* ── SIDEBAR ── */}
        <aside className="lg:w-64 shrink-0">
          <div className="sticky top-24 border border-gray-200 shadow-sm bg-white">
            <div className="px-5 pt-5 pb-3 border-b border-gray-200">
              <h2 className="text-base font-black text-gray-900 uppercase tracking-tight">
                Course Content
              </h2>
              <div className="w-10 h-[3px] bg-accent mt-2 rounded-full" />
            </div>
            <nav className="flex flex-col py-2">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className={`text-left text-sm px-5 py-3 font-semibold transition-all border-l-4 ${
                    activeSection === s.id
                      ? "border-red-600 bg-accent text-white"
                      : "border-transparent text-gray-600 hover:text-white hover:bg-accent/50"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* ── CONTENT ── */}
        <main className="grow min-w-0 space-y-10">

          {/* OVERVIEW */}
          <section id="overview" className="scroll-mt-28">
            <h2 className="text-3xl font-semibold! text-primary/80 mb-8">
              {program.name}
            </h2>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Programme Overview
              </h3>
              <div className="w-16 h-[3px] bg-accent mb-6 rounded-full" />
              <div className="text-gray-900 leading-relaxed space-y-4 text-base">
                {program.description.split("\n").map(
                  (para, i) =>
                    para.trim() && <p key={i}>{para}</p>
                )}
              </div>
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* HIGHLIGHTS */}
          <section id="highlights" className="scroll-mt-28">
            <div className="bg-accent rounded-none p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-1">
                Programme Highlights
              </h3>
              <div className="w-14 h-[3px] bg-white mb-6" />
              <ul className="space-y-3">
                {program.highlights.map((h, i) => {
                  const colonIdx = h.indexOf(":");
                  const hasBold = colonIdx !== -1;
                  const bold = hasBold ? h.slice(0, colonIdx) : "";
                  const rest = hasBold ? h.slice(colonIdx + 1).trimStart() : h;
                  return (
                    <li key={i} className="flex items-start gap-3 text-white text-sm leading-relaxed">
                      <span className="w-[6px] h-[6px] rounded-full bg-white shrink-0 mt-[7px]" />
                      <span>
                        {hasBold ? (
                          <>
                            <strong className="font-bold text-white">{bold} : </strong>
                            {rest}
                          </>
                        ) : (h)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* ELIGIBILITY */}
          <section id="eligibility" className="scroll-mt-28">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Eligibility
            </h3>
            <div className="w-16 h-[3px] bg-accent mb-6 rounded-full" />
            <ul className="space-y-3">
              {program.eligibility.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-[15px] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-gray-200" />

          {/* PROGRAMME STRUCTURE */}
          <section id="structure" className="scroll-mt-28">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Programme Structure
            </h3>
            <div className="w-14 h-[3px] bg-red-600 mb-6" />
            {Object.keys(groupedStructure).length === 0 ? (
              <p className="text-gray-400 text-sm italic">
                Programme structure details not yet added.
              </p>
            ) : (
              <SemesterAccordion groupedStructure={groupedStructure} />
            )}
          </section>

          <hr className="border-gray-200" />

          {/* DURATION & FEES */}
          <section id="duration" className="scroll-mt-28">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Duration &amp; Fees
            </h3>
            <div className="w-16 h-[3px] bg-accent mb-6 rounded-full" />

            <div className="bg-[#f1f2f2] overflow-hidden mb-6">
              <div className="grid grid-cols-2 divide-x divide-gray-300 px-8">
                <div className="p-6">
                  <p className="text-gray-800 text-lg font-bold capitalize mb-2">
                    Duration
                  </p>
                    <div>
                      <p className="text-3xl font-bold text-gray-900">
                        {program.duration} Years
                      </p>
                      {program.lastApplyDate && (
                        <p className="text-gray-800 text-sm mt-1">
                          Last Date to Apply :{" "}
                          {new Date(program.lastApplyDate).toLocaleDateString(
                            "en-IN",
                            { day: "numeric", month: "long", year: "numeric" }
                          )}
                        </p>
                      )}
                    </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-800 text-lg font-bold capitalize mb-2">
                    Fee Per Year
                  </p>
                    <p className="text-3xl font-bold text-gray-900">
                      ₹ {program.fee.toLocaleString("en-IN")}
                    </p>
                </div>
              </div>
              <div className="p-6 px-8 bg-gray-50 border-t border-gray-200 flex flex-col lg:flex-row items-center justify-between gap-6">
                <Link
                  href={`/apply-now?program=${program.name}`}
                  className="w-full lg:w-auto text-center bg-accent text-white font-bold px-12 py-3.5 rounded-full hover:bg-accent transition-all shadow-md hover:shadow-red-200 uppercase tracking-wide text-sm"
                >
                  Apply Now
                </Link>

                <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10">
                  {program.brochureDoc && (
                    <a
                      href={program.brochureDoc}
                      target="_blank"
                      className="flex items-center gap-2 text-primary font-bold text-base hover:underline group"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" className="shrink-0 group-hover:scale-110 transition-transform"><path fill="#ef5350" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m4.93 10.44c.41.9.93 1.64 1.53 2.15l.41.32c-.87.16-2.07.44-3.34.93l-.11.04l.5-1.04c.45-.87.78-1.66 1.01-2.4m6.48 3.81c.18-.18.27-.41.28-.66c.03-.2-.02-.39-.12-.55c-.29-.47-1.04-.69-2.28-.69l-1.29.07l-.87-.58c-.63-.52-1.2-1.43-1.6-2.56l.04-.14c.33-1.33.64-2.94-.02-3.6a.85.85 0 0 0-.61-.24h-.24c-.37 0-.7.39-.79.77c-.37 1.33-.15 2.06.22 3.27v.01c-.25.88-.57 1.9-1.08 2.93l-.96 1.8l-.89.49c-1.2.75-1.77 1.59-1.88 2.12c-.04.19-.02.36.05.54l.03.05l.48.31l.44.11c.81 0 1.73-.95 2.97-3.07l.18-.07c1.03-.33 2.31-.56 4.03-.75c1.03.51 2.24.74 3 .74c.44 0 .74-.11.91-.3m-.41-.71l.09.11c-.01.1-.04.11-.09.13h-.04l-.19.02c-.46 0-1.17-.19-1.9-.51c.09-.1.13-.1.23-.1c1.4 0 1.8.25 1.9.35M7.83 17c-.65 1.19-1.24 1.85-1.69 2c.05-.38.5-1.04 1.21-1.69zm3.02-6.91c-.23-.9-.24-1.63-.07-2.05l.07-.12l.15.05c.17.24.19.56.09 1.1l-.03.16l-.16.82z"/></svg>
                      <span className="whitespace-nowrap">Download Brochure</span>
                      <ArrowDownTrayIcon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    </a>
                  )}

                  {program.feeStructureDoc && (
                    <a
                      href={program.feeStructureDoc}
                      target="_blank"
                      className="flex items-center gap-2 text-primary font-bold text-base hover:underline group"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" className="shrink-0 group-hover:scale-110 transition-transform"><path fill="#ef5350" d="M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m4.93 10.44c.41.9.93 1.64 1.53 2.15l.41.32c-.87.16-2.07.44-3.34.93l-.11.04l.5-1.04c.45-.87.78-1.66 1.01-2.4m6.48 3.81c.18-.18.27-.41.28-.66c.03-.2-.02-.39-.12-.55c-.29-.47-1.04-.69-2.28-.69l-1.29.07l-.87-.58c-.63-.52-1.2-1.43-1.6-2.56l.04-.14c.33-1.33.64-2.94-.02-3.6a.85.85 0 0 0-.61-.24h-.24c-.37 0-.7.39-.79.77c-.37 1.33-.15 2.06.22 3.27v.01c-.25.88-.57 1.9-1.08 2.93l-.96 1.8l-.89.49c-1.2.75-1.77 1.59-1.88 2.12c-.04.19-.02.36.05.54l.03.05l.48.31l.44.11c.81 0 1.73-.95 2.97-3.07l.18-.07c1.03-.33 2.31-.56 4.03-.75c1.03.51 2.24.74 3 .74c.44 0 .74-.11.91-.3m-.41-.71l.09.11c-.01.1-.04.11-.09.13h-.04l-.19.02c-.46 0-1.17-.19-1.9-.51c.09-.1.13-.1.23-.1c1.4 0 1.8.25 1.9.35M7.83 17c-.65 1.19-1.24 1.85-1.69 2c.05-.38.5-1.04 1.21-1.69zm3.02-6.91c-.23-.9-.24-1.63-.07-2.05l.07-.12l.15.05c.17.24.19.56.09 1.1l-.03.16l-.16.82z"/></svg>
                      <span className="whitespace-nowrap">Fee Structure</span>
                      <ArrowDownTrayIcon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* CAREER PROSPECTS */}
          <section id="career" className="scroll-mt-28">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Career Prospects
            </h3>
            <div className="w-16 h-[3px] bg-accent mb-6 rounded-full" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {program.careerPaths.map((path, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-red-200 hover:bg-accent/5 transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="text-gray-700 font-medium text-xs">
                    {path}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* PROGRAMME OUTCOMES */}
          <section id="outcomes" className="scroll-mt-28">
            <div className="bg-[#1b2a4a] p-8 md:p-10" style={{ borderLeft: "5px solid #c0392b" }}>
              <h3 className="text-2xl font-bold text-white mb-1">
                Programme Outcomes
              </h3>
              <div className="w-14 h-[3px] bg-white mb-6" />
              <ul className="space-y-3">
                {program.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-white">
                    <span className="w-[6px] h-[6px] rounded-full bg-white shrink-0 mt-[8px]" />
                    <span className="text-sm leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <hr className="border-gray-200" />

          {/* TERMS & CONDITIONS */}
          <section id="terms" className="scroll-mt-28">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Terms &amp; Conditions Apply:
            </h3>
            <div className="w-14 h-[3px] bg-accent mb-4" />
            <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
              Please read the following terms and conditions carefully before applying to this programme.
            </p>
            <ul className="space-y-3 mb-6">
              {program.termsAndConditions.map((term, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-gray-500 shrink-0 mt-[8px]" />
                  <span className="text-gray-700 text-[15px] leading-relaxed">{term}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-gray-200" />

          {/* FAQs - HIDDEN */}
          <section id="faqs" className="scroll-mt-28 hidden">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">FAQs</h3>
            <div className="w-16 h-[3px] bg-accent mb-6 rounded-full" />
            <div className="border border-dashed border-gray-300 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="w-8 h-8 text-gray-300" />
              </div>
              <h4 className="text-lg font-bold text-gray-700 mb-2">
                Have questions about this programme?
              </h4>
              <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
                Our admissions team is available to answer all your programme-related questions.
              </p>
              <Link
                href="/contact"
                className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors"
              >
                Contact Admissions
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
