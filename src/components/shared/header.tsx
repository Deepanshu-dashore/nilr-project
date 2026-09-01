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
  const [showTopBar, setShowTopBar] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const enquiryHref = `${pathname}?${(() => { const p = new URLSearchParams(searchParams.toString()); p.set("modal", "enquiry"); return p.toString(); })()}`;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Shadow & logo scale state
      setScrolled(currentScrollY > 20);

      // Scroll direction handling
      if (currentScrollY <= 20) {
        // At the top of the page -> always show TopBar
        setShowTopBar(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling UP -> show TopBar
        setShowTopBar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 60) {
        // Scrolling DOWN -> hide TopBar to keep compact main nav sticky
        setShowTopBar(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full bg-white flex flex-col transition-all duration-300">
      {/* Top Action Bar */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          showTopBar ? "max-h-10 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <TopBar />
      </div>
      <header
        className={`w-full bg-white transition-all duration-300 ${
          scrolled ? "shadow-md" : "shadow-xs"
        }`}
      >
      <nav className="px-4 md:px-12 py-2 border-gray-200/80 border-y" aria-label="Global">
        <div className="flex justify-between items-center h-14 md:h-16">

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
                className={`relative h-full flex items-center ${activeDropdown === item.name ? "z-50" : "z-20"}`}
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

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-[calc(100%+2px)] left-1/2 z-50 -translate-x-1/2 w-64 bg-white/98 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-lg border border-gray-200 p-2 overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200">
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
          {/* Menu Trigger CTA - Desktop */}
          <div className="hidden md:flex items-center shrink-0">
            <Link
              href={enquiryHref}
              scroll={false}
              id="mega-menu-trigger"
              className="inline-flex items-center justify-center w-9 h-9 rounded-md text-[#1a2849] shadow-sm border border-[#0e214e16] hover:shadow-md active:scale-95 transition-all duration-200"
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
      <div className="relative h-[3px] w-full overflow-hidden">
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
