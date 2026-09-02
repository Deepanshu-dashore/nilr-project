"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { API_ENDPOINTS } from "@/src/config/api.config";
import {
  CalendarIcon,
  CalendarDaysIcon,
  ClockIcon,
  PlusIcon,
  TrashIcon,
  PencilSquareIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  IdentificationIcon,
  UserPlusIcon,
  AcademicCapIcon,
  SparklesIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  EyeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface ImportantDate {
  _id?: string;
  event: string;
  date: string;
  icon?: string;
}

const AVAILABLE_ICONS = [
  { name: "CalendarDaysIcon", label: "Calendar", Icon: CalendarDaysIcon },
  { name: "ClockIcon", label: "Clock", Icon: ClockIcon },
  { name: "IdentificationIcon", label: "ID / Test", Icon: IdentificationIcon },
  { name: "UserPlusIcon", label: "Admission", Icon: UserPlusIcon },
  { name: "AcademicCapIcon", label: "Graduation", Icon: AcademicCapIcon },
  { name: "SparklesIcon", label: "Event", Icon: SparklesIcon },
];

const PRESET_TEMPLATES = [
  { event: "Application Form Release", date: "15 May 2026", icon: "ClockIcon" },
  { event: "Last Date to Apply", date: "31 July 2026", icon: "CalendarDaysIcon" },
  { event: "Entrance Exam / Interview", date: "10 August 2026", icon: "IdentificationIcon" },
  { event: "Merit List Declaration", date: "20 August 2026", icon: "SparklesIcon" },
  { event: "Course Commencement", date: "01 September 2026", icon: "UserPlusIcon" },
];

export default function ImportantDatesAdminPage() {
  const [dates, setDates] = useState<ImportantDate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [modalForm, setModalForm] = useState<ImportantDate>({
    event: "",
    date: "",
    icon: "CalendarDaysIcon",
  });

  // Fetch from SiteInfo API
  const fetchDates = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(API_ENDPOINTS.SITE_INFO.GET);
      if (res.data?.success && res.data?.data) {
        setDates(res.data.data.importantDates || []);
      }
    } catch (err) {
      console.error("Failed to fetch important dates:", err);
      setMessage({ type: "error", text: "Failed to load important dates." });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDates();
  }, []);

  // Save updated dates to API
  const saveDatesToApi = async (updatedDates: ImportantDate[]) => {
    setIsSaving(true);
    setMessage(null);
    try {
      const res = await axios.put(API_ENDPOINTS.SITE_INFO.UPDATE, {
        importantDates: updatedDates,
      });
      if (res.data?.success) {
        setDates(res.data.data.importantDates || updatedDates);
        setMessage({ type: "success", text: "Important dates saved and updated across the site!" });
      } else {
        setMessage({ type: "error", text: "Failed to save changes." });
      }
    } catch (err) {
      console.error("Error saving dates:", err);
      setMessage({ type: "error", text: "An error occurred while saving." });
    } finally {
      setIsSaving(false);
    }
  };

  // Open Modal for Add
  const handleOpenAdd = () => {
    setEditingIndex(null);
    setModalForm({
      event: "",
      date: "",
      icon: "CalendarDaysIcon",
    });
    setIsModalOpen(true);
  };

  // Open Modal for Edit
  const handleOpenEdit = (index: number) => {
    setEditingIndex(index);
    setModalForm({ ...dates[index] });
    setIsModalOpen(true);
  };

  // Save from Modal
  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalForm.event.trim() || !modalForm.date.trim()) {
      alert("Please fill in both event name and date.");
      return;
    }

    let updated: ImportantDate[];
    if (editingIndex !== null) {
      updated = [...dates];
      updated[editingIndex] = modalForm;
    } else {
      updated = [...dates, modalForm];
    }

    setDates(updated);
    setIsModalOpen(false);
    saveDatesToApi(updated);
  };

  // Delete Date
  const handleDelete = (index: number) => {
    if (!confirm(`Are you sure you want to delete "${dates[index].event}"?`)) return;
    const updated = dates.filter((_, i) => i !== index);
    setDates(updated);
    saveDatesToApi(updated);
  };

  // Move Up
  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const updated = [...dates];
    const temp = updated[index - 1];
    updated[index - 1] = updated[index];
    updated[index] = temp;
    setDates(updated);
    saveDatesToApi(updated);
  };

  // Move Down
  const handleMoveDown = (index: number) => {
    if (index === dates.length - 1) return;
    const updated = [...dates];
    const temp = updated[index + 1];
    updated[index + 1] = updated[index];
    updated[index] = temp;
    setDates(updated);
    saveDatesToApi(updated);
  };

  // Apply Preset Template
  const handleApplyPreset = (preset: typeof PRESET_TEMPLATES[0]) => {
    const updated = [...dates, preset];
    setDates(updated);
    saveDatesToApi(updated);
  };

  const getIconComponent = (iconName?: string) => {
    const found = AVAILABLE_ICONS.find((i) => i.name === iconName);
    return found ? found.Icon : CalendarDaysIcon;
  };

  return (
    <div className="space-y-6 pb-12 max-w-7xl mx-auto">
      {/* Page Header */}
      <PageHeader
        title="Important Dates Management"
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Admissions", href: "/admin/admission" },
          { label: "Important Dates" },
        ]}
        actionNode={
          <div className="flex items-center gap-2.5">
            <button
              onClick={fetchDates}
              disabled={isLoading || isSaving}
              className="px-3.5 py-1.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-md hover:bg-slate-50 flex items-center gap-1.5 transition-all shadow-xs cursor-pointer text-xs"
            >
              <ArrowPathIcon className={`h-3.5 w-3.5 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <button
              onClick={handleOpenAdd}
              className="px-4 py-1.5 bg-slate-900 text-white font-semibold rounded-md hover:bg-slate-800 flex items-center gap-1.5 transition-all shadow-xs cursor-pointer text-xs"
            >
              <PlusIcon className="h-3.5 w-3.5 stroke-[2.5]" />
              Add Important Date
            </button>
          </div>
        }
      />

      {/* Feedback Banner */}
      {message && (
        <div
          className={`p-3.5 rounded-lg flex items-center justify-between gap-3 text-xs font-semibold animate-fade-in ${
            message.type === "success"
              ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
              : "bg-rose-50 text-rose-800 border border-rose-200"
          }`}
        >
          <div className="flex items-center gap-2">
            {message.type === "success" ? (
              <CheckCircleIcon className="h-4 w-4 text-emerald-600 shrink-0" />
            ) : (
              <ExclamationCircleIcon className="h-4 w-4 text-rose-600 shrink-0" />
            )}
            <span>{message.text}</span>
          </div>
          <button
            onClick={() => setMessage(null)}
            className="text-slate-400 hover:text-slate-600 p-1"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Live Site Component Preview (Exact Admissions Page Card Styling) */}
      <div className="bg-white rounded-lg border border-slate-200/80 p-5 md:p-6 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-slate-100 text-slate-700 flex items-center justify-center">
              <EyeIcon className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Live Site Component Preview
              </h3>
              <p className="text-[11px] text-slate-400">
                Matches the exact layout rendered in the public Admissions section.
              </p>
            </div>
          </div>
          <span className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-semibold border border-slate-200">
            Total Milestones: <strong>{dates.length}</strong>
          </span>
        </div>

        {/* Public Admissions Section Header */}
        <div className="text-center mb-8 space-y-1">
          <h2 className="text-xl md:text-2xl font-black font-heading text-slate-900 tracking-tight">
            Important <span className="text-[#B34141]">Dates</span>
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Mark your calendar for the upcoming admission milestones.
          </p>
        </div>

        {/* Public Admissions Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dates.length === 0 ? (
            <div className="col-span-full py-8 text-center text-slate-400 text-xs italic bg-slate-50 rounded-lg border border-dashed border-slate-200">
              No milestones configured. Add dates to preview how they appear on the public portal.
            </div>
          ) : (
            dates.map((item, index) => {
              const IconComp = getIconComponent(item.icon);
              return (
                <div
                  key={index}
                  className="bg-slate-50 p-5 rounded-xl border border-slate-100 text-center hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Hover Top Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#B34141] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <IconComp className="h-8 w-8 text-slate-400 mx-auto mb-3 group-hover:text-[#B34141] transition-colors" />

                  <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 group-hover:text-slate-800 transition-colors line-clamp-1">
                    {item.event}
                  </span>
                  <span className="block text-lg md:text-xl font-black font-heading text-slate-800 group-hover:text-[#B34141] transition-colors truncate">
                    {item.date}
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Main Management Section (Table + Presets) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        {/* Configured Key Dates Table (2 Cols) */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-sm">
                Configured Key Dates
              </h3>
              <p className="text-slate-400 text-xs mt-0.5">
                Reorder milestones or click edit to update date strings and labels.
              </p>
            </div>
            <button
              onClick={handleOpenAdd}
              className="px-3 py-1.5 bg-slate-900 text-white font-semibold rounded-md text-xs transition-all flex items-center gap-1.5 cursor-pointer hover:bg-slate-800"
            >
              <PlusIcon className="h-3.5 w-3.5 stroke-[2.5]" />
              Add Date
            </button>
          </div>

          {isLoading ? (
            <div className="py-12 text-center text-slate-400">
              <ArrowPathIcon className="h-7 w-7 animate-spin mx-auto text-slate-400" />
              <p className="mt-2 text-xs font-medium">Loading dates...</p>
            </div>
          ) : dates.length === 0 ? (
            <div className="p-8 text-center">
              <CalendarDaysIcon className="h-10 w-10 text-slate-300 mx-auto mb-2" />
              <p className="text-slate-700 font-semibold text-xs">No dates configured</p>
              <p className="text-slate-400 text-[11px] mt-1 max-w-sm mx-auto">
                Add dates manually or choose a preset template on the right to populate your admission milestones.
              </p>
            </div>
          ) : (
            /* Structured Data Table */
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 border-b border-slate-200/70 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-3.5 py-2.5 w-12 text-center">#</th>
                    <th scope="col" className="px-3.5 py-2.5 w-12 text-center">Icon</th>
                    <th scope="col" className="px-3.5 py-2.5">Milestone Event</th>
                    <th scope="col" className="px-3.5 py-2.5">Scheduled Date</th>
                    <th scope="col" className="px-3.5 py-2.5 w-24 text-center">Reorder</th>
                    <th scope="col" className="px-3.5 py-2.5 w-24 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {dates.map((item, index) => {
                    const IconComp = getIconComponent(item.icon);
                    return (
                      <tr
                        key={index}
                        className="hover:bg-slate-50/70 transition-colors group"
                      >
                        {/* Index */}
                        <td className="px-3.5 py-3 text-center text-slate-400 font-mono text-[11px]">
                          {index + 1}
                        </td>

                        {/* Icon */}
                        <td className="px-3.5 py-3 text-center">
                          <div className="w-7 h-7 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center mx-auto border border-slate-200/60 group-hover:bg-[#B34141]/10 group-hover:text-[#B34141] transition-colors">
                            <IconComp className="h-4 w-4" />
                          </div>
                        </td>

                        {/* Event Title */}
                        <td className="px-3.5 py-3">
                          <span className="font-semibold text-slate-900 block truncate max-w-xs">
                            {item.event}
                          </span>
                        </td>

                        {/* Date String */}
                        <td className="px-3.5 py-3">
                          <span className="font-bold text-[#B34141] text-xs">
                            {item.date}
                          </span>
                        </td>

                        {/* Reorder Buttons */}
                        <td className="px-3.5 py-3 text-center">
                          <div className="inline-flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => handleMoveUp(index)}
                              disabled={index === 0}
                              title="Move Up"
                              className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded disabled:opacity-20 disabled:pointer-events-none transition-colors cursor-pointer"
                            >
                              <ArrowUpIcon className="h-3.5 w-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleMoveDown(index)}
                              disabled={index === dates.length - 1}
                              title="Move Down"
                              className="p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded disabled:opacity-20 disabled:pointer-events-none transition-colors cursor-pointer"
                            >
                              <ArrowDownIcon className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </td>

                        {/* Actions (Edit / Delete) */}
                        <td className="px-3.5 py-3 text-right">
                          <div className="inline-flex items-center gap-1 justify-end">
                            <button
                              type="button"
                              onClick={() => handleOpenEdit(index)}
                              title="Edit"
                              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                            >
                              <PencilSquareIcon className="h-3.5 w-3.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDelete(index)}
                              title="Delete"
                              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors cursor-pointer"
                            >
                              <TrashIcon className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Quick Presets & Sync Info (1 Col) */}
        <div className="space-y-4">
          {/* Presets Card */}
          <div className="bg-white rounded-lg p-4 border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-1.5 mb-2">
              <SparklesIcon className="h-4 w-4 text-emerald-600" />
              <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
                Milestone Presets
              </h3>
            </div>
            <p className="text-slate-400 text-[11px] mb-3">
              Click any standard template to add to your schedule:
            </p>
            <div className="space-y-2">
              {PRESET_TEMPLATES.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleApplyPreset(preset)}
                  className="w-full text-left p-2.5 rounded-md border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="min-w-0 pr-2">
                    <p className="text-xs font-semibold text-slate-800 group-hover:text-slate-950 truncate">
                      {preset.event}
                    </p>
                    <p className="text-[10.5px] text-[#B34141] font-medium">{preset.date}</p>
                  </div>
                  <PlusIcon className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-800 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Sync Info Box */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-3.5 text-slate-600 text-xs">
            <h4 className="font-bold text-slate-800 flex items-center gap-1.5 mb-1 text-[11.5px]">
              <CalendarDaysIcon className="h-3.5 w-3.5 text-slate-600" />
              Live Sync Active
            </h4>
            <p className="text-slate-500 text-[11px] leading-relaxed">
              Updates saved here automatically synchronize across the public Admissions timeline, download brochure widget, and banner alerts.
            </p>
          </div>
        </div>
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-lg w-full max-w-md shadow-2xl border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-slate-200/70 text-slate-800">
                  <CalendarDaysIcon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wide">
                    {editingIndex !== null ? "Edit Milestone Date" : "Add Milestone Date"}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded hover:bg-slate-200/60"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleModalSubmit} className="p-4 space-y-3.5">
              {/* Event Title */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Milestone Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Application Opens / Last Date to Apply"
                  value={modalForm.event}
                  onChange={(e) => setModalForm({ ...modalForm, event: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-800 text-xs focus:outline-hidden focus:border-slate-400 focus:bg-white transition-all font-medium"
                />
              </div>

              {/* Date String */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Date Text <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 15 May 2026 or 31 July 2026"
                  value={modalForm.date}
                  onChange={(e) => setModalForm({ ...modalForm, date: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-800 text-xs focus:outline-hidden focus:border-slate-400 focus:bg-white transition-all font-medium"
                />
              </div>

              {/* Icon Selector */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Select Visual Icon
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {AVAILABLE_ICONS.map((iconItem) => {
                    const isSelected = modalForm.icon === iconItem.name;
                    const IconComp = iconItem.Icon;
                    return (
                      <button
                        type="button"
                        key={iconItem.name}
                        onClick={() => setModalForm({ ...modalForm, icon: iconItem.name })}
                        className={`p-2 rounded-md border flex items-center gap-1.5 transition-all cursor-pointer text-[11px] ${
                          isSelected
                            ? "border-slate-900 bg-slate-900 text-white font-bold"
                            : "border-slate-200 bg-slate-50/60 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <IconComp className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{iconItem.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-3 py-1.5 rounded-md border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-4 py-1.5 rounded-md bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-all shadow-xs cursor-pointer disabled:opacity-50"
                >
                  {isSaving ? "Saving..." : editingIndex !== null ? "Update Milestone" : "Add Milestone"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
