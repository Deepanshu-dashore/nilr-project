"use client";

import React, { useState, useEffect } from "react";
import { programsData } from "@/src/data/programs-data";
import { 
  BuildingLibraryIcon, 
  MapIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  CheckCircleIcon 
} from "@heroicons/react/24/outline";

export default function ProgramsClient() {
  const [activeTab, setActiveTab] = useState("Postgraduate");

  const tabs = ["Postgraduate", "Diploma", "Certificate", "Training"];

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      const tabMap: Record<string, string> = {
        'postgraduate': 'Postgraduate',
        'diploma': 'Diploma',
        'certificate': 'Certificate',
        'training': 'Training'
      };
      if (tabMap[hash]) {
        setActiveTab(tabMap[hash]);
        setTimeout(() => {
          const element = document.getElementById("programs-tabs");
          if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    
    // Intercept Next.js soft navigations (which use pushState/replaceState instead of hashchange)
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      // Let the browser paint then parse the new hash
      setTimeout(handleHash, 50);
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      setTimeout(handleHash, 50);
    };

    return () => {
      window.removeEventListener('hashchange', handleHash);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, [window.location.pathname.includes("programs")]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    // Smooth scroll to tabs section if clicked from lower down
    const element = document.getElementById("programs-tabs");
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const renderTabCard = (title: string, duration?: string, subtext?: string) => (
    <div className="group flex flex-col md:flex-row md:items-center justify-between bg-white border border-gray-200 rounded-sm hover:shadow-[0_4px_20px_rgb(0,0,0,0.05)] transition-shadow p-5 md:px-8 md:py-6 relative overflow-hidden pl-6 md:pl-10">
      {/* Left Border Accent mimicking the image */}
      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#21325b] /80" />
      
      <div className="mb-4 md:mb-0 max-w-3xl pr-4">
        <h3 className="text-lg md:text-xl font-medium text-[#9b2928] mb-1 group-hover:text-[#a03030] transition-colors">
          {title}
        </h3>
        {duration && (
          <p className="text-sm font-semibold text-gray-700">
            Duration: <span className="font-normal text-gray-500">{duration}</span>
          </p>
        )}
        {subtext && (
          <p className="text-sm font-semibold text-gray-700 mt-1 line-clamp-2 md:line-clamp-none">
            {subtext}
          </p>
        )}
      </div>

      <button className="flex items-center gap-2 border text-sm font-bold bg-[#21325b] p-3 rounded-sm py-2 text-white group-hover:text-primary group-hover:border-primary/80 group-hover:bg-white transition-colors cursor-pointer shrink-0">
        Apply Now
        <svg className="w-4 h-4 text-white group-hover:text-primary group-hover:-rotate-45 transition-transform duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      
      {/* 1. HERO SECTION (Simple & Strong) */}
      <section className="bg-text-dark relative text-white py-24 overflow-hidden">
        {/* Subtle background element */}
        <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/HeaderBg.png')",
        }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-32" />
        
        <div className="container-wide text-center max-w-4xl relative z-10">
        <div className="inline-flex  items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
            <AcademicCapIcon className="w-5 h-5 text-indigo-400 inline-block" />
            <span className="text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Programs Offered
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold! leading-tight text-white mb-6">
            Building Leaders for Rural & Sustainable Development
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            At CVRU Khandwa – NLRI Campus, our programs integrate academic excellence 
            with field immersion, leadership development, and practical exposure. We empower 
            students to create sustainable solutions for real-world challenges.
          </p>
        </div>
      </section>

      {/* 2. TAB NAVIGATION */}
      <div id="programs-tabs" className="transition-all duration-300 z-40 bg-[#f9fafb] border-b border-gray-200">
        <div className="container-wide">
          <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar justify-start md:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`
                  text-sm md:text-lg font-bold whitespace-nowrap px-4 py-4 md:px-6 md:py-5 border-b-[3px] transition-colors
                  ${activeTab === tab 
                    ? "border-primary/80 text-primary/80" 
                    : "border-transparent cursor-pointer text-gray-500 hover:text-[#21325b] hover:border-gray-300"}
                `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. ACTIVE TAB CONTENT */}
      <section className="py-20 bg-gray-50 min-h-[400px]">
        <div className="container-wide max-w-5xl">
          <div className="flex flex-col gap-4">
            
            {activeTab === "Postgraduate" && (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{programsData.pgProgram.title}</h2>
                  <p className="text-gray-600 mt-2">A comprehensive program designed to build competent rural development professionals and managers.</p>
                </div>
                {renderTabCard(
                  programsData.pgProgram.course,
                  programsData.pgProgram.type,
                  `Eligibility: ${programsData.pgProgram.eligibility} | Intake: ${programsData.pgProgram.intake}`
                )}
                <div className="mt-8 bg-white border border-gray-200 p-8 rounded-sm">
                   <h3 className="font-bold text-[#21325b] mb-4">Program Highlights</h3>
                   <ul className="space-y-3">
                     {programsData.pgProgram.highlights.map((hlt, i) => (
                       <li key={i} className="flex gap-2 items-start text-sm text-gray-700">
                         <CheckCircleIcon className="w-5 h-5 text-secondary shrink-0" />
                         <span>{hlt}</span>
                       </li>
                     ))}
                   </ul>
                </div>
              </>
            )}

            {activeTab === "Diploma" && (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Diploma Programs</h2>
                  <p className="text-gray-600 mt-2">1-Year intensive programs focused on sustainable practices and community development.</p>
                </div>
                {programsData.diplomaPrograms.courses.map((course, idx) => (
                  <React.Fragment key={idx}>
                    {renderTabCard(course, "1 Year")}
                  </React.Fragment>
                ))}
                
                <div className="mt-8 bg-white border border-gray-200 p-8 rounded-sm">
                   <h3 className="font-bold text-[#21325b] mb-4">Focus Areas</h3>
                   <div className="flex flex-wrap gap-2">
                     {programsData.diplomaPrograms.focusAreas.map((area, i) => (
                       <span key={i} className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold rounded-full">
                         {area}
                       </span>
                     ))}
                   </div>
                </div>
              </>
            )}

            {activeTab === "Certificate" && (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Certificate Courses</h2>
                  <p className="text-gray-600 mt-2">{programsData.certificateCourses.subtitle}</p>
                </div>
                {programsData.certificateCourses.courses.map((course, idx) => (
                  <React.Fragment key={idx}>
                    {renderTabCard(course.name, course.duration)}
                  </React.Fragment>
                ))}
              </>
            )}

            {activeTab === "Training" && (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Specialized Training Programs</h2>
                  <p className="text-gray-600 mt-2">Short-Term / Skill Development Programs designed for aspiring professionals.</p>
                </div>
                {programsData.specializedTraining.courses.map((course, idx) => (
                  <React.Fragment key={idx}>
                    {renderTabCard(course, "Short-Term")}
                  </React.Fragment>
                ))}
              </>
            )}

          </div>
        </div>
      </section>

      {/* 4. WHY STUDY SECTION (Authority Builder) */}
      <section className="py-24 bg-white border-t border-gray-100 border-b relative overflow-hidden">
        {/* Subtle background decoration */}
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
        
        <div className="container-wide max-w-6xl relative z-10">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-secondary flex items-cneter mx-auto gap-2 font-bold capitalize text-sm mb-3 border w-fit p-1 px-2 rounded-full border-primary/30 text-primary/80">
              <AcademicCapIcon className="w-4.5 h-4.5 text-secondary shrink-0" />
              Our Advantage</span>
              <h2 className="academic-section-title mb-6 tracking-tight">
                {programsData.whyStudy.title}
              </h2>
              <p className="academic-section-text font-medium leading-relaxed">
                We combine academic excellence with rigorous field immersion, ensuring our students are equipped with practical skills, leadership qualities, and the hands-on experience needed to transform communities globally.
              </p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
              {[
                { icon: MapIcon, data: programsData.whyStudy.points[0] },
                { icon: BuildingLibraryIcon, data: programsData.whyStudy.points[1] },
                { icon: AcademicCapIcon, data: programsData.whyStudy.points[2] },
                { icon: UserGroupIcon, data: programsData.whyStudy.points[3] },
                { icon: CheckCircleIcon, data: programsData.whyStudy.points[4] }
              ].map((item, index) => {
                 const Icon = item.icon;
                 return (
                  <div key={index} className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-[0_10px_40px_rgba(33,50,91,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden">
                    {/* Top animated accent line */}
                    
                    <div className="w-14 h-14 mb-6 flex items-center justify-center shrink-0 bg-accent/10 rounded-2xl group-hover:bg-[#21325b]/10 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    <h3 className="font-extrabold text-[#21325b] text-xl mb-3 leading-tight group-hover:text-[#9b2928] transition-colors duration-300">
                      {item.data.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.data.desc}
                    </p>
                  </div>
                 );
              })}
           </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="bg-linear-to-r from-primary to-accent  relative overflow-hidden text-white py-14 text-center border-t border-white/10">
        <div className="absolute w-full h-full bg-contain bg-no-repeat bg-right bg-full top-0 bg-[url('/patternSvg.svg')]" />
        <div className="flex justify-between items-center relative z-10 max-w-6xl mx-auto">
            <div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to Build a Career in Rural Development?
          </h3>
          <p className="text-lg text-white/80">
            Join a community of impact makers and leaders dedicated to sustainable transformation.
          </p>
            </div>
          <button className="h-fit border-2 cursor-pointer border-white/10 bg-linear-to-l from-indigo-600/40 to-rose-500/30 text-white font-bold px-10 py-4 text-lg rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300 active:scale-95">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}
