"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { API_ENDPOINTS } from "@/src/config/api.config";

export default function Footer() {
  const [siteInfo, setSiteInfo] = useState({
    universityName: "CVRUK - NIRM UNIVERSITY",
    tagline: "SHAPING TOMORROW'S LEADERS TODAY",
    contactAddress: "Bhadwasa, Mhow-Neemuch Road, Ratlam (M.P.) 457222",
    contactEmail: "admissions@nlri.com",
    contactPhone: "+91 12345-67890",
    socialLinks: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    },
  });

  useEffect(() => {
    const fetchSiteInfo = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.SITE_INFO.GET);
        if (response.ok) {
          const res = await response.json();
          if (res.success && res.data) {
            setSiteInfo((prev) => ({
              ...prev,
              contactAddress: res.data.contactAddress || prev.contactAddress,
              contactEmail: res.data.generalEmail || res.data.contactEmail || prev.contactEmail,
              contactPhone: res.data.helplinePhone || res.data.contactPhone || prev.contactPhone,
              socialLinks: { ...prev.socialLinks, ...(res.data.socialLinks || {}) },
            }));
          }
        }
      } catch {
        // Fallback gracefully to default values
      }
    };
    fetchSiteInfo();
  }, []);

  const footerSections = [
    {
      title: "ACADEMICS",
      links: [
        { name: "Undergraduate Programs", href: "/programs" },
        { name: "Graduate Studies", href: "/programs" },
        { name: "Colleges & Schools", href: "/about" },
        { name: "Research Centers", href: "/research-training" },
        { name: "Academic Calendar", href: "/media-events" },
        { name: "Library", href: "/campus" },
      ],
    },
    {
      title: "CAMPUS LIFE",
      links: [
        { name: "Housing & Residence Life", href: "/campus" },
        { name: "Dining Services", href: "/campus" },
        { name: "Student Clubs & Organizations", href: "/student-life" },
        { name: "Athletics & Recreation", href: "/campus" },
        { name: "Health & Wellness", href: "/campus" },
        { name: "Campus Safety", href: "/contact" },
      ],
    },
    {
      title: "ADMISSIONS & AID",
      links: [
        { name: "How to Apply", href: "/admissions" },
        { name: "Tuition & Fees", href: "/admissions" },
        { name: "Financial Aid & Scholarships", href: "/admissions" },
        { name: "International Students", href: "/admissions" },
        { name: "Visit Campus", href: "/contact" },
        { name: "Request Information", href: "/enquiry" },
      ],
    },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Sitemap", href: "/sitemap.xml" },
  ];

  return (
    <footer className="bg-[#12273B] text-[#C2D1E0] border-t border-white/10 relative overflow-hidden font-sans select-none">
      {/* Subtle architectural gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-[#223366]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-[450px] h-[450px] bg-[#D6333D]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Grid */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10">
          
          {/* ──────────────── COLUMN 1: Brand / Identity + Connect ──────────────── */}
          <div className="flex flex-col space-y-5 lg:pr-2 lg:col-span-3">
            {/* University Logo */}
            <Link href="/" className="inline-block">
              <Logo variant="white" size="md" orientation="vertical" align="left" />
            </Link>

            {/* Connect With Us */}
            <div className="pt-1">
              <h3 className="font-bold text-[#FFFFFF] text-xs uppercase tracking-widest mb-3">
                CONNECT WITH US
              </h3>
              <div className="flex items-center gap-2">
                <SocialCircleButton href={siteInfo.socialLinks.facebook} label="Facebook">
                  <FacebookIcon />
                </SocialCircleButton>
                <SocialCircleButton href={siteInfo.socialLinks.twitter} label="X (Twitter)">
                  <TwitterIcon />
                </SocialCircleButton>
                <SocialCircleButton href={siteInfo.socialLinks.instagram} label="Instagram">
                  <InstagramIcon />
                </SocialCircleButton>
                <SocialCircleButton href={siteInfo.socialLinks.linkedin} label="LinkedIn">
                  <LinkedInIcon />
                </SocialCircleButton>
                <SocialCircleButton href={siteInfo.socialLinks.youtube} label="YouTube">
                  <YouTubeIcon />
                </SocialCircleButton>
              </div>
            </div>
          </div>

          {/* ──────────────── COLUMNS 2–4: Link Sections ──────────────── */}
          {/* Desktop: flat columns  |  Mobile (<md): collapsible accordions */}
          {footerSections.map((section) => (
            <FooterAccordionColumn
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}

          {/* ──────────────── COLUMN 5: Contact Us & Apply ──────────────── */}
          <div className="flex flex-col space-y-5 lg:col-span-3">
            <div>
              <h3 className="font-bold text-[#FFFFFF] text-sm uppercase tracking-widest mb-4">
                GET IN TOUCH
              </h3>
              {/* Address, Phone, Email with small matching icons */}
              <div className="space-y-3 text-[13px] text-[#E2E8F0] leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <MapPinIcon className="w-4 h-4 text-[#FFFFFF] shrink-0 mt-1 opacity-90" />
                  <span>{siteInfo.contactAddress}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <PhoneIcon className="w-4 h-4 text-[#FFFFFF] shrink-0 opacity-90" />
                  <a
                    href={`tel:${siteInfo.contactPhone.split("/")[0].trim()}`}
                    className="hover:text-[#FFFFFF] transition-colors duration-200"
                  >
                    {siteInfo.contactPhone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <EnvelopeIcon className="w-4 h-4 text-[#FFFFFF] shrink-0 opacity-90" />
                  <a
                    href={`mailto:${siteInfo.contactEmail}`}
                    className="hover:text-[#FFFFFF] transition-colors duration-200"
                  >
                    {siteInfo.contactEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Apply Now Button */}
            <div className="pt-1">
              <Link
                href="/admissions"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-md bg-[#EF5A00] hover:bg-[#d94f00] active:scale-[0.98] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest shadow-md transition-all duration-200 text-center"
              >
                <span>APPLY NOW</span>
                <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ──────────────── BOTTOM UTILITY BAR ──────────────── */}
      <div className="w-full border-t border-white/15 bg-[#0B1B2B] relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-7 pb-12 text-center">

          {/* Bottom Row: Legal & Copyright — enhanced contrast and touch padding */}
          <div className="flex flex-wrap items-center justify-center text-[12.5px] text-[#E2E8F0]/85 font-medium">
            <span className="px-2.5 py-1">
              © {new Date().getFullYear()} {siteInfo.universityName}. All rights reserved.
            </span>
            <span className="text-white/30 select-none px-1.5 py-1">|</span>
            {legalLinks.map((item, index) => (
              <React.Fragment key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors px-2.5 py-1"
                >
                  {item.name}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="text-white/30 select-none px-1.5 py-1">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}

/* ─── Accordion Column (collapses on mobile, flat on desktop) ─── */
function FooterAccordionColumn({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col lg:col-span-2">
      {/* Heading — tappable on mobile to toggle, static on desktop */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between w-full md:pointer-events-none md:cursor-default"
        aria-expanded={isOpen}
      >
        <h3 className="font-bold text-[#FFFFFF] text-sm uppercase tracking-widest">
          {title}
        </h3>
        <ChevronDownIcon
          className={`w-4 h-4 text-[#FFFFFF] md:hidden transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Link list — always visible on md+, accordion toggle on mobile */}
      <ul
        className={`space-y-3 overflow-hidden transition-all duration-300 ease-in-out md:!max-h-none md:!opacity-100 md:mt-5 ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-[13.5px] text-[#E2E8F0] hover:text-[#FFFFFF] transition-colors duration-200 block"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Circular Social Media Button — enhanced hover contrast & glow ─── */
function SocialCircleButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFFFFF] text-white hover:text-[#12273B] border border-white/20 hover:border-white flex items-center justify-center transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(255,255,255,0.3)] shrink-0"
    >
      <div className="w-4 h-4">{children}</div>
    </a>
  );
}

/* ─── Social SVG Icons ─── */
function FacebookIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 110-4.127 2.063 2.063 0 010 4.127zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.94 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
