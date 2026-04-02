import React from 'react';
import { DocumentTextIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

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

        <div className="max-w-7xl mx-auto mt-8 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-bottom border-slate-200">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-center w-16">#</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Publication Details</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-center">Type</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {researchPapers.map((paper, index) => (
                  <tr 
                    key={index} 
                    className="hover:bg-slate-50/50 transition-colors group cursor-default"
                  >
                    <td className="px-6 py-8 text-sm font-medium text-slate-400 text-center">
                      {(index + 1).toString().padStart(2, '0')}
                    </td>
                    <td className="px-6 py-8">
                      <div className="flex flex-col gap-1.5">
                        <h3 className="text-base font-bold text-slate-800 group-hover:text-primary transition-colors leading-snug">
                          {paper.title}
                        </h3>
                        <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
                          {paper.description}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-8">
                      <div className="flex items-center justify-center">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 text-red-600 border border-red-100/50">
                          <DocumentTextIcon className="w-4 h-4" />
                          <span className="text-[10px] font-bold uppercase tracking-wider">PDF</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-8 text-right">
                      <a 
                        href={`/research/${paper.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-primary transition-all duration-300 shadow-sm hover:shadow-primary/20 hover:-translate-y-0.5"
                      >
                        {/* <ArrowDownTrayIcon className="w-4 h-4" /> */}
                        <span>View Paper</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 rotate-90 transition-all duration-300 group-hover:rotate-45" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 6v36M12 18L24 6l12 12"/></svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
