"use client";

import React, { useState, useEffect } from "react";
import { programsData } from "@/src/data/programs-data";
import { 
  BuildingLibraryIcon, 
  MapIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API_ENDPOINTS } from "@/src/config/api.config";
import SharedCtaBanner from "@/src/components/shared/unit-cta-banner";

export default function ProgramsClient() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Postgraduate");
  const [programTypes, setProgramTypes] = useState<any[]>([]);
  const [programs, setPrograms] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch program types on mount
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const res = await axios.get(API_ENDPOINTS.PROGRAM_TYPES.GET_ALL);
        if (res.data.success) {
          const types: any[] = res.data.data;
          setProgramTypes(types);

          // Match URL hash to tab after types are loaded
          const hash = window.location.hash.replace('#', '').toLowerCase();
          const matchedType = types.find((t: any) => t.name.toLowerCase() === hash);
          if (matchedType) {
            setActiveTab(matchedType.name);
          } else {
            const pg = types.find((t: any) => t.name.toLowerCase().includes("post"));
            if (pg) setActiveTab(pg.name);
            else if (types.length > 0) setActiveTab(types[0].name);
          }
        }
      } catch (err) {
        console.error("Error fetching program types:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialData();

    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      setProgramTypes(prev => {
        const matched = prev.find(t => t.name.toLowerCase() === hash);
        if (matched) setActiveTab(matched.name);
        return prev;
      });
    };

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Fetch programs whenever the active tab changes
  useEffect(() => {
    const fetchPrograms = async () => {
      const typeObj = programTypes.find(t => t.name === activeTab);
      if (!typeObj) return;

      try {
        const res = await axios.get(API_ENDPOINTS.PROGRAMS.GET_BY_TYPE(typeObj._id));
        if (res.data.success) {
          setPrograms(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching programs:", err);
      }
    };

    if (programTypes.length > 0) {
      fetchPrograms();
    }
  }, [activeTab, programTypes]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    const element = document.getElementById("programs-tabs");
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const renderTabCard = (program: any) => (
    <div className="group flex flex-col md:flex-row md:items-center justify-between bg-white border border-gray-200 rounded-sm hover:shadow-[0_4px_20px_rgb(0,0,0,0.05)] transition-shadow p-5 md:px-8 md:py-6 relative overflow-hidden pl-7 md:pl-10">
      {/* Left Accent Border */}
      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#21325b]/80" />
      
      <div className="mb-5 md:mb-0 max-w-3xl pr-4">
        <h3 className="text-lg md:text-xl font-bold text-[#9b2928] mb-1.5 group-hover:text-[#a03030] transition-colors leading-tight">
          {program.name}
        </h3>
        <p className="text-xs md:text-sm font-semibold text-gray-700">
          Duration: <span className="font-normal text-gray-500">{program.duration} Years</span>
        </p>
        <p className="text-xs md:text-sm font-medium text-gray-500 mt-2 line-clamp-2 leading-relaxed">
          {program.description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 shrink-0">
        <button 
          onClick={() => router.push(`/programs/${program.slug}`)} 
          className="flex items-center justify-center gap-2 border text-[13px] font-bold border-[#21325b] text-[#21325b] p-3 rounded-sm py-2.5 px-6 hover:bg-[#21325b] hover:text-white transition-all cursor-pointer whitespace-nowrap"
        >
          View Details
        </button>
        <button 
          onClick={() => router.push(`/apply-now?program=${program.name}`)} 
          className="flex items-center justify-center gap-2 border text-[13px] font-bold bg-[#21325b] p-3 rounded-sm py-2.5 px-6 text-white hover:bg-[#a03030] transition-all cursor-pointer whitespace-nowrap"
        >
          Apply Now
          <svg className="w-4 h-4 text-white group-hover:-rotate-45 transition-transform duration-300 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="bg-text-dark relative text-white py-14 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/HeaderBg.png')" }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-32" />

        <div className="container-wide pl-5 md:pl-0 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
            <AcademicCapIcon className="w-4 h-4 md:w-5 md:h-5 text-indigo-400 inline-block" />
            <span className="text-xs md:text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Academic Excellence
            </span>
          </div>
          <h1 className="text-2xl md:text-5xl font-semibold! leading-tight text-white mb-6">
            Programs <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Offered</span>
          </h1>
          <p className="max-w-3xl md:pr-0 pr-5 mx-auto text-sm md:text-lg text-gray-300 leading-relaxed text-justify md:text-center">
            Building Leaders for Rural &amp; Sustainable Development. Explore our comprehensive
            academic programs designed for real-world impact.
          </p>
        </div>
      </section>

      {/* 2. TAB NAVIGATION */}
      <div id="programs-tabs" className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center">
            {programTypes.map((type) => (
              <button
                key={type._id}
                onClick={() => handleTabClick(type.name)}
                className={`
                  text-sm md:text-base font-bold whitespace-nowrap px-6 py-5 border-b-[3px] transition-all
                  ${activeTab === type.name 
                    ? "border-red-600 text-red-600" 
                    : "border-transparent cursor-pointer text-gray-500 hover:text-red-600 hover:border-gray-200"}
                `}
              >
                {type.name} Programs
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. DYNAMIC CONTENT AREA */}
      <section className="py-12 md:py-20 animate-in fade-in duration-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col gap-8">
            <div className="mb-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 border-l-4 border-red-600 pl-6">
                {activeTab}
              </h2>
              <p className="text-slate-500 mt-3 text-lg font-medium">
                Professional development pathways in {activeTab.toLowerCase()} studies.
              </p>
            </div>

            {isLoading ? (
              <div className="grid gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-40 bg-white rounded-xl border border-slate-200 animate-pulse shadow-sm" />
                ))}
              </div>
            ) : programs.length > 0 ? (
              <div className="grid gap-6">
                {programs.map((program) => (
                  <React.Fragment key={program._id}>
                    {renderTabCard(program)}
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-white border border-dashed border-slate-300 rounded-3xl">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                   <AcademicCapIcon className="w-8 h-8 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">No programs available</h3>
                <p className="text-slate-500 mt-2">Currently, there are no programs listed under {activeTab}.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <SharedCtaBanner
        title="Ready to Build a Career in Rural Development?"
        subtitle="Join a community of impact makers and leaders dedicated to sustainable transformation."
        primaryBtnText="Apply Now"
        primaryBtnHref="/apply-now"
        secondaryBtnText="Admission Info"
        secondaryBtnHref="/admissions"
      />
    </div>
  );
}
