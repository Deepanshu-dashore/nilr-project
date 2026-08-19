import React from "react";
import Hero from "@/src/components/shared/hero";
import UnitDetailView from "@/src/components/specialized-units/unit-detail-view";
import { specializedUnitsData } from "@/src/data/specialized-units-data";
import { BuildingLibraryIcon } from "@heroicons/react/24/outline";
import { notFound } from "next/navigation";

export const metadata = {
  title: "AC&ABC (Agri-Clinics & Agri-Business Centres) | NLRI Ratlam",
  description: "Official Nodal Training Institute (NTI) under MANAGE Hyderabad & Ministry of Agriculture for 45-day Agri-Clinics & Agri-Business residential training and NABARD loan guidance.",
};

export default function ACBCUnitPage() {
  const unit = specializedUnitsData.acbc;
  if (!unit) return notFound();

  return (
    <div className="flex flex-col bg-white">
      <Hero
        tag={unit.tag}
        title={unit.title}
        subtitle={unit.heroDescription}
        tagIcon={BuildingLibraryIcon}
      />
      <UnitDetailView unit={unit} />
    </div>
  );
}
