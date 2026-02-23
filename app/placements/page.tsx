import { BriefcaseIcon, MapIcon, AcademicCapIcon, BuildingLibraryIcon, ChatBubbleBottomCenterTextIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function PlacementsPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-text-main text-white py-20 px-4">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Placements & Careers</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Bridging the gap between talent and opportunity. Our graduates are leading transformations in rural and corporate landscapes alike.
          </p>
        </div>
      </section>

      {/* Career Guidance Cell */}
      <section id="cell" className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             <div className="flex-1 space-y-8">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Dedicated Support</span>
                <h2 className="text-3xl font-bold font-heading">Career Guidance Cell</h2>
                <p className="text-text-muted leading-relaxed">
                   The Placement Cell at CVRUK–NLRI works tirelessly to provide students with the right platform to launch their careers. From resume building workshops to mock interviews, we ensure every student is industry-ready.
                </p>
                <div className="space-y-4">
                   <div className="flex gap-4 p-4 bg-surface rounded-2xl border border-surface">
                      <div className="h-10 w-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                         <BriefcaseIcon className="h-5 w-5" />
                      </div>
                      <div>
                         <h4 className="font-bold">Resume Building</h4>
                         <p className="text-xs text-text-muted">Crafting professional profiles for rural & social sectors.</p>
                      </div>
                   </div>
                   <div className="flex gap-4 p-4 bg-surface rounded-2xl border border-surface">
                      <div className="h-10 w-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                         <MapIcon className="h-5 w-5" />
                      </div>
                      <div>
                         <h4 className="font-bold">Mock Interviews</h4>
                         <p className="text-xs text-text-muted">Simulating real-world scenarios with industry veterans.</p>
                      </div>
                   </div>
                   <div className="flex gap-4 p-4 bg-surface rounded-2xl border border-surface">
                      <div className="h-10 w-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0">
                         <AcademicCapIcon className="h-5 w-5" />
                      </div>
                      <div>
                         <h4 className="font-bold">Career Counseling</h4>
                         <p className="text-xs text-text-muted">Personalized sessions to identify and achieve career goals.</p>
                      </div>
                   </div>
                </div>
             </div>
             <div className="flex-1 w-full aspect-square bg-surface rounded-[3rem] border shadow-inner flex items-center justify-center text-primary/10 italic text-center p-12">
                Student Placement Activity & Workshop Images
             </div>
          </div>
        </div>
      </section>

      {/* Internship & Recruiters */}
      <section className="section-padding bg-surface/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             <div className="bg-white p-10 rounded-3xl shadow-soft border border-surface">
                <h3 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
                   <BuildingLibraryIcon className="h-6 w-6 text-primary" /> Recruiters & Partners
                </h3>
                <p className="text-text-muted text-sm mb-8 leading-relaxed">
                   We are proud to be associated with leading NGOs, CSR foundations, and corporate organizations that actively recruit our talented graduates.
                </p>
                <div className="grid grid-cols-3 gap-6">
                   {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-video bg-surface rounded-xl flex items-center justify-center border border-surface grayscale hover:grayscale-0 transition-all cursor-crosshair">
                         <span className="text-[10px] font-bold text-text-muted uppercase tracking-tighter">Partner Logo</span>
                      </div>
                   ))}
                </div>
                <button className="btn-secondary w-full mt-10 flex items-center justify-center gap-2">
                   Become a Placement Partner <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </button>
             </div>

             <div className="bg-white p-10 rounded-3xl shadow-soft border border-surface">
                <h3 className="text-2xl font-bold font-heading mb-6 flex items-center gap-3">
                   <BriefcaseIcon className="h-6 w-6 text-primary" /> Internship Opportunities
                </h3>
                <p className="text-text-muted text-sm mb-8 leading-relaxed">
                   Every student undergoes a mandatory 8-week field internship, providing them with hands-on experience and direct exposure to rural challenges.
                </p>
                <div className="space-y-4">
                   <div className="p-4 bg-surface/50 rounded-xl border border-surface">
                      <h4 className="font-bold text-sm">Summer Field Internship</h4>
                      <p className="text-xs text-text-muted">Focus on rural data collection and community engagement.</p>
                   </div>
                   <div className="p-4 bg-surface/50 rounded-xl border border-surface">
                      <h4 className="font-bold text-sm">CSR Corporate Internship</h4>
                      <p className="text-xs text-text-muted">Working with top-tier companies on their social initiatives.</p>
                   </div>
                   <div className="p-4 bg-surface/50 rounded-xl border border-surface">
                      <h4 className="font-bold text-sm">NGO Leadership Program</h4>
                      <p className="text-xs text-text-muted">Shadowing executives in leading non-profit organizations.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section id="alumni" className="section-padding bg-white overflow-hidden">
        <div className="container-wide">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold font-heading mb-4">Alumni Success Stories</h2>
             <p className="text-text-muted">Our legacy continues through the impactful work of our alumni.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <AlumniCard 
                name="Deepak Sharma"
                batch="Batch of 2022"
                position="CSR Manager, Agri-Tech Corp"
                quote="The field-oriented approach at NLRI gave me the practical insights I needed to lead large-scale rural interventions."
             />
             <AlumniCard 
                name="Priya Patel"
                batch="Batch of 2021"
                position="Founder, Rural Rise NGO"
                quote="I learned how to turn research into social impact. The guidance from my professors was instrumental in my journey."
             />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-text-main text-white relative overflow-hidden">
         <div className="container-wide text-center relative z-10">
            <h2 className="text-3xl font-bold font-heading mb-6">Shape Your Future with Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
               Join a community that values impact over everything else. Secure your placement in the next-generation workforce of rural India.
            </p>
            <div className="flex justify-center gap-4">
               <button className="btn-primary">Apply Now</button>
               <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold transition-all">Career Brochure</button>
            </div>
         </div>
         {/* Decorative elements */}
         <div className="absolute bottom-0 right-0 h-full w-1/4 bg-primary/20 -skew-x-12 translate-x-1/2" />
      </section>
    </div>
  );
}

function AlumniCard({ name, batch, position, quote }: { name: string, batch: string, position: string, quote: string }) {
  return (
    <div className="p-10 bg-surface rounded-4xl border border-surface relative group hover:bg-white hover:shadow-soft transition-all duration-300">
       <div className="flex items-center gap-6 mb-8">
          <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-primary group-hover:bg-primary/10 shadow-sm transition-colors">
             <AcademicCapIcon className="h-8 w-8" />
          </div>
          <div>
             <h4 className="font-bold text-lg">{name}</h4>
             <span className="text-primary text-xs font-bold uppercase tracking-widest">{batch}</span>
             <p className="text-text-muted text-sm italic">{position}</p>
          </div>
       </div>
       <div className="relative">
          <ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-primary/10 absolute -top-4 -left-4" />
          <p className="text-text-muted leading-relaxed relative z-10 pl-6">
             "{quote}"
          </p>
       </div>
    </div>
  );
}
