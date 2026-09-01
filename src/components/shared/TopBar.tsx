"use client";

import React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import AnnouncementBar from "./AnnouncementBar";

interface TopLink {
  name: string;
  href: string;
  bgColor: string;
  hasDropdown?: boolean;
}

const topLinks: TopLink[] = [
  { 
    name: "Approval & Recognition", 
    href: "/approvals", 
    bgColor: "bg-[#B34141]" 
  },
  { 
    name: "Research", 
    href: "/research", 
    bgColor: "bg-[#0d1a63]" 
  },
  { 
    name: "Apply Now", 
    href: "/apply-now", 
    bgColor: "bg-[#B34141]" 
  },
];

export default function TopBar() {
  return (
    <div className="flex items-center justify-between w-full bg-white border-b border-gray-200/80 overflow-hidden h-8">
      {/* Left side: Scrolling Announcement Marquee */}
      <div className="flex-1 min-w-0 h-full">
        <AnnouncementBar />
      </div>

      {/* Right side: Top Action Buttons */}
      <div className="hidden md:flex items-stretch h-full shrink-0">
        {topLinks.map((link) => (
          <div
            key={link.name}
            className={`${link.bgColor} flex items-center px-4 lg:px-6 transition-all hover:brightness-110 group cursor-pointer h-full`}
          >
            <Link
              href={link.href}
              className="text-[11px] font-semibold text-white whitespace-nowrap flex items-center gap-1.5 uppercase tracking-wide"
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDownIcon className="w-3.5 h-3.5 stroke-[3px] group-hover:rotate-180 transition-transform duration-300" />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
