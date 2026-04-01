import React from 'react';

const areas = [
  {
    title: "Agricultural Economics",
    description: "Innovating farming practices and understanding the economic dynamics of rural livelihoods to enhance sustainable incomes."
  },
  {
    title: "Rural Technology & Innovation",
    description: "Developing accessible, low-cost technological solutions for issues like water conservation, renewable energy, and sanitation."
  },
  {
    title: "Agribusiness Management",
    description: "Exploring value chain enhancements and optimizing supply chain logistics to maximize rural market efficiency."
  },
  {
    title: "Sustainable Development",
    description: "Studying environmental impacts, climate resilience, and sustainable paradigms tailored for vulnerable rural communities."
  }
];

export default function ResearchAreas() {
  return (
    <section className="py-12 md:py-20 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <h2 className="academic-section-title">
            Research Areas
          </h2>
          <p className="academic-section-text">
            Our Cell promotes intra, inter and transdisciplinary associations among internal schools as well as external organisations. Here are our key focus areas making a global impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100/60"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-blue-50 text-primary rounded-xl flex items-center justify-center font-bold text-lg group-hover:-translate-y-1 transition-transform">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
