"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { EventCard } from "./home-ui";
import Link from "next/link";
import { API_ENDPOINTS } from "@/src/config/api.config";

interface EventItem {
  _id: string;
  title: string;
  description: string;
  date: string;
  url?: string;
}

const FALLBACK_EVENT_IMAGES = [
  "/home/NewsImage/news_events.png",
  "/home/NewsImage/news_csr.png",
  "/home/NewsImage/news_programs.png",
  "/home/NewsImage/news_publications.png",
  "/home/NewsImage/news_social.png",
];

const DEFAULT_EVENTS: EventItem[] = [
  {
    _id: "default-event-1",
    title: "Annual Rural Leadership Workshop 2025",
    description: "Interactive session on grassroots community mobilization and self-help group management.",
    date: new Date().toISOString(),
    url: "/home/NewsImage/news_events.png",
  },
  {
    _id: "default-event-2",
    title: "Campus Tree Plantation & Green Drive",
    description: "Students and faculty plant over 500 saplings in commitment to campus environmental sustainability.",
    date: new Date(Date.now() - 86400000 * 3).toISOString(),
    url: "/home/NewsImage/news_csr.png",
  },
  {
    _id: "default-event-3",
    title: "Agri-Tech Demonstration & Field Expo",
    description: "Showcasing modern organic farming techniques and smart drip irrigation systems.",
    date: new Date(Date.now() - 86400000 * 7).toISOString(),
    url: "/home/NewsImage/news_programs.png",
  },
];

export default function LatestHappenings() {
  const [items, setItems] = useState<EventItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Limit 8 as requested
        const response = await axios.get(API_ENDPOINTS.HOME.EVENTS(8), {
          validateStatus: () => true,
        });
        if (response.status === 200 && response.data?.success && Array.isArray(response.data?.data) && response.data.data.length > 0) {
          setItems(response.data.data);
        } else {
          setItems(DEFAULT_EVENTS);
        }
      } catch (error) {
        setItems(DEFAULT_EVENTS);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (items.length <= itemsToShow) return;
    setIndex((prev) => (prev + 1) % (items.length - itemsToShow + 1));
  };
  
  const prev = () => {
    if (items.length <= itemsToShow) return;
    setIndex((prev) => (prev - 1 + (items.length - itemsToShow + 1)) % (items.length - itemsToShow + 1));
  };

  const parseDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const day = d.getDate().toString().padStart(2, '0');
    const month = d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    const year = d.getFullYear();
    return { day, monthYear: `${month}' ${year}` };
  };

  if (isLoading) {
    return (
      <section className="section-padding bg-bg-section">
        <div className="container-wide">
          <div className="mb-20 animate-pulse">
            <div className="h-10 bg-gray-200 rounded-lg w-64 mb-4"></div>
            <div className="h-4 bg-gray-100 rounded w-full max-w-lg"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-square bg-gray-100 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (items.length === 0) return null;

  return (
    <section className="section-padding bg-bg-section overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-dark mb-4 tracking-tight">Latest Happenings</h2>
                <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">From intellectual debates to electrifying fests - there's never a dull moment on campus.</p>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={prev}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm cursor-pointer disabled:opacity-30"
                disabled={items.length <= itemsToShow}
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm cursor-pointer disabled:opacity-30"
                disabled={items.length <= itemsToShow}
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out gap-6"
              style={{ transform: `translateX(-${index * (100 / itemsToShow)}%)` }}
            >
              {items.map((event, idx) => {
                const { day, monthYear } = parseDate(event.date);
                return (
                  <Link 
                    href={`/media-events/${event._id}`}
                    key={event._id} 
                    className={`shrink-0 ${
                      itemsToShow === 3 ? 'w-[calc(33.333%-16px)]' : 
                      itemsToShow === 2 ? 'w-[calc(50%-12px)]' : 
                      'w-full'
                    }`}
                  >
                    <EventCard 
                      day={day} 
                      monthYear={monthYear} 
                      title={event.title}
                      desc={event.description}
                      img={event.url || FALLBACK_EVENT_IMAGES[idx % FALLBACK_EVENT_IMAGES.length]} 
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-20 flex justify-center">
           <Link 
            href="/media-events/events" 
            className="group flex items-center gap-4 px-10 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.1em] text-text-dark bg-primary text-white transition-all shadow-xl shadow-gray-200/50"
           >
             View All Happenings
             <div className="w-6 h-6 rounded-full bg-gray-100/30 flex items-center justify-center group-hover:bg-white/20 transition-colors">
               <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
             </div>
           </Link>
        </div>
      </div>
    </section>
  );
}

