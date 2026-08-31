import React from 'react';
import { 
  CheckBadgeIcon, 
  AcademicCapIcon, 
  BuildingLibraryIcon, 
  GlobeAltIcon, 
  ScaleIcon,
  ShieldCheckIcon,
  StarIcon,
  DocumentCheckIcon
} from "@heroicons/react/24/outline";

const approvals = [
  {
    title: "AICTE Approval",
    organization: "All India Council for Technical Education",
    description: "Our postgraduate programs are approved by AICTE, ensuring national standards for technical and management education.",
    year: "Since 2018",
    icon: AcademicCapIcon,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    link: "/approvales/SRM AICTE Approval 2025-26.PDF"
  },
  // {
  //   title: "State Govt. Recognition",
  //   organization: "Government of Madhya Pradesh",
  //   description: "Formally recognized as a premier research and training institute contributing to the state's rural development goals.",
  //   year: "Ongoing",
  //   icon: BuildingLibraryIcon,
  //   color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  //   link: "#"
  // },
  // {
  //   title: "CVRU Academic Affiliation",
  //   organization: "Dr. C.V. Raman University",
  //   description: "Academic partnership with CVRU Khandwa, providing world-class degree programs and research opportunities.",
  //   year: "Strategic Partner",
  //   icon: GlobeAltIcon,
  //   color: "bg-indigo-50 text-indigo-600 border-indigo-100",
  //   link: "#"
  // },
  // {
  //   title: "ISO Certification",
  //   organization: "International Organization for Standardization",
  //   description: "ISO 9001:2015 certified for maintaining global standards in quality management and vocational training delivery.",
  //   year: "Certified Quality",
  //   icon: ShieldCheckIcon,
  //   color: "bg-purple-50 text-purple-600 border-purple-100",
  //   link: "#"
  // },
  // {
  //   title: "University of New Haven (USA)",
  //   organization: "International Collaboration",
  //   description: "Strategic academic alignment for certificate programs leading to International MBA Degrees.",
  //   year: "Global Partner",
  //   icon: DocumentCheckIcon,
  //   color: "bg-orange-50 text-orange-600 border-orange-100",
  //   link: "#"
  // },
  // {
  //   title: "NSDC Partner",
  //   organization: "National Skill Development Corporation",
  //   description: "Affiliated training provider for various skill development initiatives under the Pradhan Mantri Kaushal Vikas Yojana.",
  //   year: "Skill India Partner",
  //   icon:  CheckBadgeIcon,
  //   color: "bg-red-50 text-red-600 border-red-100",
  //   link: "#"
  // }
];


export default function ApprovalsContent() {
  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Approvals Section */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {approvals.map((item, index) => (
            <div 
              key={index} 
              className={`group relative p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full`}
            >
              <div className='flex  gap-5'>
              <div className={`w-14 h-14 ${item.color} border rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-8 h-8" />
              </div>
              <div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-[10px] font-bold text-primary/70 uppercase tracking-widest mb-4">
                {item.organization}
              </p>
              </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {item.description}
              </p>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between group/btn"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-tighter">
                    Validity / Status
                  </span>
                  <span className="text-xs font-bold text-slate-600">
                    {item.year}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-900 text-[10px] font-bold uppercase tracking-wider group-hover/btn:bg-primary group-hover/btn:text-white transition-all duration-300 border border-slate-100 group-hover/btn:border-primary">
                  View Document
                  <DocumentCheckIcon className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Recognitions Section */}
        {/* <div className="bg-white rounded-[40px] border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-20 bg-primary/5 border-r border-slate-100">
              <div className="w-16 h-16 bg-white shadow-xl shadow-primary/10 rounded-2xl flex items-center justify-center mb-8 animate-bounce-slow">
                <StarIcon className="w-10 h-10 text-yellow-500" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-heading">
                Awards & <br />
                <span className="text-primary italic">Recognition</span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Over the years, NIRM has been honored with numerous accolades for its contribution to sustainable rural transformation and excellence in academic-industry collaborations.
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="px-6 py-3 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm hover:border-primary/30 transition-colors">
                   Grassroots Excellence
                 </div>
                 <div className="px-6 py-3 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-sm hover:border-primary/30 transition-colors">
                   Social Impact 2024
                 </div>
              </div>
            </div>
            <div className="p-10 lg:p-20 flex flex-col gap-12 justify-center">
              {recognitions.map((item, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 shrink-0 bg-yellow-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckBadgeIcon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">{item.awarder}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ⚖️ Closing Note */}
        {/* <div className="mt-24 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-block p-4 bg-indigo-50 rounded-2xl mb-4">
            <ScaleIcon className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="academic-section-title">Commitment to Compliance</h2>
          <p className="academic-section-text italic">
            We are dedicated to maintaining the highest level of accountability to our students, stakeholders, and the regulatory bodies that govern our operations.
          </p>
        </div> */}
      </div>
    </div>
  );
}
