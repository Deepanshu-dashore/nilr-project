"use client";

import React from "react";
import { 
  UsersIcon, 
  AcademicCapIcon, 
  BanknotesIcon, 
  ArrowUpRightIcon, 
  SparklesIcon
} from "@heroicons/react/24/outline";

export default function DashboardPage() {
  const stats = [
    { name: "Total Students", value: "2,481", increase: "+12%", icon: AcademicCapIcon, color: "text-primary" },
    { name: "New Admissions", value: "148", increase: "+5%", icon: SparklesIcon, color: "text-accent" },
    { name: "Course Enrollment", value: "85%", increase: "+2%", icon: UsersIcon, color: "text-primary-dark" },
    { name: "Total Revenue", value: "₹4.2M", increase: "+8%", icon: BanknotesIcon, color: "text-green-600" },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
      
      {/* Top Banner with Glassmorphism */}
      <section className="relative h-64 rounded-[40px] overflow-hidden shadow-premium group">
         <div className="absolute inset-0 bg-primary/95 group-hover:scale-105 transition-transform duration-1000"></div>
         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-full bg-accent/20 rounded-full blur-[120px]"></div>
         <div className="absolute inset-0 z-10 p-12 flex flex-col justify-end">
            <h1 className="text-4xl font-heading font-black text-white tracking-tight mb-2">Welcome Back, Admin</h1>
            <p className="text-white/60 text-lg font-medium">Monitoring the pulse of NLRI-CVRUK Institutional Strength</p>
         </div>
         <div className="absolute top-10 right-10 z-20">
            <div className="bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20 text-white font-bold text-sm">
               Live: 20 Mar 2026
            </div>
         </div>
      </section>

      {/* Basic Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
         {stats.map((stat) => (
           <div 
             key={stat.name} 
             className="bg-white p-8 rounded-[32px] shadow-soft border border-border-light hover:shadow-premium transition-all duration-300 group hover:-translate-y-2"
           >
              <div className="flex justify-between items-start mb-6">
                 <div className={`p-4 rounded-2xl bg-bg-section group-hover:scale-110 transition-transform ${stat.color} border border-border-light`}>
                    <stat.icon className="h-6 w-6" />
                 </div>
                 <span className="text-green-500 font-black text-xs bg-green-50 px-2 py-1 rounded-full">{stat.increase}</span>
              </div>
              <p className="text-text-muted text-sm font-bold uppercase tracking-widest mb-1">{stat.name}</p>
              <h3 className="text-3xl font-heading font-black text-primary">{stat.value}</h3>
           </div>
         ))}
      </section>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Recent Admissions (Dummy Table) */}
          <div className="lg:col-span-2 bg-white rounded-[40px] p-10 border border-border-light shadow-soft">
             <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-black text-primary font-heading">Recent Admissions</h3>
                <button className="text-sm font-bold text-primary px-4 py-2 hover:bg-bg-section rounded-xl transition-colors">View All &rarr;</button>
             </div>
             <div className="space-y-6">
               {[
                 { id: 1, name: "Arjun Singh", code: "MBA-2026-001", status: "Approved", time: "2h ago" },
                 { id: 2, name: "Priya Sharma", code: "SRM-2026-042", status: "Pending", time: "5h ago" },
                 { id: 3, name: "Rahul Patel", code: "DCP-2026-118", status: "Approved", time: "Yesterday" },
               ].map((item) => (
                 <div key={item.id} className="flex items-center justify-between p-6 rounded-3xl bg-bg-section border border-border-light group cursor-pointer hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-5">
                       <div className="w-12 h-12 rounded-2xl bg-white border border-border-light flex items-center justify-center font-black text-primary">
                          {item.name[0]}
                       </div>
                       <div>
                          <p className="font-bold text-primary group-hover:text-accent transition-colors">{item.name}</p>
                          <p className="text-[10px] uppercase font-black tracking-widest text-text-muted">{item.code}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className={`text-[10px] font-black uppercase mb-1 px-3 py-1 rounded-full inline-block ${item.status === "Approved" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {item.status}
                       </p>
                       <p className="text-[11px] font-bold text-text-muted/60">{item.time}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Quick Actions (Sidebar Cards) */}
          <div className="space-y-8">
             <div className="bg-primary rounded-[40px] p-10 text-white shadow-premium relative overflow-hidden group">
                <div className="relative z-10">
                   <h3 className="text-xl font-heading font-black mb-4">Export Reports</h3>
                   <p className="text-white/60 text-sm mb-8 leading-relaxed font-medium">Download the latest campus analytics for the current quarter in PDF format.</p>
                   <button className="w-full py-4 bg-white text-primary rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:shadow-lg active:scale-95 group">
                      Get Latest PDF <ArrowUpRightIcon className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                </div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[80px]"></div>
             </div>

             <div className="bg-white rounded-[40px] p-10 border-2 border-dashed border-border-light flex flex-col items-center justify-center min-h-64 group cursor-pointer hover:border-primary/20 transition-all">
                <div className="w-16 h-16 rounded-full bg-bg-section flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   <SparklesIcon className="h-8 w-8 text-primary/40" />
                </div>
                <p className="text-sm font-black text-primary/40 uppercase tracking-widest">Create New Entry</p>
             </div>
          </div>

      </div>
    </div>
  );
}
