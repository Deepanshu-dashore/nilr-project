"use client";

import React from "react";
import { contactData } from "@/src/data/contact-data";

export default function ContactMap() {
  return (
    <section className="bg-bg-section border-t border-gray-100 py-24">
      <div className="container-wide px-4">
        <div className="text-center mb-16 space-y-4">
           <h2 className="academic-section-title">Visit our Campus</h2>
           <p className="academic-section-text max-w-2xl mx-auto">
             {contactData.map.locationName}. Nestled near the Maleni River, our campus is easily accessible via the Mhow-Neemuch State Highway.
           </p>
        </div>
        
        <div className="rounded-3xl overflow-hidden shadow-premium border border-gray-200 aspect-video md:aspect-[21/9] relative bg-gray-100">
           <iframe
             src={contactData.map.embedUrl}
             width="100%"
             height="100%"
             style={{ border: 0 }}
             allowFullScreen
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
             className="filter grayscale-20 hover:grayscale-0 transition-all duration-700"
           />
        </div>
        

      </div>
    </section>
  );
}
