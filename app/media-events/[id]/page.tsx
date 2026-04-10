"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
  CalendarIcon, 
  MapPinIcon, 
  ClockIcon, 
  ArrowLeftIcon,
  TagIcon,
  ShareIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  url?: string;
}

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!params.id) return;
      setIsLoading(true);
      try {
        const response = await axios.get(`/api/event/${params.id}`);
        if (response.data.success) {
          setEvent(response.data.data);
        } else {
          setError(response.data.message || "Event not found");
        }
      } catch (err: any) {
        console.error("Failed to fetch event:", err);
        setError("Failed to load event details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          <p className="text-sm font-bold text-gray-400 lowercase animate-pulse">Loading event...</p>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 text-center">
        <div className="p-4 bg-red-50 rounded-full mb-6">
          <TagIcon className="w-12 h-12 text-red-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md">{error || "The event you are looking for does not exist or has been removed."}</p>
        <button 
          onClick={() => router.push("/media-events")}
          className="px-8 py-3 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all active:scale-95"
        >
          Back to Events
        </button>
      </div>
    );
  }

  const formattedDate = new Date(event.date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-50 to-white -z-10" />
      
      <div className="container-wide py-12 px-4">
        {/* Breadcrumbs & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <Link 
            href="/media-events"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors group"
          >
            <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-primary/10 transition-colors">
              <ArrowLeftIcon className="w-4 h-4" />
            </div>
            Back to All Events
          </Link>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm active:scale-95">
              <ShareIcon className="w-4 h-4" />
              Share Event
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 animate-in fade-in slide-in-from-left-4 duration-700">
            {/* Header Area */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <TagIcon className="w-3.5 h-3.5" />
                {event.type}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 leading-tight mb-8">
                {event.title}
              </h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm text-primary">
                    <CalendarIcon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Date</span>
                    <span className="text-sm font-bold text-gray-900">{formattedDate}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm text-primary">
                    <ClockIcon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Time</span>
                    <span className="text-sm font-bold text-gray-900">{event.time || "TBA"}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm text-primary">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Location</span>
                    <span className="text-sm font-bold text-gray-900 line-clamp-1">{event.location || "Online"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Banner */}
            {event.url && (
              <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl mb-12 border-8 border-white group">
                <Image 
                  src={event.url} 
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  priority
                />
              </div>
            )}

            {/* Description */}
            <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed">
              <div className="whitespace-pre-line text-lg selection:bg-primary/20">
                {event.description}
              </div>
            </div>
          </div>

          {/* Sidebar / Register */}
          <div className="lg:col-span-4 self-start sticky top-24 animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="p-8 bg-gray-900 rounded-[32px] text-white shadow-xl hover:shadow-2xl transition-shadow duration-500">
               <h3 className="text-xl font-bold mb-4">Event Details</h3>
               <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                 Stay informed about the latest from CVRUK–NLRI. This {event.type.toLowerCase()} is part of our commitment to excellence.
               </p>
               
               <div className="space-y-4 mb-8">
                 <div className="flex justify-between items-center py-3 border-b border-white/10 text-sm">
                   <span className="text-gray-400">Category</span>
                   <span className="font-bold">{event.type}</span>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-white/10 text-sm">
                   <span className="text-gray-400">Date</span>
                   <span className="font-bold">{formattedDate}</span>
                 </div>
                 <div className="flex justify-between items-center py-3 text-sm">
                   <span className="text-gray-400">Status</span>
                   <span className="font-bold text-green-400">Available</span>
                 </div>
               </div>

               <button className="w-full py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-100 transition-all active:scale-95 shadow-lg">
                 Add to Calendar
               </button>
               
               <p className="mt-6 text-[11px] text-gray-500 text-center italic">
                 Note: Event details are subject to change by the administration.
               </p>
            </div>

            {/* Need Help? */}
            <div className="mt-8 p-8 bg-primary/5 rounded-[32px] border border-primary/10 hover:bg-primary/10 transition-colors duration-500 group">
               <h4 className="font-bold text-gray-900 mb-2">Need assistance?</h4>
               <p className="text-sm text-gray-500 mb-4">Our support team is here to help with any queries regarding this event.</p>
               <Link href="/contact" className="text-sm font-bold text-primary group-hover:underline underline-offset-4 flex items-center gap-2">
                 Get in Touch <ArrowLeftIcon className="w-4 h-4 rotate-180" />
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
