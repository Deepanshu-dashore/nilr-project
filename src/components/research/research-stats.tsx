import React from 'react';

const stats = [
  { value: '₹140+M', label: 'Research Grants Received' },
  { value: '6000+', label: 'Research Publications' },
  { value: '100+', label: 'Books Published' },
  { value: '170+', label: 'Patents Granted' },
  { value: '250+', label: 'Patents Published' },
];

export default function ResearchStats() {
  return (
    <section className="py-10 md:py-16 bg-slate-50 border-y border-slate-100 mb-12 animate-in fade-in zoom-in-95 duration-700">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 divide-x-0 lg:divide-x lg:divide-slate-200">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center text-center px-2"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 tracking-tight drop-shadow-xs">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider max-w-[150px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
