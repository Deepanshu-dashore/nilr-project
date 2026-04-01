"use client";

import React from "react";
import Link from "next/link";

export default function ApplyNowPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-serif font-bold text-[#21325b]">Admissions 2026</h1>
        <p className="text-gray-600">
          The admission form should open automatically. If not, please click the button below.
        </p>
        <div className="pt-4">
           <Link 
             href="/admissions" 
             className="inline-block bg-[#21325b] text-white px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest shadow-lg hover:bg-opacity-90 transition-all"
           >
             Go to Admissions
           </Link>
        </div>
      </div>
    </div>
  );
}
