import React from 'react';

export default function ResearchOverview() {
  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="academic-section-title text-center md:text-left!">
            Overview
          </h2>
          
          <div className="space-y-4 md:space-y-6 text-sm md:text-base text-slate-600 leading-relaxed text-justify md:text-left">
            <p>
              The Research and Development Cell (RDC) serves as a catalyst for fostering collaborations across various academic disciplines within our institution and with external organisations. Our primary goal is to create an enabling environment for the advancement of cutting-edge knowledge that can address global challenges.
            </p>
            <p>
              The RDC promotes intra, inter and transdisciplinary associations among internal schools as well as external organisations, that provide a conducive environment for new, progressive knowledge enhancement that contributes to solving challenges being faced by the world.
            </p>
            <p>
              As per the guidelines provided to all Higher Education Institutes (HEIs), RDC is specifically setup to provide specialised administrative and managerial support for the operation of sponsored research projects and other related R&D activities. The cell works towards long-term knowledge development with a focus on applied research geared towards providing solutions to the public and private sector. The aim of the cell is to provide a creative and supportive environment in which ideas can be generated, nurtured, and flourished.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
