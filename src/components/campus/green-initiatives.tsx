"use client";

import {
  SparklesIcon,
  SunIcon,
  MapIcon,
  GlobeAsiaAustraliaIcon,
  BeakerIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";

export default function GreenInitiatives() {
  return (
    <section
      id="green"
      className="relative py-20 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/green-campusBg.png')",
        }}
      />

      {/* Soft Overlay (Less Harsh) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#163626]/80 via-[#163626]/70 to-[#163626]/60" />

      <div className="container-wide relative z-10 text-white">

        {/* Header */}
        <div className="flex items-center gap-4 mb-12 max-w-6xl">
          <div className="h-px bg-white/20 ml-4 hidden md:block w-1/12" />
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-600 shrink-0" viewBox="0 0 48 48">
               <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}>
                  <path d="M31 43C31 43 18 44 11 36C4 28 4 4 4 4C4 4 28 3 36 9C44 15 42 32 42 32"></path>
                  <path d="M44 44C44 44 32.8207 35.5515 26 28C19.1793 20.4485 16 13 16 13"></path>
                  <path d="M26 28L27 15"></path>
                  <path d="M26 28L16 27"></path>
               </g>
         </svg> 
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
            Green Campus Initiatives
          </h2>
          <div className="h-px flex-1 bg-white/20 ml-4 hidden md:block" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20 max-w-5xl mx-auto">

          {/* Left Column */}
          <div className="space-y-8">

            <div className="flex gap-4 items-start">
              <MapIcon className="w-11 h-11 p-2 text-green-100 rounded-sm mt-1 shrink-0 bg-green-500" />
              <p className="text-sm md:text-base font-medium leading-relaxed text-white/90">
                10.49 hectares of eco-restored land with over 5,000 trees
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <GlobeAsiaAustraliaIcon className="w-11 h-11 p-2 text-green-100 rounded-sm mt-1 shrink-0 bg-green-500" />
              <p className="text-sm md:text-base font-medium leading-relaxed text-white/90">
                On-campus nurseries producing 10,000+ saplings annually
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <ArchiveBoxIcon className="w-11 h-11 p-2 text-green-100 rounded-sm mt-1 shrink-0 bg-green-500" />
              <p className="text-sm md:text-base font-medium leading-relaxed text-white/90">
                Water harvesting systems recharging aquifers year-round
              </p>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-8">

            <div className="flex gap-4 items-start">
              <BeakerIcon className="w-11 h-11 p-2 text-green-100 rounded-sm mt-1 shrink-0 bg-green-500" />
              <p className="text-sm md:text-base font-medium leading-relaxed text-white/90">
                Organic farming demonstration plots & seed production
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <SunIcon className="w-11 h-11 p-2 text-green-100 rounded-sm mt-1 shrink-0 bg-green-500" />
              <p className="text-sm md:text-base font-medium leading-relaxed text-white/90">
                Solar energy planning & zero-waste sustainability model
              </p>
            </div>

          </div>

        </div>

        {/* Footer Tagline */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center">
          <p className="text-sm md:text-base font-semibold tracking-wider text-white/80 uppercase">
            A Living Laboratory for Sustainable Agriculture & Rural Innovation
          </p>
        </div>

      </div>
    </section>
  );
}