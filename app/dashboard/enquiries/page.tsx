"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrashIcon, EyeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { API_ENDPOINTS } from "@/src/config/api.config";

interface Enquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const fetchEnquiries = async () => {
    try {
      const response = await axios.get(API_ENDPOINTS.ENQUIRY.GET_ALL);
      if (response.data.success) {
        setEnquiries(response.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch enquiries:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return;
    setIsDeleting(id);
    try {
      const response = await axios.delete(API_ENDPOINTS.ENQUIRY.DELETE(id));
      if (response.data.success) {
        setEnquiries((prev) => prev.filter((enq) => enq._id !== id));
      }
    } catch (error) {
      console.error("Failed to delete enquiry:", error);
      alert("Failed to delete enquiry");
    } finally {
      setIsDeleting(null);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 space-y-8">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-black text-primary tracking-tight">Enquiries</h1>
          <p className="text-text-muted mt-1 text-sm font-medium">Manage and review all contact queries from the website.</p>
        </div>
        <div className="bg-white px-4 py-2 rounded-xl shadow-soft border border-border-light text-sm font-bold text-primary">
          Total: <span className="text-accent">{enquiries.length}</span>
        </div>
      </div>

      {/* Enquiries Table */}
      <div className="bg-white rounded-[32px] border border-border-light shadow-soft overflow-hidden">
        {isLoading ? (
          <div className="p-16 flex justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        ) : enquiries.length === 0 ? (
          <div className="p-16 text-center text-text-muted font-bold">
            No enquiries found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-bg-section border-b border-border-light">
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-muted">Date</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-muted">Name</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-muted">Subject</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-muted text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light">
                {enquiries.map((enquiry) => (
                  <tr key={enquiry._id} className="hover:bg-bg-section/50 transition-colors group">
                    <td className="px-6 py-4 text-sm font-bold text-text-muted">
                      {new Date(enquiry.createdAt).toLocaleDateString('en-IN', {
                        day: '2-digit', month: 'short', year: 'numeric'
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-primary">{enquiry.name}</p>
                      <p className="text-xs text-text-muted mt-0.5">{enquiry.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold whitespace-nowrap">
                        {enquiry.subject}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                      <button
                        onClick={() => setSelectedEnquiry(enquiry)}
                        className="p-2 rounded-xl bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors"
                        title="View Details"
                      >
                        <EyeIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(enquiry._id)}
                        disabled={isDeleting === enquiry._id}
                        className="p-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors disabled:opacity-50"
                        title="Delete Enquiry"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* View Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in transition-opacity">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl p-8 transform animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start mb-6 border-b border-border-light pb-4">
              <div>
                <h3 className="text-2xl font-black text-primary font-heading">Enquiry Details</h3>
                <p className="text-xs font-bold text-text-muted uppercase tracking-widest mt-1">
                  {new Date(selectedEnquiry.createdAt).toLocaleString()}
                </p>
              </div>
              <button 
                onClick={() => setSelectedEnquiry(null)}
                className="p-2 text-text-muted hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-bg-section p-4 rounded-2xl border border-border-light">
                  <p className="text-[10px] font-black uppercase text-text-muted mb-1">Full Name</p>
                  <p className="text-sm font-bold text-primary">{selectedEnquiry.name}</p>
                </div>
                <div className="bg-bg-section p-4 rounded-2xl border border-border-light">
                  <p className="text-[10px] font-black uppercase text-text-muted mb-1">Phone Number</p>
                  <p className="text-sm font-bold text-primary">{selectedEnquiry.phone}</p>
                </div>
              </div>

              <div className="bg-bg-section p-4 rounded-2xl border border-border-light">
                <p className="text-[10px] font-black uppercase text-text-muted mb-1">Email Address</p>
                <p className="text-sm font-bold text-primary">{selectedEnquiry.email}</p>
              </div>

              <div className="bg-accent/5 p-4 rounded-2xl border border-accent/20">
                <p className="text-[10px] font-black uppercase text-accent mb-1">Subject / Program</p>
                <p className="text-sm font-bold text-primary">{selectedEnquiry.subject}</p>
              </div>

              <div className="bg-bg-section p-4 rounded-2xl border border-border-light">
                <p className="text-[10px] font-black uppercase text-text-muted mb-2">Message</p>
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {selectedEnquiry.message}
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
               <button 
                onClick={() => setSelectedEnquiry(null)}
                className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors border border-transparent"
               >
                 Close Overview
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
