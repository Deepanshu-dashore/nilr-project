"use client";

import { useState, useEffect } from "react";
import { 
  AcademicCapIcon, 
  GlobeAsiaAustraliaIcon, 
  HomeModernIcon, 
  BeakerIcon, 
  HeartIcon, 
  TrophyIcon, 
  GlobeAltIcon, 
  UserGroupIcon, 
  BookOpenIcon, 
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

const lifeItems = [
  {
    title: "Academic Facilities",
    desc: "Well-equipped classrooms, seminar halls, GIS and Computer Laboratories, and training spaces that support academic programs, research, and professional capacity building.",
    icon: AcademicCapIcon,
    accent: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Rural Immersion",
    desc: "Structured field immersion programs integrated into academic and training curricula, enabling learners to work directly with rural communities, institutions, and development projects.",
    icon: GlobeAsiaAustraliaIcon,
    accent: "text-green-600",
    bg: "bg-green-50"
  },
  {
    title: "Hostel & Residential Life",
    desc: "On-campus residential facilities (Meerashray Hostels) providing a safe, disciplined, and community-oriented living environment for students, trainees, and professionals.",
    icon: HomeModernIcon,
    accent: "text-orange-600",
    bg: "bg-orange-50"
  },
  {
    title: "Research & Learning Support",
    desc: "Access to applied research facilities, documentation units, and learning resources supporting natural resource management, livelihoods, agriculture, and rural governance.",
    icon: BeakerIcon,
    accent: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    title: "Health & Medical Support",
    desc: "Basic medical facilities and health support systems available on campus to ensure the well-being of residential participants.",
    icon: HeartIcon,
    accent: "text-red-600",
    bg: "bg-red-50"
  },
  {
    title: "Sports & Recreation",
    desc: "Open spaces and recreational facilities promoting physical well-being, teamwork, and stress management within a residential campus setting.",
    icon: TrophyIcon,
    accent: "text-yellow-600",
    bg: "bg-yellow-50"
  },
  {
    title: "National Exposure & Training",
    desc: "Participation in national-level training programs, workshops, and exposure visits conducted in collaboration with government agencies, NGOs, and CSR partners.",
    icon: GlobeAltIcon,
    accent: "text-cyan-600",
    bg: "bg-cyan-50"
  },
  {
    title: "Community Engagement",
    desc: "Opportunities to engage with self-help groups, farmer collectives, community institutions, and local governance systems as part of learning and training programs.",
    icon: UserGroupIcon,
    accent: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Library & Learning Resources",
    desc: "A focused library supporting rural development, agriculture, management, and social sciences, along with access to training materials and research documentation.",
    icon: BookOpenIcon,
    accent: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    title: "Student & Participant Achievements",
    desc: "Recognition of academic excellence, field contributions, research work, and professional achievements of students and training participants.",
    icon: StarIcon,
    accent: "text-amber-600",
    bg: "bg-amber-50"
  }
];

export default function CampusLife() {
  const [index, setIndex] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % lifeItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % lifeItems.length);
  const prev = () => setIndex((prev) => (prev - 1 + lifeItems.length) % lifeItems.length);

  // Logic to show 3 items at a time
  const visibleItems = [
    lifeItems[index % lifeItems.length],
    lifeItems[(index + 1) % lifeItems.length],
    lifeItems[(index + 2) % lifeItems.length]
  ];

  return (
    <section className="section-padding bg-bg-section border-y border-border-light relative overflow-hidden">
      {/* Abstract decorative backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-wide relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-3xl">
            <h2 className="academic-section-title">🌿 Life@NLRI–CVRU Campus, Ratlam</h2>
            <p className="academic-section-subtitle">A Residential Learning Experience Rooted in the Field</p>
            <p className="academic-section-text">
              Experience a unique campus life that blends academics, field immersion, community engagement, and residential learning—designed to prepare professionals for real-world rural development challenges.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all shadow-sm"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all shadow-sm"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleItems.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div 
                  key={`${index}-${idx}`} 
                  className="group bg-white p-8 rounded-3xl border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col items-start gap-6 h-full animate-in fade-in slide-in-from-right-4"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <ItemIcon className={`w-7 h-7 ${item.accent} transition-colors duration-500`} />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-text-dark group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Progress Bar Indicators */}
        <div className="flex justify-center flex-wrap gap-2 mt-12">
           {lifeItems.map((_, i) => (
              <button 
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1 transition-all duration-500 rounded-full ${index === i ? "w-8 bg-primary" : "w-4 bg-gray-200"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
           ))}
        </div>
      </div>
    </section>
  );
}
