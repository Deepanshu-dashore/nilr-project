import React from 'react';
import { DocumentTextIcon, ArrowDownTrayIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const researchPapers = [
  { file: "Agri_Business_Management - GVT study.pdf", title: "Agri Business Management - GVT study", description: "Comprehensive study detailing agribusiness practices and viable market strategies within rural sectors." },
  { file: "Chapter on Strategy for Sustainable Rural Livelihood An Experience from EIRFP by Binay Kumar Sahay.pdf", title: "Strategy for Sustainable Rural Livelihood: EIRFP Experience", description: "Insights and field experiences focusing on building resilient and sustainable livelihoods for rural communities." },
  { file: "Eastern India Rainfed Farming Project Report.pdf", title: "Eastern India Rainfed Farming Project Report", description: "An extensive report documenting the challenges, methodologies, and outcomes of rainfed farming projects in Eastern India." },
  { file: "Farmer ptory Crop Improvement - I.pdf", title: "Farmer Participatory Crop Improvement - I", description: "Phase I analysis of empowering farmers through collaborative decision-making in agricultural crop selection and improvement." },
  { file: "Farmer_ptory_Crop_Improvement_-_II.pdf", title: "Farmer Participatory Crop Improvement - II", description: "Phase II findings detailing the implementation and localized impact of participatory crop management techniques." },
  { file: "Farmer Ptory Crop Improvement - III.pdf", title: "Farmer Participatory Crop Improvement - III", description: "Phase III evaluation reflecting on long-term crop resilience and participatory adaptability among farming groups." },
  { file: "Farmer_Ptory_Crop_Improvement_-_IV.pdf", title: "Farmer Participatory Crop Improvement - IV", description: "Phase IV final assessments showing the socio-economic benefits derived from structured farmer collaboration." },
  { file: "GIRIRAJA_-_A_Boon_to_Tribal_Farmers.pdf", title: "GIRIRAJA - A Boon to Tribal Farmers", description: "A detailed view into the introduction of the Giriraja poultry breed as a transformational asset for tribal farming economies." },
  { file: "Group building, Prodution Success and the Struggle to Prevent Capture of the Resources - By B.K Sahay & etal.pdf", title: "Group Building, Production Success & Resource Preservation", description: "Evaluating the crucial role of community group-building in securing agricultural resources and sustaining production success." },
  { file: "atma.pdf", title: "ATMA Report", description: "Core summary of the Agricultural Technology Management Agency's extension reforms and widespread farmer training." },
  { file: "capacity_building.pdf", title: "Capacity Building Document", description: "Essential guidelines and frameworks for enhancing organizational and individual capabilities within rural development scenarios." }
];

export default function ResearchPapers() {
  return (
    <section className="py-12 md:py-20 md:pb-32 bg-slate-50 border-t border-gray-200 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/4 h-26 bg-accent/10 rounded-bl-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-26 bg-accent/10 rounded-tr-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <h2 className="academic-section-title">
            Research Papers & Publications
          </h2>
          <p className="academic-section-text">
            Explore our repository of extensive studies, project reports, and participatory crop improvement documentation. Dive deep into the analysis and strategies developed by our researchers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto mt-5">
          {researchPapers.map((paper, index) => (
            <a 
              key={index} 
              href={`/research/${paper.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary/5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 shrink-0 bg-red-50 text-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-red-100 shadow-sm">
                  <DocumentTextIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {paper.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {paper.description}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-wider flex items-center gap-1">
                    PDF Document
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                <span className="text-sm font-bold text-slate-500 group-hover:text-primary transition-colors flex items-center gap-2">
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  View Paper
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary/50 group-hover:text-white transition-colors text-slate-400">
                  <ChevronRightIcon className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
