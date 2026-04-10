"use client";

import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PhotoIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

export function EventSlider({ events }: { events: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % Math.max(1, events.length - 2));
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + Math.max(1, events.length - 2)) % Math.max(1, events.length - 2));
  };

  if (events.length === 0) return null;

  return (
    <div className="relative group">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Featured Events</h2>
          <p className="text-slate-500 mt-2">Don't miss out on these upcoming highlights</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={prev}
            className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm disabled:opacity-50"
          >
            <ChevronLeftIcon className="w-5 h-5 text-slate-600" />
          </button>
          <button 
            onClick={next}
            className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm disabled:opacity-50"
          >
            <ChevronRightIcon className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out -mx-4"
          style={{ transform: `translateX(-${activeIndex * (100 / 3)}%)` }}
        >
          {events.map((event) => (
            <div key={event._id} className="w-full md:w-1/3 flex-shrink-0 px-4">
               <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EventCard({ event }: { event: any }) {
  return (
    <div className="bg-white rounded-md overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-500 group h-full flex flex-col">
      <div className="aspect-16/10 relative bg-slate-100 overflow-hidden">
        {event.url ? (
          <img src={event.url} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-300">
             <PhotoIcon className="w-12 h-12" />
          </div>
        )}
        <div className=' inset-0 w-full h-full absolute bg-linear-to-t from-black/60 to-black/0 z-20'></div>
        <div className="absolute z-30 bottom-4 left-4 backdrop-blur-xs px-4 py-2 rounded-2xl shadow-sm text-left min-w-[60px]">
          <span className="block text-4xl font-semiold text-white font-heading leading-none">
            {new Date(event.date).getDate()}
          </span>
          <span className="text-xs font-semibold! text-white capitalize tracking-widest">
            {new Date(event.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
          </span>
        </div>
      </div>
      <div className="p-8 flex-1 flex flex-col pt-6">
        <h3 className="text-xl font-semibold! text-slate-600 mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-tight">{event.title}</h3>
        <p className="text-slate-500 text-sm mb-5 line-clamp-3 leading-relaxed flex-1">{event.description}</p>
        
        <div className="flex flex-col gap-6">
          
          <div className="flex items-center justify-between">
            {/* <Link href={`/media-events/${event._id}`} className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-800 transition-all">
              Join Event
            </Link> */}
            <Link href={`/media-events/${event._id}`} className="text-slate-400 flex items-center gap-2 text-xs font-bold hover:text-primary transition-colors">
              Read More <span className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/10 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 w-4 h-4" viewBox="-5 -4.5 24 24"><path fill="currentColor" d="m6 4.071l-3.95 3.95A1 1 0 0 1 .636 6.607L6.293.95a.997.997 0 0 1 1.414 0l5.657 5.657A1 1 0 0 1 11.95 8.02L8 4.07v9.586a1 1 0 1 1-2 0z"></path></svg>
            </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
