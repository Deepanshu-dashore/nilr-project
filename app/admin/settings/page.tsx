"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { API_ENDPOINTS } from "@/src/config/api.config";
import {
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  PlusIcon,
  TrashIcon,
  ArrowPathIcon,
  BuildingLibraryIcon,
  EnvelopeIcon,
  PhoneIcon,
  MegaphoneIcon,
  SparklesIcon,
  MapPinIcon,
  GlobeAltIcon,
  ShareIcon
} from "@heroicons/react/24/outline";

interface ImportantDate {
  _id?: string;
  event: string;
  date: string;
  icon?: string;
}

interface SocialLinks {
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  youtube: string;
}

interface SiteInfoData {
  academicSession: string;
  admissionCycle: string;
  importantDates: ImportantDate[];
  contactAddress: string;
  contactEmail: string;
  generalEmail: string;
  contactPhone: string;
  helplinePhone: string;
  officeHours: string;
  websiteUrl: string;
  mapEmbedUrl: string;
  socialLinks: SocialLinks;
  announcementTicker: string;
}

export default function SiteInfoSettingsPage() {
  const [formData, setFormData] = useState<SiteInfoData>({
    academicSession: "2026–28",
    admissionCycle: "2026–27",
    importantDates: [
      { event: "Application Opens", date: "15 May 2026", icon: "ClockIcon" },
      { event: "Last Date to Apply", date: "31 July 2026", icon: "CalendarIcon" },
      { event: "Entrance Test / Interview", date: "10 August 2026", icon: "IdentificationIcon" },
      { event: "Course Commencement", date: "1 September 2026", icon: "UserPlusIcon" }
    ],
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
      youtube: "https://youtube.com"
    },
    announcementTicker: "Admissions Open for 2026–28: PGD-RM & Certificate Courses"
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isSeeding, setIsSeeding] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Fetch Site Info from API
  const fetchSiteInfo = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(API_ENDPOINTS.SITE_INFO.GET);
      if (res.data?.success && res.data?.data) {
        const data = res.data.data;
        setFormData({
          academicSession: data.academicSession || "2026–28",
          admissionCycle: data.admissionCycle || "2026–27",
          importantDates: data.importantDates || [],
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
            youtube: data.socialLinks?.youtube || "https://youtube.com"
          },
          announcementTicker: data.announcementTicker || "Admissions Open for 2026–28: PGD-RM & Certificate Courses"
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
        if (res.data.data) {
          const data = res.data.data;
          setFormData({
            academicSession: data.academicSession || formData.academicSession,
            admissionCycle: data.admissionCycle || formData.admissionCycle,
            importantDates: data.importantDates || formData.importantDates,
            contactAddress: data.contactAddress || formData.contactAddress,
            contactEmail: data.contactEmail || formData.contactEmail,
            generalEmail: data.generalEmail || formData.generalEmail,
            contactPhone: data.contactPhone || formData.contactPhone,
            helplinePhone: data.helplinePhone || formData.helplinePhone,
            officeHours: data.officeHours || formData.officeHours,
            websiteUrl: data.websiteUrl || formData.websiteUrl,
            mapEmbedUrl: data.mapEmbedUrl || formData.mapEmbedUrl,
            socialLinks: {
              facebook: data.socialLinks?.facebook || formData.socialLinks.facebook,
              twitter: data.socialLinks?.twitter || formData.socialLinks.twitter,
              linkedin: data.socialLinks?.linkedin || formData.socialLinks.linkedin,
              instagram: data.socialLinks?.instagram || formData.socialLinks.instagram,
              youtube: data.socialLinks?.youtube || formData.socialLinks.youtube
            },
            announcementTicker: data.announcementTicker || formData.announcementTicker
          });
        }
      } else {
        setMessage({ type: "error", text: res.data?.message || "Failed to update site info." });
      }
    } catch (err: any) {
      setMessage({ type: "error", text: err.response?.data?.message || "Error saving site info." });
    } finally {
      setIsSaving(false);
    }
  };

  // Seed Default Settings via POST Seed API
  const handleSeedDefaults = async () => {
    if (!confirm("Are you sure you want to reset site settings to 2026–28 default data?")) return;
    setIsSeeding(true);
    setMessage(null);
    try {
      const res = await axios.post(API_ENDPOINTS.SITE_INFO.SEED);
      if (res.data?.success) {
        setMessage({ type: "success", text: "Site Information reset to 2026–28 defaults!" });
        if (res.data.data) {
          const data = res.data.data;
          setFormData({
            academicSession: data.academicSession || "2026–28",
            admissionCycle: data.admissionCycle || "2026–27",
            importantDates: data.importantDates || [],
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
              youtube: data.socialLinks?.youtube || "https://youtube.com"
            },
            announcementTicker: data.announcementTicker || "Admissions Open for 2026–28: PGD-RM & Certificate Courses"
          });
        }
      } else {
        setMessage({ type: "error", text: res.data?.message || "Failed to seed defaults." });
      }
    } catch (err: any) {
      setMessage({ type: "error", text: "Error seeding site defaults." });
    } finally {
      setIsSeeding(false);
    }
  };

  // Important Dates array handlers
  const handleDateChange = (index: number, field: "event" | "date", value: string) => {
    const updated = [...formData.importantDates];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, importantDates: updated });
  };

  const handleAddDate = () => {
    setFormData({
      ...formData,
      importantDates: [
        ...formData.importantDates,
        { event: "New Milestone Event", date: "31 December 2026", icon: "CalendarIcon" }
      ]
    });
  };

  const handleRemoveDate = (index: number) => {
    const updated = formData.importantDates.filter((_, i) => i !== index);
    setFormData({ ...formData, importantDates: updated });
  };

  if (isLoading) {
    return (
      <div className="flex h-96 w-full items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-sm font-semibold text-primary">Loading Site Information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-5xl">
      <PageHeader
        title="Site Information & Global Settings"
        breadcrumbs={[
          { label: "Admin", href: "/admin" },
          { label: "Site Info & Settings", href: "/admin/settings" },
        ]}
      />

      {/* Alert Notification */}
      {message && (
        <div
          className={`p-4 rounded-xl flex items-center gap-3 border ${
            message.type === "success"
              ? "bg-emerald-50 text-emerald-800 border-emerald-200"
              : "bg-rose-50 text-rose-800 border-rose-200"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0" />
          ) : (
            <ExclamationCircleIcon className="w-5 h-5 text-rose-600 shrink-0" />
          )}
          <p className="text-sm font-semibold">{message.text}</p>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-8">
        
        {/* 1. Academic Session & Cycle */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                <BuildingLibraryIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Academic Session & Cycle</h3>
                <p className="text-xs text-gray-500 font-medium">Configure global session years displayed across the site</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
              API Managed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Academic Session Year
              </label>
              <input
                type="text"
                value={formData.academicSession}
                onChange={(e) => setFormData({ ...formData, academicSession: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 text-sm font-bold"
                placeholder="e.g. 2026–28"
                required
              />
              <p className="text-[11px] text-gray-500 mt-1">Displayed on Admission cards, program headers, and badges</p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Admission Cycle
              </label>
              <input
                type="text"
                value={formData.admissionCycle}
                onChange={(e) => setFormData({ ...formData, admissionCycle: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 text-sm font-bold"
                placeholder="e.g. 2026–27"
                required
              />
              <p className="text-[11px] text-gray-500 mt-1">Used for admissions portal and application forms</p>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-2">
              <MegaphoneIcon className="w-4 h-4 text-accent" />
              Announcement Ticker Text
            </label>
            <input
              type="text"
              value={formData.announcementTicker}
              onChange={(e) => setFormData({ ...formData, announcementTicker: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 text-sm font-medium"
              placeholder="e.g. Admissions Open for 2026–28: PGD-RM & Certificate Courses"
            />
          </div>
        </div>

        {/* 2. Important Dates Management */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-accent/10 rounded-xl text-accent">
                <CalendarIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Important Dates (2026–28 Admission Cycle)</h3>
                <p className="text-xs text-gray-500 font-medium">Manage milestone dates rendered in the Admissions section</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddDate}
              className="px-3.5 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <PlusIcon className="w-4 h-4" />
              Add Date Entry
            </button>
          </div>

          <div className="space-y-4">
            {formData.importantDates.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 rounded-xl bg-gray-50/70 border border-gray-100 hover:border-gray-200 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0 font-bold text-xs text-gray-500">
                  0{index + 1}
                </div>

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase text-gray-400 mb-1">
                      Event / Milestone Title
                    </label>
                    <input
                      type="text"
                      value={item.event}
                      onChange={(e) => handleDateChange(index, "event", e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm font-semibold focus:outline-none focus:border-primary"
                      placeholder="e.g. Last Date to Apply"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold uppercase text-gray-400 mb-1">
                      Date String
                    </label>
                    <input
                      type="text"
                      value={item.date}
                      onChange={(e) => handleDateChange(index, "date", e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm font-semibold focus:outline-none focus:border-primary"
                      placeholder="e.g. 31 July 2026"
                      required
                    />
                  </div>
                </div>

                {formData.importantDates.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveDate(index)}
                    className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors self-end sm:self-center cursor-pointer"
                    title="Delete Entry"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 3. Official Contact Details */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
            <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-600">
              <EnvelopeIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Official Contact Details</h3>
              <p className="text-xs text-gray-500 font-medium">Campus address, emails, phone helplines, hours & map settings</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-1.5">
                <MapPinIcon className="w-4 h-4 text-gray-400" />
                Campus Address
              </label>
              <textarea
                rows={2}
                value={formData.contactAddress}
                onChange={(e) => setFormData({ ...formData, contactAddress: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 text-sm font-medium"
                placeholder="Full official campus address"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-1.5">
                  <EnvelopeIcon className="w-4 h-4 text-gray-400" />
                  Admissions Email
                </label>
                <input
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 text-sm font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-1.5">
                  <EnvelopeIcon className="w-4 h-4 text-gray-400" />
                  General / Info Email
                </label>
                <input
                  type="email"
                  value={formData.generalEmail}
                  onChange={(e) => setFormData({ ...formData, generalEmail: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 text-sm font-medium"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-1.5">
                  <PhoneIcon className="w-4 h-4 text-gray-400" />
                  Primary / General Phone
                </label>
                <input
                  type="text"
                  value={formData.contactPhone}
                  onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 text-sm font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-1.5">
                  <PhoneIcon className="w-4 h-4 text-gray-400" />
                  Admissions Helpline / Phone
                </label>
                <input
                  type="text"
                  value={formData.helplinePhone}
                  onChange={(e) => setFormData({ ...formData, helplinePhone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 text-sm font-medium"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-1.5">
                  <ClockIcon className="w-4 h-4 text-gray-400" />
                  Office Hours
                </label>
                <input
                  type="text"
                  value={formData.officeHours}
                  onChange={(e) => setFormData({ ...formData, officeHours: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 text-sm font-medium"
                  placeholder="e.g. Monday – Saturday: 9:30 AM – 5:30 PM"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-1.5">
                  <GlobeAltIcon className="w-4 h-4 text-gray-400" />
                  Website URL
                </label>
                <input
                  type="text"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 text-sm font-medium"
                  placeholder="e.g. https://www.nirm.cvruk.in"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2 flex items-center gap-1.5">
                <MapPinIcon className="w-4 h-4 text-gray-400" />
                Google Maps Embed URL
              </label>
              <input
                type="text"
                value={formData.mapEmbedUrl}
                onChange={(e) => setFormData({ ...formData, mapEmbedUrl: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 text-xs font-mono"
                placeholder="Google Maps iframe embed src URL"
                required
              />
            </div>
          </div>
        </div>

        {/* 4. Social Media Links */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
            <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-600">
              <ShareIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Social Media Links</h3>
              <p className="text-xs text-gray-500 font-medium">Global social profile URLs displayed on header, footer, and contact page</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Facebook URL</label>
              <input
                type="text"
                value={formData.socialLinks.facebook}
                onChange={(e) => setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, facebook: e.target.value }
                })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 text-sm font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Twitter / X URL</label>
              <input
                type="text"
                value={formData.socialLinks.twitter}
                onChange={(e) => setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, twitter: e.target.value }
                })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 text-sm font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">LinkedIn URL</label>
              <input
                type="text"
                value={formData.socialLinks.linkedin}
                onChange={(e) => setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, linkedin: e.target.value }
                })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 text-sm font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Instagram URL</label>
              <input
                type="text"
                value={formData.socialLinks.instagram}
                onChange={(e) => setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, instagram: e.target.value }
                })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 text-sm font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">YouTube URL</label>
              <input
                type="text"
                value={formData.socialLinks.youtube}
                onChange={(e) => setFormData({
                  ...formData,
                  socialLinks: { ...formData.socialLinks, youtube: e.target.value }
                })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 text-sm font-medium"
              />
            </div>
          </div>
        </div>

        {/* 5. Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <button
            type="button"
            onClick={handleSeedDefaults}
            disabled={isSeeding}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            <ArrowPathIcon className={`w-4 h-4 ${isSeeding ? "animate-spin" : ""}`} />
            {isSeeding ? "Resetting Defaults..." : "Reset 2026–28 Defaults"}
          </button>

          <button
            type="submit"
            disabled={isSaving}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-white hover:bg-primary-dark font-bold text-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            <SparklesIcon className="w-5 h-5 text-accent" />
            {isSaving ? "Saving Settings..." : "Save Site Information"}
          </button>
        </div>

      </form>
    </div>
  );
}
