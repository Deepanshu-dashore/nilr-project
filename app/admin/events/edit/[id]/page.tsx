"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import { 
  ArrowLeftIcon, 
  CheckIcon, 
  PhotoIcon, 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon,
  DocumentTextIcon,
  TagIcon
} from "@heroicons/react/24/outline";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { API_ENDPOINTS } from "@/src/config/api.config";

export default function EditEventPage() {
  const router = useRouter();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    type: "Event" as "Announcement" | "Event" | "News",
    highlight: false,
    status: "published" as "draft" | "published",
  });
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!params.id) return;
      try {
        const response = await axios.get(API_ENDPOINTS.EVENTS.GET_BY_ID(params.id as string));
        if (response.data.success) {
          const event = response.data.data;
          setFormData({
            title: event.title,
            description: event.description,
            date: event.date ? new Date(event.date).toISOString().split('T')[0] : "",
            time: event.time || "",
            location: event.location || "",
            type: event.type as any,
            highlight: event.highlight || false,
            status: event.status || "published",
          });
          if (event.url) {
            setPreviewUrl(event.url);
          }
        }
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvent();
  }, [params.id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as any;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("date", formData.date);
      data.append("time", formData.time);
      data.append("location", formData.location);
      data.append("type", formData.type);
      data.append("highlight", String(formData.highlight));
      data.append("status", formData.status);
      if (file) {
        data.append("file", file);
      }

      const response = await axios.put(API_ENDPOINTS.EVENTS.UPDATE(params.id as string), data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        router.push(`/admin/events/${params.id}`);
        router.refresh();
      } else {
        alert(response.data.message || "Failed to update event");
      }
    } catch (error: any) {
      console.error("Error updating event:", error);
      alert(error.response?.data?.message || "Failed to update event");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 space-y-8 pb-10 max-w-4xl mx-auto">
      <PageHeader
        title="Edit Event"
        backLink={`/admin/events/${params.id}`}
        breadcrumbs={[
          { label: "Admin", href: "/admin" },
          { label: "Events", href: "/admin/events" },
          { label: params.id as string, href: `/admin/events/${params.id}` },
          { label: "Edit" }
        ]}
      />

      <div className="bg-white rounded-2xl shadow-premium border border-border-light overflow-hidden">
        <form onSubmit={handleSubmit} className="divide-y divide-gray-100">
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="flex items-center gap-2 text-[13px] font-bold text-slate-700 mb-2">
                  <DocumentTextIcon className="w-4 h-4 text-primary" />
                  Event Title
                </label>
                <input
                  required
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-gray-900"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-[13px] font-bold text-slate-700 mb-2">
                  <DocumentTextIcon className="w-4 h-4 text-primary" />
                  Description
                </label>
                <textarea
                  required
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-gray-900 resize-none"
                />
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-[13px] font-bold text-slate-700 mb-2">
                  <CalendarIcon className="w-4 h-4 text-primary" />
                  Date
                </label>
                <input
                  required
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-gray-900"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-[13px] font-bold text-slate-700 mb-2">
                  <ClockIcon className="w-4 h-4 text-primary" />
                  Time
                </label>
                <input
                  type="text"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-gray-900"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-[13px] font-bold text-slate-700 mb-2">
                  <MapPinIcon className="w-4 h-4 text-primary" />
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-gray-900"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-[13px] font-bold text-slate-700 mb-2">
                  <TagIcon className="w-4 h-4 text-primary" />
                  Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-gray-900 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTkgOWwtNyA3LTctNyIvPjwvc3ZnPg==')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat"
                >
                  <option value="Event">Event</option>
                  <option value="Announcement">Announcement</option>
                  <option value="News">News</option>
                </select>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      name="highlight"
                      checked={formData.highlight}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`w-10 h-6 rounded-full transition-colors ${formData.highlight ? 'bg-primary' : 'bg-gray-200'}`}>
                      <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${formData.highlight ? 'translate-x-4' : 'translate-x-0'}`} />
                    </div>
                  </div>
                  <span className="text-[13px] font-bold text-slate-700">Set as Top Highlight</span>
                </label>

                <div className="flex-1">
                  <label className="text-[13px] font-bold text-slate-700 block mb-2">Status</label>
                  <div className="flex bg-gray-50 border border-gray-200 p-1 rounded-xl w-fit">
                    {["draft", "published"].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, status: s as any }))}
                        className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${formData.status === s ? 'bg-white text-primary shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                      >
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <label className="flex items-center gap-2 text-[13px] font-bold text-slate-700 mb-2">
              <PhotoIcon className="w-4 h-4 text-primary" />
              Event Image (Optional)
            </label>
            <div className="relative group border-2 border-dashed rounded-2xl p-8 border-gray-200 bg-gray-50/50 flex flex-col items-center justify-center">
              {previewUrl ? (
                <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-lg border-4 border-white">
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                </div>
              ) : (
                <PhotoIcon className="w-8 h-8 text-gray-400" />
              )}
              <input type="file" accept="image/*" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-gray-50/50 flex justify-end gap-4">
            <button type="button" onClick={() => router.push(`/admin/events/${params.id}`)} className="px-6 py-2.5 text-[13px] font-bold text-gray-500 hover:text-gray-700">Cancel</button>
            <button type="submit" disabled={isSaving} className="px-8 py-2.5 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 disabled:opacity-70 flex items-center gap-2">
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
