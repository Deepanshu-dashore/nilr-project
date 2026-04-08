"use client";

import Link from "next/link";
import Image from "next/image";
import { Logo } from "./Logo";
import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  HomeIcon,
  UserIcon,
  BuildingLibraryIcon,
  BookOpenIcon,
  EnvelopeIcon,
  BeakerIcon,
  Square3Stack3DIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/16/solid";

const mainNavigation = [
  { name: "Home", href: "/",icon: HomeIcon },
  {
    name: "About Us",
    icon: UserIcon,
    href: "/about",
    submenu: [
      { name: "Campus Overview", href: "/about#overview" },
      { name: "Vision & Mission", href: "/about#vision" },
      { name: "Journey & Achievements", href: "/about#journey" },
      { name: "Academic Collaboration", href: "/about#collaboration" },
      { name: "Institutional Strength", href: "/about#strengths" },
      { name: "Organizational Structure", href: "/about#structure" },
      { name: "Governance & Board", href: "/about#governance" },
    ],
  },
  {
    name: "The Campus",
    icon: BuildingLibraryIcon,
    href: "/campus",
    submenu: [
      { name: "Campus Location", href: "/campus#location" },
      { name: "Infrastructure and Facilities", href: "/campus#infrastructure" },
      { name: "Green Campus Initiatives", href: "/campus#green" },
    ],
  },
  {
    name: "Programs Offered",
    icon: BookOpenIcon,
    href: "/programs",
    submenu: [
      { name: "School of Rural Management (SRM)", href: "/programs/srm" },
      { name: "Postgraduate Programs", href: "/programs#postgraduate" },
      { name: "Certificate Courses (3 Months)", href: "/programs#certificate" },
      { name: "Diploma Courses (1 Year)", href: "/programs#diploma" },
      { name: "Short-term Training Programs", href: "/programs#training" },
    ],
  },
  {
    name: "Admissions",
    icon: UserPlusIcon,
    href: "/admissions",
    submenu: [
      { name: "Admission Procedure", href: "/admissions#process" },
      { name: "Eligibility Criteria", href: "/admissions#fees" },
      { name: "Important Dates", href: "/admissions#dates" },
      { name: "Fees Structure", href: "/admissions#fees" },
      { name: "Apply Now (Online Application)", href: "/admissions#apply" },
    ],
  },
  {
    name: "Research",
    icon: BeakerIcon,
    href: "/research",
  },
  // {
  //   name: "Gallery",
  //   icon: Square3Stack3DIcon,
  //   href: "/gallery",
  // },
  // {
  //   name: "Academics",
  //   href: "#",
  //   submenu: [
  //     { name: "Research Areas", href: "/research-training#areas" },
  //     { name: "Ongoing Projects", href: "/research-training#ongoing" },
  //     { name: "Training Modules", href: "/research-training#modules" },
  //     { name: "Innovation Center", href: "/innovation#incubation" },
  //     { name: "Startup Support", href: "/innovation#startups" },
  //   ],
  // },
  // {
  //   name: "Impact",
  //   href: "#",
  //   submenu: [
  //     { name: "CSR Overview", href: "/csr-partnerships" },
  //     { name: "Partnerships", href: "/csr-partnerships#partnerships" },
  //     { name: "Placements", href: "/placements" },
  //     { name: "Internships", href: "/placements#internships" },
  //   ],
  // },
  // {
  //   name: "Media",
  //   href: "/media-events",
  //   submenu: [
  //     { name: "News & Events", href: "/media-events" },
  //     { name: "Photo Gallery", href: "/media-events#gallery" },
  //   ],
  // },
  { name: "Contact Us", href: "/contact", icon: EnvelopeIcon }
];

import TopBar from "./TopBar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const enquiryHref = `${pathname}?${(() => { const p = new URLSearchParams(searchParams.toString()); p.set("modal", "enquiry"); return p.toString(); })()}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col">
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${scrolled ? "max-h-0 opacity-0 shadow-none" : "max-h-10 opacity-100"}`}>
        <TopBar />
      </div>
      <header
        className={`md:sticky border-t border-gray-200/80 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white backdrop-blur-xl shadow-premium border-b border-border-light/50 py-2"
            : "bg-white py-4"
        }`}
      >
      <nav className="px-4 md:px-12" aria-label="Global">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex md:flex-none items-center">
            <Link href="/" className="flex items-center">
              <Logo scrolled={scrolled} />
            </Link>
          </div>

          {/* Desktop Nav - Middle */}
          <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center xl:gap-x-1.5 gap-x-1 ml-8">
            {mainNavigation.map((item) => (
              <div
                key={item.name}
                className="relative h-full"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div
                  className={`
                  flex items-center gap-1 px-3 py-2 xl:text-[14px] text-xs font-medium tracking-tight transition-all duration-300 rounded-lg cursor-pointer
                  ${
                    activeDropdown === item.name
                      ? "bg-primary/5 text-primary"
                      : "text-text-main hover:bg-bg-section hover:text-primary"
                  }
                `}
                >
                  {item.href && item.href !== "#" ? (
                    <Link href={item.href}>{item.name}</Link>
                  ) : (
                    <span>{item.name}</span>
                  )}
                  {item.submenu && (
                    <ChevronDownIcon
                      className={`h-3 w-3 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`}
                    />
                  )}
                </div>

                {/* Dropdown Menu - Styled better than reference */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-[calc(100%+2px)] left-1/2 z-20 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-lg border border-gray-200 p-2 overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="relative block px-4 py-3 text-[13px] font-semibold capitalize tracking-wider text-text-muted hover:text-primary hover:bg-primary/5 rounded-lg transition-all group"
                      >
                        <span className="relative z-10 flex items-center justify-between">
                          {sub.name}
                          <span className="rounded-full inline-block w-5 h-5 bg-primary/10 p-1 border border-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary/50 rotate-90" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
                              <path strokeDasharray={20} d="M12 21l0 -17.5">
                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"></animate>
                              </path>
                              <path strokeDasharray={12} strokeDashoffset={12} d="M12 3l7 7M12 3l-7 7">
                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" to={0}></animate>
                              </path>
                            </g>
                          </svg>
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          {/* <div className="hidden md:flex items-center ml-auto">
            <Link 
              href="/apply-now" 
              className="bg-primary text-white xl:text-[13px] text-xs font-semibold capitalize tracking-wider xl:px-7 xl:py-3 px-5 py-2 rounded-full shadow-premium hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_8px_30px_rgb(13,26,99,0.3)] active:scale-95 whitespace-nowrap"
            >
              Apply <span className="xl:inline hidden">Now</span>
            </Link>
          </div> */}
          {/* Menu Trigger CTA - Desktop */}
          <div className="hidden md:flex items-center shrink-0">
            <Link
              href={enquiryHref}
              scroll={false}
              id="mega-menu-trigger"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full text-[#1a2849] hover:shadow-lg active:scale-95 transition-all duration-200"
              title="Open Menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </Link>
          </div>
          </div>


          {/* Mobile menu button */}
          <div className="flex md:hidden gap-2">
            <Link
              href={enquiryHref}
              scroll={false}
              id="mega-menu-trigger-mobile"
              className="inline-flex items-center justify-center p-2 rounded-xl bg-[#21325b] text-white hover:bg-[#1a2849] transition-colors"
              title="Open Menu"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Colorful Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] w-full overflow-hidden">
        <Image 
          src="/header-line.png" 
          alt="" 
          fill 
          className="object-cover object-center"
          aria-hidden="true"
        />
      </div>

      </header>
    </div>
  );
}
