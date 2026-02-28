"use client";

import { useState, useEffect } from "react";
import { 
  AcademicCapIcon, 
  GlobeAsiaAustraliaIcon, 
  HomeModernIcon, 
  BeakerIcon, 
  TrophyIcon, 
  GlobeAltIcon, 
  UserGroupIcon, 
  BookOpenIcon, 
  StarIcon,
  MapIcon,
  WifiIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

const lifeItems = [
  {
    title: "State-of-the-Art Academic Blocks",
    desc: "Modern academic blocks featuring smart classrooms and specialized laboratories designed for advanced technical education.",
    icon: AcademicCapIcon,
  },
  {
    title: "Specialized GIS Lab",
    desc: "A high-end Geographic Information System (GIS) Laboratory for advanced rural planning and research applications.",
    icon: MapIcon,
  },
  {
    title: "School of Rural Management (SRM)",
    desc: "AICTE-approved School of Rural Management dedicated to creating future rural development leaders.",
    icon: StarIcon,
  },
  {
    title: "Residential Facilities",
    desc: "Safe and community-oriented living at Meerashray Hostel and Balram Bhawan for students and trainees.",
    icon: HomeModernIcon,
  },
  {
    title: "Knowledge Centre & Library",
    desc: "A specialized Knowledge Centre and library housing more than 6,000+ resources for academic excellence.",
    icon: BookOpenIcon,
  },
  {
    title: "Open Laboratories & Farms",
    desc: "A vast learning ecosystem with nurseries, research farms, and demonstration plots across 10+ hectares.",
    icon: GlobeAsiaAustraliaIcon,
  },
  {
    title: "Fully Wi-Fi Enabled Campus",
    desc: "Complete digital connectivity with high-speed Wi-Fi, modern IT infrastructure, and dedicated media labs.",
    icon: WifiIcon,
  },
  {
    title: "Sports & Recreational Grounds",
    desc: "Dedicated grounds for football, cricket, and volleyball to ensure holistic development and teamwork.",
    icon: TrophyIcon,
  },
  {
    title: "Training Centres",
    desc: "Advanced Training Centres capable of hosting over 190 participants simultaneously for professional workshops.",
    icon: UserGroupIcon,
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
        <div className="mb-16 text-center flex flex-col items-center">
            <h2 className="academic-section-title text-center">🌿 Campus Introduction</h2>
            <div className="max-w-7xl mx-auto space-y-4 text-gray-700">
              <p className="text-center">
                Located in the scenic surroundings of Bhadwasa village, Ratlam (Madhya Pradesh), the CVRU Khandwa – NLRI Campus offers a unique blend of academic excellence and hands-on rural innovation. Spread over more than 10 hectares along the banks of the Maleni River, the campus stands as a model of sustainable development, combining modern education facilities with eco-friendly infrastructure.
              </p>
              <p className="text-center">
                The campus houses the National Livelihood Resources Institute (NLRI) and the School of Rural Management (SRM), both operated under the stewardship of Gramin Vikas Trust (GVT) — a national-level development organization with over three decades of field experience.
              </p>
              <p className="text-center">
                Designed by experts from the Delhi School of Planning and Architecture, the earthquake-resistant structures, green landscapes, and water conservation systems make the campus a practical learning ground for rural development and natural resource management.
              </p>
              <h3 className="text-xl md:text-2xl font-bold mt-10 text-primary">Key features of the CVRUK-NLRI Campus include:</h3>
            </div>
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
                    className={`h-1 transition-all duration-500 rounded-full ${index === i ? "w-8 bg-accent" : "w-4 bg-gray-200"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
               ))}
           </div>
        </div>

        {/* Closing Paragraph */}
        <div className="mt-20 max-w-7xl mx-auto border-l-4 border-accent pl-6 py-4 bg-accent/5 rounded-r-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-sm md:text-base text-text-dark font-medium leading-relaxed italic">
            "The CVRUK-NLRI campus is not just a place for education — it’s a living ecosystem where theory meets practice, and where students, researchers, and rural communities collaborate to create lasting impact."
          </p>
        </div>
      </div>
    </section>
  );
}
