"use client";

export default function ResearchExcellence() {
  return (
    <section className="section-padding bg-bg-section border-y border-border-light">
      <div className="container-wide">
        <div className="mb-20">
          <h2 className="academic-section-title">Research</h2>
          <p className="academic-section-subtitle">Pushing the frontiers of knowledge to create real-world impact.</p>
          <p className="academic-section-text">
            CVRUK-NLRI encourages research in practically every domain, and endeavours to develop human knowledge through insight driven investigations, inventions and understanding to create solutions for critical world problems. Fostering the spirit of curiosity and building world-class research ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-accent font-black tracking-widest uppercase text-xs mb-4 block italic">Knowledge Statistics</span>
            <div className="grid grid-cols-2 gap-10 mt-8">
              <div className="space-y-2">
                 <div className="text-4xl font-black text-primary">6000 +</div>
                 <div className="text-[10px] font-black text-text-muted tracking-widest uppercase">Research Publications</div>
              </div>
              <div className="space-y-2">
                 <div className="text-4xl font-black text-primary">540 +</div>
                 <div className="text-[10px] font-black text-text-muted tracking-widest uppercase">Patents Awarded</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {[1, 2, 3, 4].map(idx => (
               <div key={idx} className="aspect-square bg-white rounded-3xl overflow-hidden border border-border-light shadow-soft relative group">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                     <span className="text-[10px] font-black text-text-muted/40 uppercase tracking-widest text-center">Research Focus Area {idx}</span>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
