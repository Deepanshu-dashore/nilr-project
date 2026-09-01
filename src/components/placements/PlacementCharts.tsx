"use client";

import React, { useState } from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const yearlyData = [
  { year: "2018-19", companies: 38,  offers: 54,  avgPkg: 3.2, highPkg: 5.8 },
  { year: "2019-20", companies: 52,  offers: 74,  avgPkg: 4.1, highPkg: 7.2 },
  { year: "2020-21", companies: 61,  offers: 89,  avgPkg: 4.8, highPkg: 8.5 },
  { year: "2021-22", companies: 89,  offers: 128, avgPkg: 5.9, highPkg: 9.6 },
  { year: "2022-23", companies: 118, offers: 172, avgPkg: 7.2, highPkg: 11.4 },
  { year: "2023-24", companies: 160, offers: 234, avgPkg: 8.5, highPkg: 14.2 },
  { year: "2024-25", companies: 210, offers: 310, avgPkg: 10.2, highPkg: 18.5 },
];

const sectorData = [
  { name: "Agribusiness", value: 32, fill: "#0d1a63" },
  { name: "Rural Banking", value: 24, fill: "#1e40af" },
  { name: "CSR & NGO",     value: 18, fill: "#ff9900" },
  { name: "Agri-Tech",     value: 14, fill: "#f59e0b" },
  { name: "FMCG & Retail", value: 12, fill: "#94a3b8" },
];

const packageBands = [
  { name: "< 4 LPA",  value: 8,  fill: "#e2e8f0" },
  { name: "4-6 LPA",  value: 28, fill: "#93c5fd" },
  { name: "6-8 LPA",  value: 35, fill: "#3b82f6" },
  { name: "8-12 LPA", value: 22, fill: "#1e40af" },
  { name: "12+ LPA",  value: 7,  fill: "#0d1a63" },
];

const ComboTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xl p-3 text-xs min-w-[160px]">
      <p className="font-bold text-slate-800 mb-2">{label}</p>
      {payload.map((p: any, i: number) => (
        <div key={i} className="flex items-center justify-between gap-4 mb-1">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: p.color }} />
            <span style={{ color: p.color }}>{p.name}</span>
          </span>
          <span className="font-semibold text-slate-700">
            {p.name === "Avg Pkg" || p.name === "High Pkg" ? `Rs.${p.value}L` : p.value}
          </span>
        </div>
      ))}
    </div>
  );
};

const PieTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xl p-3 text-xs">
      <p className="font-bold text-slate-800">{payload[0].name}</p>
      <p className="text-slate-500 mt-0.5">{payload[0].value}% of placements</p>
    </div>
  );
};

const TABS = ["Recruitment Growth", "Package Trends", "Sector Split"] as const;
type Tab = typeof TABS[number];

export default function PlacementCharts() {
  const [activeTab, setActiveTab] = useState<Tab>("Recruitment Growth");

  return (
    <div className="space-y-8">


      {/* Tab Switcher */}
      <div className="flex gap-2 bg-slate-100 p-1 rounded-xl w-fit">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
              activeTab === tab ? "bg-white text-[#0d1a63] shadow-sm" : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Chart Area */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">

        {activeTab === "Recruitment Growth" && (
          <div>
            <p className="text-xs text-slate-500 font-medium mb-6">Number of companies recruited and total offers per academic year</p>
            <ResponsiveContainer width="100%" height={320}>
              <ComposedChart data={yearlyData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="barGradA" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1e40af" />
                    <stop offset="100%" stopColor="#0d1a63" />
                  </linearGradient>
                  <linearGradient id="barGradB" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#93c5fd" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.9} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} width={36} />
                <Tooltip content={<ComboTooltip />} cursor={{ fill: "#f8fafc" }} />
                <Legend iconType="square" iconSize={10} wrapperStyle={{ fontSize: 11, paddingTop: 16 }} />
                <Bar dataKey="companies" name="Companies" fill="url(#barGradA)" radius={[6, 6, 0, 0]} barSize={28} />
                <Bar dataKey="offers"    name="Offers"    fill="url(#barGradB)" radius={[6, 6, 0, 0]} barSize={20} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeTab === "Package Trends" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-xs text-slate-500 font-medium mb-5">Average vs. Highest CTC trend (Rs. LPA)</p>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={yearlyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="avgFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor="#0d1a63" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#0d1a63" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="highFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor="#ff9900" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#ff9900" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="4 4" stroke="#f1f5f9" vertical={false} />
                  <XAxis dataKey="year" tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: "#94a3b8" }} axisLine={false} tickLine={false} width={40} tickFormatter={(v) => `Rs.${v}L`} />
                  <Tooltip content={<ComboTooltip />} cursor={{ stroke: "#e2e8f0", strokeWidth: 1 }} />
                  <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
                  <Area type="monotone" dataKey="highPkg" name="High Pkg" stroke="#ff9900" strokeWidth={2.5} fill="url(#highFill)" dot={{ r: 4, fill: "#ff9900", strokeWidth: 2, stroke: "#fff" }} />
                  <Area type="monotone" dataKey="avgPkg"  name="Avg Pkg"  stroke="#0d1a63" strokeWidth={2.5} fill="url(#avgFill)"  dot={{ r: 4, fill: "#0d1a63", strokeWidth: 2, stroke: "#fff" }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div>
              <p className="text-xs text-slate-500 font-medium mb-5">Package band distribution (2024-25)</p>
              <div className="space-y-3 pt-2">
                {packageBands.map((band, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[11px] font-semibold text-slate-600 w-16 shrink-0">{band.name}</span>
                    <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${band.value}%`, background: band.fill }} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 w-8 text-right">{band.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "Sector Split" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-xs text-slate-500 font-medium mb-2">Placement distribution by sector (2024-25)</p>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie data={sectorData} cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={3} dataKey="value">
                    {sectorData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} stroke="white" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip content={<PieTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              {sectorData.map((s, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-sm shrink-0" style={{ background: s.fill }} />
                    <span className="text-sm font-semibold text-slate-700">{s.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-20 bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${s.value}%`, background: s.fill }} />
                    </div>
                    <span className="text-sm font-black text-slate-800 w-8 text-right">{s.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      <p className="text-center text-[11px] text-slate-400 font-medium tracking-wide">
        * Campus placement figures from 2018-19 to 2024-25. Source: NIRM Placement Cell.
      </p>

    </div>
  );
}
