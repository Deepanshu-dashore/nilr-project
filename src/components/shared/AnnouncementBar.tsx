"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { motion } from "framer-motion";
import { MegaphoneIcon } from "@heroicons/react/24/solid";
import { API_ENDPOINTS } from "@/src/config/api.config";

interface Announcement {
  _id: string;
  title: string;
  date?: string;
  type?: string;
}

const DEFAULT_ANNOUNCEMENTS: Announcement[] = [
  {
    _id: "default-1",
    title: "Admissions Open for 2026–28: PGD-RM & Certificate Courses in Rural Management & Development",
    type: "Admissions",
  },
  {
    _id: "default-2",
    title: "National Institute of Rural Management (NIRM) in Collaboration with Dr. C.V. Raman University",
    type: "Partnership",
  },
  {
    _id: "default-3",
    title: "Applications Invited for Certificate in Good Agriculture Practices (GAP) & Community Driven Development",
    type: "Academics",
  },
  {
    _id: "default-4",
    title: "100% Placement Record: Top Rural Enterprises & Agritech Leaders Recruit from 2025–26 Batch",
    type: "Placements",
  },
  {
    _id: "default-5",
    title: "Upcoming National Seminar on Grassroots Innovation & Sustainable Rural Transformation",
    type: "Event",
  },
  {
    _id: "default-6",
    title: "Research Grant Awarded for Sustainable Agritech & Water Resource Management Project",
    type: "Research",
  },
];

export default function AnnouncementBar() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(DEFAULT_ANNOUNCEMENTS);

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
      } catch {
        // Fallback to DEFAULT_ANNOUNCEMENTS
      }
    };
    fetchAnnouncements();
  }, []);

  const displayItems = announcements.length > 0 ? announcements : DEFAULT_ANNOUNCEMENTS;

  // Duplicate quadrupled so track is long enough and wraps completely seamlessly from 0% to -50%
  const tickerItems = [...displayItems, ...displayItems, ...displayItems, ...displayItems];

  return (
    <div className="bg-white text-slate-800 relative z-10 overflow-hidden text-xs h-full w-full select-none">
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

        {/* Scrolling Ticker Track Powered by Framer Motion Infinite Sliding */}
        <div className="flex-1 overflow-hidden relative h-full flex items-center min-w-0">
          <motion.div
            className="flex items-center gap-8 whitespace-nowrap will-change-transform"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: Math.max(28, displayItems.length * 8),
                ease: "linear",
              },
            }}
          >
            {tickerItems.map((item, index) => (
              <Link
                key={`${item._id}-${index}`}
                href={item._id.startsWith("default") ? "/media-events/news" : `/media-events/${item._id}`}
                className="inline-flex items-center gap-2.5 text-slate-700 hover:text-[#B34141] font-medium transition-colors cursor-pointer group shrink-0"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B34141]"></span>
                <span className="group-hover:underline tracking-wide text-xs">{item.title}</span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
