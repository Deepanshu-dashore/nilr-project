"use client";

import { useState, useEffect } from "react";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { NewsCard } from "./home-ui";

const newsItems = [
  {
    date: "27/03/2026",
    title: "International Conference on Socioeconomic Change, and Responsible Leadership",
    img: "/dummy-Images/conference_poster_1.png"
  },
  {
    date: "13/03/2026",
    title: "Recent Technologies and Innovations in Electronics and Photonics Second Edition",
    img: "/dummy-Images/conference_poster_2.png"
  },
  {
    date: "21/02/2028",
    title: "9th International Conference on Recent Advances in Composite Materials (ICRACM - 2028)",
    img: "/dummy-Images/conference_poster_3png"
  },
  {
    date: "10/02/2026",
    title: "Workshop on Sustainable Agriculture: Emerging Trends and Future Prospects",
    img: "/dummy-Images/conference_poster_1.png"
  },
  {
    date: "05/02/2026",
    title: "CVRUK-NLRI Rural Hackathon: Solving Local Challenges Through Innovation",
    img: "/dummy-Images/conference_poster_2.png"
  }
];

export default function NewsAnnouncements() {
  const [index, setIndex] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % newsItems.length);
  const prev = () => setIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);

  // Logic to show 3 items at a time
  const visibleItems = [
    newsItems[index % newsItems.length],
    newsItems[(index + 1) % newsItems.length],
    newsItems[(index + 2) % newsItems.length]
  ];

  return (
    <section className="section-padding bg-bg-main border-y border-border-light overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-semibold text-text-dark mb-4 tracking-tight">News & Announcements</h2>
                <p className="text-gray-600 font-medium">Keep up with the latest updates, conferences, and achievements from the CVRUK-NLRI community.</p>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button 
                onClick={next}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
              <div className="h-10 w-px bg-gray-200 mx-2" />
              <button className="text-[10px] font-black text-primary hover:text-accent transition-all flex items-center gap-2 uppercase tracking-[0.2em] group">
                 View All News <ArrowRightIcon className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {visibleItems.map((item, idx) => (
                <div key={`${index}-${idx}`} className="transition-all duration-500 transform animate-in fade-in slide-in-from-right-4">
                   <NewsCard 
                     date={item.date} 
                     title={item.title} 
                     img={item.img} 
                   />
                </div>
             ))}
          </div>
        </div>
        
        {/* Progress Bar Indicators */}
        <div className="flex justify-center gap-1 mt-12">
           {newsItems.map((_, i) => (
              <button 
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 transition-all duration-500 rounded-full ${index === i ? "w-8 bg-primary" : "w-4 bg-gray-200"}`}
              />
           ))}
        </div>
      </div>
    </section>
  );
}
