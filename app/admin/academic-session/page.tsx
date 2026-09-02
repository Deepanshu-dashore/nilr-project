"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { API_ENDPOINTS } from "@/src/config/api.config";
import {
  AcademicCapIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  SparklesIcon,
  CalendarDaysIcon,
  MegaphoneIcon,
  EyeIcon,
  XMarkIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

interface SessionData {
  academicSession: string;
  admissionCycle: string;
  announcementTicker: string;
}

const SESSION_PRESETS = [
  {
    label: "2026–28 Session (Current)",
    academicSession: "2026–28",
    admissionCycle: "2026–27",
    ticker: "Admissions Open for 2026–28: PGD-RM & Certificate Courses in Rural Management & Development",
  },
  {
    label: "2027–29 Session (Upcoming)",
    academicSession: "2027–29",
    admissionCycle: "2027–28",
    ticker: "Admissions Open for 2027–29: PGD-RM & Certificate Courses in Rural Management & Development",
  },
  {
    label: "2028–30 Session (Next)",
    academicSession: "2028–30",
    admissionCycle: "2028–29",
    ticker: "Admissions Open for 2028–30: PGD-RM & Certificate Courses in Rural Management & Development",
  },
];

export default function AcademicSessionAdminPage() {
  const [formData, setFormData] = useState<SessionData>({
    academicSession: "2026–28",
    admissionCycle: "2026–27",
    announcementTicker: "Admissions Open for 2026–28: PGD-RM & Certificate Courses",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Fetch from SiteInfo API
  const fetchSessionInfo = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(API_ENDPOINTS.SITE_INFO.GET);
      if (res.data?.success && res.data?.data) {
        const data = res.data.data;
        setFormData({
          academicSession: data.academicSession || "2026–28",
          admissionCycle: data.admissionCycle || "2026–27",
          announcementTicker: data.announcementTicker || "Admissions Open for 2026–28: PGD-RM & Certificate Courses",
        });
      }
    } catch (err) {
      console.error("Failed to fetch academic session info:", err);
      setMessage({ type: "error", text: "Failed to load academic session data." });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSessionInfo();
  }, []);

  // Save via API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage(null);
    try {
      const res = await axios.put(API_ENDPOINTS.SITE_INFO.UPDATE, {
        academicSession: formData.academicSession.trim(),
        admissionCycle: formData.admissionCycle.trim(),
        announcementTicker: formData.announcementTicker.trim(),
      });

      if (res.data?.success) {
        setMessage({
          type: "success",
          text: "Academic Session & Cycle updated successfully! All public pages now reflect the changes.",
        });
      } else {
        setMessage({ type: "error", text: "Failed to update academic session." });
      }
    } catch (err) {
      console.error("Error updating academic session:", err);
      setMessage({ type: "error", text: "An error occurred while saving." });
    } finally {
      setIsSaving(false);
    }
  };

  // Apply Preset
  const handleApplyPreset = (preset: typeof SESSION_PRESETS[0]) => {
    setFormData({
      academicSession: preset.academicSession,
      admissionCycle: preset.admissionCycle,
      announcementTicker: preset.ticker,
    });
  };

  return (
    <div className="space-y-6 pb-12 max-w-6xl mx-auto">
      {/* Page Header */}
      <PageHeader
        title="Academic Session & Cycle Configuration"
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Admissions", href: "/admin/admission" },
          { label: "Academic Session" },
        ]}
        actionNode={
          <div className="flex items-center gap-2.5">
            <button
              onClick={fetchSessionInfo}
              disabled={isLoading || isSaving}
              className="px-3.5 py-1.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-md hover:bg-slate-50 flex items-center gap-1.5 transition-all shadow-xs cursor-pointer text-xs"
            >
              <ArrowPathIcon className={`h-3.5 w-3.5 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSaving}
              className="px-4 py-1.5 bg-slate-900 text-white font-semibold rounded-md hover:bg-slate-800 flex items-center gap-1.5 transition-all shadow-xs cursor-pointer text-xs disabled:opacity-50"
            >
              <CheckCircleIcon className="h-3.5 w-3.5" />
              {isSaving ? "Saving..." : "Save Changes"}
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

      {/* Clean Compact Live Preview Bar */}
      <div className="bg-white rounded-lg border border-slate-200/80 p-4 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3.5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-slate-100 text-slate-700 flex items-center justify-center">
              <EyeIcon className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Live Site Display Preview
              </h3>
              <p className="text-[11px] text-slate-400">
                Visual preview of how your session variables appear across the public portal.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-semibold border border-slate-200">
              Batch: <strong>{formData.academicSession}</strong>
            </span>
            <span className="text-[11px] bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded font-semibold border border-emerald-200">
              Cycle: <strong>{formData.admissionCycle}</strong>
            </span>
          </div>
        </div>

        {/* 3 Compact Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Preview 1: Top Marquee */}
          <div className="p-3 bg-slate-50/70 rounded-md border border-slate-200/70 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              <span>Topbar Announcement</span>
              <MegaphoneIcon className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="bg-white p-2 rounded border border-slate-200 text-xs text-slate-800 flex items-center gap-1.5 shadow-2xs">
              <span className="bg-[#B34141] text-white text-[9.5px] font-bold px-1.5 py-0.5 rounded shrink-0">
                NEW
              </span>
              <span className="truncate font-medium text-[11.5px] text-slate-700">
                {formData.announcementTicker || `Admissions Open for ${formData.academicSession}`}
              </span>
            </div>
          </div>

          {/* Preview 2: Hero & Admissions Badge */}
          <div className="p-3 bg-slate-50/70 rounded-md border border-slate-200/70 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              <span>Admissions Badge</span>
              <CalendarDaysIcon className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="bg-white p-2 rounded border border-slate-200 text-center shadow-2xs">
              <span className="text-[#B34141] text-[11px] font-bold uppercase tracking-wide">
                ✦ Admissions Open {formData.academicSession} ✦
              </span>
            </div>
          </div>

          {/* Preview 3: Application Tag */}
          <div className="p-3 bg-slate-50/70 rounded-md border border-slate-200/70 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              <span>Application Cycle</span>
              <AcademicCapIcon className="w-3.5 h-3.5 text-slate-400" />
            </div>
            <div className="bg-white p-2 rounded border border-slate-200 flex items-center justify-between shadow-2xs text-xs">
              <span className="text-slate-500 text-[11px]">Academic Intake:</span>
              <span className="font-bold text-slate-900 text-[11.5px]">
                {formData.admissionCycle}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Settings Form & Presets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
        {/* Form Settings (2 Cols) */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-slate-200/80 shadow-xs p-5 space-y-5">
          <div>
            <h3 className="font-bold text-slate-900 text-sm">
              Session Configuration
            </h3>
            <p className="text-slate-400 text-xs mt-0.5">
              Configure global session years and broadcast headline.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Academic Session */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Academic Session (2-Year Batch) <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2026–28"
                    value={formData.academicSession}
                    onChange={(e) => setFormData({ ...formData, academicSession: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-800 text-xs focus:outline-hidden focus:border-slate-400 focus:bg-white transition-all font-semibold"
                  />
                  <CalendarDaysIcon className="h-4 w-4 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
                </div>
                <p className="text-[10.5px] text-slate-400 mt-1">
                  Used for 2-year postgraduate degrees (e.g. PGD-RM {formData.academicSession}).
                </p>
              </div>

              {/* Admission Cycle */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Admission Cycle (Single / Annual) <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2026–27"
                    value={formData.admissionCycle}
                    onChange={(e) => setFormData({ ...formData, admissionCycle: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-800 text-xs focus:outline-hidden focus:border-slate-400 focus:bg-white transition-all font-semibold"
                  />
                  <AcademicCapIcon className="h-4 w-4 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
                </div>
                <p className="text-[10.5px] text-slate-400 mt-1">
                  Used for certificate programs and the annual intake cycle.
                </p>
              </div>
            </div>

            {/* Announcement Ticker Message */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Broadcast Announcement Headline <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={3}
                required
                placeholder="e.g. Admissions Open for 2026–28: PGD-RM & Certificate Courses in Rural Management & Development"
                value={formData.announcementTicker}
                onChange={(e) => setFormData({ ...formData, announcementTicker: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-slate-800 text-xs focus:outline-hidden focus:border-slate-400 focus:bg-white transition-all font-medium leading-relaxed"
              />
              <p className="text-[10.5px] text-slate-400 mt-1">
                Displayed in the scrolling announcement ticker on top of the portal.
              </p>
            </div>

            {/* Save Buttons */}
            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={fetchSessionInfo}
                className="px-3.5 py-1.5 rounded-md border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 transition-all cursor-pointer"
              >
                Reset
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="px-4 py-1.5 rounded-md bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-all shadow-xs cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
              >
                <CheckCircleIcon className="h-3.5 w-3.5" />
                {isSaving ? "Saving..." : "Save Configuration"}
              </button>
            </div>
          </form>
        </div>

        {/* Presets & Impact Breakdown (1 Col) */}
        <div className="space-y-4">
          {/* Quick Presets */}
          <div className="bg-white rounded-lg p-4 border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-1.5 mb-2">
              <SparklesIcon className="h-4 w-4 text-emerald-600" />
              <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
                Quick Session Presets
              </h3>
            </div>
            <p className="text-slate-400 text-[11px] mb-3">
              1-click autofill batch session years:
            </p>
            <div className="space-y-2">
              {SESSION_PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleApplyPreset(preset)}
                  className="w-full text-left p-2.5 rounded-md border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all group cursor-pointer"
                >
                  <p className="text-xs font-bold text-slate-800 group-hover:text-slate-950">
                    {preset.label}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1 text-[10.5px] text-slate-400">
                    <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">
                      {preset.academicSession}
                    </span>
                    <span>•</span>
                    <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">
                      {preset.admissionCycle}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Impact Breakdown Card */}
          <div className="bg-white rounded-lg p-4 border border-slate-200/80 shadow-xs">
            <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <GlobeAltIcon className="h-3.5 w-3.5 text-slate-500" />
              Where are values used?
            </h3>
            <ul className="space-y-2 text-[11.5px] text-slate-500">
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                <span>
                  <strong className="text-slate-700">Admissions Page:</strong> Batch headlines & criteria.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                <span>
                  <strong className="text-slate-700">Top Marquee Ticker:</strong> Global broadcast announcement.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                <span>
                  <strong className="text-slate-700">Student Enquiries:</strong> Auto-tagged batch intake years.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
