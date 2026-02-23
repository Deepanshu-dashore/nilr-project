"use client";

import React from "react";
import { admissionsData } from "@/src/data/admissions-data";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

export default function AdmissionHelp() {
  return (
    <section id="apply" className="py-32 bg-bg-dark text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(13,26,99,0.3),transparent)] pointer-events-none" />
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-wide relative z-10">
          <div className="max-w-5xl mx-auto space-y-24">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-7 space-y-8 text-left">
                  <span className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 rounded-full text-xs font-black uppercase tracking-widest border border-white/10 backdrop-blur-md text-accent">
                    <RocketLaunchIcon className="h-4 w-4" /> Admission Desk 2026
                  </span>
                  <h2 className="text-5xl md:text-7xl font-black font-heading leading-tight">
                    Start Your <span className="text-blue-400">Revolutionary</span> Journey.
                  </h2>
                  <p className="text-gray-400 text-xl font-medium max-w-2xl leading-relaxed">
                    Don't just get a degree. Get the field-rigorous training that builds the next generation of social leaders.
                  </p>
                  
                  <div className="flex flex-wrap gap-6 pt-4">
                     <button className="bg-primary hover:bg-white hover:text-primary text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest transition-all shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-4 group">
                        Apply Now <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                     </button>
                     <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest transition-all">
                        Download Prospectus
                     </button>
                  </div>
               </div>

               <div className="lg:col-span-5">
                  <div className="bg-white/5 p-1 rounded-[3rem] border border-white/10 backdrop-blur-xl shadow-2xl relative group overflow-hidden">
                     <div className="p-10 space-y-8 relative z-10">
                        <h4 className="text-2xl font-black font-heading border-b border-white/10 pb-6">Direct Support</h4>
                        
                        <div className="space-y-6">
                           <div className="flex items-center gap-6 group/item">
                              <div className="h-14 w-14 bg-primary rounded-2xl flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-accent transition-all duration-300">
                                 <PhoneIcon className="h-6 w-6" />
                              </div>
                              <div>
                                 <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Call Admissions</p>
                                 <p className="text-lg font-bold">{admissionsData.contact.phone[0]}</p>
                              </div>
                           </div>

                           <div className="flex items-center gap-6 group/item">
                              <div className="h-14 w-14 bg-primary rounded-2xl flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-accent transition-all duration-300">
                                 <EnvelopeIcon className="h-6 w-6" />
                              </div>
                              <div>
                                 <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Email Enquiry</p>
                                 <p className="text-lg font-bold">{admissionsData.contact.email[0]}</p>
                              </div>
                           </div>

                           <div className="flex items-center gap-6 group/item">
                              <div className="h-14 w-14 bg-primary rounded-2xl flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-accent transition-all duration-300">
                                 <MapPinIcon className="h-6 w-6" />
                              </div>
                              <div>
                                 <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Visit Campus</p>
                                 <p className="text-sm font-bold opacity-70 leading-relaxed">{admissionsData.contact.address.split(',').slice(0,2).join(',')}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* Glass Overlay Glow */}
                     <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </div>
               </div>
            </div>

            {/* Achievement Bar or Closing Note */}
            <div className="pt-20 border-t border-white/10">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {[
                    { label: "Placement Rate", val: "100%" },
                    { label: "Field Projects", val: "400+" },
                    { label: "Trained Minds", val: "41K+" },
                    { label: "Campus Area", val: "10+ Ha" }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                       <p className="text-3xl font-black font-heading text-accent">{stat.val}</p>
                       <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500">{stat.label}</p>
                    </div>
                  ))}
               </div>
            </div>
            
          </div>
        </div>
    </section>
  );
}
