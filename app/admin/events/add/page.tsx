"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
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

export default function AddEventPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: new Date().toISOString().split('T')[0],
    time: "",
    location: "",
    type: "Event" as "Announcement" | "Event" | "News",
    highlight: false,
    status: "published" as "draft" | "published",
  });
  const [file, setFile] = useState<File | null>(null);

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
    } else {
      setPreviewUrl(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

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

      // NOTE: We'll need to update the controller to handle FormData
      // Or if we must use the current controller, we'd have to convert to base64, 
      // but the controller expects a File-like object with .arrayBuffer()
      
      const response = await axios.post(API_ENDPOINTS.EVENTS.CREATE, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        router.push("/admin/events");
        router.refresh();
      } else {
        alert(response.data.message || "Failed to create event");
      }
    } catch (error: any) {
      console.error("Error creating event:", error);
      alert(error.response?.data?.message || "Failed to create event");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 space-y-8 pb-10 max-w-4xl mx-auto">
      <PageHeader
        title="Add New Event"
        backLink="/admin/events"
        breadcrumbs={[
          { label: "Admin", href: "/admin" },
          { label: "Events", href: "/admin/events" },
          { label: "Add" }
        ]}
      />

      <div className="bg-white rounded-2xl shadow-premium border border-border-light overflow-hidden">
        <form onSubmit={handleSubmit} className="divide-y divide-gray-100">
          {/* Section 1: Basic Info */}
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
                  placeholder="Enter a catchy title for your event..."
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
                  placeholder="Provide some details about what this event is about..."
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-gray-900 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Logistics */}
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
                  placeholder="e.g. 10:00 AM - 2:00 PM"
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
                  placeholder="e.g. Seminar Hall A or Online"
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

          {/* Section 3: Media */}
          <div className="p-6 sm:p-8 space-y-6">
            <label className="flex items-center gap-2 text-[13px] font-bold text-slate-700 mb-2">
              <PhotoIcon className="w-4 h-4 text-primary" />
              Event Image (Optional)
            </label>
            
            <div className={`relative group border-2 border-dashed rounded-2xl transition-all flex flex-col items-center justify-center p-8 ${previewUrl ? 'border-primary/50 bg-primary/5' : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'}`}>
              {previewUrl ? (
                <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                  <button 
                    type="button"
                    onClick={() => { setFile(null); setPreviewUrl(null); }}
                    className="absolute top-2 right-2 p-1.5 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ArrowLeftIcon className="w-4 h-4 rotate-45" />
                  </button>
                </div>
              ) : (
                <>
                  <div className="p-4 bg-white rounded-2xl shadow-sm mb-4 group-hover:scale-110 transition-transform">
                    <PhotoIcon className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-sm font-bold text-gray-600 mb-1">Click to upload or drag & drop</p>
                  <p className="text-xs text-gray-400 italic">PNG, JPG, WEBP (max 5MB)</p>
                </>
              )}
              <input 
                type="file" 
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-6 sm:p-8 bg-gray-50/50 flex justify-end gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2.5 text-[13px] font-bold text-gray-500 hover:text-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-8 py-2.5 bg-gray-900 text-white text-[13px] font-bold rounded-xl hover:bg-gray-800 transition-all shadow-sm active:scale-95 disabled:opacity-70"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <CheckIcon className="w-4 h-4 stroke-[3px]" />
              )}
              {isLoading ? "Saving..." : "Create Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
