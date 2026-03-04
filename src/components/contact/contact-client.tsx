"use client";

import React from "react";
import { contactData } from "@/src/data/contact-data";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon, ClockIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function ContactClient() {
  const { map } = contactData;

  return (
    
    <div className="flex flex-col bg-white">
      {/* 1. HERO SECTION (Matched to Admissions Page) */}
      <section className="bg-text-dark relative text-white py-14 md:py-24 overflow-hidden">
        {/* Subtle background element */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/HeaderBg.png')",
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-32" />
        
        <div className="container-wide pl-5 md:pl-0 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
            <GlobeAltIcon className="w-5 h-5 text-indigo-400 inline-block" />
            <span className="text-[10px] md:text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-wider">
              Contact Us 2025–26
            </span>
          </div>
          <h1 className="text-2xl md:text-5xl font-serif font-semibold! leading-tight text-white mb-8 px-4 md:px-0">
            Let&apos;s Build a <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">Better Future </span> Together
          </h1>
          <p className="max-w-5xl mx-auto md:pr-0 pr-5 text-sm md:text-lg text-gray-300 leading-relaxed font-medium text-justify md:text-center">
            For admissions, programs, training, partnerships, or campus visits,
            our team is ready to assist you. We are committed to your success in rural transformation.
          </p>
        </div>
      </section>

      <div className="w-full h-1 bg-linear-to-r from-primary via-accent to-primary opacity-20" />

      {/* 🔹 2. CONTACT & LOCATION SECTION (Map Left, Form Right) */}
      <section className="py-12 md:py-24 bg-gray-50/50 overflow-hidden relative border-t border-gray-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] -z-10" />
        
        <div className="container-wide pl-5 md:pl-0 max-w-7xl relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl academic-section-title">
              Connect & Visit Us
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-primary to-accent mx-auto mt-4 mb-6 rounded-full shadow-sm" />
            <p className="academic-section-text text-sm md:text-base text-gray-600 font-medium max-w-2xl mx-auto text-justify md:text-center px-5 md:px-0">
              Whether you want to visit our campus or have a specific inquiry, we are here to help you navigate your journey with us.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Left Column: Google Map */}
            <div className="h-[300px] md:h-full md:min-h-[500px] rounded-2xl md:rounded-4xl overflow-hidden shadow-2xl border border-gray-100 ring-4 md:ring-8 ring-white/50 animate-in fade-in slide-in-from-left-8 duration-1000 mr-5 md:mr-0">
              <iframe
                src={map.embedUrl}
                width="100%"
                height="100%"
                loading="lazy"
                title="NLRI Campus Map"
                className="border-0 grayscale-[0.1] hover:grayscale-0 transition-all duration-700 h-full"
              ></iframe>
            </div>

            {/* Right Column: Contact Form */}
            <form className="bg-white p-6 md:p-10 rounded-2xl md:rounded-4xl shadow-2xl shadow-primary/5 border border-gray-100 space-y-5 md:space-y-6 animate-in fade-in slide-in-from-right-8 duration-1000 h-full flex flex-col justify-center mr-5 md:mr-0">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#21325b] mb-1 md:mb-2">Send Us a Message</h3>
              <p className="text-gray-500 text-xs md:text-sm mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-100">Our team typically responds within 24-48 business hours.</p>

              <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-1 md:space-y-2">
                  <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-transparent border-b-gray-200 rounded-lg md:rounded-xl px-4 md:px-5 py-3 md:py-4 focus:outline-none focus:border-primary focus:bg-white focus:shadow-md transition-all font-medium text-xs md:text-sm"
                  />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border border-transparent border-b-gray-200 rounded-lg md:rounded-xl px-4 md:px-5 py-3 md:py-4 focus:outline-none focus:border-primary focus:bg-white focus:shadow-md transition-all font-medium text-xs md:text-sm"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-1 md:space-y-2">
                  <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91-1234567890"
                    className="w-full bg-gray-50 border border-transparent border-b-gray-200 rounded-lg md:rounded-xl px-4 md:px-5 py-3 md:py-4 focus:outline-none focus:border-primary focus:bg-white focus:shadow-md transition-all font-medium text-xs md:text-sm"
                  />
                </div>
                <div className="space-y-1 md:space-y-2">
                  <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Inquiry about Course"
                    className="w-full bg-gray-50 border border-transparent border-b-gray-200 rounded-lg md:rounded-xl px-4 md:px-5 py-3 md:py-4 focus:outline-none focus:border-primary focus:bg-white focus:shadow-md transition-all font-medium text-xs md:text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1 md:space-y-2">
                <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 pl-1">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you today?"
                  className="w-full bg-gray-50 border border-transparent border-b-gray-200 rounded-lg md:rounded-3xl px-4 md:px-5 py-3 md:py-3.5 focus:outline-none focus:border-primary focus:bg-white focus:shadow-md transition-all font-medium resize-none shadow-sm text-xs md:text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-[#21325b] text-white py-3.5 md:py-4.5 rounded-sm font-black uppercase tracking-[2px] md:tracking-[3px] shadow-xl shadow-primary/10 hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer border border-white/10 text-xs md:text-sm"
              >
                Send Inquiry Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 🔹 3. CONTACT INFORMATION GRID (Professional Card Layout) */}
      <section className="py-12 md:py-24 px-5 md:px-0 bg-white border-t border-gray-200">
        <div className="container-wide pl-5 md:pl-0 max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
              Contact Information
            </h2>
            <p className="mt-3 text-gray-500 text-[13px] md:text-sm max-w-xl mx-auto px-5 md:px-0">
              For admissions, academic programs, partnerships, and campus visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                <MapPinIcon className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-900">Campus Address</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed text-balance">
                  CVRU Khandwa – NLRI Ratlam Campus<br />
                  Near Maleni River, Village Bhadwasa, Namli<br />
                  Ratlam, Madhya Pradesh – 457222, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                <PhoneIcon className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-900">Phone</h3>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li>General: +91-12345-67890</li>
                  <li>Admissions: +91-12345-67890</li>
                  <li>Reception: 070000-111111</li>
                </ul>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                <EnvelopeIcon className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-900">Email</h3>
                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                  <li className="break-all md:break-normal">test@nlri.com</li>
                  <li className="break-all md:break-normal">admissions@nlri.cvruk.in</li>
                </ul>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                <ClockIcon className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-900">Office Hours</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Monday – Saturday: 9:30 AM – 5:30 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                <GlobeAltIcon className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-gray-900">Website</h3>
                <a
                  href="https://www.nlri.cvruk.in"
                  className="mt-2 inline-block text-sm text-gray-600 hover:text-primary transition"
                >
                  www.nlri.cvruk.in
                </a>
              </div>
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base md:text-lg font-medium text-gray-900">Connect</h3>
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                  <FacebookIcon />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                  <LinkedInIcon />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                  <InstagramIcon />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 5. FAQ SECTION (Accordion Style based on Reference) */}
      <section className="py-12 md:py-24 bg-white border-t border-gray-100">
        <div className="container-wide px-10 md:px-0 max-w-4xl">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-custom-title font-serif font-bold text-[#3d317c] mb-4">
              Frequently Asked Questions (FAQ&apos;s)
            </h2>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-[9px] md:text-xs font-bold text-gray-400 uppercase tracking-widest px-5 md:px-0">
              <a href="/admissions" className="hover:text-primary transition-colors">Admissions</a>
              <span className="opacity-30">|</span>
              <a href="/admissions#eligibility" className="hover:text-primary transition-colors">Eligibility</a>
              <span className="opacity-30">|</span>
              <a href="/admissions#fees" className="hover:text-primary transition-colors">Fees</a>
              <span className="opacity-30">|</span>
              <a href="/admissions#entrance" className="hover:text-primary transition-colors">Entrance</a>
              <span className="opacity-30">|</span>
              <a href="/placements" className="hover:text-primary transition-colors">Placements</a>
            </div>
            <div className="w-16 h-1 bg-accent/20 mx-auto mt-6 rounded-full" />
          </div>

          <div className="space-y-0 divide-y divide-gray-100">
            {[
              {
                q: "Is NLRI Ratlam Campus recognised and approved?",
                a: "Yes. NLRI Ratlam Campus is part of Dr. C.V. Raman University (CVRU) Khandwa, which is approved by the University Grants Commission (UGC). Our specialized vocational and rural management programs are designed in alignment with national skill development frameworks."
              },
              {
                q: "What are the key career prospects after Rural Management?",
                a: "Graduates can find rewarding careers in NGOs, Government Rural Projects, Agri-Businesses, Rural Banking, and Social Enterprises. Our focus on field-immersion ensures students are ready for grassroots leadership from day one."
              },
              {
                q: "What entrance exams are required for admission?",
                a: "Admission to PGD and Diploma courses is primarily based on academic merit and a personal interview. Certain specialized programs may require a basic aptitude test to assess field readiness."
              },
              {
                q: "Does the campus provide placement assistance?",
                a: "Absolutely. We have a dedicated Placement & Partnership Cell that connects students with leading organizations in the development sector. Our strong ties with CSR wings of various corporate houses enhance student opportunities."
              }
            ].map((faq, idx) => (
              <FaqItem key={idx} question={faq.q} answer={faq.a} defaultOpen={idx === 0} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── FAQ Component ─── */
function FaqItem({ question, answer, defaultOpen = false }: { question: string, answer: string, defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="py-8 transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group cursor-pointer"
      >
        <span className={`text-[17px] md:text-lg font-bold transition-colors ${isOpen ? 'text-[#3b3378]' : 'text-gray-900 group-hover:text-primary'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#3b3378] border-[#3b3378] text-white rotate-180' : 'border-gray-200 text-gray-400 group-hover:border-primary group-hover:text-primary'}`}>
          <ChevronDownIcon className="w-4 h-4" />
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 leading-relaxed text-[15px] md:text-base font-medium">
          {answer}
        </p>
      </div>
    </div>
  );
}

/* ─── Social SVGs ─── */
const FacebookIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);
const TwitterIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 110-4.127 2.063 2.063 0 010 4.127zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
);
const InstagramIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.94 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
