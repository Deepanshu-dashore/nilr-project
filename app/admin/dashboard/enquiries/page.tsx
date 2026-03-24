"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrashIcon, EyeIcon, XMarkIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { DataTable, ColumnDef } from "@/src/components/shared/DataTable";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { StatusBadge } from "@/src/components/shared/StatusBadge";

interface Enquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  status: string;
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
      const response = await axios.get("/api/enquiry");
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
      const response = await axios.delete(`/api/enquiry/${id}`);
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

  const handleResolveStatus = async (id: string) => {
    try {
      const response = await axios.put(`/api/enquiry/status/${id}`);
      if (response.data.success) {
        setEnquiries((prev) => 
          prev.map((enq) => enq._id === id ? { ...enq, status: "resolved" } : enq)
        );
        if (selectedEnquiry?._id === id) {
          setSelectedEnquiry({ ...selectedEnquiry, status: "resolved" });
        }
      }
    } catch (error: any) {
      console.error("Failed to update status:", error);
      alert(error.response?.data?.message || "Failed to update status");
    }
  };

  /* 
   Map Enquiries table layout over DataTable
  */
  const columns: ColumnDef<Enquiry>[] = [
    {
       key: "user",
       label: "Name",
       type: "user",
       sortable: true,
       getAvatar: (row) => row.name ? row.name.charAt(0).toUpperCase() : "?",
       getTitle: (row) => row.name,
       getSubtitle: (row) => row.email,
    },
    {
       key: "status",
       label: "Status",
       type: "status",
    },
    {
       key: "phone",
       label: "Phone number",
       type: "text",
       sortable: true,
    },
    {
       key: "subject",
       label: "Subject",
       type: "text",
    },
    {
       key: "createdAt",
       label: "Date",
       type: "date",
       sortable: true,
       getDate: (row) => row.createdAt,
    }
  ];
  console.log(enquiries)

  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 space-y-8 pb-10">
      
      {/* 
        Ultra-modern standard administrative header block 
      */}
      <PageHeader
        title="Enquiry"
        breadcrumbs={[
          { label: "Dashboard", href: "/admin/dashboard" },
          { label: "Enquiry", href: "/admin/dashboard/enquiries" },
          { label: "List" }
        ]}
      />

      {/* Main Datatable Reusable Interface */}
      <DataTable
        data={enquiries}
        columns={columns}
        loading={isLoading}
        searchPlaceholder="Search name, email, or subject..."
        rowKey={(row) => row._id}
        hiddenActions={['edit']}
        onView={(row) => setSelectedEnquiry(row)}
        onDelete={(row) => handleDelete(row._id)}
        additionalActions={[
          {
            label: "Resolve",
            icon: CheckCircleIcon,
            onClick: (row) => handleResolveStatus(row._id)
          }
        ]}
      />

      {/* View Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in transition-opacity">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-2xl p-6 sm:p-8 transform animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6 border-b border-dashed border-gray-200 pb-5">
              <div>
                <h3 className="text-[20px] font-bold text-gray-900 tracking-tight">Enquiry Details</h3>
                <p className="text-[13px] font-medium text-slate-500 mt-1">
                  Submitted on {new Date(selectedEnquiry.createdAt).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}
                </p>
              </div>
              <button 
                onClick={() => setSelectedEnquiry(null)}
                className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                title="Close"
              >
                <XMarkIcon className="w-5 h-5 stroke-[2px]" />
              </button>
            </div>
            
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row border-b border-dashed border-gray-200 hover:bg-gray-50/50 transition-colors">
                <div className="sm:w-1/3 px-5 py-3.5 bg-gray-50/50 text-[13px] font-semibold text-slate-500 flex items-center">Full Name</div>
                <div className="sm:w-2/3 px-5 py-3.5 text-[14px] font-medium text-gray-900">{selectedEnquiry.name}</div>
              </div>
              
              <div className="flex flex-col sm:flex-row border-b border-dashed border-gray-200 hover:bg-gray-50/50 transition-colors">
                <div className="sm:w-1/3 px-5 py-3.5 bg-gray-50/50 text-[13px] font-semibold text-slate-500 flex items-center">Email Address</div>
                <div className="sm:w-2/3 px-5 py-3.5 text-[14px] font-medium text-[#00A76F] hover:underline cursor-pointer">{selectedEnquiry.email}</div>
              </div>
              
              <div className="flex flex-col sm:flex-row border-b border-dashed border-gray-200 hover:bg-gray-50/50 transition-colors">
                <div className="sm:w-1/3 px-5 py-3.5 bg-gray-50/50 text-[13px] font-semibold text-slate-500 flex items-center">Phone Number</div>
                <div className="sm:w-2/3 px-5 py-3.5 text-[14px] font-medium text-gray-900">{selectedEnquiry.phone}</div>
              </div>
              
               <div className="flex flex-col sm:flex-row border-b border-dashed border-gray-200 hover:bg-gray-50/50 transition-colors">
                <div className="sm:w-1/3 px-5 py-3.5 bg-gray-50/50 text-[13px] font-semibold text-slate-500 flex items-center">Subject</div>
                <div className="sm:w-2/3 px-5 py-3.5 text-[14px] font-medium text-gray-900">{selectedEnquiry.subject}</div>
              </div>

               <div className="flex flex-col sm:flex-row border-b border-dashed border-gray-200 hover:bg-gray-50/50 transition-colors">
                <div className="sm:w-1/3 px-5 py-3.5 bg-gray-50/50 text-[13px] font-semibold text-slate-500 flex items-center">Process Status</div>
                <div className="sm:w-2/3 px-5 py-3.5">
                    <StatusBadge status={selectedEnquiry.status} size="xs" />
                </div>
              </div>
              
              <div className="flex flex-col hover:bg-gray-50/50 transition-colors">
                <div className="w-full px-5 py-3.5 bg-gray-50/50 text-[13px] font-semibold text-slate-500 border-b border-dashed border-gray-200">
                  Message
                </div>
                <div className="w-full px-5 py-4 text-[14px] font-medium text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {selectedEnquiry.message || <span className="text-gray-400 italic">No message provided</span>}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
               <button 
                onClick={() => setSelectedEnquiry(null)}
                className="px-6 py-2.5 bg-gray-900 text-white text-[13px] font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
               >
                 Close Window
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
