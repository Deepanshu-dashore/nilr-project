"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { PlusIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { DataTable, ColumnDef } from "@/src/components/shared/DataTable";

interface ProgramType {
  _id: string;
  name: string;
  description: string;
  createdAt: string;
}

export default function ProgramTypesPage() {
  const [programTypes, setProgramTypes] = useState<ProgramType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Add form state
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  // Edit state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const fetchProgramTypes = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/api/program-type");
      if (res.data.success) setProgramTypes(res.data.data);
    } catch {
      setError("Failed to fetch program types");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProgramTypes();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    setIsAdding(true);
    setError(null);
    try {
      const res = await axios.post("/api/program-type", {
        name: newName.trim(),
        description: newDescription.trim(),
      });
      if (res.data.success) {
        setProgramTypes((prev) => [...prev, res.data.data]);
        setNewName("");
        setNewDescription("");
        setShowAddForm(false);
      }
    } catch {
      setError("Failed to add program type");
    } finally {
      setIsAdding(false);
    }
  };

  const startEdit = (pt: ProgramType) => {
    setEditingId(pt._id);
    setEditName(pt.name);
    setEditDescription(pt.description);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditName("");
    setEditDescription("");
  };

  const handleSaveEdit = async (id: string) => {
    if (!editName.trim()) return;
    setIsSaving(true);
    setError(null);
    try {
      const res = await axios.put(`/api/program-type/${id}`, {
        name: editName.trim(),
        description: editDescription.trim(),
      });
      if (res.data.success) {
        setProgramTypes((prev) =>
          prev.map((pt) => (pt._id === id ? res.data.data : pt))
        );
        cancelEdit();
      }
    } catch {
      setError("Failed to update program type");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this program type?")) return;
    try {
      const res = await axios.delete(`/api/program-type/${id}`);
      if (res.data.success) {
        setProgramTypes((prev) => prev.filter((pt) => pt._id !== id));
      }
    } catch {
      setError("Failed to delete program type");
    }
  };

  const columns: ColumnDef<ProgramType>[] = [
    {
      key: "index",
      label: "#",
      type: "custom",
      render: (row) => (
        <span className="text-xs text-gray-400 font-medium">
          {programTypes.findIndex(pt => pt._id === row._id) + 1}
        </span>
      )
    },
    {
      key: "name",
      label: "Type Name",
      type: "custom",
      sortable: true,
      render: (row) => (
        editingId === row._id ? (
          <input
            autoFocus
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="w-full min-w-[150px] px-3 py-1.5 rounded-lg bg-white border border-indigo-300 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all font-semibold"
          />
        ) : (
          <span className="font-semibold text-gray-800">{row.name}</span>
        )
      )
    },
    {
      key: "description",
      label: "Description",
      type: "custom",
      sortable: true,
      render: (row) => (
        editingId === row._id ? (
          <input
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="w-full min-w-[200px] px-3 py-1.5 rounded-lg bg-white border border-indigo-300 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all"
          />
        ) : (
          <span className="text-gray-500 text-xs truncate block max-w-xs">
            {row.description || <em className="text-gray-300">No description</em>}
          </span>
        )
      )
    },
    {
      key: "createdAt",
      label: "Created At",
      type: "date",
      sortable: true,
      getDate: (row) => row.createdAt,
    },
    {
      key: "inlineActions",
      label: "",
      type: "custom",
      align: "right",
      render: (row) => (
        editingId === row._id ? (
          <div className="flex items-center justify-end gap-2 pr-2 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => handleSaveEdit(row._id)}
              disabled={isSaving || !editName.trim()}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              {isSaving ? (
                <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <CheckIcon className="w-3.5 h-3.5 stroke-[3px]" />
              )}
              Save
            </button>
            <button
              onClick={cancelEdit}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-600 text-xs font-bold rounded-lg hover:bg-gray-200 transition-all"
            >
              <XMarkIcon className="w-3.5 h-3.5 stroke-[2.5px]" />
              Cancel
            </button>
          </div>
        ) : null
      )
    }
  ];

  const actionNode = (
    <button
      onClick={() => setShowAddForm((v) => !v)}
      className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white text-[13px] font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
    >
      {showAddForm ? (
        <><XMarkIcon className="w-5 h-5 stroke-[3px]" /> Cancel</>
      ) : (
        <><PlusIcon className="w-5 h-5 stroke-[3px]" /> Add New Type</>
      )}
    </button>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 space-y-8 pb-10">
      <PageHeader
        title="Program Types"
        breadcrumbs={[
          { label: "Admin", href: "/admin" },
          { label: "Program Types", href: "/admin/program-types" },
          { label: "Manage" },
        ]}
        actionNode={actionNode}
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

      {/* Add Form */}
      {showAddForm && (
        <div className="bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] rounded-2xl p-6 animate-in fade-in slide-in-from-top-3 duration-300">
          <h3 className="text-sm font-bold mb-8 bg-gray-100 p-3 text-gray-800 flex items-center gap-2">
            <PlusIcon className="w-6 h-6 text-indigo-800 bg-indigo-200 p-1 rounded-lg" />
            Add New Program Type
          </h3>
          <form onSubmit={handleAdd} className="flex flex-col sm:flex-row gap-4 px-2">
            <div className="flex-1">
              <label className="text-xs font-bold text-gray-600 mb-1.5 block">Name <span className="text-red-500">*</span></label>
              <input
                required
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g. Diploma, Post Graduate…"
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all font-medium"
              />
            </div>
            <div className="flex-2">
              <label className="text-xs font-bold text-gray-600 mb-1.5 block">Description</label>
              <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Short description of this program type…"
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all font-medium"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                disabled={isAdding || !newName.trim()}
                className="px-6 py-2.5 bg-indigo-600 text-white text-xs font-medium rounded-xl hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                {isAdding ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <CheckIcon className="w-4 h-4 stroke-[3px]" />
                )}
                {isAdding ? "Adding…" : "Add Type"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Main Data Table */}
      <DataTable
        data={programTypes}
        columns={columns}
        loading={isLoading}
        searchPlaceholder="Search program type name..."
        rowKey={(row) => row._id}
        onEdit={(row) => startEdit(row)}
        onDelete={(row) => handleDelete(row._id)}
        hiddenActions={editingId ? ['edit', 'delete', 'view'] : ['view']}
      />
    </div>
  );
}
