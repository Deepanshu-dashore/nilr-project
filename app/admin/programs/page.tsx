"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { PlusIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { DataTable, ColumnDef } from "@/src/components/shared/DataTable";
import { PageHeader } from "@/src/components/shared/PageHeader";

interface Program {
  _id: string;
  name: string;
  duration: string;
  fee: string;
  programType: string;
  createdAt: string;
}

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPrograms = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/program");
      // Assuming the response structure is { success: true, data: [...] }
      // If it's just an array, adjust accordingly.
      const data = response.data.success ? response.data.data : response.data;
      setPrograms(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch programs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this program?")) return;
    try {
      const response = await axios.delete(`/api/program/${id}`);
      if (response.data.success) {
        setPrograms((prev) => prev.filter((p) => p._id !== id));
      }
    } catch (error) {
      console.error("Failed to delete program:", error);
      alert("Failed to delete program");
    }
  };

  const columns: ColumnDef<Program>[] = [
    {
       key: "name",
       label: "Program Name",
       type: "user",
       sortable: true,
       getAvatar: (row) => row.name ? row.name.charAt(0).toUpperCase() : "P",
       getTitle: (row) => row.name,
       getSubtitle: (row) => row.programType || "N/A",
    },
    {
       key: "duration",
       label: "Duration",
       type: "text",
       sortable: true,
    },
    {
       key: "fee",
       label: "Fee",
       type: "text",
       sortable: true,
    },
    {
       key: "createdAt",
       label: "Created At",
       type: "date",
       sortable: true,
       getDate: (row) => row.createdAt,
    }
  ];

  const actionNode = (
    <Link
      href="/admin/programs/add"
      className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white text-[13px] font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
    >
      <PlusIcon className="w-5 h-5 stroke-[3px]" />
      Add New Program
    </Link>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 space-y-8 pb-10">
      <PageHeader
        title="Programs"
        breadcrumbs={[
          { label: "Admin", href: "/admin" },
          { label: "Programs", href: "/admin/programs" },
          { label: "List" }
        ]}
        actionNode={actionNode}
      />

      <DataTable
        data={programs}
        columns={columns}
        loading={isLoading}
        searchPlaceholder="Search program name..."
        rowKey={(row) => row._id}
        onDelete={(row) => handleDelete(row._id)}
        // onView={(row) => window.location.href = `/admin/programs/edit/${row._id}`}
      />
    </div>
  );
}
