import React from 'react';
import Link from 'next/link';
import { CalendarIcon, NewspaperIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function MediaHubPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Premium Hero Section */}
      <section className="bg-text-dark relative text-white py-14 md:py-24 overflow-hidden">
             <div 
               className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
               style={{ backgroundImage: "url('/HeaderBg.png')" }}
             />
             <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-32" />
             
             <div className="container-wide pl-5 md:pl-0 text-center max-w-4xl relative z-10">
               <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 backdrop-blur-sm">
                 <CalendarIcon className="w-4 h-4 md:w-5 md:h-5 text-indigo-400 inline-block" />
                 <span className="text-xs md:text-sm font-medium bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-wider">
                   Campus Life & Gatherings
                 </span>
               </div>
               <h1 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                 University <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Media & Events</span>
               </h1>
               <p className="max-w-3xl md:pr-0 pr-5 mx-auto text-sm md:text-lg text-gray-300 leading-relaxed text-justify md:text-center font-medium">
                 Experience the vibrant life at NLRI through our workshops, seminars, 
                 and cultural celebrations that bring our community together.
               </p>
             </div>
           </section>

      {/* Category Selection */}
      <div className="max-w-7xl mx-auto px-4 py-22">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Events Card */}
          <Link href="/media-events/events" className="group">
            <div className="h-full bg-white rounded-xl p-12 md:p-16 border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] hover:shadow-primary/10 hover:border-primary/20 transition-all duration-1000 relative overflow-hidden flex flex-col">
              {/* Floating Accent (The 'ell' element) */}
              <div className="absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-5 transition-all duration-1000 group-hover:scale-110">
                <CalendarIcon className="w-64 h-64 -mr-20 -mt-20 rotate-12" />
              </div>
              
              <div className="w-16 h-16 bg-primary rounded-md flex items-center justify-center mb-12 text-white transition-all duration-500 shadow-sm border border-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 group-hover:scale-110 transition-transform duration-500"  viewBox="0 0 36 36"><path fill="currentColor" d="M32.25 6h-4v3a2.2 2.2 0 1 1-4.4 0V6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6M10 26H8v-2h2Zm0-5H8v-2h2Zm0-5H8v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Z" className="clr-i-solid clr-i-solid-path-1"/><path fill="currentColor" d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" className="clr-i-solid clr-i-solid-path-2"/><path fill="currentColor" d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" className="clr-i-solid clr-i-solid-path-3"/><path fill="none" d="M0 0h36v36H0z"/></svg>
              </div>
              
              <h2 className="text-4xl md:text-4xl font-bold text-slate-900 mb-6 font-heading tracking-tight leading-tight">University Events</h2>
              <p className="text-slate-500 text-lg mb-10 font-medium leading-relaxed">
                Stay informed about the latest happenings, academic seminars, and cultural festivals. Our events are designed to foster learning, networking, and community growth.
              </p>
              
              <div className="mt-auto flex items-center gap-4 text-primary font-black text-sm uppercase group-hover:gap-6 transition-all duration-500">
                Explore Event Calendar <ArrowRightIcon className="w-5 h-5" />
              </div>
            </div>
          </Link>

          {/* News Card */}
          <Link href="/media-events/news" className="group">
            <div className="h-full bg-white rounded-xl p-12 md:p-16 border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] hover:shadow-primary/10 hover:border-primary/20 transition-all duration-1000 relative overflow-hidden flex flex-col">
              {/* Floating Accent */}
              <div className="absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-5 transition-all duration-1000 group-hover:scale-110">
                <NewspaperIcon className="w-64 h-64 -mr-20 -mt-20 -rotate-12" />
              </div>

              <div className="w-16 h-16 bg-primary rounded-md flex items-center justify-center mb-12 text-white transition-all duration-500 shadow-sm border border-primary/10 font-black">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M19 21.5H6A3.5 3.5 0 0 1 2.5 18V4.943c0-1.067 1.056-1.744 1.985-1.422q.2.069.387.202l.175.125a2.51 2.51 0 0 0 2.912-.005a3.52 3.52 0 0 1 4.082 0a2.51 2.51 0 0 0 2.912.005l.175-.125c.993-.71 2.372 0 2.372 1.22V12.5H21a.75.75 0 0 1 .75.75v5.5A2.75 2.75 0 0 1 19 21.5M17.75 14v4.75a1.25 1.25 0 0 0 2.5 0V14zM13.5 9.75a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75m-1 3a.75.75 0 0 0-.75-.75h-5a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 .75-.75m.25 2.25a.75.75 0 1 1 0 1.5h-6a.75.75 0 0 1 0-1.5z" clipRule="evenodd"></path></svg>
              </div>
              
              <h2 className="text-4xl md:text-4xl font-bold text-slate-900 mb-6 font-heading tracking-tight leading-tight">News & Announcements</h2>
              <p className="text-slate-500 text-lg mb-10 font-medium leading-relaxed">
                Catch up on the latest breakthroughs, institutional milestones, and campus stories. From research achievements to administrative updates, stay connected with our legacy.
              </p>
              
              <div className="mt-auto flex items-center gap-4 text-primary font-black text-sm uppercase group-hover:gap-6 transition-all duration-500">
                Read Latest Publications <ArrowRightIcon className="w-5 h-5" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
