"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ChatBubbleLeftRightIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function FloatingEnquiry() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isHovered, setIsHovered] = useState(false);

  // Don't render on admin or modal open if not desired
  const isAuthPage = pathname?.startsWith("/admin") || pathname === "/admin-login";
  if (isAuthPage) return null;

  const enquiryHref = "/apply-now";

  return (
    <div 
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Tooltip / Label */}
      <div 
        className={`hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md text-slate-800 text-xs font-semibold px-4 py-2 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 border border-slate-200/90 pointer-events-none ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
        }`}
      >
        <SparklesIcon className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: "3s" }} />
        <span>Admission & General Enquiry</span>
      </div>

      {/* Main Floating Button - Single Secondary Color */}
      <Link
        href={enquiryHref}
        id="floating-enquiry-button"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#ba303b] hover:bg-[#a32832] text-white shadow-[0_8px_25px_rgba(186,48,59,0.4)] hover:shadow-[0_12px_30px_rgba(186,48,59,0.65)] active:scale-95 transition-all duration-300 transform hover:-translate-y-1"
        aria-label="Submit an Enquiry"
      >
        {/* Pulsing Aura Ping */}
        <span className="absolute -inset-1 rounded-full bg-[#ba303b]/40 animate-ping opacity-75 pointer-events-none" />
        
        {/* Icon */}
        <ChatBubbleLeftRightIcon className="w-7 h-7 relative z-10 text-white" />

        {/* Small "Quick" Notification Badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-white"></span>
        </span>
      </Link>
    </div>
  );
}
