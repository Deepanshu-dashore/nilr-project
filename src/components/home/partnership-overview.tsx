"use client";

import { useState, useEffect } from "react";
import { AcademicCapIcon, GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";

export default function PartnershipOverview() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const content = [
    {
      title: "National Development",
      desc: "MoU based collaboration focused on rural empowerment and national growth."
    },
    {
      title: "Strategic Partnership",
      desc: "Expanding academic and training ecosystems through joint initiatives."
    },
    {
      title: "Center of Excellence",
      desc: "Producing socially responsible change-makers for a better tomorrow."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % content.length);
        setAnimate(true);
      }, 700);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="overview" className="section-padding bg-bg-main border-b border-border-light relative overflow-hidden">
      {/* Decorative Corner Element */}
      <div className="absolute top-0 right-0 opacity-100 pointer-events-none hidden lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="97" height="225" viewBox="0 0 107 235">
          <defs>
            <clipPath id="clip-path-corner">
              <rect id="Rectangle_1121" data-name="Rectangle 1121" width="107" height="235" transform="translate(1259 2995)" fill="#fff"/>
            </clipPath>
          </defs>
          <g id="Mask_Group_1" data-name="Mask Group 1" transform="translate(-1259 -2995)" clipPath="url(#clip-path-corner)">
            <g id="Group_1506" data-name="Group 1506" transform="translate(2339.953 2726.896)">
              <path id="Path_732" data-name="Path 732" d="M-1058.737,404.883l55.9-96.825,55.9,96.825Z" transform="translate(-10.015 -17.873)" fill="#4F46E5"/>
              <path id="Path_733" data-name="Path 733" d="M-925.325,284.63l-18.9,32.743-18.9-32.743Z" transform="translate(-52.784 -7.393)" fill="#ba4256"/>
              <path id="Path_734" data-name="Path 734" d="M-778.4,268.1l-.5,35.2-30.239-18.033Z" transform="translate(-121.674 0)" fill="#5d529e"/>
              <path id="Path_735" data-name="Path 735" d="M-1025.811,333.3l-27.657,47.9-27.657-47.9Z" transform="translate(0 -29.164)" fill="#882232"/>
              <path id="Path_736" data-name="Path 736" d="M-777.405,483.257l-39.52,68.451-39.519-68.451Z" transform="translate(-100.509 -96.247)" fill="#882130"/>
              <path id="Path_737" data-name="Path 737" d="M-848.915,359.394l-39.519,68.454-39.52-68.454Z" transform="translate(-68.519 -40.838)" fill="#ef869b"/>
              <path id="Path_738" data-name="Path 738" d="M-920.417,483.257l-39.52,68.451-39.521-68.451Z" transform="translate(-36.533 -96.247)" fill="#c9606a"/>
              <path id="Path_739" data-name="Path 739" d="M-708.3,424.852l-11.957,20.711-11.957-20.711Z" transform="translate(-156.082 -70.12)" fill="#301b84"/>
              <path id="Path_740" data-name="Path 740" d="M-970.069,605.285l-14.448,25.025-14.447-25.025Z" transform="translate(-36.754 -150.836)" fill="#0d1a63"/>
              <path id="Path_741" data-name="Path 741" d="M-967.523,607.956l61.392-106.335,61.392,106.335Z" transform="translate(-50.819 -104.462)" fill="#1a237e"/>
              <path id="Path_742" data-name="Path 742" d="M-856.445,427.848l39.519-68.454,39.52,68.454Z" transform="translate(-100.509 -40.838)" fill="#331e7e"/>
              <path id="Path_743" data-name="Path 743" d="M-769.383,583.278l18.194-31.513L-733,583.278Z" transform="translate(-139.455 -126.894)" fill="#b03e49"/>
              <path id="Path_744" data-name="Path 744" d="M-1028.972,562.038l15.365-26.614,15.365,26.614Z" transform="translate(-23.33 -119.584)" fill="#0d1a63"/>
              <path id="Path_745" data-name="Path 745" d="M-703.822,359.595l9.123-15.8,9.123,15.8Z" transform="translate(-168.783 -33.859)" fill="#ae3844"/>
            </g>
          </g>
        </svg>
      </div>

      <div className="container-wide">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 px-4 md:px-0">
          <div className="flex-1">
            <div className="h-1 w-16 md:w-20 bg-accent mb-6 md:mb-8" />
            <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-black text-text-dark mb-4 leading-tight tracking-tight">
              Empowering Rural India <br />
              <span className="text-primary font-heading text-xl sm:text-2xl md:text-[2.5rem]">Building the Future Together</span>
            </h2>
            <p className="text-base md:text-lg text-gray-800 font-semibold mb-4 md:mb-5 capitalize">CVRU Khandwa & NLRI Ratlam</p>
            <div className="space-y-4 md:space-y-6 text-sm md:text-lg text-text-muted font-medium leading-relaxed mb-8">
              <p>
                Dr. C.V. Raman University, Khandwa (CVRUK) has officially partnered with the National Livelihood Resources Institute (NLRI), Ratlam to expand its academic and training ecosystem. Through this strategic MoU, we've created a center of excellence that opens new opportunities for students across India.
              </p>
              <p className="hidden sm:block">
                NLRI, managed by the <strong>Gramin Vikas Trust (GVT)</strong>, is a nationally recognized institution with a legacy of excellence in rural development, sustainable agriculture, and livelihood enhancement. The campus spans over 10 hectares and features the AICTE-approved School of Rural Management (SRM).
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              <div className="group p-5 md:p-6 bg-white border border-gray-200 py-4 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col gap-2.5">
                <div className="flex items-center gap-3">
                  <AcademicCapIcon className="h-7 w-7 md:h-8 md:w-8 bg-primary/10 p-1.5 rounded-sm text-primary group-hover:scale-110 transition-transform duration-500" />
                  <h4 className="text-base md:text-lg font-semibold text-gray-900">AICTE Approved</h4>
                </div>
                <p className="text-[11px] md:text-xs text-gray-500">National recognition for PG Diplomas & Degrees.</p>
              </div>
              
              <div className="group p-5 md:p-6 bg-white border border-gray-200 py-4 rounded-2xl hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 flex flex-col gap-2.5">
                <div className="flex items-center gap-3">
                  <GlobeAsiaAustraliaIcon className="h-7 w-7 md:h-8 md:w-8 bg-accent/10 p-1.5 rounded-sm text-accent/80 group-hover:scale-110 transition-transform duration-500" />
                  <h4 className="text-base md:text-lg font-semibold text-gray-900">Project Exposure</h4>
                </div>
                <p className="text-[11px] md:text-xs text-gray-500">Direct involvement in national & global initiatives.</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative w-full mt-8 lg:mt-0">
            <div className="aspect-square md:aspect-4/5 rounded-2xl overflow-hidden shadow-premium border-4 md:border-8 border-white relative">
              <img 
                src="/campus-img/campusDron-2.jpeg" 
                alt="CVRUK-NLRI Campus Aerial View" 
                className="w-full h-full object-cover object-left"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/30 to-transparent" />
            </div>
            
            <div className="w-full px-4 md:px-8 py-6 md:py-10 flex justify-end absolute bottom-0 right-0 pointer-events-none">
              <div className="bg-white/95 border-indigo-400 border-b-[3px] rounded-lg shadow-lg p-4 text-left w-full max-w-[280px] sm:max-w-md overflow-hidden backdrop-blur-sm pointer-events-auto">
                <div
                  className={`transition-all duration-700 ease-in-out transform ${
                    animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                  }`}
                >
                  <h3 className="text-base md:text-lg font-bold text-[#1a237e] mb-1 md:mb-2">
                    {content[index].title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{content[index].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
