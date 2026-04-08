"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { XMarkIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

import megaMenuSections from "../../data/mega-menu-links.json";


export default function EnquiryModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isOpen = searchParams.get("modal") === "enquiry";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("modal");
    const qs = params.toString();
    router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
  };

  return (
    <div className="fixed inset-0 z-150 flex items-stretch animate-in fade-in duration-300">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

      {/* Panel */}
      <div className="relative w-full h-full bg-[#1e2d6b] overflow-hidden flex flex-col animate-in slide-in-from-top-4 duration-500 ease-out">

        {/* ── Left decorative pattern ── */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[130px] md:w-[185px] z-0 select-none opacity-100">
          <Image
            src="/leftPattern.svg"
            alt=""
            width={184}
            height={638}
            className="h-full w-auto object-cover object-left"
            aria-hidden="true"
          />
        </div>

        {/* ── Header bar ── */}
        <div className="relative z-10 flex items-center justify-between px-6 md:px-10 py-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 rounded-full bg-[#ba303b]" />
            <span className="text-white font-bold text-sm uppercase tracking-widest">
              Site Navigation
            </span>
          </div>
          <button
            onClick={handleClose}
            title="Close"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest group"
          >
            Close
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/10 transition-all">
              <XMarkIcon className="w-4 h-4" />
            </span>
          </button>
        </div>

        {/* ── Scrollable mega-menu grid ── */}
        <div className="relative z-10 flex-1 overflow-y-auto custom-scrollbar">
          <div className="pl-[120px] md:pl-[170px] pr-4 md:pr-10 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-8">

              {/* Main Sections - 3 Columns Column Span */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                {megaMenuSections.filter(s => !s.accent && s.title !== "Quick Links").map((section) => (
                  <div key={section.title} className="flex flex-col">
                    <h3 className="text-white font-bold text-[12px] md:text-[13px] mb-3 leading-tight uppercase tracking-wider opacity-90">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            onClick={handleClose}
                            className="text-blue-100/60 hover:text-white text-[11px] md:text-[12px] leading-snug transition-colors duration-150 flex items-start gap-1.5 group/link"
                          >
                            <span className="mt-1.5 w-0 h-px bg-[#ba303b] group-hover/link:w-2.5 transition-all duration-200 shrink-0" />
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Quick Links - Dedicated 4th Column + Spanning */}
              <div className="lg:col-span-1 lg:row-span-2 border-l border-white/10 pl-8">
                {megaMenuSections.filter(s => s.accent || s.title === "Quick Links").map((section) => (
                  <div key={section.title} className="flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ba303b]" />
                      <h3 className="text-[#ba303b] font-black text-[13px] md:text-[14px] uppercase tracking-[0.15em]">
                        {section.title}
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            onClick={handleClose}
                            className="text-white hover:text-[#ba303b] text-[11px] md:text-[12px] font-medium leading-snug flex items-center gap-2 hover:translate-x-1 transition-all duration-200"
                          >
                            <ArrowRightIcon className="w-2.5 h-2.5 opacity-30 shrink-0" />
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ── Footer bar ── */}
        <div className="relative z-10 shrink-0 border-t border-white/10 px-6 md:px-10 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/apply-now"
              onClick={handleClose}
              className="inline-flex items-center gap-2 bg-[#ba303b] hover:bg-[#a02831] text-white text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all active:scale-95 shadow"
            >
              Apply Now
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/admissions"
              onClick={handleClose}
              className="text-white/60 hover:text-white text-[11px] font-semibold uppercase tracking-widest transition-colors"
            >
              Admissions Info
            </Link>
          </div>
          <p className="text-white/30 text-[10px] hidden md:block">
            CVRU Khandwa – NLRI Ratlam Campus
          </p>
        </div>
      </div>
    </div>
  );
}
