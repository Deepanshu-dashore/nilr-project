"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const mainNavigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    submenu: [
      { name: "Campus Overview", href: "/about#overview" },
      { name: "Vision & Mission", href: "/about#vision" },
      { name: "Journey & Achievements", href: "/about#background" },
      { name: "Institutional Strength", href: "/about#strength" },
      { name: "Organizational Structure", href: "/about#structure" },
      { name: "Governance & Board", href: "/about#governance" },
    ],
  },
  {
    name: "Campus",
    href: "/campus",
    submenu: [
      { name: "Campus Overview", href: "/campus" },
      { name: "Infrastructure & Facilities", href: "/campus#infrastructure" },
      { name: "Hostel & Accommodation", href: "/campus#hostels" },
      { name: "Laboratories & Library", href: "/campus#labs" },
      { name: "Green Campus Initiatives", href: "/campus#green" },
    ],
  },
  {
    name: "Programs",
    href: "/programs",
    submenu: [
      { name: "School of Rural Management (PGD-RM)", href: "/programs" },
      { name: "Diploma Programs", href: "/programs#diplomas" },
      { name: "Certificate Courses", href: "/programs#certificates" },
      { name: "Short-Term Training Programs", href: "/programs#short-term" },
      { name: "Teaching & Learning Approach", href: "/programs#approach" },
    ],
  },
  {
    name: "Admissions",
    href: "/admissions",
    submenu: [
      { name: "Admission Overview", href: "/admissions" },
      { name: "Eligibility Criteria", href: "/admissions#eligibility" },
      { name: "Admission Process", href: "/admissions#process" },
      { name: "Fee Structure", href: "/admissions#fees" },
      { name: "Important Dates", href: "/admissions#dates" },
      { name: "Apply Online", href: "/admissions#apply" },
    ],
  },
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
  { name: "Contact Us", href: "/contact" }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white backdrop-blur-xl shadow-premium border-b border-border-light/50 py-2"
          : "bg-white py-4"
      }`}
    >
      <nav className="px-4 md:px-16" aria-label="Global">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex lg:flex-none items-center">
            <Link href="/" className="flex items-center group">
              <Image
                src="/Logo.png"
                alt="CVRUK-NLRI Logo"
                width={320}
                height={60}
                className="h-12 md:h-17 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav - Middle */}
          <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-x-1.5 ml-8">
            {mainNavigation.map((item) => (
              <div
                key={item.name}
                className="relative h-full"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div
                  className={`
                  flex items-center gap-1 px-3 py-2 text-[14px] font-medium tracking-tight transition-all duration-300 rounded-lg cursor-pointer
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
          <div className="hidden lg:flex items-center ml-auto">
            <Link 
              href="/admissions" 
              className="bg-primary text-white text-[13px] font-semibold capitalize tracking-wider px-7 py-3 rounded-full shadow-premium hover:bg-primary-dark transition-all duration-300 hover:shadow-[0_8px_30px_rgb(13,26,99,0.3)] active:scale-95 whitespace-nowrap"
            >
              Apply Now
            </Link>
          </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-text-dark bg-bg-section hover:bg-border-light transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
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

      {/* Mobile menu - Premium Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-100 overflow-hidden">
          <div
            className="absolute inset-0 bg-text-dark/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-500 ease-out">
            <div className="flex items-center justify-between p-6 border-b border-border-light">
              <Image
                src="/longLogo.png"
                alt="Logo"
                width={180}
                height={40}
                className="h-8 w-auto"
              />
              <button
                type="button"
                className="p-2 rounded-xl text-text-dark hover:bg-bg-section transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-6 pb-20 custom-scrollbar">
              <div className="space-y-2">
                {mainNavigation.map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-border-light/50 last:border-0 pb-2 mb-2"
                  >
                    <div className="flex items-center justify-between py-2">
                      <Link
                        href={item.href || "#"}
                        className="text-sm font-bold text-text-dark uppercase tracking-wide hover:text-primary transition-colors"
                        onClick={() =>
                          !item.submenu && setMobileMenuOpen(false)
                        }
                      >
                        {item.name}
                      </Link>
                    </div>
                    {item.submenu && (
                      <div className="mt-1 mb-4 space-y-1 ml-2">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block py-2.5 px-4 text-[11px] font-semibold text-text-muted hover:text-primary hover:bg-primary/5 rounded-lg border-l-2 border-transparent hover:border-primary transition-all"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-border-light">
              <Link
                href="/admissions"
                className="block w-full text-center py-4 text-xs font-black uppercase tracking-widest text-white bg-primary rounded-xl shadow-premium active:scale-95 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply Online 2026
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
