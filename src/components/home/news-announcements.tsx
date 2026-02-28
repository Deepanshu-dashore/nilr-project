"use client";

import { useState, useEffect } from "react";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { NewsCard } from "./home-ui";

const newsItems = [
  {
    date: "March 2026",
    title: "Major Announcement: NLRI Ratlam and Dr. C.V. Raman University MoU!",
    desc: "We are proud to announce that NLRI Ratlam is now officially collaborated with Dr. C.V. Raman University, Khandwa. This strategic partnership will offer expanded academic programs, advanced training, and new opportunities for students across India.",
    img: "/home/NewsImage/news_mou.png"
  },
  {
    date: "March 2025",
    title: "Admissions Open for 2025-26!",
    desc: "Post Graduate Diploma in Rural Management (PGD-RM) (AICTE Approved). Specialized Certificate Courses in Rural Development, Organic Farming, Water Resource Management, and more. Apply Now and shape your future!",
    img: "/home/NewsImage/news_admission.png"
  },
  {
    date: "February 2026",
    title: "New Programs Launched",
    desc: "Certificate in Good Agriculture Practices (GAP), Certificate in Community-Based Organization and Institution Development, Diploma in Community Driven Development. Explore new-age skill programs aligned with industry and government needs!",
    img: "/home/NewsImage/news_programs.png"
  },
  {
    date: "January 2026",
    title: "CSR and Development Projects Update",
    desc: "NLRI is now implementing new projects in partnership with Grasim Industries (Women Empowerment), BPCL Bina Refinery (Water Conservation), and Jal Jeevan Mission Ratlam (Community IEC).",
    img: "/home/NewsImage/news_csr.png"
  },
  {
    date: "December 2025",
    title: "Placement Update",
    desc: "100% placement record for the previous batch of PGD-Rural Management students! Top recruiters include leading NGOs, CSR wings of corporates, rural banks, and international development organizations.",
    img: "/home/NewsImage/news_placement.png"
  },
  {
    date: "Upcoming (Oct-Dec 2025)",
    title: "Upcoming Events",
    desc: "National Seminar on Rural Livelihood Innovation (Oct 2025), Career Guidance Drive for Rural Youth (Nov 2025), and Farmers’ Meet & Agri-Tech Expo (Dec 2025). Stay tuned for registration details!",
    img: "/home/NewsImage/news_events.png"
  },
  {
    date: "September 2025",
    title: "Recent Publications",
    desc: "New research papers and case studies by our faculty and students have been published in national journals on topics like Sustainable Agriculture, Community Mobilization, and Watershed Development.",
    img: "/home/NewsImage/news_publications.png"
  },
  {
    date: "Always",
    title: "Stay Updated",
    desc: "Follow our Facebook, LinkedIn, and Instagram pages for daily updates, admission alerts, and event coverage.",
    img: "/home/NewsImage/news_social.png"
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
              <div className="hidden h-10 w-px bg-gray-200 mx-2" />
              <button className="hidden text-[10px] font-black text-primary hover:text-accent transition-all items-center gap-2 uppercase tracking-[0.2em] group">
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
                     desc={item.desc}
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
