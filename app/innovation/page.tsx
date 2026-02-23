import { RocketLaunchIcon, SparklesIcon, UserGroupIcon, TrophyIcon, LightBulbIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function InnovationPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Innovation Overview */}
      <section className="bg-text-main text-white py-24 px-4 relative overflow-hidden">
        <div className="container-wide relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">Innovation & Entrepreneurship</h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Fostering a culture of creativity and social entrepreneurship to drive sustainable rural transformation.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -mr-48 -mt-48" />
      </section>

      {/* 2. Incubation Center */}
      <section id="incubation" className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary/5 text-primary rounded-full text-xs font-extrabold uppercase tracking-widest">
                The Launchpad
              </div>
              <h2 className="text-4xl font-bold font-heading">Rural Incubation Centre</h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Our state-of-the-art incubation facility provides early-stage social startups with the infrastructure, mentorship, and networks needed to scale their impact in rural India.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Feature icon={<SparklesIcon className="h-5 w-5" />} text="Co-working Spaces" />
                <Feature icon={<UserGroupIcon className="h-5 w-5" />} text="Mentor Network" />
                <Feature icon={<LightBulbIcon className="h-5 w-5" />} text="Prototyping Lab" />
                <Feature icon={<RocketLaunchIcon className="h-5 w-5" />} text="Seed Funding Access" />
              </div>
            </div>
            <div className="flex-1 w-full aspect-square bg-surface rounded-4xl border border-surface shadow-soft flex items-center justify-center text-primary/10 italic text-2xl font-heading text-center p-12">
              Incubation Centre & Startup Hub Visualization
            </div>
          </div>
        </div>
      </section>

      {/* 3. Startup Support */}
      <section id="startups" className="section-padding bg-surface/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading mb-4">Startup Support Ecosystem</h2>
            <p className="text-text-muted">Comprehensive resources for the next generation of social entrepreneurs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SupportCard 
              title="Ideation & Validation" 
              description="Refining raw ideas into viable social business models through structured workshops."
              icon={<LightBulbIcon className="h-8 w-8 text-primary" />}
            />
            <SupportCard 
              title="Market Linkages" 
              description="Connecting startups with rural markets, government departments, and corporate partners."
              icon={<ArrowRightIcon className="h-8 w-8 text-primary" />}
            />
            <SupportCard 
              title="Policy Advocacy" 
              description="Assisting in navigating regulatory frameworks and leveraging government schemes."
              icon={<TrophyIcon className="h-8 w-8 text-primary" />}
            />
          </div>
        </div>
      </section>

      {/* 4. Success Stories */}
      <section id="success" className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading mb-4">Innovation Success Stories</h2>
            <p className="text-text-muted">Celebrating startups that are changing the rural landscape.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="bg-text-main text-white p-12 rounded-4xl relative overflow-hidden group">
                <div className="relative z-10">
                   <h3 className="text-2xl font-bold font-heading mb-4">AgriSmart Solutions</h3>
                   <p className="text-gray-400 mb-8">Revolutionizing small-scale farming with IoT-based irrigation systems, now serving 200+ villages.</p>
                   <span className="text-secondary font-bold flex items-center gap-2">Read Case Study <ArrowRightIcon className="h-4 w-4" /></span>
                </div>
                <div className="absolute top-0 right-0 h-full w-1/3 bg-primary/10 group-hover:scale-110 transition-transform" />
             </div>
             <div className="bg-surface p-12 rounded-4xl border border-surface relative group">
                <h3 className="text-2xl font-bold font-heading mb-4 text-text-main">RuralReach Logistics</h3>
                <p className="text-text-muted mb-8 text-sm">A community-driven delivery network providing last-mile connectivity for rural artisans.</p>
                <span className="text-primary font-bold flex items-center gap-2">Read Case Study <ArrowRightIcon className="h-4 w-4" /></span>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-text-main text-white pb-32">
        <div className="container-wide text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight leading-tight">Have a Groundbreaking Idea?</h2>
            <p className="text-gray-400 text-lg">Join our ecosystem and turn your vision for rural India into reality.</p>
            <div className="flex justify-center gap-6">
              <Link href="/contact" className="btn-primary px-12 py-5 text-lg">Talk to our Innovation Team</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-3 font-bold text-sm text-text-main">
      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      {text}
    </div>
  );
}

function SupportCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="p-10 bg-white rounded-4xl border border-surface shadow-sm hover:shadow-soft hover:border-primary/20 transition-all flex flex-col h-full">
      <div className="mb-8">{icon}</div>
      <h3 className="text-xl font-bold font-heading mb-4">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );
}
