"use client";

import React from "react";
import { campusData } from "@/src/data/campus-data";
import {
  AcademicCapIcon,
  HomeModernIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
  BeakerIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";

const facilityCards = [
  {
    icon: AcademicCapIcon,
    title: "Training Centre",
    img: "/campus-img/campusDron-2.jpeg",
    items: [
      "Easy-access from major highways",
      "Scenic Maleni River and green surroundings",
      `Capacity for ${campusData.infrastructure.trainingCentre.capacity}`,
    ],
  },
  {
    icon: HomeModernIcon,
    title: "Hostel Facilities",
    img: "/campus-img/campusDron-1.jpeg",
    items: [
      "48 participants | 80+ beds",
      "Lecture theatres with AV setups",
      "60 seats each",
    ],
  },
  {
    icon: BuildingOffice2Icon,
    title: "Administrative & Academic Buildings",
    img: "/campus-img/campusImg.jpeg",
    items: [
      "3-storey academic block",
      "Leadership offices & faculty workspaces",
      "AICTE approved labs",
    ],
  },
  {
    icon: ShieldCheckIcon,
    title: "Residential Facilities",
    img: null,
    items: [
      "Meerashray Hostel Block",
      "Balram Bhawan Dormitory",
      "24×7 Security & Wi-Fi",
    ],
  },
  {
    icon: BeakerIcon,
    title: "Labs & Classrooms",
    img: null,
    badge: "Smart",
    items: [
      "GIS lab for watershed mapping",
      "IT labs & media center",
      "24×7 security & Wi-Fi",
    ],
  },
  {
    icon: TrophyIcon,
    title: "Sports Facilities",
    img: null,
    items: [
      "4,500 sqm multipurpose ground",
      "Volleyball court",
      "Yoga & wellness open spaces",
    ],
  },
];

export default function InfrastructureAcademic() {
  return (
    <section
      id="infrastructure"
      className="bg-[#f8f9fb] border-t border-gray-200"
    >
      <div className="container-wide py-20">

        {/* Section Header */}
        <div className="mb-4 flex items-center gap-4">
          <BuildingOffice2Icon className="w-8 h-8 text-gray-800" />
          <h2 className="text-3xl md:text-4xl font-medium! text-gray-900 tracking-tight">
            Infrastructure & Facilities
          </h2>
          <div className="flex-1 h-px bg-gray-300 hidden md:block" />
        </div>
        <p className="text-sm mb-10 md:text-base text-gray-600 max-w-6xl text-left">
          At Nilr CVRUK, we prioritize sustainable development and provide modern facilities to support our academic and research programs. Our campus is equipped with state-of-the-art infrastructure, including classrooms, labs, and research facilities, to ensure a conducive learning environment.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-200">

          {facilityCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="bg-white border-r border-b border-gray-200 p-6 flex flex-col"
              >
                {card.img && (
                  <div className="mb-5">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-44 object-cover"
                    />
                  </div>
                )}

                {/* Title */}
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="text-base font-semibold text-gray-900">
                    {card.title}
                  </h3>
                </div>

                {/* List */}
                <ul className="space-y-2 text-sm text-gray-600">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <div className="w-6 h-6 text-green-600 mt-0.5 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary -mt-2 shrink-0" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="M176 128a48 48 0 1 1-48-48a48 48 0 0 1 48 48" opacity={0.2}></path>
                            <path d="M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></path>
                          </g>
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {card.badge && (
                  <span className="mt-4 text-xs font-semibold text-primary uppercase tracking-widest">
                    {card.badge} Enabled
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}