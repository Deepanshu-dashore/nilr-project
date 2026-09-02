"use client";

import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import {
  PlusIcon,
  CheckIcon,
  XMarkIcon,
  PhotoIcon,
  VideoCameraIcon,
  Squares2X2Icon,
  TableCellsIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  ArrowPathIcon,
  PlayIcon,
  ArrowTopRightOnSquareIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { DataTable, ColumnDef } from "@/src/components/shared/DataTable";
import Image from "next/image";
import { API_ENDPOINTS } from "@/src/config/api.config";

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
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "image" | "video">("all");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "name">("newest");

  // Lightbox modal state
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Add form state
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState<"image" | "video">("image");
  const [newFile, setNewFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [newUrl, setNewUrl] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const fetchItems = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(API_ENDPOINTS.GALLERY.GET_ALL);
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

  // Handle local file selection preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNewFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

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

      const res = await axios.post(API_ENDPOINTS.GALLERY.CREATE, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        await fetchItems();
        setShowAddForm(false);
        setNewName("");
        setNewFile(null);
        setPreviewUrl(null);
        setNewUrl("");
        setSuccessMessage("Gallery item added successfully!");
        setTimeout(() => setSuccessMessage(null), 4000);
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
      const res = await axios.delete(API_ENDPOINTS.GALLERY.DELETE(id));
      if (res.data.success) {
        setItems((prev) => prev.filter((item) => item._id !== id));
        if (selectedItem?._id === id) setSelectedItem(null);
        setSuccessMessage("Item deleted successfully!");
        setTimeout(() => setSuccessMessage(null), 3000);
      }
    } catch {
      setError("Failed to delete gallery item");
    }
  };

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filtered and sorted gallery items
  const processedItems = useMemo(() => {
    let result = [...items];

    // Filter by type
    if (filterType !== "all") {
      result = result.filter((item) => item.type === filterType);
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((item) => item.name.toLowerCase().includes(q));
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      if (sortBy === "oldest") {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    return result;
  }, [items, filterType, searchQuery, sortBy]);

  const columns: ColumnDef<GalleryItem>[] = [
    {
      key: "index",
      label: "#",
      type: "custom",
      render: (row) => (
        <span className="text-xs text-gray-400 font-medium">
          {items.findIndex((p) => p._id === row._id) + 1}
        </span>
      ),
    },
    {
      key: "preview",
      label: "Preview",
      type: "custom",
      render: (row) => (
        <div
          onClick={() => setSelectedItem(row)}
          className="relative w-16 h-11 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 cursor-pointer group shadow-2xs"
        >
          {row.type === "image" ? (
            <Image
              src={row.url}
              alt={row.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-indigo-600 bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
              <VideoCameraIcon className="w-5 h-5" />
            </div>
          )}
        </div>
      ),
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
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            row.type === "image"
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
              : "bg-blue-50 text-blue-700 border border-blue-200/60"
          }`}
        >
          {row.type === "image" ? <PhotoIcon className="w-3 h-3" /> : <VideoCameraIcon className="w-3 h-3" />}
          {row.type}
        </span>
      ),
    },
    {
      key: "createdAt",
      label: "Added On",
      type: "date",
      sortable: true,
      getDate: (row) => row.createdAt,
    },
  ];

  return (
    <div className="space-y-6 pb-12 max-w-7xl mx-auto">
      {/* Page Header */}
      <PageHeader
        title="Gallery Management"
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Media & Events", href: "/admin/events" },
          { label: "Gallery" },
        ]}
        actionNode={
          <div className="flex items-center gap-3">
            <button
              onClick={fetchItems}
              disabled={isLoading}
              className="px-3.5 py-2 bg-white border border-gray-200 text-slate-700 font-semibold rounded-xl hover:bg-gray-50 flex items-center gap-2 transition-all shadow-xs cursor-pointer text-xs"
            >
              <ArrowPathIcon className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <button
              onClick={() => setShowAddForm((v) => !v)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
            >
              {showAddForm ? (
                <>
                  <XMarkIcon className="w-4 h-4 stroke-[2.5]" /> Cancel
                </>
              ) : (
                <>
                  <PlusIcon className="w-4 h-4 stroke-[2.5]" /> Add Gallery Item
                </>
              )}
            </button>
          </div>
        }
      />

      {/* Notifications */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-xs px-4 py-3 rounded-xl font-medium flex items-center justify-between gap-2 animate-fade-in">
          <span>{error}</span>
          <button onClick={() => setError(null)} className="text-red-400 hover:text-red-700">
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>
      )}

      {successMessage && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs px-4 py-3 rounded-xl font-semibold flex items-center justify-between gap-2 animate-fade-in">
          <span>{successMessage}</span>
          <button onClick={() => setSuccessMessage(null)} className="text-emerald-500 hover:text-emerald-800">
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Add New Item Form Drawer / Panel */}
      {showAddForm && (
        <div className="bg-white border border-slate-200/80 shadow-xs rounded-lg p-5 animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                <PlusIcon className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Add New Gallery Item</h3>
                <p className="text-slate-400 text-xs">Upload photos or embed video streams to the public media gallery.</p>
              </div>
            </div>
            <button
              onClick={() => setShowAddForm(false)}
              className="p-1 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleAdd} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              {/* Name */}
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block uppercase tracking-wider">
                  Item Title / Caption <span className="text-rose-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Rural Immersion Field Visit 2026…"
                  className="w-full px-3 py-2 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:border-slate-400 focus:bg-white transition-all font-medium"
                />
              </div>

              {/* Type */}
              <div>
                <label className="text-xs font-bold text-slate-700 mb-1.5 block uppercase tracking-wider">
                  Media Type <span className="text-rose-500">*</span>
                </label>
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value as "image" | "video")}
                  className="w-full px-3 py-2 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:border-slate-400 focus:bg-white transition-all font-medium cursor-pointer"
                >
                  <option value="image">Photo / Image</option>
                  <option value="video">Video (YouTube URL)</option>
                </select>
              </div>

              {/* Upload Image or URL */}
              <div>
                {newType === "image" ? (
                  <>
                    <label className="text-xs font-bold text-slate-700 mb-1.5 block uppercase tracking-wider">
                      Upload Image File <span className="text-rose-500">*</span>
                    </label>
                    <input
                      required
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="w-full px-2.5 py-1.5 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-700 file:mr-2.5 file:py-1 file:px-2.5 file:rounded-md file:border-0 file:text-[11px] file:font-bold file:bg-slate-900 file:text-white hover:file:bg-slate-800 transition-all cursor-pointer"
                    />
                  </>
                ) : (
                  <>
                    <label className="text-xs font-bold text-slate-700 mb-1.5 block uppercase tracking-wider">
                      YouTube Video URL <span className="text-rose-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={newUrl}
                      onChange={(e) => setNewUrl(e.target.value)}
                      placeholder="e.g. https://www.youtube.com/watch?v=..."
                      className="w-full px-3 py-2 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-hidden focus:border-slate-400 focus:bg-white transition-all font-medium"
                    />
                  </>
                )}
              </div>
            </div>

            {/* Local Preview thumbnail if selected */}
            {previewUrl && newType === "image" && (
              <div className="flex items-center gap-3 p-2.5 bg-slate-50 rounded-md border border-slate-200 w-fit">
                <div className="relative w-14 h-10 rounded overflow-hidden border border-slate-300">
                  <Image src={previewUrl} alt="Preview" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Selected Photo Preview</p>
                  <p className="text-[11px] text-slate-400">Ready to upload</p>
                </div>
              </div>
            )}

            <div className="flex justify-end gap-2.5 pt-2.5 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-3.5 py-1.5 border border-slate-200 text-slate-600 text-xs font-semibold rounded-md hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isAdding || !newName.trim() || (newType === "image" ? !newFile : !newUrl.trim())}
                className="px-5 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-md hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                {isAdding ? (
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <CheckIcon className="w-3.5 h-3.5 stroke-[2.5]" />
                )}
                {isAdding ? "Uploading…" : "Save Gallery Item"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* View Switcher & Toolbar Controls */}
      <div className="bg-white rounded-lg border border-slate-200/80 p-3 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Left: Search & Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Search Input */}
          <div className="relative min-w-[200px]">
            <MagnifyingGlassIcon className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            <input
              type="text"
              placeholder="Search gallery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-slate-400 focus:bg-white transition-all font-medium"
            />
          </div>

          {/* Type Filter Buttons */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-md gap-0.5">
            <button
              onClick={() => setFilterType("all")}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                filterType === "all"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              All ({items.length})
            </button>
            <button
              onClick={() => setFilterType("image")}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                filterType === "image"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <PhotoIcon className="w-3 h-3 text-emerald-600" />
              Photos ({items.filter((i) => i.type === "image").length})
            </button>
            <button
              onClick={() => setFilterType("video")}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer ${
                filterType === "video"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <VideoCameraIcon className="w-3 h-3 text-blue-600" />
              Videos ({items.filter((i) => i.type === "video").length})
            </button>
          </div>
        </div>

        {/* Right: Sort & Grid/Table Toggle */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "newest" | "oldest" | "name")}
            className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-700 font-medium focus:outline-hidden cursor-pointer"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="name">Sort by Name</option>
          </select>

          {/* View Mode Toggle Buttons */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-md gap-0.5">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-400 hover:text-slate-700"
              }`}
              title="Grid View"
            >
              <Squares2X2Icon className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`p-1.5 rounded transition-all cursor-pointer ${
                viewMode === "table"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-400 hover:text-slate-700"
              }`}
              title="Table View"
            >
              <TableCellsIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {isLoading ? (
        <div className="bg-white rounded-lg border border-slate-200/80 p-12 text-center shadow-xs">
          <ArrowPathIcon className="w-7 h-7 animate-spin mx-auto text-slate-400 mb-2" />
          <p className="text-xs font-semibold text-slate-500">Loading gallery items...</p>
        </div>
      ) : processedItems.length === 0 ? (
        <div className="bg-white rounded-lg border border-slate-200/80 p-12 text-center shadow-xs">
          <PhotoIcon className="w-10 h-10 text-slate-300 mx-auto mb-2.5" />
          <h4 className="text-sm font-bold text-slate-800">No gallery items found</h4>
          <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            {searchQuery
              ? `No items match "${searchQuery}". Try clearing your search filter.`
              : "Upload photos or add videos to start populating your campus gallery."}
          </p>
          <button
            onClick={() => setShowAddForm(true)}
            className="mt-3.5 px-3.5 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-md hover:bg-slate-800 cursor-pointer"
          >
            Add First Item
          </button>
        </div>
      ) : viewMode === "grid" ? (
        /* GRID VIEW WITH HOVER CONTROLS & CLEAN BOTTOM */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {processedItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-sm transition-all duration-200 flex flex-col group"
            >
              {/* Thumbnail Area with Hover Controls */}
              <div
                onClick={() => setSelectedItem(item)}
                className="relative h-44 w-full bg-slate-100 cursor-pointer overflow-hidden"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.url}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-white group-hover:bg-slate-800 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <PlayIcon className="w-5 h-5 text-white ml-0.5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-300 mt-1.5">Watch Video</span>
                  </div>
                )}

                {/* Clean Hover Action Controls Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-2xs">
                  {/* Preview / Eye Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedItem(item);
                    }}
                    className="p-2.5 rounded-lg bg-white/95 text-slate-800 hover:bg-white hover:text-slate-950 shadow-md transition-all duration-200 hover:scale-110 cursor-pointer transform translate-y-2 group-hover:translate-y-0"
                    title="Preview Media"
                  >
                    <EyeIcon className="w-4 h-4" />
                  </button>

                  {/* Copy Link Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopyLink(item.url, item._id);
                    }}
                    className="p-2.5 rounded-lg bg-white/95 text-slate-800 hover:bg-white hover:text-slate-950 shadow-md transition-all duration-200 hover:scale-110 cursor-pointer transform translate-y-2 group-hover:translate-y-0"
                    title={copiedId === item._id ? "Copied!" : "Copy Media URL"}
                  >
                    {copiedId === item._id ? (
                      <CheckIcon className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <ClipboardDocumentIcon className="w-4 h-4" />
                    )}
                  </button>

                  {/* Delete Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(item._id);
                    }}
                    className="p-2.5 rounded-lg bg-rose-600 text-white hover:bg-rose-700 shadow-md transition-all duration-200 hover:scale-110 cursor-pointer transform translate-y-2 group-hover:translate-y-0"
                    title="Delete item"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Clean Card Bottom (Title + Date/Type Only) */}
              <div className="p-3 flex flex-col justify-between">
                <h4
                  onClick={() => setSelectedItem(item)}
                  className="text-[13px] font-semibold text-slate-900 leading-snug truncate hover:text-slate-700 cursor-pointer transition-colors"
                  title={item.name}
                >
                  {item.name}
                </h4>
                <div className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-400">
                  <span>
                    {new Date(item.createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <span className="capitalize font-medium text-slate-500">{item.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* TABLE VIEW */
        <div className="bg-white rounded-lg border border-slate-200/80 shadow-xs overflow-hidden">
          <DataTable
            data={processedItems}
            columns={columns}
            loading={isLoading}
            searchPlaceholder="Search by name..."
            rowKey={(row) => row._id}
            onDelete={(row) => handleDelete(row._id)}
            hiddenActions={["edit", "view"]}
          />
        </div>
      )}

      {/* Lightbox / Fullscreen Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-2xl border border-white/20 flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                    selectedItem.type === "image"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {selectedItem.type}
                </span>
                <h3 className="text-xs font-bold text-slate-900 truncate max-w-md">
                  {selectedItem.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-200/60"
              >
                <XMarkIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body Media */}
            <div className="relative bg-slate-950 flex items-center justify-center overflow-hidden min-h-[340px] max-h-[500px]">
              {selectedItem.type === "image" ? (
                <div className="relative w-full h-[450px]">
                  <Image
                    src={selectedItem.url}
                    alt={selectedItem.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="w-full aspect-video">
                  <iframe
                    src={
                      selectedItem.url.includes("embed")
                        ? selectedItem.url
                        : selectedItem.url.includes("watch?v=")
                        ? selectedItem.url.replace("watch?v=", "embed/")
                        : selectedItem.url.includes("youtu.be/")
                        ? selectedItem.url.replace("youtu.be/", "www.youtube.com/embed/")
                        : selectedItem.url
                    }
                    title={selectedItem.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <p>
                Added on:{" "}
                <span className="font-semibold text-slate-700">
                  {new Date(selectedItem.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={selectedItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center gap-1 font-semibold text-xs"
                >
                  <span>Open URL</span>
                  <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                </a>
                <button
                  onClick={() => handleDelete(selectedItem._id)}
                  className="px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 hover:bg-rose-100 font-semibold text-xs cursor-pointer"
                >
                  Delete Item
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
