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
      title: "National Institute of Rural Management (NIRM) Collaboration with Dr. C.V. Raman University",
    },
    {
      _id: "default-3",
      title: "Explore Certificate in Good Agriculture Practices (GAP) & Community Driven Development",
    },
  ];

  // Duplicate for seamless infinite loop
  const tickerItems = [...displayItems, ...displayItems];

  return (
    <div className="bg-white text-slate-800 relative z-10 overflow-hidden text-xs h-full w-full">
      <div className="flex items-center h-full">
        
        {/* Left Button / Link to Announcements */}
        <Link
          href="/media-events/news"
          className="shrink-0 flex items-center gap-1.5 bg-[#B34141] text-white font-bold uppercase tracking-wider px-3 md:px-4 h-full z-10 shadow-xs transition-all hover:brightness-125 active:scale-95 group cursor-pointer animate-pulse-maroon"
          title="View All Announcements & News"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <MegaphoneIcon className="h-3.5 w-3.5 text-white group-hover:scale-110 transition-transform" />
          <span className="font-heading text-[11px] font-bold text-white tracking-wide">Announcements</span>
        </Link>

        {/* Scrolling Ticker Track */}
        <div className="flex-1 overflow-hidden relative h-full flex items-center min-w-0">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 pl-4">
            {tickerItems.map((item, index) => (
              <Link
                key={`${item._id}-${index}`}
                href={item._id.startsWith("default") ? "/media-events/news" : `/media-events/${item._id}`}
                className="inline-flex items-center gap-2 text-slate-700 hover:text-[#B34141] font-medium transition-colors cursor-pointer group"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B34141]"></span>
                <span className="group-hover:underline tracking-wide text-xs">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
