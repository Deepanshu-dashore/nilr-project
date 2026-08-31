"use client";

import React from "react";
import GeometricAccent from "@/src/components/shared/GeometricAccent";
import {
  BuildingLibraryIcon,
  MapIcon,
  AcademicCapIcon,
  HomeIcon,
  BeakerIcon,
  BookOpenIcon,
  WifiIcon,
  TrophyIcon,
  UserGroupIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

export default function InstitutionalOverview() {
  const keyFeatures = [
    { icon: BuildingLibraryIcon, text: "State-of-the-art academic blocks with smart classrooms and laboratories" },
    { icon: MapIcon,             text: "Specialized GIS Lab for advanced rural planning" },
    { icon: AcademicCapIcon,     text: "AICTE-approved School of Rural Management (SRM)" },
    { icon: HomeIcon,            text: "Residential facilities: Meerashray Hostel and Balram Bhawan" },
    { icon: BeakerIcon,          text: "Open laboratories, nurseries, research farms, and demonstration plots" },
    { icon: BookOpenIcon,        text: "Knowledge Centre and Library with 6,000+ resources" },
    { icon: WifiIcon,            text: "Fully Wi-Fi enabled campus with IT and media labs" },
    { icon: TrophyIcon,          text: "Sports grounds for football, cricket, and volleyball" },
    { icon: UserGroupIcon,       text: "Training Centres hosting 190+ participants simultaneously" },
  ];

  return (
    <section id="overview" className="bg-white relative overflow-hidden">

      {/* ── Text body: padded container ── */}
      <div className="section-padding relative z-10 pt-10 md:pt-16">
        {/* Badge + Heading */}
        <div className="max-w-4xl">
          <h2 className="text-3xl academic-section-title md:text-5xl font-extrabold leading-tight! tracking-tight! text-left!">
            Our Stunning{" "}
            <span className="text-primary!">Ratlam Campus</span>
          </h2>
        </div>

        <div className="">
          {/* ── Full-bleed image with responsive height ── */}
          <div className="relative w-full mt-8 md:mt-12 group overflow-hidden rounded-2xl md:rounded-none">
            <img
              src="/campus-img/campusDron-2.jpeg"
              alt="CVRUK NIRM Campus – Aerial View"
              className="w-full h-[300px] sm:h-[500px] md:h-[550px] lg:h-[520px] object-cover object-center transform group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            {/* Overlay card: repositioned for mobile */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-16 flex items-end gap-0 w-[90%] md:w-auto">
              {/* Reusable Decorative accent triangle block - hidden on mobile */}
              <GeometricAccent />

              <div className="bg-white/95 backdrop-blur-md border-b-[3px] border-primary rounded-xl md:rounded-l-none md:rounded-r-xl shadow-2xl p-5 md:p-6 w-full text-center md:text-left">
                <h3 className="text-lg md:text-xl font-black text-primary mb-1 leading-tight">
                  Institutional Campus
                </h3>
                <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Lush, Green 10-Hectare Learning Environment
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-10 mt-10 md:mt-16">
            {/* Paragraphs */}
            <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed font-medium text-justify px-2 md:px-0">
              <p>
                Located in the scenic, lush green surroundings of Bhadwasa village, Ratlam (Madhya Pradesh), the CVRU Khandwa – NIRM Campus offers a unique blend of academic excellence and hands-on rural innovation. Spread over more than <strong className="text-primary">10 hectares of lush green landscape</strong> along the banks of the <strong className="text-primary">Maleni River</strong>, the campus stands as a model of sustainable development, combining modern education facilities with eco-friendly infrastructure.
              </p>
              <p className="hidden sm:block">
                The campus houses the <strong className="text-primary">National Institute of Rural Management (NIRM)</strong> and the <strong className="text-primary">School of Rural Management (SRM)</strong>, both operated under the stewardship of Gramin Vikas Trust (GVT) — a national-level development organization with over three decades of field experience.
              </p>
            </div>

            {/* Key Features */}
            <div className="pt-4 px-2 md:px-0">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-1.5 h-7 rounded-full bg-secondary inline-block shrink-0" />
                Key Features of the CVRUK-NIRM Campus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-500 group"
                  >
                    <div className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-bold text-gray-700 leading-snug pt-1">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing quote */}
            <blockquote className="bg-primary/5 border-l-4 border-primary px-6 md:px-8 py-6 md:py-8 rounded-r-2xl mx-2 md:mx-0">
              <p className="text-base md:text-xl text-primary font-semibold leading-relaxed italic">
                "The CVRUK-NIRM campus is not just a place for education — it's a living ecosystem where theory meets practice, and where students, researchers, and rural communities collaborate to create lasting impact."
              </p>
            </blockquote>

          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
