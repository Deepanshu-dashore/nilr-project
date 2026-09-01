"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Hide on admin/auth pages
  const isAuthPage = pathname?.startsWith("/admin") || pathname === "/admin-login";

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down more than 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    // Check initial scroll position immediately
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isAuthPage) return null;

  return (
    <div
      className={`fixed bottom-[90px] right-6 z-50 flex items-center justify-end gap-3 select-none transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Tooltip Label */}
      <div
        className={`hidden sm:flex items-center bg-slate-900 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-2xl border border-slate-700 pointer-events-none transition-all duration-200 ${
          isHovered && isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2"
        }`}
      >
        <span>Back to Top</span>
      </div>

      {/* Main Scroll to Top Button - Perfectly positioned above the enquiry button */}
      <button
        type="button"
        onClick={scrollToTop}
        id="scroll-to-top-button"
        aria-label="Scroll to top of page"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0d1a63] hover:bg-[#ba303b] text-white shadow-[0_8px_25px_rgba(13,26,99,0.4)] hover:shadow-[0_12px_30px_rgba(186,48,59,0.65)] border-2 border-white/30 active:scale-90 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="w-7 h-7 text-white transition-transform duration-300 group-hover:-translate-y-1"
        >
          <path d="M0 0h16v16H0z" fill="none" />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
          />
        </svg>
      </button>
    </div>
  );
}
