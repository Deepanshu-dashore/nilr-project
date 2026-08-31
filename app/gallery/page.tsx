"use client";

import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import Image from "next/image";
import Hero from "@/src/components/shared/hero";
import { PhotoIcon, VideoCameraIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { getUrls } from "@/app/lib/utils/geturl";
import { useSearchParams } from "next/navigation";
import { API_ENDPOINTS } from "@/src/config/api.config";

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
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(API_ENDPOINTS.GALLERY.GET_ALL);
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
        <Hero
          tag="CAMPUS VISUALS"
          tagIcon={PhotoIcon}
          title="Our Campus Gallery"
          subtitle="Explore the vibrant life and infrastructure of the National Institute of Rural Management (NIRM)."
        />
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
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedImage(item)}
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
                  <h3 className="text-base capitalize font-medium! text-slate-700 line-clamp-2 leading-snug">
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

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute cursor-pointer top-6 right-6 p-2.5 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 z-[110] group"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Close modal"
          >
            <XMarkIcon className="w-7 h-7 group-hover:rotate-90 transition-transform duration-300" />
          </button>
          
          <div 
            className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
               <div className="relative w-full h-[70vh] md:h-[80vh]">
                  <Image
                    src={selectedImage.url}
                    alt={selectedImage.name}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
               </div>
            </div>
            {selectedImage.name && (
              <div className="mt-6 text-center max-w-2xl px-4">
                <h3 className="text-white text-lg md:text-xl font-medium tracking-tight">
                  {selectedImage.name}
                </h3>
              </div>
            )}
          </div>
        </div>
      )}
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
