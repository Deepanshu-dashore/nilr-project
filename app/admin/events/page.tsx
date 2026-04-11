"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { PlusIcon, PhotoIcon, CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { DataTable, ColumnDef } from "@/src/components/shared/DataTable";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { StatusBadge } from "@/src/components/shared/StatusBadge";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: "Announcement" | "Event" | "News";
  url?: string;
  status: "draft" | "published";
  highlight: boolean;
}

export default function EventsManagementPage() {
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);
  const [activeTab, setActiveTab] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [counts, setCounts] = useState({ all: 0, event: 0, announcement: 0, news: 0 });
  const [isLoading, setIsLoading] = useState(true);

  const fetchEvents = async (type = activeTab, status = statusFilter) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/event?type=${type}&status=${status}`);
      if (response.data.success) {
        setEvents(response.data.data.items);
        setCounts(response.data.data.counts);
      }
    } catch (error) {
      console.error("Failed to fetch events:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents(activeTab, statusFilter);
  }, [activeTab, statusFilter]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return;
    try {
      const response = await axios.delete(`/api/event/${id}`);
      if (response.data.success) {
        fetchEvents(activeTab);
      }
    } catch (error) {
      console.error("Failed to delete event:", error);
      alert("Failed to delete event");
    }
  };

  const columns: ColumnDef<Event>[] = [
    {
      key: "title",
      label: "Event Info",
      type: "user",
      sortable: true,
      getAvatar: (row) => {
        if (row.url) {
          return (
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
              <Image 
                src={row.url} 
                alt={row.title || "Event Image"} 
                fill 
                className="object-cover"
              />
            </div>
          );
        }
        return <CalendarIcon className="w-5 h-5 text-gray-400" />;
      },
      getTitle: (row) => row.title,
      getSubtitle: (row) => row.location || "Online / No Location",
    },
    {
      key: "type",
      label: "Category",
      type: "status",
      sortable: true,
      getStatus: (row) => row.type,
    },
    {
      key: "date",
      label: "Date & Time",
      type: "custom",
      sortable: true,
      render: (row) => (
        <div className="flex flex-col">
          <span className="font-medium text-gray-800">
            {new Date(row.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
          </span>
          <span className="text-[12px] text-gray-500 font-medium lowercase">
            {row.time || "No time set"}
          </span>
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      type: "status",
      sortable: true,
      getStatus: (row) => row.status,
    },
    {
      key: "highlight",
      label: "Highlight",
      type: "custom",
      render: (row) => (
        row.highlight ? (
          <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[10px] font-bold rounded-full border border-amber-100 uppercase tracking-tighter">
            Featured
          </span>
        ) : <span className="text-gray-300">-</span>
      ),
    },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 space-y-8 pb-10">
      <PageHeader
        title="Events & Announcements"
        breadcrumbs={[
          { label: "Admin", href: "/admin" },
          { label: "Events", href: "/admin/events" },
          { label: "List" }
        ]}
        actionNode={
          <Link
            href="/admin/events/add"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white text-[13px] font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
          >
            <PlusIcon className="w-5 h-5 stroke-[3px]" />
            Add New Event
          </Link>
        }
      />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-2">Filter By Status:</span>
          <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
            {["all", "draft", "published"].map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${statusFilter === s ? 'bg-white text-primary shadow-sm ring-1 ring-black/5' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="text-[11px] font-bold text-gray-400 italic pr-2">
          Showing {events.length} results
        </div>
      </div>

      <DataTable
        data={events}
        columns={columns}
        loading={isLoading}
        tabs={[
          { label: "All Items", value: "all", count: counts.all },
          { label: "Events", value: "event", count: counts.event, color: "info" },
          { label: "Announcements", value: "announcement", count: counts.announcement, color: "warning" },
          { label: "News", value: "news", count: counts.news, color: "success" },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchPlaceholder="Search events, news, or announcements..."
        rowKey={(row) => row._id}
        onDelete={(row) => handleDelete(row._id)}
        onView={(row) => router.push(`/admin/events/${row._id}`)}
        onEdit={(row) => router.push(`/admin/events/edit/${row._id}`)}
      />
    </div>
  );
}
