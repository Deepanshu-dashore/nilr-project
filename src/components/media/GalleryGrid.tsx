"use client";

import React, { useState } from 'react';
import { PhotoIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface GalleryImage {
  _id: string;
  url: string;
  title: string;
}

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.length > 0 ? images.map((img, idx) => (
          <div 
            key={img._id} 
            onClick={() => setSelectedImage(idx)}
            className={`${idx === 0 ? 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto' : 'aspect-square'} rounded-lg overflow-hidden bg-slate-200 shadow-sm relative group cursor-pointer`}
          >
            {img.url ? (
              <img src={img.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={img.title} />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300">
                <PhotoIcon className="w-10 h-10" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 md:p-8">
              <p className="text-white font-bold text-sm md:text-base line-clamp-1">{img.title}</p>
              <p className="text-white/60 text-xs mt-1">Campus Highlights</p>
            </div>
          </div>
        )) : (
          <div className="col-span-full py-20 text-center bg-slate-50 rounded-3xl border border-slate-200 text-slate-400">
            No gallery images captured yet.
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <XMarkIcon className="w-8 h-8" />
          </button>

          <button 
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/10"
            onClick={prev}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button 
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/10"
            onClick={next}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full max-h-[80vh] flex flex-col items-center">
            <img 
              src={images[selectedImage].url} 
              alt={images[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-500"
            />
            <div className="mt-8 text-center">
              <h4 className="text-white text-xl font-bold">{images[selectedImage].title}</h4>
              <p className="text-white/50 text-sm mt-1">{selectedImage + 1} of {images.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
