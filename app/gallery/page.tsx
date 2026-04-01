"use client";

import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import Image from "next/image";
import { PhotoIcon, VideoCameraIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { getUrls } from "@/app/lib/utils/geturl";
import { useSearchParams } from "next/navigation";

interface GalleryItem {
  _id: string;
  name: string;
  url: string;
  type: "image" | "video";
}

function GalleryContent() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [activeTab] = useState<"image">("image");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("/api/gallery");
        if (res.data.success) {
          // Filter to only include images for the public gallery
          const onlyImages = res.data.data.filter((item: GalleryItem) => item.type === "image");
          setItems(onlyImages);
        }
      } catch (err) {
        console.error("Failed to fetch gallery items:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, []);

  const filteredItems = items;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section - Only show if data exists or loading */}
      {(isLoading || items.length > 0) && (
        <section className="bg-slate-900 relative text-white py-12 md:py-16 overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center  "
            style={{ backgroundImage: "url('/HeaderBg.png')" }}
          />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <PhotoIcon className="w-4 h-4 text-indigo-400" />
              <span className="text-[10px] font-bold tracking-widest text-indigo-300 capitalize">
                CAMPUS VISUALS
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Campus Gallery</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              Explore the vibrant life and infrastructure of the National Livelihood Research Institute.
            </p>
          </div>
        </section>
      )}


      {/* Main Content */}
      <div className={`container mx-auto px-4 ${(!isLoading && items.length === 0) ? 'py-24' : 'py-12'}`}>
        {/* Tabs - Video Tab Hidden */}
        {/* <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-white border border-slate-200 rounded-2xl shadow-sm">
            <div
              className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold bg-indigo-600 text-white shadow-md shadow-indigo-200`}
            >
              <PhotoIcon className="w-5 h-5" />
              Photo Gallery
            </div>
          </div>
        </div> */}

        {/* Grid Area */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse border border-slate-100">
                <div className="aspect-4/3 bg-slate-200" />
                <div className="p-6">
                  <div className="h-4 bg-slate-200 rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {filteredItems.map((item,index) => (
              <div 
                key={item._id+index} 
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col h-full"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={item.url}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 py-3 flex flex-col grow">
                  <h3 className="text-base font-medium! text-slate-700 line-clamp-2 leading-snug">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
         ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-300">
             <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-50 text-slate-300 rounded-full mb-4">
                <PhotoIcon className="w-10 h-10" />
             </div>
             <h3 className="text-xl font-bold text-slate-800">Media Content Currently Unavailable</h3>
             <p className="text-slate-500 mt-2 max-w-sm mx-auto">We are currently curating and uploading new visual content for this category. Please check back soon.</p>
          </div>
        ) }
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={
       <div className="min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
       </div>
    }>
      <GalleryContent />
    </Suspense>
  );
}
