"use client";

import Link from "next/link";
import { 
  ArrowRightIcon, 
  AcademicCapIcon, 
  BookOpenIcon, 
  InformationCircleIcon 
} from "@heroicons/react/24/outline";

export default function QuickLinks() {
  const links = [
    {
      title: "Admissions",
      href: "/admissions",
      desc: "Apply now for the upcoming academic session and start your journey.",
      icon: AcademicCapIcon ,
      theme: "from-[#0D1A63] to-[#1e2f6d]",
      accent: "bg-primary",
      text: "text-white"
    },
    {
      title: "Programs",
      href: "/programs",
      desc: "Explore our diverse range of degrees in Management & Agriculture.",
      icon: BookOpenIcon,
      theme: "from-[#da3948] to-[#882130]",
      accent: "bg-accent",
      text: "text-white"
    },
    {
      title: "Support",
      href: "/support",
      desc: "Get in touch for campus tours, hostel queries, or placement support.",
      icon: InformationCircleIcon,
      theme: "from-[#f3be34] to-[#d9a01b]",
      accent: "bg-[#f3be34]",
      text: "text-gray-900"
    }
  ];

  return (
    <section id="quick-links" className="py-12 bg-primary relative">
      <div style={{backgroundImage:"url('/bg-svg.svg')"}} className="absolute top-0 left-0 w-full h-full opacity-5 bg-repeat-space"/>
      <div className="container-wide px-4">
        <div className="grid grid-cols-1 bg-white md:grid-cols-3 gap-0 overflow-hidden border-t-transparent rounded-2xl shadow-xl border border-gray-100">
          {links.map((link, index) => (
            <Link 
              key={index}
              href={link.href}
              className={`group relative p-8 flex flex-col justify-between min-h-[280px] overflow-hidden transition-all duration-700`}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-full h-1 ${link.accent} z-20`} />
              
              {/* Default State: Clean & Minimal */}
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-gray-50 text-gray-800 group-hover:bg-white/20 group-hover:text-white transition-all duration-500`}>
                  <link.icon className={`w-8 h-8`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-500 mb-2">{link.title}</h3>
                <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-500 leading-normal font-medium text-sm">
                  {link.desc}
                </p>
              </div>

              {/* Hover Background: Rich Gradient Reveal */}
              <div className={`absolute inset-0 bg-linear-to-br ${link.theme} translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0`} />

              {/* Decorative Large Background Icon */}
              <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 z-0">
                <div className="scale-[3] text-gray-900 group-hover:text-white">
                   <link.icon className="w-20 h-20" />
                </div>  
              </div>

              {/* Call to Action element */}
              <div className="relative z-10 mt-6">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider group-hover:text-white transition-colors duration-500">
                  <span>Learn More</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-gray-100 group-hover:border-white/30 group-hover:translate-x-1 transition-all duration-500`}>
                    <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
