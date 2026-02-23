import Link from "next/link";
import { csrData } from "@/src/data/csr-data";
import { 
  UserGroupIcon, 
  ArrowTrendingUpIcon, 
  SparklesIcon, 
  ShieldCheckIcon, 
  DocumentCheckIcon, 
  ChartBarIcon, 
  ArrowRightIcon,
  ClipboardDocumentListIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  BriefcaseIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

export default function CSRPartnershipsPage() {
  return (
    <div className="flex flex-col">
      {/* 1. CSR & Partnerships Overview */}
      <section className="bg-text-main text-white py-24 px-4 relative overflow-hidden">
        <div className="container-wide relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">{csrData.overview.title}</h1>
          <p className="text-gray-400 max-w-4xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-10">
            {csrData.overview.content}
          </p>
          <div className="flex justify-center">
             <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-full text-secondary font-bold text-sm tracking-wide">
                {csrData.overview.subtitle}
             </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -mr-48 -mt-48" />
      </section>

      {/* 2. Institutional Background & Implementation Strength */}
      <section className="section-padding bg-white">
        <div className="container-wide">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 space-y-8">
                 <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary/5 text-primary rounded-full text-xs font-extrabold uppercase tracking-widest">
                    Implementation Powerhouse
                 </div>
                 <h2 className="text-3xl font-bold font-heading leading-tight">{csrData.background.title}</h2>
                 <p className="text-text-muted text-lg">{csrData.background.experience}</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {csrData.background.sectors.map((sector, index) => (
                       <div key={index} className="flex gap-3 items-center">
                          <div className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                             <CheckCircleIcon className="h-4 w-4 text-secondary" />
                          </div>
                          <span className="font-bold text-sm text-text-main">{sector}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-6 w-full">
                 <div className="bg-surface p-12 rounded-4xl border border-surface flex flex-col items-center justify-center text-center group hover:bg-white hover:shadow-soft transition-all">
                    <span className="text-5xl font-bold font-heading text-primary mb-2">{csrData.background.years}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-text-muted">Years of Impact</span>
                 </div>
                  <div className="bg-text-main p-12 rounded-4xl shadow-2xl flex flex-col items-center justify-center text-center text-white">
                     <GlobeAltIcon className="h-10 w-10 text-secondary mb-4" />
                     <span className="text-sm font-bold leading-tight">Pan-India Field Presence</span>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. CSR Focus Areas */}
      <section id="focus" className="section-padding bg-surface/30">
        <div className="container-wide">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-heading mb-4">🌱 Core CSR Domains</h2>
              <p className="text-text-muted">Strategic engagement areas aligned with sustainable development goals.</p>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {csrData.focusAreas.map((area, index) => (
                 <div key={index} className="bg-white p-8 rounded-3xl border border-surface shadow-sm hover:border-primary/20 transition-all group">
                     <div className="h-12 w-12 bg-surface rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                        <SparklesIcon className="h-6 w-6" />
                     </div>
                    <h3 className="text-lg font-bold font-heading mb-2">{area.title}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{area.domain}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. CSR Implementation Model */}
      <section id="model" className="section-padding bg-white overflow-hidden">
        <div className="container-wide">
           <div className="text-center mb-20">
              <h2 className="text-3xl font-bold font-heading mb-4">🔄 CSR Implementation Model</h2>
              <p className="text-text-muted">A structured, participatory approach ensures long-term sustainability.</p>
           </div>
           <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-surface -translate-y-1/2 hidden lg:block" />
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
                 {csrData.model.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center group">
                       <div className="h-12 w-12 bg-white border-2 border-surface rounded-full flex items-center justify-center text-sm font-bold text-primary mb-6 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                          {index + 1}
                       </div>
                       <h4 className="font-bold text-text-main mb-2 leading-tight px-4">{item.step}</h4>
                       <p className="text-[10px] font-medium text-text-muted px-4 leading-relaxed line-clamp-2">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 5. Partnerships & Collaborations */}
      <section id="partnerships" className="section-padding bg-surface/20">
        <div className="container-wide text-center">
           <h2 className="text-3xl font-bold font-heading mb-12">🤝 Partner Categories</h2>
           <div className="flex flex-wrap justify-center gap-4">
              {csrData.partnerCategories.map((cat, index) => (
                  <div key={index} className="px-8 py-4 bg-white border border-surface rounded-2xl font-bold text-text-main text-sm shadow-sm hover:shadow-soft hover:border-primary/20 transition-all flex items-center gap-3">
                     <UserGroupIcon className="h-4 w-4 text-primary" /> {cat}
                  </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. Capacity Building & Training Support */}
      <section className="section-padding bg-white">
        <div className="container-wide">
           <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="flex-1 space-y-8">
                 <h2 className="text-3xl font-bold font-heading">Capacity Building Support</h2>
                 <p className="text-text-muted text-lg">We offer specialized training modules for CSR partners to empower ground-level institutional cadre.</p>
                 <div className="space-y-4">
                    {csrData.capacityBuilding.map((item, index) => (
                       <div key={index} className="flex gap-4 p-6 bg-surface rounded-2xl border border-surface hover:bg-white hover:shadow-soft transition-all group">
                           <div className="h-8 w-8 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                              <AcademicCapIcon className="h-4 w-4" />
                           </div>
                          <span className="font-bold text-sm text-text-main">{item}</span>
                       </div>
                    ))}
                 </div>
              </div>
               <div className="flex-1 w-full aspect-square bg-surface border border-surface rounded-4xl flex items-center justify-center text-primary/10 italic text-2xl font-heading text-center p-12 relative overflow-hidden">
                  <RocketLaunchIcon className="h-32 w-32 mb-8 opacity-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <span className="relative z-10">Customized CSR Training & Impact Strategy Visualization</span>
               </div>
           </div>
        </div>
      </section>

      {/* 7. Research, Monitoring & Impact */}
      <section id="impact" className="section-padding bg-text-main text-white">
        <div className="container-wide">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                 <h2 className="text-3xl md:text-5xl font-bold font-heading underline decoration-secondary decoration-4 underline-offset-8">Research & Impact MEL</h2>
                 <p className="text-gray-400 text-lg leading-relaxed">
                    Corporate reporting requires academic rigor and field data accuracy. Our research cell ensures compliance-ready documentation and evidence-based impact reporting.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {csrData.research.map((item, index) => (
                        <div key={index} className="flex gap-3 text-sm font-medium text-gray-300">
                           <DocumentCheckIcon className="h-5 w-5 text-secondary shrink-0" /> {item}
                        </div>
                    ))}
                 </div>
              </div>
               <div className="bg-white/5 border border-white/10 p-12 rounded-4xl backdrop-blur-sm">
                  <ChartBarIcon className="h-12 w-12 text-secondary mb-8" />
                  <h4 className="text-2xl font-bold font-heading mb-6">Social Audit Ready</h4>
                 <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    Implementing Participatory Monitoring & Learning (PML) to ensure transparency and strategic alignment with national mandates.
                 </p>
                 <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-secondary rounded-full" />
                 </div>
                 <div className="mt-4 flex justify-between text-[10px] font-bold uppercase tracking-widest text-text-muted">
                    <span>Impact Compliance</span>
                    <span className="text-white">80% Structured MEL</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 8. Why Partner with CVRU–NLRI */}
      <section className="section-padding bg-white">
        <div className="container-wide">
           <div className="text-center mb-16 px-4">
              <h2 className="text-3xl font-bold font-heading mb-4">Strategic Partnership Advantages</h2>
              <p className="text-text-muted">Why corporate foundations and government departments trust us.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {csrData.whyPartner.map((reason, index) => (
                  <div key={index} className="flex gap-5 p-8 bg-surface rounded-3xl border border-surface hover:border-primary/20 transition-all group">
                     <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                        <ShieldCheckIcon className="h-5 w-5" />
                     </div>
                    <div>
                       <h4 className="font-bold text-text-main mb-1">{reason.title}</h4>
                       <p className="text-xs font-medium text-text-muted leading-relaxed">{reason.text}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 9. Collaboration Opportunities (CTA Section) */}
      <section id="opportunities" className="section-padding bg-surface/30">
        <div className="container-wide">
           <div className="max-w-4xl mx-auto text-center space-y-12">
              <h2 className="text-3xl md:text-5xl font-bold font-heading">Collaboration Opportunities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {csrData.opportunities.map((opp, index) => (
                     <div key={index} className="bg-white p-6 rounded-2xl border border-surface shadow-sm font-bold text-text-main flex items-center justify-center gap-3 group hover:border-primary transition-all cursor-pointer">
                        {opp} <ArrowRightIcon className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                  ))}
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-6 pt-8">
                 <button className="btn-primary px-12 py-5 text-lg">Partner With Us</button>
                 <button className="btn-secondary px-12 py-5 text-lg">Request CSR Proposal</button>
              </div>
           </div>
        </div>
      </section>

      {/* 10. Contact for CSR & Partnerships */}
      <section className="section-padding bg-text-main text-white pb-32 relative overflow-hidden">
        <div className="container-wide relative z-10">
               <div className="bg-white/5 border border-white/10 rounded-4xl p-12 lg:p-20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div className="space-y-6">
                        <QuestionMarkCircleIcon className="h-12 w-12 text-secondary" />
                        <h3 className="text-3xl font-bold font-heading">{csrData.contact.cell}</h3>
                    <p className="text-gray-400 font-medium">{csrData.contact.support}</p>
                        <div className="flex items-center gap-6 pt-6">
                           <div className="h-14 w-14 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                              <UserGroupIcon className="h-7 w-7" />
                           </div>
                       <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">Strategic Liaison</p>
                          <p className="text-2xl font-bold">NLRI Corporate Desk</p>
                       </div>
                    </div>
                 </div>
                     <div className="space-y-8 lg:border-l lg:border-white/10 lg:pl-16">
                        <div className="flex items-center gap-4">
                           <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center">
                              <EnvelopeIcon className="h-5 w-5 text-secondary" />
                           </div>
                           <span className="text-xl font-bold">{csrData.contact.email}</span>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center">
                              <PhoneIcon className="h-5 w-5 text-secondary" />
                           </div>
                           <span className="text-xl font-bold">{csrData.contact.phone}</span>
                        </div>
                    <Link href="/contact" className="inline-block text-secondary font-bold hover:underline">Visit Official Contact Page →</Link>
                 </div>
              </div>
           </div>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      </section>
    </div>
  );
}

