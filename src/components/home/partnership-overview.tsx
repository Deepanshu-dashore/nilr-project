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
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="h-1 w-20 bg-accent mb-8" />
            <h2 className="text-3xl md:text-[2.5rem] font-black text-text-dark mb-4 leading-tight tracking-tight">
              Empowering Rural India <br />
              <span className="text-primary font-heading text-2xl md:text-[2.5rem]">Building the Future Together</span>
            </h2>
            <p className="text-lg text-gray-800 font-semibold mb-5 capitalize">CVRU Khandwa & NLRI Ratlam</p>
            <div className="space-y-6 text-lg text-text-muted font-medium leading-relaxed mb-8">
              <p>
                Dr. C.V. Raman University, Khandwa (CVRUK) has officially partnered with the National Livelihood Resources Institute (NLRI), Ratlam to expand its academic and training ecosystem. Through this strategic MoU, we've created a center of excellence that opens new opportunities for students across India.
              </p>
              <p>
                NLRI, managed by the <strong>Gramin Vikas Trust (GVT)</strong>, is a nationally recognized institution with a legacy of excellence in rural development, sustainable agriculture, and livelihood enhancement. The campus spans over 10 hectares and features the AICTE-approved School of Rural Management (SRM).
              </p>
              <p>
                Together, we provide high-quality, industry-relevant education in rural management, natural resource management, and social entrepreneurship, producing professionals who are socially responsible change-makers.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              <div className="group p-6 bg-white border border-gray-200 py-4 rounded-2xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col gap-2.5">
                <div className="flex items-center gap-3">
                <AcademicCapIcon className="h-8 w-8 bg-primary/10 p-1.5 rounded-sm text-primary group-hover:scale-110 transition-transform duration-500" />
                  <h4 className="text-lg font-semibold text-gray-900">AICTE Approved</h4>
                </div>
                  <p className="text-xs text-gray-500">National recognition for PG Diplomas & Degrees.</p>
              </div>
              
              <div className="group p-6 bg-white border border-gray-200 py-4 rounded-2xl hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 flex flex-col gap-2.5">
                <div className="flex items-center gap-3">
                <GlobeAsiaAustraliaIcon className="h-8 w-8 bg-accent/10 p-1.5 rounded-sm text-accent/80 group-hover:scale-110 transition-transform duration-500" />
                  <h4 className="text-lg font-semibold text-gray-900">Project Exposure</h4>
                </div>
                  <p className="text-xs text-gray-500">Direct involvement in national & global initiatives.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square md:aspect-4/5 rounded-xl overflow-hidden shadow-premium border-8 border-white relative">
              <img 
                src="/campus-img/campusDron-2.jpeg" 
                alt="CVRUK-NLRI Campus Aerial View" 
                className="w-full h-full object-cover object-left "
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/30 to-transparent" />
            </div>
            <div className="w-full px-8 py-10 flex justify-end absolute bottom-0 right-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="border-indigo-400 border-b-[3px] h-30 w-30" viewBox="0 0 82 95">
              <defs>
                  <linearGradient id="linear-gradient" x1="0.5" x2="0.834" y2="0.57" gradientUnits="objectBoundingBox">
                  <stop offset="0" stopColor="#fff"/>
                  <stop offset="1" stopColor="#fff"/>
                  </linearGradient>
                  <clipPath id="clip-path">
                  <rect id="Rectangle_1122" data-name="Rectangle 1122" width="82" height="100" transform="translate(23421.109 21495.506)" fill="url(#linear-gradient)"/>
                  </clipPath>
              </defs>
              <g id="Mask_Group_2" data-name="Mask Group 2" transform="translate(-23421.109 -21495.506)" clipPath="url(#clip-path)">
                  <path id="Path_731" data-name="Path 731" d="M-444.826-445.357l20.884-3.518-8.206,19.075Zm-12.616,20.819,21.109-3.447-13.1-16.073Zm36.629,20.2,11.361-19.462h-19.685ZM-477-456.89v3.544l2.332-3.544Zm15.939,29.786,8.033-19.575-20.325-.011Zm41.815-29.786h-1.982l.881,1.5Zm-28.177,52.364,11.855-18.983-21.561,3.521Zm48.8-52.364H-413.81l-2.711,3.683,24.4,4.3ZM-443.5-402.57h18.741l-7.619-17.811Zm-29.772,0h21.934l-9.6-15.3Zm56.9-46.34,10.453,18.266,13.256-14.088Zm27.3,50.888h-27.461l10.532,17.482Zm-16.661-23.493L-416.8-402.57h28.569Zm-22.323-6.828h18.446l-10.53-18.4Zm4.007-24.778-2.219-3.768h-13.7l-6.2,7.5Zm-27.424,55.1H-473.2l12.207,15.228Zm4.071,1.711-9.525,15.253,21.275,3.462Zm26.829.02-7.96,19.115h19.476Zm-3.962-1.731H-443.34l11.3,18Zm40.683-58.868h-9.1l5.128,6.29Zm4.842,67.426v-8.558h-8.324Zm0-13.107v-9.278L-388-402.57Zm-66.661-54.32h-5.754l1.875,4.688Zm31.873,95h15.184l-7.98-9.789Zm20.849,0h9.1l4.842-7.671v-3.066h-22.692Zm9.213-87.078,4.726-.732v-6.756Zm-4.3,40.109,9.023-9.336v-5.6H-401.85Zm9.023-29.971v-6.548l-5.152.8Zm-9.441-3.937-13.573,14.425h23.014v-4.342l-.213.215Zm-14.662,65.592h24.1v-5.957l-9.187-9.446ZM-477-422.472v17.527l12.269-15.22Zm0,26.726v17.519l12.085-2.443Zm0-48.553v17.208l12.245,2.3Zm20.9-12.591h-13.343l-3.942,5.991,19.681.01Zm28.549,84.262,6.324,10.738h1.982l7.9-10.738Zm-12.431,10.738h13.7l-5.7-9.675Zm-17.3-14.622,5.85,14.622h5.754l9.285-11.223ZM-477-373.6v11.706h2.332l9.243-14.049Zm7.556,11.706H-456.1l-5.04-12.621Z" transform="translate(23898.625 21952.398)" fill="url(#linear-gradient)"/>
              </g>
              </svg>

            <div className="bg-linear-to-br from-blue-50 border-indigo-400 border-b-[3px] to-white rounded-sm shadow-md p-4 text-left w-full max-w-md overflow-hidden">
              <div
                className={`transition-all duration-700 ease-in-out transform ${
                  animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
              >
                <h3 className="text-lg font-bold text-[#1a237e] mb-2">
                  {content[index].title}
                </h3>
                <p className="text-sm text-gray-600">{content[index].desc}</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
