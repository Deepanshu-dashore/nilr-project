"use client";

import React from "react";
import { admissionsData } from "@/src/data/admissions-data";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, AcademicCapIcon, CheckCircleIcon, ClockIcon, CalendarIcon, IdentificationIcon, UserPlusIcon, ClipboardDocumentCheckIcon, DocumentTextIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

export default function AdmissionsClient() {
  return (
    <div className="flex flex-col bg-white">
      
      {/* 1. HERO SECTION (Matched to Programs Page) */}
      <section className="bg-text-dark relative text-white py-24 overflow-hidden">
        {/* Subtle background element */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/HeaderBg.png')",
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-32" />
        
        <div className="container-wide text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
            <AcademicCapIcon className="w-5 h-5 text-indigo-400 inline-block" />
            <span className="text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Admissions 2025–26
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold! leading-tight text-white mb-6">
            Your Gateway to a Career in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Rural Transformation</span>
          </h1>
          <p className="max-w-5xl mx-auto text-lg text-gray-300 leading-relaxed">
            Begin your journey in rural management, sustainable agriculture, and livelihood development 
            through AICTE-approved and skill-oriented programs at CVRU Khandwa – NLRI Campus.
          </p>
        </div>
      </section>

      {/* 2. PROGRAMS OPEN FOR ADMISSION */}
      <section className="py-24 bg-white">
        <div className="container-wide max-w-6xl">

          <div className="text-center md:text-center mb-16">
            <span className="text-gray-600 flex items-center gap-1 border-gray-300 font-medium capitalize border w-fit px-3 py-1.5 rounded-full mx-auto text-xs mb-3">
            <AcademicCapIcon className="w-4 h-4 inline-block mr-1" />
            Academic Opportunity
            </span>
            <h2 className="academic-section-title">
              Programs Open for Admission
            </h2>
            <div className="w-32 h-1 bg-linear-to-r from-[#21325b] to-[#9b2928] rounded-md mb-6 mx-auto" />
            <p className="text-gray-600 academic-section-text text-lg max-w-5xl leading-relaxed font-medium mx-auto">
              We offer specialized programs that bridge the gap between academic theory and practical field implementation. Choose the path that fits your career goals.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            {[
              { 
                title: "PGD – Rural Management", 
                type: "2 Years | AICTE Approved", 
                desc: "A comprehensive program designed to build competent rural development professionals through 60 intensive seats and fieldwork.",
                color: "#21325b",
                link: "/programs#postgraduate"
              },
              { 
                title: "Diploma Programs", 
                type: "1 Year | Skill-based", 
                desc: "Intensive 1-year programs in Organic Farming and Community Driven Development focused on sustainable grassroots practices.",
                color: "#9b2928",
                link: "/programs#diploma"
              },
              { 
                title: "Certificate Courses", 
                type: "3 Months | Professional", 
                desc: "14+ specialized training modules for rural professionals, engineers, and entrepreneurs seeking quick skill upgrades.",
                color: "#16a34a",
                link: "/programs#certificate"
              }
            ].map((program, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row md:items-center justify-between bg-white border border-gray-100 rounded-sm hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300 p-6 md:px-10 md:py-8 relative overflow-hidden">
                <div 
                  className="absolute left-0 top-0 bottom-0 w-[5px]" 
                  style={{ backgroundColor: program.color }}
                />
                
                <div className="max-w-2xl mb-6 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-[#21325b] mb-2 group-hover:text-[#9b2928] transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-[#9b2928] font-bold text-sm mb-3 uppercase tracking-wide">
                    {program.type}
                  </p>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {program.desc}
                  </p>
                </div>

                <a 
                  href={program.link} 
                  className="inline-flex items-center gap-2 bg-[#21325b] text-white px-8 py-3 font-bold text-sm rounded-sm hover:bg-[#9b2928] transition-all transform hover:-translate-y-1 shadow-md active:scale-95"
                >
                  Apply Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ADMISSION PROCEDURE (Step Layout based on Reference Image) */}
      <section className="py-24 bg-primary/5">
        <div className="container-wide max-w-6xl">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl academic-section-title font-bold text-gray-900 mb-4 tracking-tight">
              Application Process (Indian Students)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">
            
            {/* Steps simulated from image */}
            {[
              {
                step: "01",
                desc: "Apply online on our portal and submit registration form",
              },
              {
                step: "02",
                desc: "Appear for entrance test or personal screening / interview",
              },
              {
                step: "03",
                desc: "Check Merit List and receive Admission Offer Letter",
              },
              {
                step: "04",
                desc: "Complete fee payment (1st Instalment) & document verification",
              }
            ].map((item, index) => (
              <div key={index} className="flex relative px-4">
                {/* Connector line for desktop */}
                {/* {index !== 3 && (
                  <div className="hidden lg:block absolute top-[50%] right-[-50%] w-full h-[1px] bg-gray-300" />
                )} */}
                
                <div className="flex gap-0 items-start relative z-10 w-full pr-8 lg:pr-0 border-l border-[#d34c5b] pl-4 lg:border-none lg:pl-0">
                  <div className="flex flex-col items-center bg-accent p-2 px-3">
                    <span className="text-xs font-bold text-gray-300 uppercase tracking-widest pl-1">Step</span>
                    <span className="text-4xl font-light text-white leading-none mb-2">{item.step}</span>
                  </div>
                  <div className="lg:border-l-2 lg:border-[#d34c5b] lg:pl-4">
                    <p className="text-[15px] text-gray-900 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>



      {/* 5. IMPORTANT DATES SECTION */}
      <section className="py-24 bg-gray-50/50">
        <div className="container-wide max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="academic-section-title">
              Important Dates (2025–26)
            </h2>
            <div className="w-20 h-1 mb-2 bg-[#21325b]/20 mx-auto rounded-full" />
            <p className="academic-section-text">
              Key dates for the 2025–26 academic year
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Application Opens", date: "15 May 2025", icon: ClockIcon },
              { label: "Last Date to Apply", date: "31 July 2025", icon: CalendarIcon },
              { label: "Entrance Test / Interview", date: "10 August 2025", icon: IdentificationIcon },
              { label: "Admission Confirmation", date: "20 August 2025", icon: UserPlusIcon }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white p-8 relative rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-200 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 mb-6 flex items-center absolute top-0 right-0 justify-center rounded-bl-2xl bg-primary/70 text-white transition-colors">
                    <Icon className="w-8 h-8 animate-pulse" />
                  </div>
                  <h3 className="font-serif font-bold text-[#21325b] text-lg mb-3 ">{item.label}</h3>
                  <div className="w-10 h-px bg-gray-200 mb-2" />
                  <p className="text-gray-600 font-medium">{item.date}</p>
                  <div className="w-16 h-6 flex items-center absolute bottom-0 left-0 justify-center rounded-tr-full bg-primary/20 text-white transition-colors"/>
                  <div className="w-12 h-6 flex items-center absolute bottom-0 left-0 justify-center rounded-tr-full bg-primary/20 text-white transition-colors"/>
                  <div className="w-8 h-6 flex items-center absolute bottom-0 left-0 justify-center rounded-tr-full bg-primary/20 text-white transition-colors"/>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. COURSE ELIGIBILITY & FEES SECTION (Unified Format) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container-wide max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="academic-section-title">
              Course Eligibility & Fees
            </h2>
            <div className="w-24 h-1 bg-[#21325b]/20 mx-auto rounded-full mb-3" />
            <p className="academic-section-text">
              Complete details on requirements and session investment for 2025-26.
            </p>
          </div>

          <div className="overflow-x-auto border border-gray-200">
            <table className="w-full text-left border">
              <thead className="bg-linear-to-r from-[#3b3378] to-accent">
                <tr className="text-white font-bold uppercase text-sm tracking-wider">
                  <th className="p-6  w-1/4">Branch</th>
                  <th className="p-6">Essential Qualification</th>
                  <th className="p-6">Duration</th>
                  <th className="p-6">Fees</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-[#f8f9fa]">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 border border-gray-200">
                    <p className="font-bold text-gray-900 text-base">PGD-Rural Management</p>
                  </td>
                  <td className="p-6 border border-gray-200 max-w-[300px]">
                    <p className="text-gray-700 text-[14px] leading-relaxed font-medium">Graduation in any discipline with min 50% marks (45% for SC/ST).</p>
                  </td>
                  <td className="p-6 border border-gray-200">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">2 Years</span>
                  </td>
                  <td className="p-6 border border-gray-200">
                    <p className="font-bold text-[#21325b] text-lg">₹65,000 <span className="text-gray-400 text-xs font-medium">/ year</span></p>
                    <p className="text-[11px] text-gray-500 font-medium mt-1 italic leading-tight">(inclusive of tuition & facilities)</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 border border-gray-200">
                    <p className="font-bold text-gray-900 text-base md:text-lg">Diploma Courses</p>
                  </td>
                  <td className="p-6 border border-gray-200 max-w-[300px]">
                    <p className="text-gray-700 text-[14px] leading-relaxed font-medium">Minimum 12th pass from a recognized board.</p>
                  </td>
                  <td className="p-6 border border-gray-200">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">1 Year</span>
                  </td>
                  <td className="p-6 border border-gray-200">
                    <p className="font-bold text-[#21325b] text-lg">₹30,000 <span className="text-gray-400 text-xs font-medium">/ total</span></p>
                    <p className="text-[11px] text-gray-500 font-medium mt-1 italic leading-tight">(inclusive of training & field visits)</p>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 border border-gray-200">
                    <p className="font-bold text-gray-900 text-base md:text-lg">Certificate Courses</p>
                  </td>
                  <td className="p-6 border border-gray-200 max-w-[300px]">
                    <p className="text-gray-700 text-[14px] leading-relaxed font-medium">10th pass / Rural professionals seeking skill upgrade.</p>
                  </td>
                  <td className="p-6 border border-gray-200">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">3 Months</span>
                  </td>
                  <td className="p-6 border border-gray-200">
                    <p className="font-bold text-[#21325b] text-lg">₹10k – ₹15k</p>
                    <p className="text-[11px] text-gray-500 font-medium mt-1 italic leading-tight">(depending on specialization)</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 space-y-4 max-w-7xl mx-auto">
            <div className="flex gap-4 p-5 items-center rounded-sm bg-orange-50/50 border-l-2 border-accent shadow-sm group hover:border-orange-200 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <AcademicCapIcon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-accent text-sm font-medium leading-relaxed italic">
                Special fee waivers available for SC/ST, BPL, and women candidates. Scholarships may be offered under government schemes and CSR sponsorships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ADMISSIONS - CONTACT US (Based on provided Map Image Layout) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container-wide max-w-6xl">
          
          <div className="mb-12 text-center lg:text-left">
            <h2 className="academic-section-title">
              Admissions - Contact Us
            </h2>
            <div className="w-20 h-1 bg-primary mt-4 rounded-full mx-auto mb-4" />
            <p className="academic-section-text">
              Have questions about the admission process, scholarships, or program details? Our team is here to help you every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
            {/* Left side: Maps Iframe Simulation */}
            <div className="w-full h-[600px] bg-gray-200 rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.255252157876!2d75.07872367512006!3d23.523320078826014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39640419d441a225%3A0x53063056acb1832d!2sNational%20Livelihood%20Resource%20Institute!5e0!3m2!1sen!2sin!4v171567929771!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Right side: Contact Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">
                  CVRU Khandwa – NLRI Campus
                </h3>
                <p className="text-gray-600 font-medium">Bhadwasa, Ratlam, Madhya Pradesh 457222</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                  Programme Enquiry:
                </h4>
                
                <div className="space-y-6 text-[15px]">
                  <div className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <AcademicCapIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-800 block mb-1">Office Hours:</span>
                      <p className="text-gray-600">Monday to Saturday: 10:00 AM – 6:00 PM. We are closed on Sundays and National Holidays.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center shrink-0 group-hover:bg-secondary/10 transition-colors">
                      <MapPinIcon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-800 block mb-1">Campus Location:</span>
                      <p className="text-gray-600 leading-relaxed">Centrally located at the NLRI Campus, Bhadwasa, Ratlam, ideal for hands-on rural immersion.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                      <PhoneIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-800 block mb-1">Contact Numbers:</span>
                      <div className="flex flex-col gap-1">
                        <a href="tel:+911234567890" className="text-gray-600 hover:text-primary transition-colors font-medium">+91 12345-67890 (Main Office)</a>
                        <a href="tel:+910987654321" className="text-gray-600 hover:text-primary transition-colors font-medium">+91 09876-54321 (Helpdesk)</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                      <EnvelopeIcon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-800 block mb-1">Email Enquiries:</span>
                      <p className="text-gray-600 mb-1">For general admissions and course-related queries, please write to:</p>
                      <a href="mailto:admissions@nlri.com" className="text-primary hover:underline font-bold">
                        admissions@nlri.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FINAL APPLY CTA */}
      <section id="apply" className="bg-linear-to-r from-primary to-accent relative overflow-hidden text-white py-14 text-center border-t border-white/10">
        <div className="absolute w-full h-full bg-contain bg-no-repeat bg-right bg-full top-0 bg-[url('/patternSvg.svg')]" />
        
        <div className="flex flex-col md:flex-row justify-between items-center relative z-10 max-w-6xl mx-auto px-6 lg:px-0 gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Take the First Step Toward Your Future
            </h3>
            <p className="text-lg text-white/80 max-w-2xl">
              Build a career in sustainable development, grassroots leadership, and social innovation.
            </p>
          </div>
          
          <button className="h-fit rounded-xl border-2 cursor-pointer border-white/10 bg-linear-to-l from-indigo-600/40 text-white font-bold px-12 py-5 text-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300 active:scale-95 whitespace-nowrap">
            Apply Online
          </button>
        </div>
      </section>

    </div>
  );
}
