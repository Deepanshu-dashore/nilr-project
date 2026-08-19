"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { API_ENDPOINTS } from "@/src/config/api.config";
import {
  UsersIcon,
  AcademicCapIcon,
  CalendarIcon,
  EnvelopeIcon,
  ArrowUpRightIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  BuildingOffice2Icon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

interface Enquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  status: "pending" | "resolved";
  createdAt: string;
}

interface EventItem {
  _id: string;
  title: string;
  category: string;
  date: string;
}

interface RegionItem {
  name: string;
  enquiries: string;
  applications: string;
  flag: string;
}

interface OfficerItem {
  name: string;
  role: string;
  count: string;
  badge: string;
}

interface DashboardStats {
  totalEnquiries: number;
  pendingEnquiries: number;
  totalPrograms: number;
  totalEvents: number;
  totalGallery: number;
  totalProgramTypes: number;
  conversionRate: number;
  recentEnquiries: Enquiry[];
  recentEvents: EventItem[];
  topRegions: RegionItem[];
  topOfficers: OfficerItem[];
}

export default function AdminPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalEnquiries: 18765,
    pendingEnquiries: 4876,
    totalPrograms: 24,
    totalEvents: 678,
    totalGallery: 142,
    totalProgramTypes: 6,
    conversionRate: 78,
    recentEnquiries: [
      { _id: "e1", name: "Rahul Sharma", email: "rahul.s@gmail.com", phone: "+91 98765 43210", subject: "PGD-RM Admissions 2026", status: "pending", createdAt: new Date().toISOString() },
      { _id: "e2", name: "Priya Patel", email: "priya.p@yahoo.com", phone: "+91 91234 56789", subject: "Campus Visit Enquiry", status: "resolved", createdAt: new Date(Date.now() - 3600000 * 5).toISOString() },
      { _id: "e3", name: "Amit Verma", email: "amit.v@outlook.com", phone: "+91 99887 76655", subject: "Fee Structure & Hostel", status: "pending", createdAt: new Date(Date.now() - 3600000 * 24).toISOString() },
      { _id: "e4", name: "Sneha Gupta", email: "sneha.g@gmail.com", phone: "+91 94567 12345", subject: "AC&ABC Agripreneurship", status: "resolved", createdAt: new Date(Date.now() - 3600000 * 48).toISOString() },
      { _id: "e5", name: "Vikram Kumar", email: "vikram.k@gmail.com", phone: "+91 97654 32109", subject: "Placement Statistics", status: "resolved", createdAt: new Date(Date.now() - 3600000 * 72).toISOString() }
    ],
    recentEvents: [
      { _id: "ev1", title: "National Rural Management Symposium 2026", category: "Conference", date: "28 Feb 2026" },
      { _id: "ev2", title: "Grassroots Agri-Innovation Expo", category: "Exhibition", date: "15 Mar 2026" }
    ],
    topRegions: [
      { name: "Madhya Pradesh", enquiries: "9.91k", applications: "1.95k", flag: "🇮🇳" },
      { name: "Rajasthan", enquiries: "4.85k", applications: "9.12k", flag: "🇮🇳" },
      { name: "Gujarat", enquiries: "9.12k", applications: "6.98k", flag: "🇮🇳" },
      { name: "Maharashtra", enquiries: "6.98k", applications: "8.49k", flag: "🇮🇳" },
      { name: "Chhattisgarh", enquiries: "8.49k", applications: "2.03k", flag: "🇮🇳" }
    ],
    topOfficers: [
      { name: "Dr. B. K. Sahay", role: "Director Academic", count: "9.91k", badge: "🏆" },
      { name: "Admissions Desk", role: "Counselor Cell", count: "9.12k", badge: "🥇" },
      { name: "Placement Cell", role: "Corporate Relations", count: "1.95k", badge: "🎖️" }
    ]
  });

  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"7days" | "30days" | "all">("7days");

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const res = await axios.get(API_ENDPOINTS.DASHBOARD.STATS);
        if (res.data?.success && res.data?.data) {
          setStats((prev) => ({ ...prev, ...res.data.data }));
        }
      } catch (err) {
        console.error("Error fetching dashboard stats:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDashboardStats();
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12 font-sans">
      
      {/* 🔹 ROW 1: Hero Banner & Featured Module Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Welcome Card */}
        <div className="lg:col-span-8 bg-[#161c24] text-white rounded-3xl p-8 md:p-10 border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[220px]">
          <div className="relative z-10 max-w-lg space-y-4">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              Welcome back 👋 <span className="text-emerald-400">Admin</span>
            </h1>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-normal">
              Monitoring real-time student enquiries, academic sessions, program enrollments, and campus activities at NLRI Ratlam.
            </p>
            <div className="pt-2">
              <Link
                href="/admin/enquiries"
                className="inline-flex items-center gap-2 bg-[#00a76f] hover:bg-[#007b4f] text-white font-bold text-xs md:text-sm px-6 py-2.5 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Go now
              </Link>
            </div>
          </div>

          {/* 3D Character Illustration Graphic */}
          <div className="absolute right-4 bottom-0 w-48 md:w-64 h-full pointer-events-none hidden sm:flex items-end justify-center">
            <div className="relative w-full h-48 md:h-56">
              <svg viewBox="0 0 200 200" className="w-full h-full text-emerald-500/20">
                <circle cx="100" cy="100" r="80" fill="currentColor" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl md:text-7xl">👩‍💻</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Card */}
        <div className="lg:col-span-4 bg-linear-to-br from-slate-900 via-[#161c24] to-slate-900 rounded-3xl p-6 md:p-8 text-white border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[220px]">
          <div className="relative z-10 space-y-3">
            <span className="inline-block text-[10px] font-extrabold tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md uppercase">
              FEATURED MODULE
            </span>
            <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
              PGD-RM Rural Livelihoods & Innovation
            </h3>
            <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
              Empowering grassroots communities through structured field immersion and sustainable agripreneurship.
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between pt-4 border-t border-slate-800">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
            </div>
            <Link href="/admin/programs" className="text-xs text-emerald-400 font-bold hover:underline flex items-center gap-1">
              Explore <ChevronRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* 🔹 ROW 2: Stat Cards (3 Clean White Cards with Mini Sparklines) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Stat Card 1: Total Enquiries */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs hover:shadow-md transition-all flex items-center justify-between">
          <div className="space-y-3">
            <p className="text-xs font-bold text-gray-500 tracking-wide">Total active enquiries</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              {stats.totalEnquiries.toLocaleString()}
            </h2>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md w-fit">
              <ArrowTrendingUpIcon className="w-3.5 h-3.5" />
              <span>+2.6%</span>
              <span className="text-gray-400 font-normal ml-0.5">last 7 days</span>
            </div>
          </div>

          {/* Mini Sparkline Bar Graph (Green) */}
          <div className="flex items-end gap-1.5 h-12">
            <span className="w-2 rounded-full bg-emerald-200 h-4"></span>
            <span className="w-2 rounded-full bg-emerald-300 h-6"></span>
            <span className="w-2 rounded-full bg-emerald-400 h-3"></span>
            <span className="w-2 rounded-full bg-emerald-500 h-8"></span>
            <span className="w-2 rounded-full bg-emerald-600 h-10"></span>
            <span className="w-2 rounded-full bg-emerald-500 h-6"></span>
            <span className="w-2 rounded-full bg-emerald-600 h-12"></span>
          </div>
        </div>

        {/* Stat Card 2: Pending Follow-ups */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs hover:shadow-md transition-all flex items-center justify-between">
          <div className="space-y-3">
            <p className="text-xs font-bold text-gray-500 tracking-wide">Pending follow-ups</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              {stats.pendingEnquiries.toLocaleString()}
            </h2>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md w-fit">
              <ArrowTrendingUpIcon className="w-3.5 h-3.5" />
              <span>+0.2%</span>
              <span className="text-gray-400 font-normal ml-0.5">last 7 days</span>
            </div>
          </div>

          {/* Mini Sparkline Bar Graph (Cyan) */}
          <div className="flex items-end gap-1.5 h-12">
            <span className="w-2 rounded-full bg-cyan-200 h-5"></span>
            <span className="w-2 rounded-full bg-cyan-300 h-8"></span>
            <span className="w-2 rounded-full bg-cyan-400 h-4"></span>
            <span className="w-2 rounded-full bg-cyan-500 h-10"></span>
            <span className="w-2 rounded-full bg-cyan-400 h-7"></span>
            <span className="w-2 rounded-full bg-cyan-600 h-12"></span>
          </div>
        </div>

        {/* Stat Card 3: Events & Programs */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs hover:shadow-md transition-all flex items-center justify-between">
          <div className="space-y-3">
            <p className="text-xs font-bold text-gray-500 tracking-wide">Total campus events</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              {stats.totalEvents.toLocaleString()}
            </h2>
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md w-fit">
              <ArrowTrendingDownIcon className="w-3.5 h-3.5" />
              <span>-0.1%</span>
              <span className="text-gray-400 font-normal ml-0.5">last 7 days</span>
            </div>
          </div>

          {/* Mini Sparkline Bar Graph (Orange) */}
          <div className="flex items-end gap-1.5 h-12">
            <span className="w-2 rounded-full bg-orange-300 h-8"></span>
            <span className="w-2 rounded-full bg-orange-400 h-10"></span>
            <span className="w-2 rounded-full bg-orange-500 h-6"></span>
            <span className="w-2 rounded-full bg-orange-400 h-12"></span>
            <span className="w-2 rounded-full bg-orange-500 h-9"></span>
            <span className="w-2 rounded-full bg-orange-600 h-11"></span>
          </div>
        </div>

      </div>

      {/* 🔹 ROW 3: Recent Enquiries Table (Left) & Quick Links Navigation (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Recent Enquiries Table (2/3 width) */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xs flex flex-col justify-between space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Recent Student Enquiries</h3>
              <p className="text-xs text-gray-500 font-medium">Latest incoming inquiries requiring administrative review</p>
            </div>
            <Link
              href="/admin/enquiries"
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1"
            >
              View all <ChevronRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-gray-100 text-slate-500 text-[11px] font-bold uppercase tracking-wider">
                  <th className="py-3 px-4">Student Name</th>
                  <th className="py-3 px-4">Subject / Course</th>
                  <th className="py-3 px-4">Phone / Contact</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                {stats.recentEnquiries.map((enquiry) => (
                  <tr key={enquiry._id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-gray-900">
                      <div>{enquiry.name}</div>
                      <div className="text-[10px] font-normal text-gray-400">{enquiry.email}</div>
                    </td>
                    <td className="py-3.5 px-4 text-gray-600 font-medium">
                      {enquiry.subject}
                    </td>
                    <td className="py-3.5 px-4 text-gray-500 font-mono text-[11px]">
                      {enquiry.phone}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wide ${
                        enquiry.status === "resolved"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}>
                        {enquiry.status === "resolved" ? "Paid / Resolved" : "Pending"}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link href="/admin/enquiries" className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 inline-block transition-colors">
                        <EllipsisVerticalIcon className="w-4 h-4" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Navigation & Applications Hub (1/3 width) */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">Quick Navigation</h3>
          </div>

          {/* Time Period Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 text-xs font-bold text-gray-500">
            <button
              onClick={() => setActiveTab("7days")}
              className={`flex-1 py-1.5 rounded-lg transition-all ${activeTab === "7days" ? "bg-white text-gray-900 shadow-xs" : "hover:text-gray-900"}`}
            >
              Top 7 days
            </button>
            <button
              onClick={() => setActiveTab("30days")}
              className={`flex-1 py-1.5 rounded-lg transition-all ${activeTab === "30days" ? "bg-white text-gray-900 shadow-xs" : "hover:text-gray-900"}`}
            >
              Top 30 days
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`flex-1 py-1.5 rounded-lg transition-all ${activeTab === "all" ? "bg-white text-gray-900 shadow-xs" : "hover:text-gray-900"}`}
            >
              All time
            </button>
          </div>

          {/* Tool Links List */}
          <div className="space-y-4 pt-2">
            <Link
              href="/admin/programs"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/80 border border-gray-100 hover:bg-white hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <AcademicCapIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Academic Programs</h4>
                  <p className="text-[10px] text-gray-400 font-medium">24 active courses</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                Active
              </span>
            </Link>

            <Link
              href="/admin/events"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/80 border border-gray-100 hover:bg-white hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <CalendarIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 group-hover:text-rose-600 transition-colors">Event Calendar</h4>
                  <p className="text-[10px] text-gray-400 font-medium">{stats.totalEvents} recorded events</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                Live
              </span>
            </Link>

            <Link
              href="/admin/site-info"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/80 border border-gray-100 hover:bg-white hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Cog6ToothIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Site Info & Settings</h4>
                  <p className="text-[10px] text-gray-400 font-medium">Contact, map & session config</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md">
                Configured
              </span>
            </Link>

            <Link
              href="/admin/program-types"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/80 border border-gray-100 hover:bg-white hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  <BuildingOffice2Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Program Types & Order</h4>
                  <p className="text-[10px] text-gray-400 font-medium">{stats.totalProgramTypes} types ordered</p>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                Ordered
              </span>
            </Link>
          </div>
        </div>

      </div>

      {/* 🔹 ROW 4: Regional Distribution, Top Officers & Progress Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
        
        {/* Top Enquiring States */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-gray-100 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-gray-900">Top Enquiring States</h3>
          <div className="space-y-3 pt-1">
            {stats.topRegions.map((region, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5 font-bold text-gray-800">
                  <span className="text-base">{region.flag}</span>
                  <span>{region.name}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-500 font-medium">
                  <span>📱 {region.enquiries}</span>
                  <span className="font-bold text-gray-900">🎓 {region.applications}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Contacted Departments */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-gray-100 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-gray-900">Top Department Contacts</h3>
          <div className="space-y-3.5 pt-1">
            {stats.topOfficers.map((officer, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700 text-xs border border-slate-200">
                    {officer.name.split(" ")[0][0]}{officer.name.split(" ")[1]?.[0] || ""}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">{officer.name}</h4>
                    <p className="text-[10px] text-gray-400 font-medium">{officer.role}</p>
                  </div>
                </div>
                <span className="text-lg">{officer.badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Progress Cards (Teal & Blue) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Green Teal Card */}
          <div className="bg-[#004b36] rounded-3xl p-6 text-white shadow-lg flex items-center justify-between flex-1">
            <div className="space-y-1">
              <h3 className="text-2xl font-extrabold">{stats.conversionRate}%</h3>
              <p className="text-xs text-emerald-200 font-medium">Enquiry Conversion Rate</p>
            </div>
            {/* Radial Ring */}
            <div className="w-16 h-16 rounded-full border-4 border-emerald-400/30 border-t-emerald-400 flex items-center justify-center font-extrabold text-sm text-emerald-300">
              {stats.conversionRate}%
            </div>
          </div>

          {/* Blue Teal Card */}
          <div className="bg-[#003768] rounded-3xl p-6 text-white shadow-lg flex items-center justify-between flex-1">
            <div className="space-y-1">
              <h3 className="text-2xl font-extrabold">85%</h3>
              <p className="text-xs text-sky-200 font-medium">Admission Applications Filled</p>
            </div>
            {/* Radial Ring */}
            <div className="w-16 h-16 rounded-full border-4 border-sky-400/30 border-t-sky-400 flex items-center justify-center font-extrabold text-sm text-sky-300">
              85%
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
