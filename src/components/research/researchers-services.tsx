import React from 'react';

const researchers = [
  {
    id: 1,
    name: "Dr. Arvind Sharma",
    role: "Head of Research, Agriculture & Sustainability",
    expertise: "Sustainable Farming, Agro-Economics",
    imgUrl: "https://avatar.iran.liara.run/public/33",
  },
  {
    id: 2,
    name: "Prof. Meera Desai",
    role: "Lead Scientist, Water Management",
    expertise: "Hydrology, Climate Change Impacts",
    imgUrl: "https://avatar.iran.liara.run/public/64",
  },
  {
    id: 3,
    name: "Dr. Rajesh Patil",
    role: "Director of Agribusiness",
    expertise: "Supply Chain, Value Addition",
    imgUrl: "https://avatar.iran.liara.run/public/15",
  }
];

const services = [
  {
    title: "Project Incubation",
    icon: "🚀",
    desc: "End-to-end support for developing scalable rural management solutions from ideation to pilot execution."
  },
  {
    title: "Grants & IP Advisory",
    icon: "⚖️",
    desc: "Assistance in securing research grants, patent filing, and comprehensive intellectual property rights management."
  },
  {
    title: "Industry Collaboration",
    icon: "🤝",
    desc: "Facilitating strategic partnerships between academia, NGOs, and the agro-industry to drive rural advancement."
  }
];

export default function ResearchersServices() {
  return (
    <section className="py-12 md:py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <h2 className="academic-section-title">
            Our Researchers & Services
          </h2>
          <p className="academic-section-text">
            Dedicated change-makers driving excellence. Our expert team provides comprehensive guidance and robust support services designed to foster groundbreaking intra, inter, and transdisciplinary research.
          </p>
        </div>

        {/* Top Split: Researchers vs. Services Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12 max-w-7xl mx-auto">
          {/* Researchers Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-primary/20 pb-4 inline-block">
              Expert Researchers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {researchers.map((res) => (
                <div key={res.id} className="group bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary/30 transition-all hover:shadow-lg flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={res.imgUrl} 
                      alt={res.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{res.name}</h4>
                  <p className="text-sm text-primary font-semibold mb-2">{res.role}</p>
                  <div className="text-xs text-slate-500 font-medium bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100 w-full truncate">
                    {res.expertise}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-primary/20 pb-4 inline-block">
              Research Services
            </h3>
            <div className="space-y-4">
              {services.map((service, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-primary/40 hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-2xl shadow-sm">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h4>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-linear-to-br from-blue-900 to-indigo-900 rounded-2xl text-white shadow-xl flex flex-col justify-between mt-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
                <h4 className="text-xl font-bold mb-3 relative z-10">Need Specialized Support?</h4>
                <p className="text-blue-100 text-sm mb-5 relative z-10 leading-relaxed">
                    Our R&D cell provides bespoke consulting for advanced rural metrics and sustainable implementations. Let&apos;s collaborate.
                </p>
                <button className="bg-white text-blue-900 font-bold py-3 px-6 rounded-xl hover:bg-blue-50 transition-colors w-max relative z-10 shadow-lg">
                    Contact R&D Cell
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
