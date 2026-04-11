"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
  CalendarIcon, 
  MapPinIcon, 
  ClockIcon, 
  ArrowLeftIcon,
  TagIcon,
  ShareIcon,
  CheckIcon
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
  const [isShared, setIsShared] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: event?.title || "Event Details",
      text: event?.description?.substring(0, 100) + "...",
      url: window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setIsShared(true);
        setTimeout(() => setIsShared(false), 2000);
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        console.error("Error sharing:", err);
        // Fallback to copy if share fails
        try {
          await navigator.clipboard.writeText(window.location.href);
          setIsShared(true);
          setTimeout(() => setIsShared(false), 2000);
        } catch (copyErr) {
          console.error("Failed to copy link:", copyErr);
        }
      }
    }
  };

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
          onClick={() => router.back()}
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
      
      <div className="container-wide pt-8 py-12 px-4">
        {/* Breadcrumbs & Actions */}
        <div className="flex mb-10 items-center justify-between">
        {/* Header Area */}
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold! font-heading text-gray-800 leading-tight mb-3">
                {event.title}
              </h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-fit">
                <div className="flex items-center gap-2">
                  <div className="text-primary/40">
                    <CalendarIcon className="w-4 h-4" />
                  </div>                  
                    <span className="text-xs font-medium text-gray-500/50">{formattedDate}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="text-primary/40">
                    <ClockIcon className="w-4 h-4" />
                  </div>                  
                    <span className="text-xs font-medium text-gray-500/50">{event.time || "Not specified"}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="text-primary/40">
                    <MapPinIcon className="w-4 h-4" />
                  </div>                  
                    <span className="text-xs font-medium text-gray-500/50 line-clamp-1">{event.location || "Online"}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 animate-in fade-in slide-in-from-top-4 duration-700">
           <button 
          onClick={() => router.back()}
            className="inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors group"
          >
            <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-primary/10 transition-colors">
              <ArrowLeftIcon className="w-4 h-4" />
            </div>
            Back to All Events
        </button>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all cursor-pointer active:scale-95"
            >
              {isShared ? (
                <>
                  <CheckIcon className="w-4 h-4 text-green-600" />
                  <span className="text-green-600">Copied!</span>
                </>
              ) : (
                <>
                  <ShareIcon className="w-4 h-4" />
                  Share
                </>
              )}
            </button>
          </div>
        </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          
          <div className="lg:col-span-8 animate-in fade-in slide-in-from-left-4 duration-700">
            {/* Event Banner */}
            {event.url && (
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12 group">
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
              <div className="whitespace-pre-line text-md selection:bg-primary/20">
                {event.description}
              </div>
            </div>
          </div>

          {/* Sidebar / Register */}
          <div className="lg:col-span-4 self-start sticky top-24 animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="p-8 relative overflow-hidden bg-primary rounded-[32px] text-white shadow-xl hover:shadow-2xl transition-shadow duration-500">
               <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/HeaderBg.png')" }}
        />
        <div className="relative z-10">
               <h3 className="text-xl bg-white/10 py-1 pl-2 rounded-sm font-semibold! mb-4">Event Details</h3>
               <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                 Stay informed about the latest from CVRUK–NLRI. This {event.type.toLowerCase()} is part of our commitment to excellence.
               </p>
               
               <div className="space-y-4 mb-8 text-gray-300">
                 <div className="flex justify-between items-center py-3 border-b border-white/10 text-sm">
                   <span className="text-gray-100 font-semibold">Type</span>
                   <span className="">{event.type}</span>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-white/10 text-sm">
                   <span className="text-gray-100 font-semibold">Date</span>
                   <span className="">{formattedDate}</span>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-white/10 text-sm">
                   <span className="text-gray-100 font-semibold">Time</span>
                   <span className="">{event.time||"Not specified"}</span>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-white/10 text-sm">
                   <span className="text-gray-100 font-semibold">Venue</span>
                   <span className="">{event.location||"Not specified"}</span>
                 </div>
               </div>
               
               <p className="mt-6 text-[11px] text-gray-300 text-nowrap text-center italic">
                 Note: Event details are subject to change by the administration.
               </p>
               </div>
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
