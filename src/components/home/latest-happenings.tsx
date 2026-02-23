"use client";

import { EventCard } from "./home-ui";

export default function LatestHappenings() {
  return (
    <section className="section-padding bg-bg-section">
      <div className="container-wide">
        <div className="mb-20">
            <h2 className="academic-section-title">Latest Happenings</h2>
            <p className="academic-section-subtitle">From intellectual debates to electrifying fests - there's never a dull moment on campus.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <EventCard 
             day="03" 
             monthYear="FEB' 2026" 
             title="22nd Bharat Asmita National Awards: Honouring India's Changemakers"
             img="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
           />
           <EventCard 
             day="26" 
             monthYear="JAN' 2026" 
             title="Honouring the Spirit of the Constitution: 77th Republic Day Celebration at MIT-WPU, Pune"
             img="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80"
           />
           <EventCard 
             day="24" 
             monthYear="JAN' 2026" 
             title="Global Immersion: Empowering CVRUK-NLRI Students with International Exposure"
             img="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80"
           />
             <EventCard 
               day="04" 
               monthYear="OCT' 2026" 
               title="Global Immersion: Empowering CVRUK-NLRI Students with International Exposure"
               img="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80"
             />
           <EventCard 
             day="10" 
             monthYear="MAY' 2026" 
             title="22nd Bharat Asmita National Awards: Honouring India's Changemakers"
             img="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
           />
           <EventCard 
             day="12" 
             monthYear="DEC' 2026" 
             title="Honouring the Spirit of the Constitution: 77th Republic Day Celebration at MIT-WPU, Pune"
             img="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80"
           />
        </div>
      </div>
    </section>
  );
}
