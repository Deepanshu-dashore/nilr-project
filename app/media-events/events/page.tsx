import React from 'react';
import { CalendarIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { EventService } from "@/app/lib/featuers/event/event.service";
import { EventSlider } from "@/src/components/media/EventSlider";
import { HighlightSlider } from "@/src/components/media/HighlightSlider";
import { GalleryGrid } from "@/src/components/media/GalleryGrid";
import { EventCalendarSection } from "@/src/components/media/EventCalendarSection";

import Hero from "@/src/components/shared/hero";

export default async function EventsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const page = parseInt(params.page || '1');
  const { highlights, regularEvents, eventGallery } = await EventService.publicGetAllEvents({ page, limit: 12 });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <Hero
        tag="Campus Life & Gatherings"
        tagIcon={CalendarIcon}
        title="University Events"
        subtitle="Experience the vibrant life at NIRM through our workshops, seminars, and cultural celebrations that bring our community together."
      />

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
              <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-primary bg-gray-200 p-1 rounded-md" viewBox="0 0 24 24"><path fill="currentColor" d="M22 10H2v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3zM7 8a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1m10 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1" opacity={0.5}></path><path fill="currentColor" d="M19 4h-1v3a1 1 0 0 1-2 0V4H8v3a1 1 0 0 1-2 0V4H5a3 3 0 0 0-3 3v3h20V7a3 3 0 0 0-3-3"></path></svg>
               Event Gallery
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">Capturing memories from our past achievements and celebrations.</p>
          </div>
          
          <GalleryGrid images={eventGallery} />
        </section>
      </div>
    </div>
  );
}
