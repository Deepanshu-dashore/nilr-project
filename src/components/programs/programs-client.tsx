"use client";

import React, { useState, useEffect } from "react";
import { programsData } from "@/src/data/programs-data";
import { 
  BuildingLibraryIcon, 
  MapIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  CheckCircleIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API_ENDPOINTS } from "@/src/config/api.config";

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
          setProgramTypes(res.data.data);
          
          // Match URL hash to tab after types are loaded
          const hash = window.location.hash.replace('#', '').toLowerCase();
          const matchedType = res.data.data.find((t: any) => t.name.toLowerCase() === hash);
          if (matchedType) {
            setActiveTab(matchedType.name);
          } else {
            // Default to Postgraduate if it exists
            const pg = res.data.data.find((t: any) => t.name.toLowerCase().includes("post"));
            if (pg) setActiveTab(pg.name);
            else if (res.data.data.length > 0) setActiveTab(res.data.data[0].name);
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
      <section className="bg-slate-900 relative text-white py-14 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/HeaderBg.png')" }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 -skew-x-12 translate-x-32" />
        
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <AcademicCapIcon className="w-5 h-5 text-indigo-400" />
            <span className="text-xs md:text-sm font-medium text-indigo-300 uppercase tracking-widest">
              Academic Excellence
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Programs Offered
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-lg text-gray-300 leading-relaxed">
            Building Leaders for Rural & Sustainable Development. Explore our comprehensive 
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
        <div className="container mx-auto px-4 max-w-5xl">
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

      {/* 4. WHY STUDY SECTION */}
      <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 font-bold text-xs uppercase tracking-widest rounded-full mb-4">
                Our Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                {programsData.whyStudy.title}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                We combine academic excellence with rigorous field immersion, ensuring our students 
                are equipped with practical skills and leadership qualities.
              </p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.values(programsData.whyStudy.points).map((point: any, index) => (
                <div key={index} className="group bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-red-600 group-hover:scale-110 transition-all duration-500">
                    <CheckCircleIcon className="w-7 h-7 text-red-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="bg-red-700 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/patternSvg.svg')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Build a Career <br className="hidden md:block"/> in Rural Development?
          </h2>
          <p className="text-red-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join a community of impact makers and leaders dedicated to sustainable transformation.
          </p>
          <button 
            onClick={() => router.push('/apply-now')}
            className="bg-white text-red-700 font-black px-12 py-5 text-lg rounded-2xl shadow-2xl hover:scale-105 transition-all active:scale-95"
          >
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}
