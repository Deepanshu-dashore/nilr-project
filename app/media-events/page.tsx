import React from 'react';
import Link from 'next/link';
import { CalendarIcon, NewspaperIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function MediaHubPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 tracking-tight">Media & Events</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            Your gateway to the latest happenings and insights from NLRI. Choose a category below to explore more.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-20 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Events Card */}
          <Link href="/media-events/events" className="group">
            <div className="h-full bg-white rounded-[4rem] p-12 md:p-16 border border-slate-100 shadow-2xl hover:shadow-primary/20 hover:border-primary/20 transition-all duration-700 relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <CalendarIcon className="w-40 h-40 -mr-10 -mt-10 rotate-12" />
              </div>
              
              <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <CalendarIcon className="w-12 h-12 text-primary" />
              </div>
              
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">University Events</h2>
              <p className="text-slate-500 text-lg mb-10 font-medium leading-relaxed">
                Stay updated with upcoming workshops, seminars, and our vibrant campus life celebrations.
              </p>
              
              <div className="flex items-center gap-3 text-primary font-bold text-lg group-hover:gap-5 transition-all">
                Explore Events <ArrowRightIcon className="w-6 h-6" />
              </div>
            </div>
          </Link>

          {/* News Card */}
          <Link href="/media-events/news" className="group">
            <div className="h-full bg-slate-900 rounded-[4rem] p-12 md:p-16 shadow-2xl hover:shadow-slate-500/20 transition-all duration-700 relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <NewspaperIcon className="w-40 h-40 -mr-10 -mt-10 -rotate-12 text-white" />
              </div>

              <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <NewspaperIcon className="w-12 h-12 text-white" />
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6 font-heading">News & Updates</h2>
              <p className="text-slate-400 text-lg mb-10 font-medium leading-relaxed">
                Latest announcements, research breakthroughs, and institutional news from NLRI.
              </p>
              
              <div className="flex items-center gap-3 text-white font-bold text-lg group-hover:gap-5 transition-all">
                Read News <ArrowRightIcon className="w-6 h-6" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
