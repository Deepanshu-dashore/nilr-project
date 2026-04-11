"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { NewsCard } from "./home-ui";
import Link from "next/link";

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  date: string;
  url?: string;
  type: string;
}

export default function NewsAnnouncements() {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Limit 8 as requested
        const response = await axios.get("/api/home/news?limit=8");
        if (response.data.success) {
          const { news, announcements } = response.data.data;
          // Combine and sort by date descending
          const combined = [...news, ...announcements].sort((a, b) => 
            new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          setItems(combined);
        }
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Autoplay effect
  useEffect(() => {
    if (items.length <= itemsToShow) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [items.length, itemsToShow]);

  // Responsive items to show
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
    if (items.length === 0) return;
    setIndex((prev) => (prev + 1) % items.length);
  };
  
  const prev = () => {
    if (items.length === 0) return;
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "Notification";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric"
    });
  };

  // Logic to show items based on screen size
  const visibleItems = items.length > 0 
    ? Array.from({ length: Math.min(itemsToShow, items.length) }, (_, i) => 
        items[(index + i) % items.length]
      )
    : [];

  if (isLoading) {
    return (
      <section className="section-padding bg-bg-main border-y border-border-light overflow-hidden">
        <div className="container-wide">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-20 gap-6 md:gap-10 animate-pulse">
              <div className="max-w-2xl px-2 md:px-0">
                  <div className="h-10 bg-gray-200 rounded-lg w-64 mb-4"></div>
                  <div className="h-4 bg-gray-100 rounded w-full max-w-lg"></div>
              </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-4/3 bg-gray-100 rounded-2xl animate-pulse"></div>
              ))}
           </div>
        </div>
      </section>
    );
  }

  if (items.length === 0) return null;

  return (
    <section className="section-padding bg-bg-main border-y border-border-light overflow-hidden">
      <div className="container-wide text-nowrap">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-20 gap-6 md:gap-10">
            <div className="max-w-2xl px-2 md:px-0">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-dark mb-4 tracking-tight">News & Announcements</h2>
                <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">Keep up with the latest updates, conferences, and achievements from the CVRUK-NLRI community.</p>
            </div>
            <div className="flex items-center gap-4 px-2 md:px-0">
              <button 
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm cursor-pointer"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button 
                onClick={next}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm cursor-pointer"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
        </div>
        
        <div className="relative px-2 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
             {visibleItems.map((item, idx) => (
                <Link 
                  href={`/media-events/${item._id}`}
                  key={`${index}-${idx}`} 
                  className="transition-all duration-500 transform animate-in fade-in slide-in-from-right-4"
                >
                   <NewsCard 
                     date={formatDate(item.date)} 
                     title={item.title} 
                     desc={item.description}
                     img={item.url || "/placeholder.png"} 
                   />
                </Link>
             ))}
          </div>
        </div>
        
        {/* Progress Bar Indicators */}
        <div className="flex justify-center gap-1 mt-12 mb-16">
           {items.map((_, i) => (
              <button 
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${index === i ? "w-10 bg-primary shadow-sm" : "w-4 bg-gray-200 hover:bg-gray-300"}`}
              />
           ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-4">
          <Link 
            href="/media-events/news" 
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white text-xs font-semibold uppercase tracking-[0.1em] rounded-full hover:bg-slate-900 transition-all shadow-xl shadow-primary/20 group active:scale-95"
          >
            Explore More Insights
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

