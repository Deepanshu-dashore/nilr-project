import { MagnifyingGlassIcon, RocketLaunchIcon, CheckCircleIcon, CircleStackIcon, Cog6ToothIcon, ChartBarIcon } from "@heroicons/react/24/outline";

export default function ResearchTrainingPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-text-main text-white py-20 px-4">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Research & Training</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Advancing rural communities through data-driven research, innovative training modules, and expert consultancy services.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section id="areas" className="section-padding bg-white">
        <div className="container-wide">
          <div className="mb-16">
             <h2 className="text-3xl font-bold font-heading mb-6">Core Research Areas</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ResearchArea 
                   icon={<CircleStackIcon className="h-6 w-6" />}
                   title="Rural Economics & Livelihood"
                   description="Analyzing income patterns and diversifying livelihood opportunities in agrarian societies."
                />
                <ResearchArea 
                   icon={<RocketLaunchIcon className="h-6 w-6" />}
                   title="Social Innovation"
                   description="Developing technology-led solutions to solve age-old community problems."
                />
                <ResearchArea 
                   icon={<ChartBarIcon className="h-6 w-6" />}
                   title="Sustainable Agriculture"
                   description="Researching climate-resilient farming techniques and water management."
                />
             </div>
          </div>
        </div>
      </section>

      {/* Projects Timeline/Grid */}
      <section className="section-padding bg-surface/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             <div id="ongoing">
                <h2 className="text-3xl font-bold font-heading mb-8 flex items-center gap-3">
                   <Cog6ToothIcon className="h-8 w-8 text-primary" /> Ongoing Projects
                </h2>
                <div className="space-y-6">
                   <ProjectItem status="In Progress" title="Smart Village Implementation - Ratlam District" category="Infrastructure" />
                   <ProjectItem status="Data Collection" title="Rural Health Monitoring via IoT" category="HealthTech" />
                   <ProjectItem status="Pilot Phase" title="Organic Waste to Power Transformation" category="Sustainability" />
                </div>
             </div>
             <div id="completed">
                <h2 className="text-3xl font-bold font-heading mb-8 flex items-center gap-3">
                   <CheckCircleIcon className="h-8 w-8 text-primary" /> Completed Successes
                </h2>
                <div className="space-y-6">
                   <ProjectItem status="Success" title="Financial Literacy Drive for 500+ Farmers" category="Finance" isCompleted />
                   <ProjectItem status="Success" title="Micro-Irrigation Model for Arid Zones" category="Agriculture" isCompleted />
                   <ProjectItem status="Success" title="Youth Skill Gap Analysis Report 2024" category="Education" isCompleted />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Training Modules & Consultancy */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="bg-primary/5 rounded-[3rem] p-12 lg:p-20">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div id="consultancy">
                   <h2 className="text-3xl font-bold font-heading mb-6">Expert Consultancy Services</h2>
                   <p className="text-text-muted mb-8 leading-relaxed">
                      We provide end-to-end consultancy for CSR implementation, government projects, and NGO skill development initiatives. Our team of experts ensures high-impact delivery and measurable results.
                   </p>
                   <div className="space-y-4 mb-10">
                      <div className="flex items-center gap-3 font-semibold text-sm">
                         <div className="h-2 w-2 rounded-full bg-primary" /> Impact Assessment Studies
                      </div>
                      <div className="flex items-center gap-3 font-semibold text-sm">
                         <div className="h-2 w-2 rounded-full bg-primary" /> Program Strategy & Design
                      </div>
                      <div className="flex items-center gap-3 font-semibold text-sm">
                         <div className="h-2 w-2 rounded-full bg-primary" /> Third-party Monitoring (TPM)
                      </div>
                   </div>
                   <button className="btn-primary">Inquire for Consultancy</button>
                </div>
                <div id="modules" className="space-y-8">
                   <h3 className="text-2xl font-bold font-heading">Popular Training Modules</h3>
                   <div className="grid grid-cols-1 gap-4">
                      <TrainingModule title="Leadership in Rural Management" duration="5 Days Intensive" />
                      <TrainingModule title="CSR Implementation Excellence" duration="3 Days Workshop" />
                      <TrainingModule title="Digital Tools for Rural Field Workers" duration="1 Week Online/Offline" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ResearchArea({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 bg-white border border-surface rounded-2xl shadow-sm hover:border-primary/20 transition-all">
       <div className="text-primary mb-4 p-3 bg-surface rounded-xl inline-block">{icon}</div>
       <h3 className="text-xl font-bold mb-3">{title}</h3>
       <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function ProjectItem({ status, title, category, isCompleted = false }: { status: string, title: string, category: string, isCompleted?: boolean }) {
  return (
    <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-surface shadow-sm group hover:border-primary/30 transition-all">
       <div>
          <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full mb-2 inline-block ${isCompleted ? 'bg-secondary/20 text-secondary' : 'bg-primary/10 text-primary'}`}>
             {status}
          </span>
          <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{title}</h4>
          <span className="text-xs text-text-muted italic">{category}</span>
       </div>
       <div className={`h-8 w-8 rounded-full flex items-center justify-center ${isCompleted ? 'bg-secondary/10 text-secondary' : 'bg-primary/5 text-primary'}`}>
          <MagnifyingGlassIcon className="h-4 w-4" />
       </div>
    </div>
  );
}

function TrainingModule({ title, duration }: { title: string, duration: string }) {
  return (
    <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white shadow-sm hover:shadow-md transition-all">
       <h4 className="font-bold mb-1">{title}</h4>
       <div className="flex items-center gap-2 text-primary">
          <MagnifyingGlassIcon className="h-3 w-3" />
          <span className="text-xs font-bold uppercase tracking-wider">{duration}</span>
       </div>
    </div>
  );
}
