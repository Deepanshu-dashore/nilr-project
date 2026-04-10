"use client";

import React, { useState, useEffect } from 'react';
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  highlight: boolean;
}

export function EventCalendarSection() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      try {
        const res = await fetch(`/api/event/monthly?year=${year}&month=${month}`);
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events", error);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, [year, month]);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  // Days with events for highlighting
  const eventDays = events.map(e => new Date(e.date).getDate());

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* LEFT: Calendar */}
      <div className="lg:col-span-4">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm sticky top-24">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary bg-gray-200 p-1 rounded-md" viewBox="0 0 24 24"><path fill="currentColor" d="M22 10H2v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3zM7 8a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1m10 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1" opacity={0.5}></path><path fill="currentColor" d="M19 4h-1v3a1 1 0 0 1-2 0V4H8v3a1 1 0 0 1-2 0V4H5a3 3 0 0 0-3 3v3h20V7a3 3 0 0 0-3-3"></path></svg>
              Event Calendar
            </h3>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-bold text-slate-900 uppercase tracking-widest text-sm">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h4>
              <div className="flex gap-2">
                <button 
                  onClick={prevMonth}
                  className="p-2 rounded-lg border border-gray-200/70 hover:bg-primary hover:text-white bg-white hover:shadow-sm transition-all text-slate-600"
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextMonth}
                  className="p-2 rounded-lg border border-gray-200/70 hover:bg-primary hover:text-white bg-white hover:shadow-sm transition-all text-slate-600"
                >
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                <div key={day} className="text-center text-[10px] font-black text-slate-400 py-2 uppercase tracking-tighter">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} className="p-2" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const hasEvent = eventDays.includes(day);
                return (
                  <div 
                    key={day} 
                    className={`relative aspect-square flex items-center justify-center text-xs font-bold rounded-xl transition-all ${
                      hasEvent 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20 cursor-pointer scale-110' 
                        : 'text-slate-600 hover:bg-white'
                    }`}
                  >
                    {day}
                    {hasEvent && (
                      <span className="absolute animate-pulse -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-accent border-2 border-white rounded-full" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-8 bg-accent/5 p-4 rounded-2xl border border-accent/10">
            <p className="text-xs text-accent font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              {events.length} Events scheduled in {currentDate.toLocaleDateString('en-US', { month: 'long' })}
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT: Schedule List */}
      <div className="lg:col-span-8 space-y-8">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Events Schedule</h3>
          <div className="h-[2px] flex-grow mx-8 bg-slate-100 rounded-full" />
        </div>

        <div className="space-y-4">
          {loading ? (
             Array.from({length: 3}).map((_, i) => (
               <div key={i} className="h-32 bg-slate-100 rounded-3xl animate-pulse" />
             ))
          ) : events.length > 0 ? (
            events.map((event) => (
              <EventItem 
                key={event._id}
                title={event.title}
                description={event.description}
                time={event.time}
                venue={event.location}
                date={event.date}
              />
            ))
          ) : (
            <div className="py-20 text-center bg-white rounded-[3rem] border border-dashed border-slate-200">
              <CalendarIcon className="w-16 h-16 text-slate-200 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-slate-400">No Events Found</h3>
              <p className="text-slate-400 mt-2">There are no events scheduled for this month yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function EventItem({ title, time, venue, date, description }: { title: string, time: string, venue: string, date: string, description: string }) {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.toLocaleDateString('en-US', { month: 'short',year: 'numeric' });

  return (
    <div className="flex bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden group hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all">
      <div className="bg-primary px-10 flex flex-col items-center justify-center text-white min-w-[140px] transform group-hover:scale-105 transition-transform">
        <span className="block text-4xl mb-2 font-semibold! text-white font-heading leading-none">
            {day}
          </span>
          <span className="text-xs text-nowrap font-semibold! text-white capitalize tracking-widest">
            {month}
          </span>
           </div>
      <div className="p-8 py-5 flex flex-col justify-center flex-grow">
        <h4 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors tracking-tight">
          {title}
        </h4>
        <p className="text-sm font-semibold text-slate-500 transition-colors tracking-tight">
          {description}
        </p>
      </div>
    </div>
  );
}
