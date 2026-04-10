import React from 'react';
import { CalendarIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { EventService } from "@/app/lib/featuers/event/event.service";
import { EventSlider } from "@/src/components/media/EventSlider";
import { HighlightSlider } from "@/src/components/media/HighlightSlider";
import { GalleryGrid } from "@/src/components/media/GalleryGrid";
import { EventCalendarSection } from "@/src/components/media/EventCalendarSection";

export default async function EventsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const page = parseInt(params.page || '1');
  const { highlights, regularEvents, eventGallery } = await EventService.publicGetAllEvents({ page, limit: 12 });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
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
            University <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Events</span>
          </h1>
          <p className="max-w-3xl md:pr-0 pr-5 mx-auto text-sm md:text-lg text-gray-300 leading-relaxed text-justify md:text-center font-medium">
            Experience the vibrant life at NLRI through our workshops, seminars, 
            and cultural celebrations that bring our community together.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 w-full mt-10 pb-20 space-y-24 relative z-20">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Spotlight Events</h2>
          <p className="text-slate-500 mt-2">Spotlight events are the most important events that are happening at the moment.</p>
        </div>
        
        {/* Main Highlight Carousel */}
        {highlights && highlights.length > 0 && (
          <section className="relative -mt-15">
            <HighlightSlider highlights={highlights} />
          </section>
        )}

        {/* Regular Events Slider */}
        <section className="relative">
          {regularEvents.length > 0 ? (
            <EventSlider events={regularEvents} />
          ) : (
            <div className="py-20 text-center bg-white rounded-[2rem] border border-dashed border-slate-200">
               <CalendarIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />
               <p className="text-slate-500 font-medium text-sm">No regular events scheduled at the moment.</p>
            </div>
          )}
        </section>

        {/* INTERACTIVE Calendar & Schedule Section */}
        <EventCalendarSection />

        {/* Gallery Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
              <PhotoIcon className="w-8 h-8 text-primary" /> Event Gallery
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">Capturing memories from our past achievements and celebrations.</p>
          </div>
          
          <GalleryGrid images={eventGallery} />
        </section>
      </div>
    </div>
  );
}
