"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  BriefcaseIcon, 
  AcademicCapIcon, 
  CheckCircleIcon,
  SparklesIcon,
  UserGroupIcon,
  GlobeAltIcon,
  DocumentCheckIcon,
  ArrowTopRightOnSquareIcon,
  CheckBadgeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  LightBulbIcon,
  Cog6ToothIcon,
  ClockIcon,
  ArrowRightIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Hero from "@/src/components/shared/hero";
import SharedCtaBanner from "@/src/components/shared/unit-cta-banner";
import PlacementCharts from "@/src/components/placements/PlacementCharts";

// Guidance Cell Pillars
const cellPillars = [
  {
    title: "Resume & Profile Engineering",
    desc: "Personalized portfolio building tailored for rural, agribusiness, and development sector recruiters.",
    icon: DocumentCheckIcon
  },
  {
    title: "Village Immersion & Field Readiness",
    desc: "Hands-on fieldwork solving live challenges with community organizations and farmer enterprises.",
    icon: GlobeAltIcon
  },
  {
    title: "Pre-Placement Mock Panels",
    desc: "Simulated interview rounds and technical assessments led by experienced industry veterans.",
    icon: BriefcaseIcon
  },
  {
    title: "Leadership Masterclasses",
    desc: "Interactive guest lectures with CSR directors, Agri-Tech founders, and development leaders.",
    icon: SparklesIcon
  },
];

// Primary Recruitment Sectors
const recruitmentSectors = [
  {
    sector: "Agribusiness & Supply Chain",
    desc: "Farm-to-fork value chains, procurement, and agricultural input marketing.",
    roles: ["Supply Chain Executive", "Agri Input Manager", "Commodity Procurement Officer", "Farm Extension Lead"],
    badge: "Agribusiness"
  },
  {
    sector: "Banking & Microfinance (MFI)",
    desc: "Rural financial inclusion, branch credit appraisal, and micro-enterprise lending.",
    roles: ["Rural Credit Manager", "Financial Inclusion Officer", "Branch Operations Lead", "Micro-Credit Analyst"],
    badge: "Finance"
  },
  {
    sector: "CSR Foundations & Sustainability",
    desc: "Corporate social investment, community development, and sustainable livelihood programs.",
    roles: ["CSR Program Coordinator", "Livelihood Project Lead", "Monitoring & Evaluation Specialist", "Social Impact Auditor"],
    badge: "CSR"
  },
  {
    sector: "Farmer Producer Organizations (FPOs)",
    desc: "Cooperative institution building, collective bargaining, and rural market linkage.",
    roles: ["FPO General Manager / CEO", "Value Chain Strategist", "Market Linkage Coordinator", "Cluster In-charge"],
    badge: "FPOs"
  },
  {
    sector: "Social Consulting & Rural Tech",
    desc: "Data-driven development solutions, technology adoption, and project design.",
    roles: ["Development Associate", "Agri-Tech Field Lead", "Project Manager", "Policy & Research Analyst"],
    badge: "Tech & Consulting"
  },
  {
    sector: "Government Missions & Livelihoods",
    desc: "State rural livelihood missions, skill development councils, and watershed authorities.",
    roles: ["SRLM Project Assistant", "Skill Development Executive", "Watershed Coordinator", "Rural Enterprise Lead"],
    badge: "Govt. Missions"
  },
];

// Prominent Recruiter & Highlight Slider Items
const recruiterSliderItems = [
  {
    name: "Cognizant",
    subtitle: "Trusted University Hiring Partners",
    renderLogo: (isCenter: boolean) => (
      <div className="flex items-center gap-2">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center font-extrabold text-[11px] ${isCenter ? "bg-white text-[#800000]" : "bg-[#003366] text-white"}`}>c</div>
        <span className={`text-base font-extrabold tracking-tight ${isCenter ? "text-white" : "text-[#003366]"}`}>cognizant</span>
      </div>
    )
  },
  {
    name: "Capgemini",
    subtitle: "IT Consulting & Digital Services",
    renderLogo: (isCenter: boolean) => (
      <div className="flex items-center gap-1.5">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-extrabold ${isCenter ? "bg-white text-[#800000]" : "bg-[#0070ad] text-white"}`}>♠</div>
        <span className={`text-base font-bold tracking-tight ${isCenter ? "text-white" : "text-[#0070ad]"}`}>Capgemini</span>
      </div>
    )
  },
  {
    name: "Informatica",
    subtitle: "Trusted University Hiring Partners",
    renderLogo: (isCenter: boolean) => (
      <div className="flex items-center gap-2">
        <div className={`w-5 h-5 rotate-45 shrink-0 ${isCenter ? "bg-white" : "bg-[#ff4d00]"}`} />
        <span className={`text-lg font-black tracking-tight ${isCenter ? "text-white" : "text-slate-900"}`}>Informatica</span>
      </div>
    )
  },
  {
    name: "Business Today",
    subtitle: "Amongst 100 top private state universities under Placement Performance' category",
    renderLogo: (isCenter: boolean) => (
      <div className="flex items-center gap-1.5">
        <span className={`font-black text-xs px-1.5 py-0.5 rounded tracking-tight ${isCenter ? "bg-white text-[#800000]" : "bg-[#007cd5] text-white"}`}>bt</span>
        <span className={`font-extrabold text-base tracking-tight font-sans ${isCenter ? "text-white" : "text-[#007cd5]"}`}>Business Today</span>
      </div>
    )
  },
  {
    name: "Knowledge Review",
    subtitle: "10th best training and placement institutions in India",
    renderLogo: (isCenter: boolean) => (
      <div className="text-center">
        <span className={`text-[11px] font-black tracking-widest uppercase border-y-2 py-0.5 px-1.5 block ${isCenter ? "text-white border-white" : "text-[#800000] border-[#800000]"}`}>
          KNOWLEDGE<span className={isCenter ? "text-amber-300" : "text-slate-800"}>REVIEW</span>
        </span>
      </div>
    )
  },
  {
    name: "SHL",
    subtitle: "Talent Assessment & Intelligence Partner",
    renderLogo: (isCenter: boolean) => (
      <span className={`text-xl font-black tracking-widest font-sans ${isCenter ? "text-white" : "text-slate-900"}`}>S<span className={isCenter ? "text-amber-300" : "text-emerald-500"}>H</span>L.</span>
    )
  },
  {
    name: "Reliance Industries Limited",
    subtitle: "Conglomerate & Energy Leadership",
    logoUrl: "https://cvrump.ac.in/admin/public/uploads/images/recruiters/1742887749.jpg",
  },
  {
    name: "Airtel",
    subtitle: "Telecommunications & Digital Services",
    logoUrl: "https://cvrump.ac.in/admin/public/uploads/images/recruiters/1742887776.png",
  },
  {
    name: "AU Small Finance Bank",
    subtitle: "Rural Banking & Financial Inclusion",
    logoUrl: "https://cvrump.ac.in/admin/public/uploads/images/recruiters/1742887807.png",
  },
  {
    name: "ICICI Bank",
    subtitle: "Commercial & Rural Credit",
    logoUrl: "https://cvrump.ac.in/admin/public/uploads/images/recruiters/1742888300.png",
    renderLogo: (isCenter: boolean) => (
      <div className="flex items-center gap-1">
        <div className={`w-5 h-5 rounded-full font-bold text-[10px] flex items-center justify-center ${isCenter ? "bg-white text-[#800000]" : "bg-[#a32a29] text-white"}`}>i</div>
        <span className={`text-sm font-black ${isCenter ? "text-white" : "text-[#003366]"}`}>ICICI Bank</span>
      </div>
    )
  },
  {
    name: "IBM",
    subtitle: "Technology & Cloud Solutions",
    logoUrl: "https://cvrump.ac.in/admin/public/uploads/images/recruiters/1742888266.png",
    renderLogo: (isCenter: boolean) => (
      <span className={`text-2xl font-black tracking-widest font-mono ${isCenter ? "text-white" : "text-[#006699]"}`}>IBM</span>
    )
  },
  {
    name: "HCL Technologies",
    subtitle: "Enterprise Digital Transformation",
    logoUrl: "https://cvrump.ac.in/admin/public/uploads/images/recruiters/1742888010.png",
  },
  {
    name: "TCS",
    subtitle: "Consultancy & Enterprise Tech",
    renderLogo: (isCenter: boolean) => (
      <div className="flex items-center gap-1">
        <span className={`text-lg font-black ${isCenter ? "text-white" : "text-pink-600"}`}>tcs</span>
        <div className={`text-left text-[7px] font-bold leading-tight ${isCenter ? "text-white/90" : "text-[#003366]"}`}>
          <div>TATA</div>
          <div>CONSULTANCY</div>
          <div>SERVICES</div>
        </div>
      </div>
    )
  },
  {
    name: "Amul (GCMMF)",
    subtitle: "Dairy & Rural Cooperative Leader",
    renderLogo: (isCenter: boolean) => (
      <span className={`text-base font-black font-serif ${isCenter ? "text-white" : "text-red-600"}`}>Amul</span>
    )
  },
  {
    name: "ITC Limited",
    subtitle: "Agribusiness & FMCG Procurement",
    renderLogo: (isCenter: boolean) => (
      <div className="flex items-center gap-1.5">
        <div className={`font-black text-[10px] px-1.5 py-0.5 rounded ${isCenter ? "bg-white text-[#800000]" : "bg-[#002f6c] text-white"}`}>ITC</div>
        <span className={`text-xs font-bold ${isCenter ? "text-white" : "text-slate-800"}`}>Limited</span>
      </div>
    )
  }
];

// 5-Stage Campus Placement Workflow
const placementWorkflow = [
  {
    title: "Pre-Placement Talk",
    icon: MagnifyingGlassIcon,
  },
  {
    title: "Skill Assessment / Aptitude Written Test",
    icon: LightBulbIcon,
  },
  {
    title: "Group Discussion",
    icon: Cog6ToothIcon,
  },
  {
    title: "Technical Interview",
    icon: ClockIcon,
  },
  {
    title: "Panel Interview",
    icon: UserGroupIcon,
  },
];

// Alumni Spotlights
const alumniTestimonials = [
  {
    name: "Rahul Verma",
    role: "Assistant Manager - Agribusiness",
    company: "ITC Limited",
    batch: "Class of 2023–25",
    avatar: "/testimonial/image.png",
    quote: "The live village immersion and practical curriculum at CVRUK–NIRM gave me the confidence to manage complex farm-gate supply chains from day one."
  },
  {
    name: "Pooja Sharma",
    role: "CSR Project Lead",
    company: "Reliance Foundation",
    batch: "Class of 2022–24",
    avatar: "/testimonial/image.png",
    quote: "NIRM didn't just teach management theory; it immersed us in grassroots realities. That real-world exposure was the defining factor in securing my role."
  },
  {
    name: "Amit Singh",
    role: "Rural Credit Officer",
    company: "HDFC Bank (Parivartan)",
    batch: "Class of 2021–23",
    avatar: "/testimonial/image1.png",
    quote: "The faculty mentorship and dedicated placement cell provided end-to-end guidance from mock interviews to final selection. Truly transformational."
  }
];

// Frequently Asked Questions
const placementFaqs = [
  {
    question: "What is the placement track record at CVRUK–NIRM?",
    answer: "CVRUK–NIRM maintains a robust placement record across Agribusiness, Rural Banking, Microfinance, CSR Foundations, and Farmer Producer Organizations (FPOs), providing 100% structured placement and internship assistance to eligible scholars."
  },
  {
    question: "Which major sectors actively recruit from NIRM campus?",
    answer: "Key recruitment domains include Agribusiness Input & Supply Chain, Commercial & Rural Banking (MFIs), Corporate Social Responsibility (CSR) Foundations, Social Impact Consulting, Agri-Tech Startups, and State Rural Livelihood Missions."
  },
  {
    question: "Does NIRM mandate summer internships and village immersion?",
    answer: "Yes. Every student undergoes mandatory Village Immersion & Field Studies along with an 8-12 week corporate summer internship, equipping them with first-hand rural operational insights before final campus recruitment."
  },
  {
    question: "How can corporate recruiters schedule on-campus hiring drives?",
    answer: "Organizations can reach out to our Corporate Relations Cell directly via our Contact Us portal or email placement@nirm-cvruk.ac.in to request the Placement Brochure, student batch profiles, and schedule recruitment dates."
  },
  {
    question: "What pre-placement training and mentorship is provided?",
    answer: "Students undergo continuous skill engineering including resume profiling, mock technical and HR panels led by corporate leaders, GD workshops, analytical aptitude practice, and industry masterclasses."
  }
];

export default function PlacementsPage() {
  const [recruiterPageIndex, setRecruiterPageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const visibleCards = 5;
  const maxSlideIndex = Math.max(0, recruiterSliderItems.length - visibleCards);

  const handlePrevRecruiter = () => {
    setRecruiterPageIndex((prev) => (prev <= 0 ? maxSlideIndex : prev - 1));
  };

  const handleNextRecruiter = () => {
    setRecruiterPageIndex((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
  };

  // Auto-scroller timer (1-by-1 slide every 3 seconds, paused on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setRecruiterPageIndex((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, maxSlideIndex]);

  return (
    <div className="flex flex-col bg-white text-text-main min-h-screen">
      
      {/* ── 1. UNIFIED HERO COMPONENT ── */}
      <Hero
        tag="Career Excellence & Corporate Relations"
        tagIcon={BriefcaseIcon}
        title="Placements & Industry Pathways"
        subtitle="Bridging academic excellence with grassroots transformation. Connecting scholars with leading agribusiness corporations, CSR foundations, rural banking institutions, and developmental enterprises."
      />

      {/* ── 2. WHY RECRUIT FROM US ── */}
      <section className="section-padding bg-white border-b border-border-light relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -top-40 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] z-0" />

        <div className="container-wide relative z-10">
          
          {/* Centered Top Heading */}
          <div className="text-center max-w-7xl mx-auto mb-14 space-y-3">
            <span className="text-gray-600 inline-flex items-center gap-1.5 border-gray-300 font-medium capitalize border w-fit px-3 py-1.5 rounded-full text-[10px] md:text-xs mb-3 shadow-xs mx-auto">
              <SparklesIcon className="w-4 h-4 inline-block text-primary" />
              Institutional Excellence
            </span>
            <h2 className="academic-section-title text-gray-900 text-3xl md:text-5xl font-extrabold tracking-tight">
              Why Recruit <span className="text-primary">From Us</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium max-w-7xl mx-auto pt-1">
              National Institute of Rural Management (CVRUK–NIRM) is a renowned institution committed to producing value-driven and skilled professionals. With a vision to expand its horizons to the national level, the institute has emerged as one of the premier educational and management centers in Central India in a short span of time.
            </p>
          </div>

          {/* Split Content: Two Paragraphs Left + Photo Right with Matching Height */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
            
            {/* Left Column: 2 Descriptive Paragraphs */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
              <p>
                Over the years, CVRUK–NIRM has earned a reputation for its commitment to producing well-groomed professionals. Even during periods of economic uncertainty, the institute&apos;s placement records have consistently remained among the best in the region, with graduates securing positions across a wide range of careers and industries.
              </p>
              <p>
                CVRUK–NIRM&apos;s talented pool of students is highly regarded by corporates across different sectors. They recognize NIRM as one of the best institutions for acquiring fresh talent, and testimonials attest to this fact. Our alumni have proven their potential as valuable assets to their organizations, contributing to their growth with their ethical and professional performance.
              </p>
            </div>

            {/* Right Column: Matched Height Campus Photo Frame */}
            <div className="lg:col-span-6 flex">
              <div className="relative w-full min-h-[280px] sm:min-h-[340px] rounded-2xl overflow-hidden shadow-xl border border-border-light group">
                <Image
                  src="/campus-img/srm-building.jpg"
                  alt="CVRUK NIRM Students & Corporate Center"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PLACEMENT STATS HIGHLIGHT STRIP ── */}
      <section className="bg-[#faf8f2] border-b border-border-light py-8 px-4">
        <div className="container-wide max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200">
            {[
              {
                stat: "100%",
                highlight: "structured placement",
                desc: "& internship assistance to eligible scholars"
              },
              {
                stat: "50+",
                highlight: "corporate recruiters",
                desc: "from agribusiness, banking & CSR sectors"
              },
              {
                stat: "400+",
                highlight: "campus drives",
                desc: "conducted across MBA batches since inception"
              },
              {
                stat: "₹8.5 Lakh",
                highlight: "average CTC offered",
                desc: "to top 25% placed students"
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col px-6 py-4 first:pl-0 last:pr-0">
                <span className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-none mb-1">
                  {item.stat}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-primary leading-snug">
                  {item.highlight}
                </span>
                <span className="text-xs text-slate-500 leading-snug mt-0.5">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PRIMARY RECRUITMENT SECTORS ── */}
      <section className="section-padding bg-bg-section border-b border-border-light relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute bottom-0 -left-40 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] z-0" />

        <div className="container-wide relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-gray-600 inline-flex items-center gap-1.5 border-gray-300 font-medium capitalize border w-fit px-3 py-1.5 rounded-full text-[10px] md:text-xs mb-3 shadow-xs mx-auto">
              <BriefcaseIcon className="w-4 h-4 inline-block text-primary" />
              Career Horizons
            </span>
            <h2 className="academic-section-title text-gray-900 text-3xl md:text-5xl font-extrabold tracking-tight">
              Primary Recruitment <span className="text-primary">Sectors &amp; Roles</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto pt-1">
              Graduates from CVRUK–NIRM are placed in diverse, high-growth domains across rural, corporate, and development ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {recruitmentSectors.map((sec, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-border-light hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {sec.badge}
                    </span>
                    <BriefcaseIcon className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {sec.sector}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    {sec.desc}
                  </p>
                  
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Career Roles:
                    </span>
                    <ul className="space-y-1.5">
                      {sec.roles.map((role, rIdx) => (
                        <li key={rIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 3b. PLACEMENT GROWTH CHART ── */}
      <section className="section-padding bg-white border-b border-border-light relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[140px] z-0" />
        <div className="container-wide relative z-10">

          {/* Section Header */}
          <div className="mb-10 max-w-6xl mx-auto space-y-2">
            <span className="text-gray-600 inline-flex items-center gap-1.5 border-gray-300 font-medium capitalize border w-fit px-3 py-1.5 rounded-full text-[10px] md:text-xs shadow-xs">
              <ChartBarIcon className="w-4 h-4 inline-block text-primary" />
              Year-on-Year Performance
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Placement <span className="text-primary">Growth Dashboard</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-xl">
              A data-driven view of our consistent rise in corporate recruitment, campus offers, and average CTC — year after year.
            </p>
          </div>

          {/* Recharts Dashboard */}
          <div className="max-w-6xl mx-auto">
            <PlacementCharts />
          </div>

        </div>
      </section>


      {/* ── 4. OUR PROMINENT RECRUITERS & RANKINGS 1-ROW SLIDER ── */}
      <section className="section-padding  border-b border-border-light relative overflow-hidden">
        <div className="container-wide relative z-10">
          
          {/* Header with Navigation Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6 max-w-6xl mx-auto">
            <div className="space-y-2">
              <span className="text-gray-600 inline-flex items-center gap-1.5 border-gray-300 font-medium capitalize border w-fit px-3 py-1.5 rounded-full text-[10px] md:text-xs mb-3 shadow-xs">
                <CheckBadgeIcon className="w-4 h-4 inline-block text-primary" />
                Recognized &amp; Recruited by Top Organisations
              </span>
              <h2 className="academic-section-title text-left text-gray-900 text-3xl md:text-5xl font-extrabold tracking-tight">
                Our Prominent <span className="text-primary">Recruiters &amp; Rankings</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium max-w-xl pt-1">
                Distinguished corporate organizations, national apex institutions, and ranking bodies that validate CVRUK–NIRM&apos;s placement excellence.
              </p>
            </div>

            {/* Carousel Navigation Arrow Controls */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <button
                onClick={handlePrevRecruiter}
                aria-label="Previous Recruiters"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-primary flex items-center justify-center transition-all duration-200 shadow-xs active:scale-95 cursor-pointer"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextRecruiter}
                aria-label="Next Recruiters"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-primary flex items-center justify-center transition-all duration-200 shadow-xs active:scale-95 cursor-pointer"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 1-Card-at-a-time Auto-Scrolling Carousel Container */}
          <div 
            className="overflow-hidden relative max-w-6xl mx-auto py-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            <div 
              className="flex gap-4 transition-transform duration-500 ease-in-out items-center min-h-[220px]"
              style={{ transform: `translateX(-${recruiterPageIndex * (100 / visibleCards)}%)` }}
            >
              {recruiterSliderItems.map((item, cIdx) => {
                const isCenter = cIdx === (recruiterPageIndex + 2) % recruiterSliderItems.length;

                if (isCenter) {
                  return (
                    <div 
                      key={cIdx} 
                      className="w-[calc(100%-16px)] sm:w-[calc((100%-16px)/2)] md:w-[calc((100%-32px)/3)] lg:w-[calc((100%-64px)/5)] shrink-0 h-44 sm:h-42 p-5 rounded-sm bg-[#800000] text-white shadow-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-500 z-20 scale-105"
                    >
                      <div className="z-10 flex items-center justify-center pt-2">
                        {item.renderLogo ? (
                          item.renderLogo(true)
                        ) : (
                          <img
                            src={item.logoUrl}
                            alt={item.name}
                            className="max-h-12 max-w-[130px] w-auto object-contain brightness-0 invert"
                          />
                        )}
                      </div>
                      <div className="z-10 text-center pb-2">
                        <p className="text-xs font-bold leading-snug text-white/95">
                          &ldquo;{item.subtitle}&rdquo;
                        </p>
                      </div>
                    </div>
                  );
                }

                return (
                  <div 
                    key={cIdx} 
                    className="w-[calc(100%-16px)] sm:w-[calc((100%-16px)/2)] md:w-[calc((100%-32px)/3)] lg:w-[calc((100%-64px)/5)] shrink-0 h-36 sm:h-40 p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs flex flex-col items-center justify-center text-center transition-all duration-500 opacity-75 self-center"
                  >
                    {item.renderLogo ? (
                      item.renderLogo(false)
                    ) : item.logoUrl ? (
                      <img
                        src={item.logoUrl}
                        alt={item.name}
                        className="max-h-10 sm:max-h-12 max-w-[120px] w-auto object-contain"
                      />
                    ) : (
                      <span className="text-xs font-bold text-slate-700">{item.name}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Pagination Indicator Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: maxSlideIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setRecruiterPageIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  recruiterPageIndex === dotIdx 
                    ? "w-8 bg-[#0d1a63]" 
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. 5-STAGE PLACEMENT SELECTION PROCESS ── */}
      <section className="section-padding py-10 bg-[#faf8f2] border-b border-border-light relative overflow-hidden">
        <div className="container-wide relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-gray-600 inline-flex items-center gap-1.5 border-gray-300 font-medium capitalize border w-fit px-3 py-1.5 rounded-full text-[10px] md:text-xs mb-3 shadow-xs mx-auto">
              <SparklesIcon className="w-4 h-4 inline-block text-primary" />
              Structured Recruitment Flow
            </span>
            <h2 className="academic-section-title text-gray-900 text-3xl md:text-5xl font-extrabold tracking-tight">
              Placement <span className="text-primary">Process</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto pt-1">
              The Corporate Relations Cell interfaces with potential employers and works towards streamlining job opportunities and talent development.
            </p>
          </div>

          {/* ── 5-Step Circular Flow with Right Arrows (Desktop & Mobile) ── */}
          <div className="max-w-6xl mx-auto">
            
            {/* Desktop Flow (Single Row of 5 Connected Circles) */}
            <div className="hidden lg:flex items-center justify-between gap-3 py-6">
              {placementWorkflow.map((item, idx) => {
                const Icon = item.icon;
                const isLast = idx === placementWorkflow.length - 1;

                return (
                  <React.Fragment key={idx}>
                    {/* Circular Step Card */}
                    <div className="w-36 h-36 xl:w-40 xl:h-40 rounded-full border-2 border-[#1e4c9a] bg-white flex flex-col items-center justify-center p-4 text-center shadow-xs hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-default shrink-0">
                      <Icon className="w-8 h-8 text-[#1e4c9a] group-hover:text-accent transition-colors mb-2 stroke-[1.5]" />
                      <span className="text-xs font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors">
                        {item.title}
                      </span>
                    </div>

                    {/* Right Arrow Connector */}
                    {!isLast && (
                      <div className="flex items-center justify-center shrink-0">
                        <ArrowRightIcon className="w-6 h-6 xl:w-8 xl:h-8 text-[#1e4c9a] stroke-[2]" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Tablet & Mobile Flow (Clean Responsive Stepped Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4">
              {placementWorkflow.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-border-light shadow-xs"
                  >
                    <div className="w-16 h-16 rounded-full border-2 border-[#1e4c9a] bg-white flex items-center justify-center shrink-0 shadow-xs">
                      <Icon className="w-7 h-7 text-[#1e4c9a] stroke-[1.5]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-0.5">
                        Stage {idx + 1}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ── 6. ALUMNI SUCCESS SPOTLIGHTS ── */}
      <section className="section-padding bg-white border-b border-border-light relative overflow-hidden">
        <div className="container-wide relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-gray-600 inline-flex items-center gap-1.5 border-gray-300 font-medium capitalize border w-fit px-3 py-1.5 rounded-full text-[10px] md:text-xs mb-3 shadow-xs mx-auto">
              <UserGroupIcon className="w-4 h-4 inline-block text-primary" />
              Alumni Voices
            </span>
            <h2 className="academic-section-title text-gray-900 text-3xl md:text-5xl font-extrabold tracking-tight">
              Alumni <span className="text-primary">Success Stories</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto pt-1">
              Hear how our graduates transformed their careers and are driving rural innovation across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {alumniTestimonials.map((alumni, aIdx) => (
              <div 
                key={aIdx}
                className="p-6 rounded-2xl bg-white border border-border-light hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <StarIcon key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                    &ldquo;{alumni.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="w-11 h-11 rounded-full overflow-hidden relative border border-slate-300 shrink-0">
                    <Image
                      src={alumni.avatar}
                      alt={alumni.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{alumni.name}</h4>
                    <p className="text-[11px] font-semibold text-primary">{alumni.role}</p>
                    <p className="text-[10px] text-slate-500">{alumni.company} • {alumni.batch}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 7. FREQUENTLY ASKED QUESTIONS (FAQ) ── */}
      <section className="section-padding bg-bg-section border-b border-border-light relative overflow-hidden">
        <div className="container-wide relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-gray-600 inline-flex items-center gap-1.5 border-gray-300 font-medium capitalize border w-fit px-3 py-1.5 rounded-full text-[10px] md:text-xs mb-3 shadow-xs mx-auto">
              <QuestionMarkCircleIcon className="w-4 h-4 inline-block text-primary" />
              Got Questions?
            </span>
            <h2 className="academic-section-title text-gray-900 text-3xl md:text-5xl font-extrabold tracking-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium max-w-2xl mx-auto pt-1">
              Find answers to common questions about campus placements, recruitment sectors, summer internships, and corporate partnerships.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {placementFaqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl bg-white border border-border-light overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-primary text-white rotate-180" : "bg-slate-100 text-slate-600"}`}>
                      <ChevronDownIcon className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 8. STANDARDIZED SHARED CTA BANNER ── */}
      <SharedCtaBanner
        title="Partner with CVRUK–NIRM for Campus Placements &amp; CSR Hiring"
        subtitle="Connect with our Corporate Relations Cell to schedule on-campus recruitment drives, offer summer internships, or access pre-screened rural management talent."
        primaryBtnText="Contact Placement Cell"
        primaryBtnHref="/contact"
        secondaryBtnText="Apply for Admission"
        secondaryBtnHref="/apply-now"
      />

    </div>
  );
}
