import React from "react";
import Hero from "@/src/components/shared/hero";
import UnitDetailView from "@/src/components/specialized-units/unit-detail-view";
import { specializedUnitsData } from "@/src/data/specialized-units-data";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Mission Happy Ratlam | NIRM Ratlam & Gramin Vikas Trust",
  description: "Flagship rural development initiative by NIRM and Gramin Vikas Trust (GVT) transforming villages through women empowerment, water security, health, and sustainable livelihoods.",
};

export default function MissionHappyRatlamUnitPage() {
  const unit = specializedUnitsData["mission-happy-ratlam"];
  if (!unit) return notFound();

  return (
    <div className="flex flex-col bg-white">
      <Hero
        tag={unit.tag}
        title={unit.title}
        subtitle={unit.heroDescription}
        tagIcon={UserGroupIcon}
      />
      <UnitDetailView unit={unit} />
    </div>
  );
}
