import React from "react";
import Hero from "@/src/components/shared/hero";
import ApprovalsContent from "@/src/components/approvals/approvals-content";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Approval & Recognition | NIRM Campus",
  description: "Explore the statutory approvals, academic affiliations, and national recognitions of the National Institute of Rural Management.",
};

export default function ApprovalsPage() {
  return (
    <main className="flex flex-col bg-white">
      {/* Header Section (Hero Component) */}
      <Hero
        tag="ACCREDITATIONS & RECOGNITIONS"
        tagIcon={ShieldCheckIcon}
        title="Institutional Approval & Excellence"
        subtitle="A snapshot of our academic affiliations, legal recognitions, and the various awards that validate our commitment to institutional excellence and rural development."
      />

      {/* Main Content (Approvals & Recognitions) */}
      <ApprovalsContent />
    </main>
  );
}
