"use client";

import React from "react";
import { contactData } from "@/src/data/contact-data";

export default function ContactInfo() {
  const { address, phones, emails, websites, officeHours, socials } = contactData;

  const InfoCard = ({ icon: Icon, title, content, type }: any) => (
    <div className="bg-white p-8 border border-gray-100 rounded-2xl hover:border-primary/20 transition-all duration-300">
      <div className="h-12 w-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-4">{title}</h3>
      <div className="space-y-3">
        {type === "address" ? (
          content.map((line: string, i: number) => (
            <p key={i} className={`text-sm font-bold leading-relaxed ${i === 0 ? "text-primary text-base" : "text-text-main"}`}>
              {line}
            </p>
          ))
        ) : type === "multi" ? (
          content.map((item: any, i: number) => (
            <div key={i} className="space-y-1 pb-2 last:pb-0">
              <span className="block text-[9px] font-bold text-accent uppercase tracking-tighter opacity-70">
                {item.label || item.day}
              </span>
              <p className="text-base font-bold text-text-dark">
                {item.number || item.email || item.url || item.time}
              </p>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );

  return (
    <section className="pb-24 pt-8 border-b border-gray-100">
      <div className="container-wide px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard icon={address.icon} title={address.title} content={address.details} type="address" />
          <InfoCard icon={phones.icon} title={phones.title} content={phones.items} type="multi" />
          <InfoCard icon={emails.icon} title={emails.title} content={emails.items} type="multi" />
          
          {/* Socials card - simplified */}
          <div className="bg-gray-50/50 p-8 border border-gray-100 rounded-2xl flex flex-col justify-between">
             <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-6">{socials.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {socials.links.map((link, i) => (
                    <a key={i} href={link.url} className="h-10 w-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all text-sm font-bold shadow-sm">
                       {link.label.substring(0, 2)}
                    </a>
                  ))}
                </div>
             </div>
             <p className="text-[10px] font-medium text-text-muted mt-6">
               Stay connected via our official social media handles for the latest updates.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
