import React from "react";
import Hero from "@/src/components/shared/hero";
import UnitDetailView from "@/src/components/specialized-units/unit-detail-view";
import { specializedUnitsData } from "@/src/data/specialized-units-data";
import { BeakerIcon } from "@heroicons/react/24/outline";
import { notFound } from "next/navigation";

export const metadata = {
  title: "SMU (Seed Manufacturing Unit) | NLRI Ratlam",
  description: "Certified seed production and multiplication program at NLRI Ratlam producing 4,500+ quintals of soybean and crop seeds annually.",
};

export default function SMUUnitPage() {
  const unit = specializedUnitsData.smu;
  if (!unit) return notFound();

  return (
    <div className="flex flex-col bg-white">
      <Hero
        tag={unit.tag}
        title={unit.title}
        subtitle={unit.heroDescription}
        tagIcon={BeakerIcon}
      />
      <UnitDetailView unit={unit} />
    </div>
  );
}
