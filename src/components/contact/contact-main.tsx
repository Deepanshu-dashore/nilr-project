"use client";

import React from "react";
import { contactData } from "@/src/data/contact-data";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function ContactMain() {
  const { categories, form, map } = contactData;

  return (
    <div className="bg-white">
      {/* 📞 Contact Categories Row */}
      <section className="py-20">
        <div className="container-wide px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {categories.map((cat, i) => (
              <div key={i} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center">
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark">{cat.title}</h3>
                </div>
                <div className="space-y-4 border-l-2 border-gray-100 pl-6 ml-6">
                  {cat.items.map((item, j) => (
                    <div key={j} className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">
                        {item.label}
                      </span>
                      <p className="text-sm font-semibold text-text-main leading-relaxed">
                        {item.value}
                      </p>
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

        <div className="container relative z-10 px-4 py-12 md:py-24 flex justify-end">
          {/* Floating Form Card */}
          <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="bg-primary p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">{form.title}</h2>
              <p className="text-white/70 text-sm leading-relaxed">
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
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none appearance-none transition-all">
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
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none"
                      />
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all"
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
