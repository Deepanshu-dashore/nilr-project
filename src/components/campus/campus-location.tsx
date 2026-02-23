"use client";

import React from "react";
import { campusData } from "@/src/data/campus-data";
import { MapPinIcon } from "@heroicons/react/24/outline";

export default function CampusLocation() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-wide relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
                 <div className="space-y-4">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm block">
                      Institutional Presence
                    </span>
                    <h2 className="academic-section-title text-left!">
                       {campusData.location.title}
                    </h2>
                 </div>
                 <p className="text-text-muted text-lg font-medium leading-relaxed border-l-4 border-secondary/30 pl-6">
                    {campusData.location.description}
                 </p>
                 
                 <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 relative group hover:border-primary/20 transition-all">
                    <div className="flex items-start gap-6">
                        <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all shadow-sm shrink-0 border border-gray-100">
                             <MapPinIcon className="h-6 w-6" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Campus Address</h4>
                            {campusData.location.addressLines.map((line, index) => (
                                <p key={index} className={`text-base font-medium ${index === 0 ? 'text-primary font-bold' : 'text-gray-600'}`}>
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>
                 </div>
              </div>

              <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-gray-100 rounded-[2rem] border border-gray-200 shadow-xl overflow-hidden relative group">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.255252157876!2d75.07872367512006!3d23.523320078826014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39640419d441a225%3A0x53063056acb1832d!2sNational%20Livelihood%20Resource%20Institute!5e0!3m2!1sen!2sin!4v1770567929771!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                 ></iframe>
                 
                 {/* Hover Effect Layer (removed to ensure interactivity, or keep with pointer-events-none if purely visual) */}
                 {/* Using pointer-events-none allows interaction with map while keeping subtle overlay if needed, 
                     but standard map usage usually prefers direct interaction. Removed overlay for usability. */}
              </div>
           </div>
           
           {/* Decorative Background Elements */}
           <div className="absolute top-1/2 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
        </div>
      </section>
  );
}
