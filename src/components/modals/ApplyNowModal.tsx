"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const COURSES = [
  "Vocational training",
  "Diploma",
  "Certificate",
  "Postgraduate",
  "Short-term Training"
];

export default function ApplyNowModal() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const isOpen = pathname === "/apply-now";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "", // This will be the selected course
    message: "",
    agree: false
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const programFromUrl = searchParams.get("program");

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        // If the URL program is in our courses list, use it; otherwise just set it.
        subject: programFromUrl || COURSES[0]
      }));
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, programFromUrl]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleClose = () => {
    router.back();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      setErrorMessage("Please agree to receive information.");
      return;
    }
    
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject, // Value from the dropdown
          message: formData.message
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error.");
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="absolute inset-0" 
        onClick={handleClose}
      />
      
      <div className="relative w-full max-w-lg mx-4 bg-white shadow-2xl rounded-sm overflow-hidden animate-in zoom-in duration-300 origin-center max-h-[90vh] overflow-y-auto custom-scrollbar">
        {/* Header - Red as per image */}
        <div className="bg-[#ba303b] text-white py-4 px-6 relative">
          <h2 className="text-lg md:text-xl font-medium text-center uppercase tracking-tighter">
            ENQUIRE NOW/APPLY NOW
          </h2>
          <button 
          title="Close"
            onClick={handleClose}
            className="absolute top-1/2 bg-gray-300/50 p-0.5 rounded-lg cursor-pointer -translate-y-1/2 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="w-full h-64 relative flex items-center justify-center mx-auto mb-6">
               <Image src="/EnquirySubmit.png" alt="Success" className="w-full h-full object-contain" fill />
              </div>
              <h3 className="text-2xl font-bold text-[#21325b] mb-4">Inquiry Received!</h3>
              <p className="text-gray-600 mb-8">
                Thank you for applying. Our team will contact you soon.
              </p>
              {/* <button 
                onClick={handleClose}
                className="bg-[#21325b] text-white px-8 py-3 rounded-sm font-bold uppercase text-sm tracking-widest shadow-lg active:scale-95 transition-all"
              >
                Close
              </button> */}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4 pb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#ba303b] transition-colors"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#ba303b] transition-colors"
                />

                <div className="flex items-center gap-2 border-b border-gray-300">
                  
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Mobile Number *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full py-3 text-sm focus:outline-none"
                  />
                </div>

                {/* Course Selection Dropdown - Value mapped to Subject */}
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-400 font-bold uppercase tracking-widest pl-1">Course Applied For * (Subject)</label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#ba303b] appearance-none"
                    style={{ background: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><path fill=\"gray\" d=\"M5.5 8l4.5 4.5 4.5-4.5z\"/></svg>') no-repeat right 5px center" }}
                  >
                    <option value="" disabled>Select Course *</option>
                    {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
                    {/* Add fallback for dynamically passed programs from URL that might not be in the list */}
                    {programFromUrl && !COURSES.includes(programFromUrl) && (
                      <option value={programFromUrl}>{programFromUrl}</option>
                    )}
                  </select>
                </div>

                <textarea
                  name="message"
                  rows={3}
                  placeholder="Any other details (optional)"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-[#ba303b] transition-colors resize-none"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mt-1"
                />
                <label htmlFor="agree" className="text-[10px] text-gray-500 leading-tight">
                  I agree to receive information regarding my submitted enquiry by signing up on CVRU Khandwa - NLRI RATLAM *
                </label>
              </div>

              {status === "error" && (
                <p className="text-red-500 text-xs font-bold text-center">{errorMessage}</p>
              )}

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#ba303b] hover:bg-[#a02831] text-white py-4 font-black uppercase text-sm tracking-widest shadow-xl active:scale-95 transition-all disabled:opacity-70 rounded-full"
                >
                  {status === "loading" ? "SUBMITTING..." : "SUBMIT"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
