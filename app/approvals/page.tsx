import React from "react";
import ApprovalsContent from "@/src/components/approvals/approvals-content";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Approval & Recognition | NLRI Campus",
  description: "Explore the statutory approvals, academic affiliations, and national recognitions of the National Institute for Livelihood and Research.",
};

export default function ApprovalsPage() {
  return (
    <main className="flex flex-col bg-white">
      {/* Header Section (Gallery Style) */}
      <section className="bg-slate-900 relative text-white py-12 md:py-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/HeaderBg.png')" }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <ShieldCheckIcon className="w-4 h-4 text-indigo-400" />
            <span className="text-[10px] font-bold tracking-widest text-indigo-300 uppercase">
              ACCREDITATIONS & RECOGNITIONS
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Institutional Approval & Excellence</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            A snapshot of our academic affiliations, legal recognitions, and the various awards that validate our commitment to institutional excellence and rural development.
          </p>
        </div>
      </section>

      {/* Main Content (Approvals & Recognitions) */}
      <ApprovalsContent />
    </main>
  );
}
