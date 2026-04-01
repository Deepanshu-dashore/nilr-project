"use client";

import React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const topLinks = [
  { 
    name: "Important Notices & Announcements", 
    href: "#", 
    bgColor: "bg-[#A53F3F]" 
  },
  { 
    name: "Admissions", 
    href: "/admissions", 
    bgColor: "bg-[#4C61A1]",
    hasDropdown: true 
  },
  { 
    name: "Apply Now", 
    href: "/apply-now", 
    bgColor: "bg-[#B34141]" 
  },
];

export default function TopBar() {
  return (
    <div className="hidden md:flex justify-end w-full overflow-hidden">
      <div className="flex items-stretch h-8 w-fit">
        {topLinks.map((link) => (
          <div
            key={link.name}
            className={`${link.bgColor} flex items-center px-6 transition-all hover:brightness-110 group cursor-pointer`}
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
