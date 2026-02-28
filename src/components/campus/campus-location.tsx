"use client";

import React from "react";
import { campusData } from "@/src/data/campus-data";
import { MapPinIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function CampusLocation() {
  return (
    <section
      id="location"
      className="relative bg-gradient-to-b from-[#f9fafc] to-white border-t border-gray-100 overflow-hidden"
    >
      {/* Soft Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-0 pointer-events-none" />

      <div className="container-wide py-20 lg:py-24 relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Our Location
          </p>
          <h2 className="text-left! academic-section-title font-extrabold text-gray-900 leading-tight">
            Visit Our Campus
          </h2>
          <div className="w-16 h-[3px] bg-primary mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          
          {/* Left Side */}
          <div className="space-y-10">
            
            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg text-justify leading-relaxed max-w-xl">
              {campusData.location.description}
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Address Card */}
              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  {/* <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPinIcon className="w-5 h-5" />
                  </div> */}

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                      Office Address
                    </h4>

                    {campusData.location.addressLines.map((line, index) => (
                      <p
                        key={index}
                        className={`text-sm ${
                          index === 0
                            ? "font-semibold text-gray-900"
                            : "text-gray-600"
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connectivity Card */}
              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  {/* <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <GlobeAltIcon className="w-5 h-5" />
                  </div> */}

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                      Connectivity
                    </h4>

                    <p className="text-sm font-semibold text-gray-900">
                      NH-31 State Highway
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Direct access to Delhi–Mumbai Expressway & Ratlam Railway Junction.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side - Premium Map */}
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              <div className="aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.255252157876!2d75.07872367512006!3d23.523320078826014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39640419d441a225%3A0x53063056acb1832d!2sNational%20Livelihood%20Resource%20Institute!5e0!3m2!1sen!2sin!4v171567929771!5m2!1sen!2sin"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>

            {/* Decorative Frame */}
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}