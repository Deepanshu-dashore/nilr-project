"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { API_ENDPOINTS } from "@/src/config/api.config";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ArrowPathIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  ShareIcon,
  ClockIcon,
  SparklesIcon,
  CalendarDaysIcon,
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

interface SocialLinks {
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  youtube: string;
}

interface SiteInfoData {
  contactAddress: string;
  contactEmail: string;
  generalEmail: string;
  contactPhone: string;
  helplinePhone: string;
  officeHours: string;
  websiteUrl: string;
  mapEmbedUrl: string;
  socialLinks: SocialLinks;
}

export default function SiteInfoSettingsPage() {
  const [formData, setFormData] = useState<SiteInfoData>({
    contactAddress: "CVRU Khandwa – NIRM Ratlam Campus, Near Maleni River, Village Bhadwasa, Namli, Ratlam, MP – 457222, India",
    contactEmail: "admissions@nirm.cvruk.in",
    generalEmail: "info@nirm-cvruk.ac.in",
    contactPhone: "+91 91110 03000",
    helplinePhone: "+91 91091 07361 / 07412 284300",
    officeHours: "Monday – Saturday: 9:30 AM – 5:30 PM (Sunday: Closed)",
    websiteUrl: "https://www.nirm.cvruk.in",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.255252157876!2d75.07872367512006!3d23.523320078826014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39640419d441a225%3A0x53063056acb1832d!2sNational%20Livelihood%20Resource%20Institute!5e0!3m2!1sen!2sin!4v171567929771!5m2!1sen!2sin",
    socialLinks: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
    },
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Fetch Site Info from API
  const fetchSiteInfo = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(API_ENDPOINTS.SITE_INFO.GET);
      if (res.data?.success && res.data?.data) {
        const data = res.data.data;
        setFormData({
          contactAddress: data.contactAddress || "CVRU Khandwa – NIRM Ratlam Campus, Near Maleni River, Village Bhadwasa, Namli, Ratlam, MP – 457222, India",
          contactEmail: data.contactEmail || "admissions@nirm.cvruk.in",
          generalEmail: data.generalEmail || "info@nirm-cvruk.ac.in",
          contactPhone: data.contactPhone || "+91 91110 03000",
          helplinePhone: data.helplinePhone || "+91 91091 07361 / 07412 284300",
          officeHours: data.officeHours || "Monday – Saturday: 9:30 AM – 5:30 PM (Sunday: Closed)",
          websiteUrl: data.websiteUrl || "https://www.nirm.cvruk.in",
          mapEmbedUrl: data.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.255252157876!2d75.07872367512006!3d23.523320078826014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39640419d441a225%3A0x53063056acb1832d!2sNational%20Livelihood%20Resource%20Institute!5e0!3m2!1sen!2sin!4v171567929771!5m2!1sen!2sin",
          socialLinks: {
            facebook: data.socialLinks?.facebook || "https://facebook.com",
            twitter: data.socialLinks?.twitter || "https://twitter.com",
            linkedin: data.socialLinks?.linkedin || "https://linkedin.com",
            instagram: data.socialLinks?.instagram || "https://instagram.com",
            youtube: data.socialLinks?.youtube || "https://youtube.com",
          },
        });
      }
    } catch (err) {
      console.error("Failed to fetch site info:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSiteInfo();
  }, []);

  // Save Settings via PUT API
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage(null);
    try {
      const res = await axios.put(API_ENDPOINTS.SITE_INFO.UPDATE, formData);
      if (res.data?.success) {
        setMessage({ type: "success", text: "Site Information updated successfully!" });
      } else {
        setMessage({ type: "error", text: res.data?.message || "Failed to update site info." });
      }
    } catch (err: any) {
      setMessage({ type: "error", text: err.response?.data?.message || "Error saving site info." });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-96 w-full items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-900 border-t-transparent"></div>
          <p className="text-xs font-semibold text-slate-600">Loading Site Information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Page Header */}
      <PageHeader
        title="Site Information & Global Settings"
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Settings", href: "/admin/settings" },
          { label: "Site Info" },
        ]}
        actionNode={
          <div className="flex items-center gap-2.5">
            <button
              onClick={fetchSiteInfo}
              disabled={isLoading || isSaving}
              className="px-3.5 py-1.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-md hover:bg-slate-50 flex items-center gap-1.5 transition-all shadow-xs cursor-pointer text-xs"
            >
              <ArrowPathIcon className={`h-3.5 w-3.5 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-4 py-1.5 bg-slate-900 text-white font-semibold rounded-md hover:bg-slate-800 flex items-center gap-1.5 transition-all shadow-xs cursor-pointer text-xs disabled:opacity-50"
            >
              <SparklesIcon className="h-3.5 w-3.5" />
              {isSaving ? "Saving..." : "Save Settings"}
            </button>
          </div>
        }
      />

      {/* Alert Notification */}
      {message && (
        <div
          className={`p-3.5 rounded-lg flex items-center justify-between border text-xs font-semibold ${
            message.type === "success"
              ? "bg-emerald-50 text-emerald-800 border-emerald-200"
              : "bg-rose-50 text-rose-800 border-rose-200"
          }`}
        >
          <div className="flex items-center gap-2">
            {message.type === "success" ? (
              <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <ExclamationCircleIcon className="w-4 h-4 text-rose-600 shrink-0" />
            )}
            <span>{message.text}</span>
          </div>
          <button onClick={() => setMessage(null)} className="text-slate-400 hover:text-slate-600">
            ×
          </button>
        </div>
      )}

      {/* Quick Navigation Cards to Dedicated Pages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Important Dates Page Card */}
        <Link
          href="/admin/important-dates"
          className="bg-white p-4 rounded-lg border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
              <CalendarDaysIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                <span>Manage Important Dates</span>
                <ArrowTopRightOnSquareIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Configure timeline milestones, deadlines, and entrance tests.
              </p>
            </div>
          </div>
          <span className="text-xs text-blue-600 font-semibold px-2.5 py-1 rounded bg-blue-50/80 shrink-0">
            Open Page →
          </span>
        </Link>

        {/* Academic Session Page Card */}
        <Link
          href="/admin/academic-session"
          className="bg-white p-4 rounded-lg border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <AcademicCapIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors flex items-center gap-1">
                <span>Academic Session & Cycle</span>
                <ArrowTopRightOnSquareIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Set global batch years (`2026–28`), admission cycle, and ticker.
              </p>
            </div>
          </div>
          <span className="text-xs text-emerald-600 font-semibold px-2.5 py-1 rounded bg-emerald-50/80 shrink-0">
            Open Page →
          </span>
        </Link>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* 1. Official Contact Details */}
        <div className="bg-white p-5 rounded-lg border border-slate-200/80 shadow-xs space-y-5">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
            <div className="p-2 bg-slate-100 rounded-md text-slate-700">
              <EnvelopeIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Official Contact Details</h3>
              <p className="text-xs text-slate-400">Campus address, emails, phone helplines, hours & map settings</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <MapPinIcon className="w-3.5 h-3.5 text-slate-400" />
                Campus Address
              </label>
              <textarea
                rows={2}
                value={formData.contactAddress}
                onChange={(e) => setFormData({ ...formData, contactAddress: e.target.value })}
                className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-hidden focus:border-slate-400 focus:bg-white bg-slate-50 text-slate-900 text-xs font-medium"
                placeholder="Full official campus address"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <EnvelopeIcon className="w-3.5 h-3.5 text-slate-400" />
                  Admissions Email
                </label>
                <input
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-hidden focus:border-slate-400 focus:bg-white bg-slate-50 text-slate-900 text-xs font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <EnvelopeIcon className="w-3.5 h-3.5 text-slate-400" />
                  General / Info Email
                </label>
                <input
                  type="email"
                  value={formData.generalEmail}
                  onChange={(e) => setFormData({ ...formData, generalEmail: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-hidden focus:border-slate-400 focus:bg-white bg-slate-50 text-slate-900 text-xs font-medium"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <PhoneIcon className="w-3.5 h-3.5 text-slate-400" />
                  Primary Phone
                </label>
                <input
                  type="text"
                  value={formData.contactPhone}
                  onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-hidden focus:border-slate-400 focus:bg-white bg-slate-50 text-slate-900 text-xs font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <PhoneIcon className="w-3.5 h-3.5 text-slate-400" />
                  Admissions Helpline Phone
                </label>
                <input
                  type="text"
                  value={formData.helplinePhone}
                  onChange={(e) => setFormData({ ...formData, helplinePhone: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-hidden focus:border-slate-400 focus:bg-white bg-slate-50 text-slate-900 text-xs font-medium"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <ClockIcon className="w-3.5 h-3.5 text-slate-400" />
                  Office Hours
                </label>
                <input
                  type="text"
                  value={formData.officeHours}
                  onChange={(e) => setFormData({ ...formData, officeHours: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-hidden focus:border-slate-400 focus:bg-white bg-slate-50 text-slate-900 text-xs font-medium"
                  placeholder="e.g. Monday – Saturday: 9:30 AM – 5:30 PM"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <GlobeAltIcon className="w-3.5 h-3.5 text-slate-400" />
                  Website URL
                </label>
                <input
                  type="text"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-hidden focus:border-slate-400 focus:bg-white bg-slate-50 text-slate-900 text-xs font-medium"
                  placeholder="e.g. https://www.nirm.cvruk.in"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                <MapPinIcon className="w-3.5 h-3.5 text-slate-400" />
                Google Maps Embed URL
              </label>
              <input
                type="text"
                value={formData.mapEmbedUrl}
                onChange={(e) => setFormData({ ...formData, mapEmbedUrl: e.target.value })}
                className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-hidden focus:border-slate-400 focus:bg-white bg-slate-50 text-slate-900 text-xs font-mono"
                placeholder="Google Maps iframe embed src URL"
                required
              />
            </div>
          </div>
        </div>

        {/* 2. Social Media Links */}
        <div className="bg-white p-5 rounded-lg border border-slate-200/80 shadow-xs space-y-5">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
            <div className="p-2 bg-slate-100 rounded-md text-slate-700">
              <ShareIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Social Media Links</h3>
              <p className="text-xs text-slate-400">Public profile links displayed on header, footer, and contact page</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Facebook URL</label>
              <input
                type="text"
                value={formData.socialLinks.facebook}
                onChange={(e) => setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, facebook: e.target.value }
                })}
                className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-hidden focus:border-slate-400 focus:bg-white bg-slate-50 text-slate-900 text-xs font-medium"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Twitter / X URL</label>
              <input
                type="text"
                value={formData.socialLinks.twitter}
                onChange={(e) => setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, twitter: e.target.value }
                })}
                className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-hidden focus:border-slate-400 focus:bg-white bg-slate-50 text-slate-900 text-xs font-medium"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">LinkedIn URL</label>
              <input
                type="text"
                value={formData.socialLinks.linkedin}
                onChange={(e) => setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, linkedin: e.target.value }
                })}
                className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-hidden focus:border-slate-400 focus:bg-white bg-slate-50 text-slate-900 text-xs font-medium"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">Instagram URL</label>
              <input
                type="text"
                value={formData.socialLinks.instagram}
                onChange={(e) => setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, instagram: e.target.value }
                })}
                className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-hidden focus:border-slate-400 focus:bg-white bg-slate-50 text-slate-900 text-xs font-medium"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">YouTube URL</label>
              <input
                type="text"
                value={formData.socialLinks.youtube}
                onChange={(e) => setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, youtube: e.target.value }
                })}
                className="w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-hidden focus:border-slate-400 focus:bg-white bg-slate-50 text-slate-900 text-xs font-medium"
              />
            </div>
          </div>
        </div>

        {/* Bottom Save Action Button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 font-semibold text-xs shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            <SparklesIcon className="w-4 h-4 text-emerald-400" />
            {isSaving ? "Saving Settings..." : "Save Site Information"}
          </button>
        </div>
      </form>
    </div>
  );
}
