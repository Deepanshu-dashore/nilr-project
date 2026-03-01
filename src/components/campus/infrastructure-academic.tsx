"use client";

import React from "react";
import { campusData } from "@/src/data/campus-data";
import {
  AcademicCapIcon,
  HomeModernIcon,
  BuildingOffice2Icon,
  BeakerIcon,
  TrophyIcon,
  BookOpenIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";

const facilityCards = [
  {
    icon: AcademicCapIcon,
    title: "Training Centre",
    img: "/campus-img/campusDron-2.jpeg",
    items: [
      "Accommodate over 190 participants",
      "Conference hall for seminars, guest lectures, and symposiums (60+ seating capacity)",
      "3 fully equipped lecture theatres (50-seat capacity, advanced AV setups)",
    ],
  },
  {
    icon: HomeModernIcon,
    title: "Hostel Facilities",
    img: "/campus-img/campusDron-1.jpeg",
    items: [
      "Meerashray Hostel Block: 16 executive rooms (48 participants capacity)",
      "Balram Bhawan: 6 triple-sharing and 9 four-bed rooms with shared amenities",
      "24×7 Security, Wi-Fi, and recreational areas",
    ],
  },
  {
    icon: BuildingOffice2Icon,
    title: "Administrative and Academic Buildings",
    img: "/campus-img/campusImg.jpeg",
    items: [
      "Three-story SRM academic block with dedicated offices and meeting spaces",
      "Executive cabins for Head NLRI, SRM Principal, and Training Director",
      "Workspace for faculty, project staff, and administrative teams",
    ],
  },
  {
    icon: BeakerIcon,
    title: "Laboratories",
    img: null,
    badge: "Smart",
    items: [
      "GIS Laboratory: RVYS 10.1 for watershed mapping and planning",
      "Computer Lab: 30 computer systems with high-speed internet",
      "Used for training, research, E-learning and ICT-based support",
    ],
  },
  {
    icon: PresentationChartBarIcon,
    title: "Auditorium and Classrooms",
    img: null,
    items: [
      "Upcoming 250-seat auditorium for academic and cultural events",
      "Smart classrooms with projectors, whiteboards, and audio-visual tools",
    ],
  },
  {
    icon: TrophyIcon,
    title: "Sports Facilities",
    img: null,
    items: [
      "Football and cricket ground (4,500 sqm)",
      "Volleyball court (2,000 sqm)",
      "Open spaces for yoga, group activities, and wellness",
    ],
  },
  {
    icon: BookOpenIcon,
    title: "Knowledge Centre and Library",
    img: null,
    items: [
      "6,000+ books and journals in English and Hindi",
      "Topics include: rural development, agriculture, management, gender studies",
      "Digital learning materials, e-resources, and contemporary publications",
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