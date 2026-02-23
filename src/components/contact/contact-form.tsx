"use client";

import React from "react";
import { contactData } from "@/src/data/contact-data";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function ContactForm() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="academic-section-title">Send us an Enquiry</h2>
            <p className="academic-section-subtitle">
              Have questions? Fill out the form below and our team will get back to you within 24–48 hours.
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50/50 p-8 md:p-12 rounded-3xl border border-gray-100">
            {contactData.form.fields.map((field, i) => (
              <div key={i} className={`space-y-2 ${field.type === 'textarea' ? 'md:col-span-2' : ''}`}>
                <label className="text-[11px] font-black uppercase tracking-widest text-text-muted ml-1">
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    rows={5}
                    placeholder={field.placeholder}
                    className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
                  />
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                  />
                )}
              </div>
            ))}
            
            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-12 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-md"
              >
                {contactData.form.submitButton}
                <PaperAirplaneIcon className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
