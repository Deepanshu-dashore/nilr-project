"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { PlusIcon, CheckIcon, XMarkIcon, PhotoIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { DataTable, ColumnDef } from "@/src/components/shared/DataTable";
import Image from "next/image";
import { getUrls } from "@/app/lib/utils/geturl";

interface GalleryItem {
  _id: string;
  name: string;
  url: string;
  type: "image" | "video";
  createdAt: string;
}

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Add form state
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState<"image" | "video">("image");
  const [newUrl, setNewUrl] = useState("");
  const [newFile, setNewFile] = useState<File | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const fetchItems = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/api/gallery");
      if (res.data.success) setItems(res.data.data);
    } catch {
      setError("Failed to fetch gallery items");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    if (newType === "image" && !newFile) return;
    if (newType === "video" && !newUrl.trim()) return;

    setIsAdding(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("name", newName.trim());
      formData.append("type", newType);
      if (newType === "image" && newFile) {
        formData.append("image", newFile);
      } else {
        formData.append("url", newUrl.trim());
      }

      const res = await axios.post("/api/gallery", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        setItems((prev) => [res.data.data, ...prev]);
        setNewName("");
        setNewUrl("");
        setNewFile(null);
        setShowAddForm(false);
      }
    } catch {
      setError("Failed to add gallery item");
    } finally {
      setIsAdding(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    try {
      const res = await axios.delete(`/api/gallery/${id}`);
      if (res.data.success) {
        setItems((prev) => prev.filter((item) => item._id !== id));
      }
    } catch {
      setError("Failed to delete gallery item");
    }
  };

  const columns: ColumnDef<GalleryItem>[] = [
    {
      key: "index",
      label: "#",
      type: "custom",
      render: (row) => (
        <span className="text-xs text-gray-400 font-medium">
          {items.findIndex(p => p._id === row._id) + 1}
        </span>
      )
    },
    {
      key: "preview",
      label: "Preview",
      type: "custom",
      render: (row) => (
        <div className="relative w-16 h-10 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
          {row.type === "image" ? (
            <Image
              src={row.url}
              alt={row.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-indigo-600 bg-indigo-50">
              <VideoCameraIcon className="w-5 h-5" />
            </div>
          )}
        </div>
      )
    },
    {
      key: "name",
      label: "Name",
      type: "text",
      sortable: true,
    },
    {
      key: "type",
      label: "Type",
      type: "custom",
      sortable: true,
      render: (row) => (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
          row.type === "image" ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-600"
        }`}>
          {row.type === "image" ? <PhotoIcon className="w-3 h-3" /> : <VideoCameraIcon className="w-3 h-3" />}
          {row.type}
        </span>
      )
    },
    {
      key: "createdAt",
      label: "Added On",
      type: "date",
      sortable: true,
      getDate: (row) => row.createdAt,
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 space-y-8 pb-10">
      <PageHeader
        title="Gallery Management"
        breadcrumbs={[
          { label: "Admin", href: "/admin" },
          { label: "Gallery", href: "/admin/gallery" },
          { label: "Manage" },
        ]}
        actionNode={
          <button
            onClick={() => setShowAddForm((v) => !v)}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white text-[13px] font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
          >
            {showAddForm ? (
              <><XMarkIcon className="w-5 h-5 stroke-[3px]" /> Cancel</>
            ) : (
              <><PlusIcon className="w-5 h-5 stroke-[3px]" /> Add Gallery Item</>
            )}
          </button>
        }
      />

      {error && (
        <div className="bg-red-50 border border-red-100 text-red-700 text-sm px-4 py-3 rounded-xl font-medium flex items-center gap-2">
          <XMarkIcon className="w-4 h-4 shrink-0" />
          {error}
          <button onClick={() => setError(null)} className="ml-auto text-red-400 hover:text-red-700">
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>
      )}

      {showAddForm && (
        <div className="bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] rounded-2xl p-6 animate-in fade-in slide-in-from-top-3 duration-300">
          <h3 className="text-sm font-bold mb-8 bg-gray-100 p-3 text-gray-800 flex items-center gap-2">
            <PlusIcon className="w-6 h-6 text-indigo-800 bg-indigo-200 p-1 rounded-lg" />
            Add New Item
          </h3>
          <form onSubmit={handleAdd} className="space-y-6 px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="text-xs font-bold text-gray-600 mb-1.5 block">Item Name <span className="text-red-500">*</span></label>
                <input
                  required
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Annual Function 2024…"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all font-medium"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-600 mb-1.5 block">Type <span className="text-red-500">*</span></label>
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value as "image" | "video")}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all font-medium"
                >
                  <option value="image">Image</option>
                  <option value="video">Video (YouTube)</option>
                </select>
              </div>
              <div>
                {newType === "image" ? (
                  <>
                    <label className="text-xs font-bold text-gray-600 mb-1.5 block">Upload Image <span className="text-red-500">*</span></label>
                    <input
                      required
                      type="file"
                      accept="image/*"
                      onChange={(e) => setNewFile(e.target.files?.[0] || null)}
                      className="w-full px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-800 file:mr-4 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:text-[10px] file:font-bold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition-all"
                    />
                  </>
                ) : (
                  <>
                    <label className="text-xs font-bold text-gray-600 mb-1.5 block">YouTube URL / ID <span className="text-red-500">*</span></label>
                    <input
                      required
                      type="text"
                      value={newUrl}
                      onChange={(e) => setNewUrl(e.target.value)}
                      placeholder="e.g. https://youtube.com/watch?v=..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all font-medium"
                    />
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={isAdding || !newName.trim() || (newType === "image" ? !newFile : !newUrl.trim())}
                className="px-8 py-2.5 bg-indigo-600 text-white text-xs font-bold rounded-xl hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-sm flex items-center gap-2"
              >
                {isAdding ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <CheckIcon className="w-4 h-4 stroke-[3px]" />
                )}
                {isAdding ? "Uploading…" : "Add Item"}
              </button>
            </div>
          </form>
        </div>
      )}

      <DataTable
        data={items}
        columns={columns}
        loading={isLoading}
        searchPlaceholder="Search by name..."
        rowKey={(row) => row._id}
        onDelete={(row) => handleDelete(row._id)}
        hiddenActions={['edit', 'view']}
      />
    </div>
  );
}
