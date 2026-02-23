"use client";

import React from "react";

export function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-12 bg-white border border-border-light shadow-soft hover:shadow-premium transition-all group">
       <div className="mb-10 transform group-hover:-translate-y-2 transition-transform duration-300">{icon}</div>
       <h4 className="text-2xl font-black text-text-dark mb-4">{title}</h4>
       <div className="h-1 w-8 bg-accent/20 mb-6 group-hover:w-16 transition-all duration-300" />
       <p className="text-text-muted text-base leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

export function NewsCard({ date, title, img }: { date: string, title: string, img: string }) {
  return (
    <div className="bg-white group cursor-pointer h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden">
       <div className="aspect-4/3 overflow-hidden border-b border-gray-100">
          <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
       </div>
       <div className="p-6 flex flex-col grow">
         <div className="text-[14px] font-medium text-gray-500 mb-3">{date}</div>
         <h3 className="text-[17px] font-bold text-gray-900 leading-[1.4] group-hover:text-primary transition-colors line-clamp-3">
           {title}
         </h3>
       </div>
    </div>
  );
}

export function EventCard({ day, monthYear, title, img }: { day: string, monthYear: string, title: string, img: string }) {
  return (
    <div className="relative aspect-square overflow-hidden group cursor-pointer rounded-2xl shadow-xl">
       <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
       <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/20 to-transparent" />
       
       {/* Date Overlay */}
       <div className="absolute top-8 left-8 text-white">
          <div className="text-7xl font-light leading-none mb-1 -ml-1 flex items-start">
            {day}
          </div>
          <div className="text-[15px] font-medium uppercase tracking-[0.2em] opacity-90">{monthYear}</div>
       </div>

       {/* Title at Bottom */}
       <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="h-0.5 w-12 bg-accent mb-6 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
          <span className="text-xl md:text-xl font-normal text-white leading-tight group-hover:text-white transition-colors duration-300">
            {title}
          </span>
       </div>
    </div>
  );
}

export function ProgramCard({ title, code, tag }: { title: string, code: string, tag: string }) {
  return (
    <div className="p-10 bg-white/5 border border-white/10 hover:border-accent-soft transition-all group rounded-2xl">
       <div className="flex justify-between items-start mb-12">
          <div className="h-14 w-14 bg-white text-primary rounded-xl flex items-center justify-center text-xl font-black shadow-premium">{code[0]}</div>
          <span className="px-4 py-1 bg-accent/20 text-accent-soft text-[10px] font-black uppercase tracking-widest rounded-full">{tag}</span>
       </div>
       <h4 className="text-2xl font-black mb-4">{title}</h4>
       <p className="text-text-muted-dark text-sm font-medium mb-10 leading-relaxed">Prepare for a global career in the evolving landscape of rural economies.</p>
       <div className="flex items-center gap-2 text-white font-black text-xs tracking-widest uppercase group-hover:text-accent-soft transition-colors cursor-pointer">
          Learn More
       </div>
    </div>
  );
}
