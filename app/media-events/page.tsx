import { NewspaperIcon, CalendarIcon, PhotoIcon, VideoCameraIcon, DocumentTextIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function MediaEventsPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-text-main text-white py-20 px-4">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Media & Events</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Stay updated with the pulse of our campus. Explore latest breakthroughs, upcoming gatherings, and our journey through time.
          </p>
        </div>
      </section>

      {/* Latest News & Announcements */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
             <div className="max-w-xl">
                <h2 className="text-3xl font-bold font-heading mb-4 flex items-center gap-3">
                   <NewspaperIcon className="h-8 w-8 text-primary" /> News & Announcements
                </h2>
                <p className="text-text-muted">Direct from the CVRUK–NLRI editorial desk.</p>
             </div>
             <button className="btn-secondary">View All News</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <NewsCard 
                date="Feb 06, 2026"
                title="Portal Launch: CVRUK–NLRI Official Web Platform Live"
                excerpt="We are thrilled to announce the official launch of our comprehensive campus portal designed for student excellence."
             />
             <NewsCard 
                date="Jan 28, 2026"
                title="Annual Rural Leadership Summit 2026 Scheduled"
                excerpt="Join us for the most awaited event of the year, bringing together icons of rural transformation."
             />
             <NewsCard 
                date="Jan 15, 2026"
                title="New Research Grant Approved for Sustainable Dairy"
                excerpt="NLRI receives major funding for researching tech-led dairy farms in the Ratlam cluster."
             />
          </div>
        </div>
      </section>

      {/* Upcoming Events Calendar */}
      <section id="calendar" className="section-padding bg-surface/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
             <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold font-heading mb-6 flex items-center gap-3">
                   <CalendarIcon className="h-8 w-8 text-primary" /> Events Calendar
                </h2>
                <p className="text-text-muted mb-8 italic">
                   "Mark your calendars for workshops, seminars, and cultural festivals happening this semester."
                </p>
                <div className="bg-white p-6 rounded-2xl border border-surface shadow-sm">
                   <h4 className="font-bold mb-4 uppercase tracking-wider text-xs text-primary">Key Dates</h4>
                   <ul className="space-y-4">
                      <li className="flex justify-between text-sm py-2 border-b border-surface">
                         <span className="font-semibold text-text-main">Workshop: CSR 101</span>
                         <span className="text-text-muted">Feb 15</span>
                      </li>
                      <li className="flex justify-between text-sm py-2 border-b border-surface">
                         <span className="font-semibold text-text-main">Guest Lecture Series</span>
                         <span className="text-text-muted">Mar 02</span>
                      </li>
                      <li className="flex justify-between text-sm py-2 border-b border-surface">
                         <span className="font-semibold text-text-main">Spring Festival</span>
                         <span className="text-text-muted">Mar 12</span>
                      </li>
                   </ul>
                </div>
             </div>
             
             <div className="lg:col-span-2 space-y-6">
                <EventItem 
                   title="National Seminar on Rural Digitization" 
                   time="10:00 AM - 04:00 PM" 
                   venue="Main Auditorium, NLRI Campus" 
                   day="Feb 20"
                />
                <EventItem 
                   title="Campus Recruitment Drive 2026" 
                   time="09:00 AM Onwards" 
                   venue="Placement Cell" 
                   day="Mar 05"
                />
                <EventItem 
                   title="Annual CSR Excellence Awards" 
                   time="06:00 PM - 09:00 PM" 
                   venue="Grand Ballroom" 
                   day="Mar 20"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Multimedia Gallery */}
      <section id="gallery" className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold font-heading mb-4">Photo & Video Gallery</h2>
             <p className="text-text-muted">Glimpses of life and learning at CVRUK–NLRI.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
             <div className="md:col-span-2 aspect-4/3 bg-surface rounded-3xl overflow-hidden flex items-center justify-center border relative group cursor-pointer">
                <PhotoIcon className="h-12 w-12 text-primary/10 group-hover:scale-110 transition-transform" />
                <span className="absolute bottom-4 left-6 font-bold text-sm text-text-muted bg-white/80 px-3 py-1 rounded-full">Campus Infrastructure</span>
             </div>
             <div className="aspect-square bg-surface rounded-3xl overflow-hidden flex items-center justify-center border relative group cursor-pointer">
                <PhotoIcon className="h-12 w-12 text-primary/10 group-hover:scale-110 transition-transform" />
                <span className="absolute bottom-4 left-6 font-bold text-xs text-text-muted bg-white/80 px-3 py-1 rounded-full">Annual Fest</span>
             </div>
             <div className="aspect-square bg-surface rounded-3xl overflow-hidden flex items-center justify-center border relative group cursor-pointer">
                <VideoCameraIcon className="h-12 w-12 text-primary/10 group-hover:scale-110 transition-transform" />
                <span className="absolute bottom-4 left-6 font-bold text-xs text-text-muted bg-white/80 px-3 py-1 rounded-full">Video Tour</span>
             </div>
          </div>
          <div className="flex justify-center">
             <button className="btn-secondary">Explore All Media</button>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section id="press" className="section-padding bg-surface/10 border-t border-surface">
         <div className="container-wide">
            <h2 className="text-3xl font-bold font-heading mb-12 flex items-center gap-3">
               <DocumentTextIcon className="h-8 w-8 text-primary" /> Press Releases
            </h2>
            <div className="space-y-4">
               {[1, 2, 3].map((i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl flex items-center justify-between border border-surface hover:shadow-soft transition-all">
                     <div className="flex items-center gap-6">
                        <span className="text-sm font-bold text-primary font-heading uppercase">202{i} REQ</span>
                        <h4 className="font-bold">Official statement on the 202{i} academic expansion and research partnership...</h4>
                     </div>
                     <button className="bg-surface p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors">
                        <ArrowRightIcon className="h-5 w-5" />
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}

function NewsCard({ date, title, excerpt }: { date: string, title: string, excerpt: string }) {
  return (
    <div className="bg-white p-8 rounded-4xl border border-surface shadow-sm hover:shadow-md transition-all group">
       <span className="text-xs font-bold text-primary mb-4 block">{date}</span>
       <h3 className="text-xl font-bold mb-4 font-heading group-hover:text-primary transition-colors">{title}</h3>
       <p className="text-text-muted text-sm leading-relaxed mb-6">{excerpt}</p>
       <button className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
          Read Story <ArrowRightIcon className="h-4 w-4" />
       </button>
    </div>
  );
}

function EventItem({ title, time, venue, day }: { title: string, time: string, venue: string, day: string }) {
  return (
    <div className="flex bg-white rounded-3xl border border-surface shadow-sm overflow-hidden group hover:border-primary/20 transition-all">
       <div className="bg-primary px-8 py-6 flex flex-col items-center justify-center text-white min-w-[120px]">
          <span className="text-3xl font-bold font-heading">{day.split(' ')[1]}</span>
          <span className="text-xs uppercase font-bold tracking-widest">{day.split(' ')[0]}</span>
       </div>
       <div className="p-6 flex flex-col justify-center">
          <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h4>
          <div className="flex items-center gap-4 text-xs text-text-muted font-medium">
             <span className="flex items-center gap-1"><CalendarIcon className="h-3 w-3" /> {time}</span>
             <span className="flex items-center gap-1 font-bold">@ {venue}</span>
          </div>
       </div>
    </div>
  );
}
