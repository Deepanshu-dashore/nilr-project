"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { MegaphoneIcon } from "@heroicons/react/24/solid";
import { API_ENDPOINTS } from "@/src/config/api.config";

interface Announcement {
  _id: string;
  title: string;
  date?: string;
  type?: string;
}

export default function AnnouncementBar() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.HOME.NEWS(10), {
          validateStatus: () => true,
        });
        if (response.status === 200 && response.data?.success && response.data?.data) {
          const { announcements = [], news = [] } = response.data.data;
          // Prioritize announcements, fallback to news if announcements are empty
          const list = announcements.length > 0 ? announcements : news;
          if (Array.isArray(list) && list.length > 0) {
            setAnnouncements(list);
          }
        }
      } catch (error) {
        // Silent catch for network errors
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnnouncements();
  }, []);

  // Default fallback if database is loading or empty
  const displayItems = announcements.length > 0 ? announcements : [
    {
      _id: "default-1",
      title: "Admissions Open for 2026–28: PGD-RM & Certificate Courses in Rural Management & Development",
    },
    {
      _id: "default-2",
      title: "National Livelihood Resources Institute (NLRI) Collaboration with Dr. C.V. Raman University",
    },
    {
      _id: "default-3",
      title: "Explore Certificate in Good Agriculture Practices (GAP) & Community Driven Development",
    },
  ];

  // Duplicate for seamless infinite loop
  const tickerItems = [...displayItems, ...displayItems];

  return (
    <div className="bg-white text-slate-800 border-b border-gray-200/80 relative z-10 overflow-hidden text-xs">
      <div className="flex items-center h-8.5">
        
        {/* Left Badge */}
        <div className="shrink-0 flex items-center gap-1.5 bg-[#ba303b] text-white font-bold uppercase tracking-wider px-3 md:px-4 h-full z-10 shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <MegaphoneIcon className="h-3.5 w-3.5" />
          <span className="hidden sm:inline font-heading text-[11px] font-bold">Announcements</span>
        </div>

        {/* Scrolling Ticker Track */}
        <div className="flex-1 overflow-hidden relative h-full flex items-center">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 pl-4">
            {tickerItems.map((item, index) => (
              <Link
                key={`${item._id}-${index}`}
                href={item._id.startsWith("default") ? "/media-events/news" : `/media-events/${item._id}`}
                className="inline-flex items-center gap-2 text-slate-700 hover:text-[#ba303b] font-medium transition-colors cursor-pointer group"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ba303b]"></span>
                <span className="group-hover:underline tracking-wide text-xs">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right CTA / View All */}
        <Link 
          href="/media-events/news" 
          className="shrink-0 hidden lg:flex items-center px-3.5 h-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-[#ba303b] font-semibold text-[10px] uppercase tracking-wider transition-colors z-10 border-l border-gray-200"
        >
          View All
        </Link>
      </div>
    </div>
  );
}
