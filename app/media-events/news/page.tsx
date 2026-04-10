import React from 'react';
import { NewspaperIcon, BellIcon, ArrowRightIcon, PhotoIcon, MegaphoneIcon } from "@heroicons/react/24/outline";
import { EventService } from "@/app/lib/featuers/event/event.service";
import Link from 'next/link';
import { HighlightSlider } from "@/src/components/media/HighlightSlider";

export default async function NewsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const page = parseInt(params.page || '1');
  const { news, topHighlights, announcement } = await EventService.publicGetAllNews({ page, limit: 10 });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-text-dark relative text-white py-14 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/HeaderBg.png')" }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-32" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
            <NewspaperIcon className="w-4 h-4 md:w-5 md:h-5 text-indigo-400 inline-block" />
            <span className="text-xs md:text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-widest">
              Press & Updates
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8 max-w-4xl mx-auto tracking-tight">
            News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Announcements</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-xl font-medium leading-relaxed">
            Stay informed with the latest breakthroughs, policy changes, and institutional milestones shaping the future of rural leadership.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 w-full mt-10 pb-20 space-y-24 relative z-20">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Media Spotlights</h2>
          <p className="text-slate-500 mt-2">The most impactful stories and breakthroughs from our institutional desk.</p>
        </div>

        {/* Top Highlight Section (Slider) */}
        {topHighlights && topHighlights.length > 0 && (
          <section className="relative -mt-15">
            <HighlightSlider highlights={topHighlights} />
          </section>
        )}

        {/* Latest News Slider (Section 2) */}
        <section>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Latest News</h3>
              <p className="text-slate-500">In-depth coverage of campus breakthroughs</p>
            </div>
            {/* <div className="flex gap-4">
               <button className="hover:text-primary transition-colors font-bold text-sm">View All News</button>
            </div> */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {news.slice(1, 4).map((item: any) => (
              <NewsCard key={item._id} item={item} />
            ))}
          </div>
        </section>

        {/* Announcements & Bulletins (Section 3) */}
        <section className="bg-slate-50 rounded-[4rem] p-12 md:p-20 border border-slate-200/60">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                 <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <BellIcon className="w-8 h-8 text-primary" /> Bulletins
                 </h3>
                 <p className="text-slate-500 leading-relaxed mb-10">Essential announcements, deadline reminders, and campus notices for the student body and faculty.</p>
                 <div className="space-y-4">
                    <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm font-bold text-sm text-slate-800 hover:text-primary transition-colors cursor-pointer">
                       Academic Calendar 2026-27 (PDF)
                    </div>
                    <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm font-bold text-sm text-slate-800 hover:text-primary transition-colors cursor-pointer">
                       Scholarship Applications Open
                    </div>
                 </div>
              </div>
              <div className="lg:col-span-8 divide-y divide-slate-200">
                 {announcement.map((ann: any) => (
                    <div key={ann._id} className="py-8 first:pt-0 last:pb-0 group">
                       <span className="text-xs font-bold text-slate-400 mb-2 block">{new Date(ann.date).toLocaleDateString()}</span>
                       <h4 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-4">{ann.title}</h4>
                       <p className="text-slate-500 text-sm line-clamp-2 mb-4 leading-relaxed">{ann.description}</p>
                       <Link href={`/media-events/${ann._id}`} className="text-primary font-bold text-sm flex items-center gap-2">
                          Read Full Notice <ArrowRightIcon className="w-4 h-4" />
                       </Link>
                    </div>
                 ))}
                 {announcement.length === 0 && (
                    <div className="py-10 text-slate-400 italic">No announcements at this time.</div>
                 )}
              </div>
           </div>
        </section>

      </div>
    </div>
  );
}

function NewsCard({ item }: { item: any }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[16/10] bg-slate-100 rounded-3xl overflow-hidden mb-8 relative shadow-sm">
        {item.url ? (
          <img src={item.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <PhotoIcon className="w-12 h-12 text-slate-300" />
          </div>
        )}
        <div className="absolute top-6 left-6">
           <span className="bg-primary px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest">
              News
           </span>
        </div>
      </div>
      <span className="text-xs font-bold text-slate-400 mb-4 block uppercase tracking-widest">{new Date(item.date).toLocaleDateString()}</span>
      <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-2">
        {item.title}
      </h4>
      <p className="text-slate-500 mb-6 line-clamp-2 text-sm leading-relaxed">{item.description}</p>
      <Link href={`/media-events/${item._id}`} className="font-bold text-slate-900 border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
        Read More
      </Link>
    </div>
  );
}
