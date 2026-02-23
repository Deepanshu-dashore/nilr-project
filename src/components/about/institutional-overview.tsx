"use client";

import React from "react";
import { aboutData } from "@/src/data/about-data";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function InstitutionalOverview() {
  return (
    <section id="overview" className="section-padding bg-white relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="space-y-4 text-left">
               <h2 className="academic-section-title text-left!">
                {aboutData.intro.title.split(' ').map((word, i) => 
                  word === 'NLRI' || word === 'CVRUK' ? <span key={i} className="text-primary italic font-serif serif-italic">{word} </span> : word + ' '
                )}
               </h2>
            </div>
            
            <div className="relative">
              {/* <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/20 rounded-full" /> */}
              <p className="space-y-6 text-lg text-text-muted font-medium leading-relaxed py-2">
                {aboutData.intro.content}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {aboutData.intro.highlights.map((highlight, index) => (
                <div key={index} className="flex gap-4 items-center group p-4 rounded-2xl border bg-gray-50 border-gray-200/80 transition-all duration-300">
                  <div className="h-8 w-8 rounded-lg shadow-sm flex items-center justify-center shrink-0 border border-gray-100 bg-primary transition-all">
                    <ChevronRightIcon className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-bold text-[13px] text-gray-700 uppercase tracking-wider">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

           <div className="flex-1 w-full relative">
             <div className="relative rounded-xl overflow-hidden shadow-2xl group border border-gray-100">
               <img 
                 src="/campus-img/campusDron-2.jpeg" 
                 alt="CVRUK NLRI Aerial View" 
                 className="w-full h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
               
               {/* New SVG + Card Overlay */}
               <div className="w-full px-4 md:px-8 py-6 md:py-10 flex items-end justify-end absolute bottom-0 right-0 gap-0">
                  <div className="relative z-10 -mr-px">
                    <svg xmlns="http://www.w3.org/2000/svg" className="border-primary border-b-[3px] h-20 w-20 md:h-26 md:w-26" viewBox="0 0 82 95">
                      <defs>
                          <linearGradient id="linear-gradient" x1="0.5" x2="0.834" y2="0.57" gradientUnits="objectBoundingBox">
                          <stop offset="0" stopColor="#fff"/>
                          <stop offset="1" stopColor="#fff"/>
                          </linearGradient>
                          <clipPath id="clip-path">
                          <rect id="Rectangle_1122" data-name="Rectangle 1122" width="82" height="100" transform="translate(23421.109 21495.506)" fill="url(#linear-gradient)"/>
                          </clipPath>
                      </defs>
                      <g id="Mask_Group_2" data-name="Mask Group 2" transform="translate(-23421.109 -21495.506)" clipPath="url(#clip-path)">
                          <path id="Path_731" data-name="Path 731" d="M-444.826-445.357l20.884-3.518-8.206,19.075Zm-12.616,20.819,21.109-3.447-13.1-16.073Zm36.629,20.2,11.361-19.462h-19.685ZM-477-456.89v3.544l2.332-3.544Zm15.939,29.786,8.033-19.575-20.325-.011Zm41.815-29.786h-1.982l.881,1.5Zm-28.177,52.364,11.855-18.983-21.561,3.521Zm48.8-52.364H-413.81l-2.711,3.683,24.4,4.3ZM-443.5-402.57h18.741l-7.619-17.811Zm-29.772,0h21.934l-9.6-15.3Zm56.9-46.34,10.453,18.266,13.256-14.088Zm27.3,50.888h-27.461l10.532,17.482Zm-16.661-23.493L-416.8-402.57h28.569Zm-22.323-6.828h18.446l-10.53-18.4Zm4.007-24.778-2.219-3.768h-13.7l-6.2,7.5Zm-27.424,55.1H-473.2l12.207,15.228Zm4.071,1.711-9.525,15.253,21.275,3.462Zm26.829.02-7.96,19.115h19.476Zm-3.962-1.731H-443.34l11.3,18Zm40.683-58.868h-9.1l5.128,6.29Zm4.842,67.426v-8.558h-8.324Zm0-13.107v-9.278L-388-402.57Zm-66.661-54.32h-5.754l1.875,4.688Zm31.873,95h15.184l-7.98-9.789Zm20.849,0h9.1l4.842-7.671v-3.066h-22.692Zm9.213-87.078,4.726-.732v-6.756Zm-4.3,40.109,9.023-9.336v-5.6H-401.85Zm9.023-29.971v-6.548l-5.152.8Zm-9.441-3.937-13.573,14.425h23.014v-4.342l-.213.215Zm-14.662,65.592h24.1v-5.957l-9.187-9.446ZM-477-422.472v17.527l12.269-15.22Zm0,26.726v17.519l12.085-2.443Zm0-48.553v17.208l12.245,2.3Zm20.9-12.591h-13.343l-3.942,5.991,19.681.01Zm28.549,84.262,6.324,10.738h1.982l7.9-10.738Zm-12.431,10.738h13.7l-5.7-9.675Zm-17.3-14.622,5.85,14.622h5.754l9.285-11.223ZM-477-373.6v11.706h2.332l9.243-14.049Zm7.556,11.706H-456.1l-5.04-12.621Z" transform="translate(23898.625 21952.398)" fill="url(#linear-gradient)"/>
                      </g>
                    </svg>
                  </div>

                  <div className="bg-white/95 backdrop-blur-md border-primary border-b-[3px] rounded-r-lg shadow-xl p-5 md:p-6 text-left w-full max-w-sm overflow-hidden">
                    <h3 className="text-xl md:text-2xl font-black text-primary mb-1">
                      Institutional Campus
                    </h3>
                    <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">Lush 10-Hectare Learning Environment</p>
                  </div>
               </div>
             </div>
             
             {/* Soft decorative shadow rings */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl -z-10" />
             <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl -z-10" />
           </div>
        </div>
      </div>
    </section>
  );
}
