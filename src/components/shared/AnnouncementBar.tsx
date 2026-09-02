"use client";

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import { gsap } from "gsap";
import { MegaphoneIcon } from "@heroicons/react/24/solid";
import { API_ENDPOINTS } from "@/src/config/api.config";

interface AnnouncementItem {
  _id: string;
  title: string;
  date?: string;
  type?: string;
}

const DEFAULT_ITEMS: AnnouncementItem[] = [
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
  const [items, setItems] = useState<AnnouncementItem[]>(DEFAULT_ITEMS);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const fetchNewsAndAnnouncements = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.HOME.NEWS(12), {
          validateStatus: () => true,
        });

        if (response.status === 200 && response.data?.success && response.data?.data) {
          const {
            announcements = [],
            news = [],
            highlights = [],
            announcement = [],
          } = response.data.data;

          const rawAnnouncements =
            Array.isArray(announcements) && announcements.length > 0
              ? announcements
              : Array.isArray(announcement)
              ? announcement
              : [];

          // Merge announcements, news, and highlights
          const combined = [
            ...rawAnnouncements,
            ...(Array.isArray(news) ? news : []),
            ...(Array.isArray(highlights) ? highlights : []),
          ];

          // Deduplicate by ID or Title
          const seen = new Set<string>();
          const mappedItems: AnnouncementItem[] = [];

          for (const item of combined) {
            if (item && item.title) {
              const key = item._id || item.title.trim().toLowerCase();
              if (!seen.has(key)) {
                seen.add(key);
                mappedItems.push({
                  _id: item._id || `item-${mappedItems.length}`,
                  title: item.title.trim(),
                  type: item.type || "Update",
                  date: item.date || item.createdAt,
                });
              }
            }
          }

          if (mappedItems.length > 0) {
            setItems(mappedItems);
          }
        }
      } catch {
        // Keep default items on failure
      }
    };

    fetchNewsAndAnnouncements();
  }, []);

  const displayItems = items.length > 0 ? items : DEFAULT_ITEMS;

  // Duplicate list 4 times for a seamless, continuous infinite scroll loop
  const tickerItems = [...displayItems, ...displayItems, ...displayItems, ...displayItems];

  // GSAP Infinite Linear Animation with Pause on Hover
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Kill any existing tween before re-initializing
    if (tweenRef.current) {
      tweenRef.current.kill();
    }

    const duration = Math.max(30, displayItems.length * 8);

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: duration,
      ease: "none",
      repeat: -1,
    });

    tweenRef.current = tween;

    const onEnter = () => tween.pause();
    const onLeave = () => tween.resume();

    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);

    return () => {
      tween.kill();
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
    };
  }, [displayItems]);

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
          <span className="font-heading text-[11px] font-bold text-white tracking-wide">
            Announcements
          </span>
        </Link>

        {/* Scrolling Ticker Track Powered by GSAP Linear Loop with Clickable Links */}
        <div className="flex-1 overflow-hidden relative h-full flex items-center min-w-0">
          <div
            ref={trackRef}
            className="flex items-center gap-6 whitespace-nowrap will-change-transform cursor-pointer"
          >
            {tickerItems.map((item, index) => {
              const href = item._id.startsWith("default")
                ? "/media-events/news"
                : `/media-events/${item._id}`;

              return (
                <Link
                  key={`${item._id}-${index}`}
                  href={href}
                  className="inline-flex items-center gap-2.5 text-slate-700 hover:text-[#B34141] transition-colors group shrink-0 py-1"
                  title={`Read more: ${item.title}`}
                >
                  {/* Bullet Dot Separator */}
                  <span className="text-[#B34141] text-sm font-bold leading-none select-none">•</span>

                  {/* Optional Category Tag */}
                  {item.type && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 group-hover:bg-red-50 group-hover:text-[#B34141] transition-colors border border-slate-200/60">
                      {item.type}
                    </span>
                  )}

                  {/* Headline Title */}
                  <span className="text-[12px] md:text-[13px] font-medium text-slate-800 group-hover:text-[#B34141] group-hover:underline transition-colors tracking-normal">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
