"use client";

import React from "react";
import { contactData } from "@/src/data/contact-data";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function ContactMain() {
  const { categories, form, map } = contactData;

  return (
    <div className="bg-white">
      {/* 📞 Contact Categories Row */}
      <section className="py-24 bg-white">
        <div className="container-wide px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="academic-section-title">Departmental Contacts</h2>
            <p className="academic-section-subtitle">Reach out directly to our specific administrative and academic departments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {categories.map((cat, i) => (
              <div key={i} className="flex flex-col group animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                <h3 className="academic-section-subtitle text-left! mx-0! mb-8! text-primary! text-2xl! relative font-bold">
                  {cat.title}
                  <div className="absolute -bottom-3 left-0 w-12 h-1 bg-accent/20 rounded-full group-hover:w-20 transition-all duration-300" />
                </h3>
                <div className="space-y-8">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-4">
                      <div className="h-10 w-10 shrink-0 bg-gray-50 text-primary border border-gray-100 rounded-lg flex items-center justify-center group-hover:border-primary/20 transition-colors">
                        {item.label.toLowerCase().includes('phone') ? <cat.icon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5 rotate-90" />}
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">
                          {item.label}
                        </span>
                        <p className="text-lg font-bold text-text-dark leading-snug hover:text-primary transition-colors cursor-default">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📍 Map & Form Overlap Section */}
      <section className="relative min-h-[600px] flex items-end md:items-center bg-gray-50/50">
        {/* Full-width Map Background */}
        <div className="absolute inset-0 z-0">
          <iframe
            src={map.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter brightness-[0.95] grayscale-20"
          />
        </div>

        <div className="container-wide relative z-10 px-4 py-12 md:py-24 flex justify-end items-center">
          {/* Floating Form Card */}
          <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="bg-white border-b border-gray-100 p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight mb-2">{form.title}</h2>
              <p className="text-text-muted text-sm leading-relaxed">
                {form.subtitle}
              </p>
            </div>
            
            <form className="p-8 space-y-5">
              <div className="grid grid-cols-1 gap-5">
                {form.fields.map((field, i) => (
                  <div key={i} className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-text-muted">
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <div className="relative">
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 text-base font-medium focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none appearance-none transition-all shadow-sm">
                          {field.options?.map((opt, k) => (
                            <option key={k} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" />
                      </div>
                    ) : field.type === "textarea" ? (
                      <textarea
                        rows={3}
                        placeholder={field.placeholder}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 text-base font-medium focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none shadow-sm"
                      />
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 text-base font-medium focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm"
                      />
                    )}
                  </div>
                ))}
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary cursor-pointer hover:bg-primary/80 text-white font-bold text-sm uppercase tracking-widest py-4 rounded-lg shadow-lg shadow-accent/20 transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                {form.submitButton}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 🏛️ Final Small Footer Mark */}
      {/* <div className="py-20 text-center border-t border-gray-100 bg-gray-50/30">
        <p className="text-lg md:text-xl font-semibold text-primary/60 italic font-serif">
          Website design and development by dipanshudashore
        </p>
      </div> */}
    </div>
  );
}
