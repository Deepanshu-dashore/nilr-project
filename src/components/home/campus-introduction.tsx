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
  },
  {
    title: "Rural Immersion",
    desc: "Structured field immersion programs integrated into academic and training curricula, enabling learners to work directly with rural communities, institutions, and development projects.",
    icon: GlobeAsiaAustraliaIcon,
  },
  {
    title: "Hostel & Residential Life",
    desc: "On-campus residential facilities (Meerashray Hostels) providing a safe, disciplined, and community-oriented living environment for students, trainees, and professionals.",
    icon: HomeModernIcon,
  },
  {
    title: "Research & Learning Support",
    desc: "Access to applied research facilities, documentation units, and learning resources supporting natural resource management, livelihoods, agriculture, and rural governance.",
    icon: BeakerIcon,
  },
  {
    title: "Health & Medical Support",
    desc: "Basic medical facilities and health support systems available on campus to ensure the well-being of residential participants.",
    icon: HeartIcon,
  },
  {
    title: "Sports & Recreation",
    desc: "Open spaces and recreational facilities promoting physical well-being, teamwork, and stress management within a residential campus setting.",
    icon: TrophyIcon,
  },
  {
    title: "National Exposure & Training",
    desc: "Participation in national-level training programs, workshops, and exposure visits conducted in collaboration with government agencies, NGOs, and CSR partners.",
    icon: GlobeAltIcon,
  },
  {
    title: "Community Engagement",
    desc: "Opportunities to engage with self-help groups, farmer collectives, community institutions, and local governance systems as part of learning and training programs.",
    icon: UserGroupIcon,
  },
  {
    title: "Library & Learning Resources",
    desc: "A focused library supporting rural development, agriculture, management, and social sciences, along with access to training materials and research documentation.",
    icon: BookOpenIcon,
  },
  {
    title: "Student & Participant Achievements",
    desc: "Recognition of academic excellence, field contributions, research work, and professional achievements of students and training participants.",
    icon: StarIcon,
  }
];

export default function CampusIntroduction() {
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
    <section id="campus-intro" className="section-padding bg-bg-section border-y border-border-light relative overflow-hidden">
      {/* Abstract decorative backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-wide relative z-10">
        <div className="mb-20 text-center flex flex-col items-center">
            <h2 className="academic-section-title text-center">🌿 Life@NLRI–CVRU Campus, Ratlam</h2>
            <p className="academic-section-subtitle text-center">A Residential Learning Experience Rooted in the Field</p>
            <p className="academic-section-text text-center max-w-3xl">
              Experience a unique campus life that blends academics, field immersion, community engagement, and residential learning—designed to prepare professionals for real-world rural development challenges.
            </p>
        </div>

        <div className="relative w-full">
          {/* Navigation Arrows positioned on the left and right */}
          <button 
            onClick={prev}
            className="hidden cursor-pointer md:flex absolute -left-5 lg:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-gray-200 bg-white items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all shadow-md group"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-500 group-hover:text-white transition-colors" />
          </button>
          
          <button 
            onClick={next}
            className="hidden cursor-pointer md:flex absolute -right-5 lg:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-gray-200 bg-white items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all shadow-md group"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-500 group-hover:text-white transition-colors" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={`${index}-${idx}`} className="p-8 bg-white relative rounded-2xl border border-gray-100 overflow-hidden hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 group cursor-default animate-in fade-in slide-in-from-right-4">
                  {/* Animated Background Reveal */}
                  <div className="absolute -top-12 -right-12 h-24 w-24 bg-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-[12] transition-all duration-700 ease-in-out transform-gpu z-0"></div>
                  
                  <div className="relative z-10">
                   <div className="mb-6 transform group-hover:-translate-y-1 transition-transform duration-300">
                      <div className="w-16 h-16 bg-accent/5 group-hover:bg-white/30 rounded-2xl flex items-center justify-center transition-colors">
                        <ItemIcon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                      </div>
                   </div>
                   <h4 className="text-xl font-bold group-hover:text-white text-text-dark mb-4 leading-tight">{item.title}</h4>
                   <p className="text-gray-600 group-hover:text-white/90 text-[14px] leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Progress Bar Indicators & Mobile Nav */}
        <div className="flex flex-col items-center gap-6 mt-12">
            {/* Mobile navigation buttons (hidden on desktop since arrows are on sides) */}
            <div className="flex md:hidden items-center gap-4">
                <button 
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <button 
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
            </div>

            {/* Pagination dots */}
           <div className="flex justify-center flex-wrap gap-2">
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
      </div>
    </section>
  );
}
