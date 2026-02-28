"use client";

import React from "react";
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
      <div className="section-padding relative z-10 -mt-12">
        {/* Badge + Heading */}
              <h2 className="text-3xl academic-section-title md:text-5xl font-extrabold leading-tight! tracking-tight! text-left!">
                Our Stunning{" "}
                <span className="text-secondary text-primary!">Ratlam Campus</span>
              </h2>

        <div className="">
          {/* ── Full-bleed image — NO container, bleeds to edges ── */}
      <div className="relative w-full mt-10 group overflow-hidden">
        <img
          src="/campus-img/campusDron-2.jpeg"
          alt="CVRUK NLRI Campus – Aerial View"
          className="w-full h-[480px] md:h-[480px] object-cover object-center transform group-hover:scale-105 transition-transform duration-[1400ms]"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

        {/* Bottom-left overlay card */}
        <div className="absolute bottom-8 left-6 md:left-16 flex items-end gap-0">
          {/* Decorative accent triangle block */}
          <div className="hidden md:flex items-end self-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 border-b-[3px] border-primary"
              viewBox="0 0 82 95"
            >
              <defs>
                <linearGradient id="lg-campus" x1="0.5" x2="0.834" y2="0.57" gradientUnits="objectBoundingBox">
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#fff" />
                </linearGradient>
                <clipPath id="cp-campus">
                  <rect width="82" height="100" transform="translate(23421.109 21495.506)" fill="url(#lg-campus)" />
                </clipPath>
              </defs>
              <g transform="translate(-23421.109 -21495.506)" clipPath="url(#cp-campus)">
                <path
                  d="M-444.826-445.357l20.884-3.518-8.206,19.075Zm-12.616,20.819,21.109-3.447-13.1-16.073Zm36.629,20.2,11.361-19.462h-19.685ZM-477-456.89v3.544l2.332-3.544Zm15.939,29.786,8.033-19.575-20.325-.011Zm41.815-29.786h-1.982l.881,1.5Zm-28.177,52.364,11.855-18.983-21.561,3.521Zm48.8-52.364H-413.81l-2.711,3.683,24.4,4.3ZM-443.5-402.57h18.741l-7.619-17.811Zm-29.772,0h21.934l-9.6-15.3Zm56.9-46.34,10.453,18.266,13.256-14.088Zm27.3,50.888h-27.461l10.532,17.482Zm-16.661-23.493L-416.8-402.57h28.569Zm-22.323-6.828h18.446l-10.53-18.4Zm4.007-24.778-2.219-3.768h-13.7l-6.2,7.5Zm-27.424,55.1H-473.2l12.207,15.228Zm4.071,1.711-9.525,15.253,21.275,3.462Zm26.829.02-7.96,19.115h19.476Zm-3.962-1.731H-443.34l11.3,18Zm40.683-58.868h-9.1l5.128,6.29Zm4.842,67.426v-8.558h-8.324Zm0-13.107v-9.278L-388-402.57Zm-66.661-54.32h-5.754l1.875,4.688Zm31.873,95h15.184l-7.98-9.789Zm20.849,0h9.1l4.842-7.671v-3.066h-22.692Zm9.213-87.078,4.726-.732v-6.756Zm-4.3,40.109,9.023-9.336v-5.6H-401.85Zm9.023-29.971v-6.548l-5.152.8Zm-9.441-3.937-13.573,14.425h23.014v-4.342l-.213.215Zm-14.662,65.592h24.1v-5.957l-9.187-9.446ZM-477-422.472v17.527l12.269-15.22Zm0,26.726v17.519l12.085-2.443Zm0-48.553v17.208l12.245,2.3Zm20.9-12.591h-13.343l-3.942,5.991,19.681.01Zm28.549,84.262,6.324,10.738h1.982l7.9-10.738Zm-12.431,10.738h13.7l-5.7-9.675Zm-17.3-14.622,5.85,14.622h5.754l9.285-11.223ZM-477-373.6v11.706h2.332l9.243-14.049Zm7.556,11.706H-456.1l-5.04-12.621Z"
                  transform="translate(23898.625 21952.398)"
                  fill="url(#lg-campus)"
                />
              </g>
            </svg>
          </div>

          <div className="bg-white/95 backdrop-blur-md border-b-[3px] border-primary rounded-r-xl shadow-2xl p-5 md:p-6 max-w-xs md:max-w-sm">
            <h3 className="text-lg md:text-xl font-black text-primary mb-1 leading-tight">
              Institutional Campus
            </h3>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Lush 10-Hectare Learning Environment
            </p>
          </div>
        </div>
      </div>
          <div className="space-y-10 mt-6">

            {/* Paragraphs */}
            <div className="space-y-5 text-base md:text-lg text-gray-700 leading-relaxed font-medium text-justify">
              <p>
                Located in the scenic surroundings of Bhadwasa village, Ratlam (Madhya Pradesh), the CVRU Khandwa – NLRI Campus offers a unique blend of academic excellence and hands-on rural innovation. Spread over more than <strong className="text-primary">10 hectares</strong> along the banks of the <strong className="text-primary">Maleni River</strong>, the campus stands as a model of sustainable development, combining modern education facilities with eco-friendly infrastructure.
              </p>
              <p>
                The campus houses the <strong className="text-primary">National Livelihood Resources Institute (NLRI)</strong> and the <strong className="text-primary">School of Rural Management (SRM)</strong>, both operated under the stewardship of Gramin Vikas Trust (GVT) — a national-level development organization with over three decades of field experience.
              </p>
              <p>
                Designed by experts from the <strong className="text-primary">Delhi School of Planning and Architecture</strong>, the earthquake-resistant structures, green landscapes, and water conservation systems make the campus a practical learning ground for rural development and natural resource management.
              </p>
            </div>

            {/* Key Features */}
            <div className="pt-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-1 h-7 rounded-full bg-secondary inline-block shrink-0" />
                Key Features of the CVRUK-NLRI Campus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start p-5 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md hover:border-primary/15 transition-all duration-300 group"
                  >
                    <div className="h-10 w-10 rounded-lg flex items-center justify-center shrink-0 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 leading-snug pt-1.5">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing quote */}
            <blockquote className="bg-primary/5 border-l-4 border-primary px-8 py-6 rounded-r-2xl">
              <p className="text-base md:text-lg text-primary font-semibold leading-relaxed italic">
                "The CVRUK-NLRI campus is not just a place for education — it's a living ecosystem where theory meets practice, and where students, researchers, and rural communities collaborate to create lasting impact."
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
