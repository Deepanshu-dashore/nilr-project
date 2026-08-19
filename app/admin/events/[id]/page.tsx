"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
  CalendarIcon, 
  MapPinIcon, 
  ClockIcon, 
  PencilIcon,
  TagIcon,
  ArrowLeftIcon,
  PhotoIcon,
  ClipboardIcon,
  CheckIcon
} from "@heroicons/react/24/outline";
import { useParams, useRouter } from "next/navigation";
import { PageHeader } from "@/src/components/shared/PageHeader";
import Image from "next/image";
import { StatusBadge } from "@/src/components/shared/StatusBadge";
import { API_ENDPOINTS } from "@/src/config/api.config";

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

export default function AdminEventViewPage() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!params.id) return;
      try {
        const response = await axios.get(API_ENDPOINTS.EVENTS.GET_BY_ID(params.id as string));
        if (response.data.success) {
          setEvent(response.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch event:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvent();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-gray-900">Event not found</h2>
        <button 
          onClick={() => router.push("/admin/events")}
          className="mt-4 text-primary font-bold hover:underline"
        >
          Back to list
        </button>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 space-y-8 pb-10">
      <PageHeader
        title="Event Details"
        backLink="/admin/events"
        breadcrumbs={[
          { label: "Admin", href: "/admin" },
          { label: "Events", href: "/admin/events" },
          { label: "View" }
        ]}
        actionNode={
          <button
            onClick={() => router.push(`/admin/events/edit/${event._id}`)}
            className="inline-flex cursor-pointer items-center gap-2 px-6 py-2.5 bg-gray-900 text-white text-[13px] font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-xs"
          >
            <PencilIcon className="w-4 h-4" />
            Edit Event
          </button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Info & Image */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs">
            <div className="text-[11px] mb-2 text-gray-400 uppercase font-bold">Event Title</div>
            <div className="flex items-center gap-3 mb-6">
              <h1 className="text-xl font-semibold! capitalize text-gray-700">{event.title}</h1>
              <StatusBadge status={event.type} size="sm"/>
            </div>
            <div className="border-t border-gray-200 my-4 border-dashed"></div>
            <div className="text-[11px] mb-2 text-gray-400 uppercase font-bold">Description</div>
            <div className="prose prose-slate max-w-none text-gray-600 font-medium whitespace-pre-line leading-relaxed">
              {event.description}
            </div>
          </div>

          {event.url && (
            <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-xs">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                <Image 
                  src={event.url} 
                  alt={event.title} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Meta & Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs space-y-6">
            <div className="flex bg-gray-100 items-center gap-3">
              <div className="p-1.5 bg-primary/90 rounded-lg text-white/80 border border-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20"><path fill="currentColor" d="M8 6h9v2H8zm0-3h11v2H8zM1 3h6v6H1zm7 11h9v2H8zm0-3h11v2H8zm-7 0h6v6H1z"></path></svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-600 capitalize tracking-wider">Additional Event Details</h3>  
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl transition-all hover:bg-gray-100">
                <div className="p-2 text-white rounded-lg bg-primary/50 border border-gray-200">
                  <CalendarIcon className="w-6 h-6 font-bold" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase">Event Date</p>
                  <p className="font-bold text-base text-gray-800">{new Date(event.date).toDateString()}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl transition-all hover:bg-gray-100">
                <div className="p-2 text-white rounded-lg bg-primary/50 border border-gray-200">
                  <ClockIcon className="w-5 h-5 font-bold" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase">Start Time</p>
                  <p className="font-bold text-gray-900">{event.time || "Not specified"}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl transition-all hover:bg-gray-100">
                <div className="p-2 text-white rounded-lg bg-primary/50 border border-gray-200">
                  <MapPinIcon className="w-5 h-5 font-bold" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase">Location</p>
                  <p className="font-bold text-gray-900 line-clamp-1">{event.location || "Online"}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
             <h4 className="text-gray-900 font-bold mb-2">Public Link</h4>
             <p className="text-xs text-gray-500 mb-4 italic">Share the link below with participants.</p>
             <div className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-xl mb-4 overflow-hidden">
                <span className="text-[11px] text-gray-400 truncate grow">/media-events/{event._id}</span>
                <div className="flex items-center gap-1 shrink-0">
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(`${window.location.origin}/media-events/${event._id}`);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="p-1.5 hover:bg-primary/10 text-primary transition-colors cursor-pointer rounded-lg"
                    title="Copy Link"
                  >
                    {copied ? <CheckIcon className="w-4 h-4 text-green-600" /> : <ClipboardIcon className="w-4 h-4" />}
                  </button>
                  <button 
                    onClick={() => window.open(`/media-events/${event._id}`, '_blank')}
                    className="p-1.5 hover:bg-primary/10 text-primary transition-colors cursor-pointer rounded-lg"
                    title="Open in new tab"
                  >
                    <ArrowLeftIcon className="w-4 h-4 rotate-180" />
                  </button>
                </div>
             </div>
             {copied && <p className="text-[10px] text-green-600 font-bold animate-in fade-in slide-in-from-top-1">Successfully copied!</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
