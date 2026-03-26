"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { Stepper } from "@/src/components/shared/Stepper";
import {
  CloudArrowUpIcon,
  CheckCircleIcon,
  XCircleIcon,
  AcademicCapIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  IdentificationIcon,
  LightBulbIcon,
  CommandLineIcon,
  TrophyIcon,
  BriefcaseIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

// ── Types ──────────────────────────────────────────────────────────────────────
type ProgramStructureRow = {
  sem: string;
  courseType: string;
  courseName: string;
  credits: string;
};

// ── Reusable tag-list component ────────────────────────────────────────────────
function TagList({
  label,
  icon: Icon,
  items,
  onAdd,
  onRemove,
  onChange,
  placeholder,
  accent = "indigo",
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
  onAdd: () => void;
  onRemove: (i: number) => void;
  onChange: (i: number, val: string) => void;
  placeholder: string;
  accent?: string;
}) {
  const ring = accent === "emerald"
    ? "focus:ring-emerald-300 focus:border-emerald-400"
    : accent === "amber"
    ? "focus:ring-amber-300 focus:border-amber-400"
    : "focus:ring-indigo-300 focus:border-indigo-400";

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-2 ml-1">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-slate-400" />
          <label className="text-[14px] font-bold text-gray-800 inline-block">{label}</label>
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors px-2 py-1 rounded-lg hover:bg-indigo-50"
        >
          <PlusIcon className="w-3.5 h-3.5" /> Add item
        </button>
      </div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="w-5 h-5 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-black text-gray-400">
              {i + 1}
            </span>
            <input
              type="text"
              value={item}
              onChange={(e) => onChange(i, e.target.value)}
              className={`flex-1 px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 ${ring} transition-all`}
              placeholder={placeholder}
            />
            {items.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove(i)}
                className="p-1.5 rounded-lg text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors flex-shrink-0"
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────────
export default function AddProgramPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Simple scalar fields
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    duration: "",
    fee: "",
    lastApplyDate: "",
    programType: "Diploma",
  });

  // Array fields
  const [highlights, setHighlights] = useState<string[]>([""]);
  const [outcomes, setOutcomes] = useState<string[]>([""]);
  const [careerPaths, setCareerPaths] = useState<string[]>([""]);
  const [termsAndConditions, setTermsAndConditions] = useState<string[]>([""]);
  const [eligibility, setEligibility] = useState<string[]>([""]);

  // Program structure rows
  const [programStructure, setProgramStructure] = useState<ProgramStructureRow[]>([
    { sem: "", courseType: "", courseName: "", credits: "" },
  ]);

  const [file, setFile] = useState<File | null>(null);

  const steps = [
    { id: 1, title: "Basic Info", icon: AcademicCapIcon },
    { id: 2, title: "Curriculum", icon: DocumentTextIcon },
    { id: 3, title: "Eligibility", icon: IdentificationIcon },
  ];

  // ── Scalar change ────────────────────────────────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  // ── Generic tag-list helpers ─────────────────────────────────────────────────
  const makeAdd = (setter: React.Dispatch<React.SetStateAction<string[]>>) => () =>
    setter((p) => [...p, ""]);

  const makeRemove = (setter: React.Dispatch<React.SetStateAction<string[]>>) => (i: number) =>
    setter((p) => p.filter((_, idx) => idx !== i));

  const makeChange = (setter: React.Dispatch<React.SetStateAction<string[]>>) =>
    (i: number, val: string) =>
      setter((p) => p.map((x, idx) => (idx === i ? val : x)));

  // ── Program structure helpers ────────────────────────────────────────────────
  const addStructureRow = () =>
    setProgramStructure((p) => [...p, { sem: "", courseType: "", courseName: "", credits: "" }]);

  const removeStructureRow = (i: number) =>
    setProgramStructure((p) => p.filter((_, idx) => idx !== i));

  const changeStructureRow = (i: number, field: keyof ProgramStructureRow, val: string) =>
    setProgramStructure((p) => p.map((row, idx) => idx === i ? { ...row, [field]: val } : row));

  // ── Navigation ───────────────────────────────────────────────────────────────
  const nextStep = () => { if (currentStep < 3) setCurrentStep((s) => s + 1); };
  const prevStep = () => { if (currentStep > 1) setCurrentStep((s) => s - 1); };

  // ── Submit ───────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));

      // Serialise arrays as JSON strings
      data.append("highlights", JSON.stringify(highlights.filter(Boolean)));
      data.append("outcomes", JSON.stringify(outcomes.filter(Boolean)));
      data.append("careerPaths", JSON.stringify(careerPaths.filter(Boolean)));
      data.append("termsAndConditions", JSON.stringify(termsAndConditions.filter(Boolean)));
      data.append("eligibility", JSON.stringify(eligibility.filter(Boolean)));
      data.append(
        "programStructure",
        JSON.stringify(programStructure.filter((r) => r.courseName))
      );

      if (file) data.append("feeStructureDoc", file);

      const response = await axios.post("/api/program", data);

      if (response.data.success) {
        setSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => router.push("/admin/programs"), 2000);
      } else {
        setError(response.data.message || "Failed to add program.");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "Something went wrong.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Common input classNames ──────────────────────────────────────────────────
  const inputCls =
    "w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all";

  const labelCls = "text-[14px] font-bold text-gray-800 mb-2 ml-1 inline-block";

  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 pb-20">
      <PageHeader
        title="Add New Program"
        backLink="/admin/programs"
        breadcrumbs={[
          { label: "Admin", href: "/admin" },
          { label: "Programs", href: "/admin/programs" },
          { label: "Add Form" },
        ]}
      />

      <div className="max-w-6xl mx-auto">
        {success && (
          <div className="mb-6 bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex items-center gap-4 text-emerald-800 animate-in zoom-in-95">
            <CheckCircleIcon className="w-6 h-6 text-emerald-500 flex-shrink-0" />
            <div>
              <p className="font-bold">Program added successfully!</p>
              <p className="text-sm">Redirecting back to programs list…</p>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-6 bg-red-50 border border-red-100 p-4 rounded-xl flex items-center gap-4 text-red-800 animate-in zoom-in-95">
            <XCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
            <div>
              <p className="font-bold">Something went wrong</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="min-h-[500px]">
          <div className="bg-white rounded-lg pt-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden animate-in fade-in slide-in-from-right-5 duration-500">
            <Stepper steps={steps} currentStep={currentStep} className="mb-12" />

            {/* ── Step headers ── */}
            {currentStep === 1 && (
              <div className="px-8 py-4 bg-gray-100/80 flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <AcademicCapIcon className="w-5 h-5 text-primary" />
                </div>
                <div className="border-l-2 border-primary/20 pl-3">
                  <h2 className="text-lg font-bold text-gray-900 tracking-tight">Basic Information</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Fundamental details of your program.</p>
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div className="px-8 py-4 bg-gray-100/80 flex items-center gap-3">
                <div className="p-3 bg-emerald-500/10 rounded-xl">
                  <DocumentTextIcon className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="border-l-2 border-emerald-500/20 pl-3">
                  <h2 className="text-lg font-bold text-gray-900 tracking-tight">Curriculum & Details</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Academic journey and learning objectives.</p>
                </div>
              </div>
            )}
            {currentStep === 3 && (
              <div className="px-8 py-4 bg-gray-100/80 flex items-center gap-3">
                <div className="p-3 bg-amber-500/10 rounded-xl">
                  <IdentificationIcon className="w-5 h-5 text-amber-500" />
                </div>
                <div className="border-l-2 border-amber-500/20 pl-3">
                  <h2 className="text-lg font-bold text-gray-900 tracking-tight">Eligibility & Documents</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Final steps to wrap up program creation.</p>
                </div>
              </div>
            )}

            <div className="p-10 pt-5">
              {/* ════════════════ STEP 1 ════════════════ */}
              {currentStep === 1 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-3 duration-500">
                  {/* Top grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Program Title */}
                    <div className="space-y-1 lg:col-span-3">
                      <label className={labelCls}>Program Title <span className="text-red-500">*</span></label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputCls}
                        placeholder="Enter a clear, descriptive title…"
                      />
                    </div>

                    {/* Duration */}
                    <div className="space-y-1">
                      <label className={labelCls}>Duration (Years) <span className="text-red-500">*</span></label>
                      <div className="relative group">
                        <ClockIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                        <input
                          required
                          type="number"
                          name="duration"
                          min="1"
                          value={formData.duration}
                          onChange={handleChange}
                          className={`${inputCls} pl-10`}
                          placeholder="e.g. 2"
                        />
                      </div>
                    </div>

                    {/* Fee */}
                    <div className="space-y-1">
                      <label className={labelCls}>Total Fee <span className="text-red-500">*</span></label>
                      <div className="relative group">
                        <CurrencyRupeeIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                        <input
                          required
                          type="text"
                          name="fee"
                          value={formData.fee}
                          onChange={handleChange}
                          className={`${inputCls} pl-10`}
                          placeholder="e.g. 45000"
                        />
                      </div>
                    </div>

                    {/* Program Type */}
                    <div className="space-y-1">
                      <label className={labelCls}>Program Type</label>
                      <select
                        name="programType"
                        value={formData.programType}
                        onChange={handleChange}
                        className={`${inputCls} font-bold appearance-none cursor-pointer`}
                      >
                        <option value="Diploma">Diploma</option>
                        <option value="Post Graduate">Post Graduate</option>
                        <option value="Degree">Degree</option>
                        <option value="Certificate">Certificate</option>
                      </select>
                    </div>

                    {/* Apply Date */}
                    <div className="space-y-1">
                      <label className={labelCls}>Apply Date <span className="text-slate-400 font-normal">(optional)</span></label>
                      <div className="relative group">
                        <CalendarDaysIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                        <input
                          type="date"
                          name="lastApplyDate"
                          value={formData.lastApplyDate}
                          onChange={handleChange}
                          className={`${inputCls} pl-10`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-end">
                      <label className={labelCls}>Description <span className="text-slate-400 font-normal">(optional)</span></label>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        {formData.description.split(/\s+/).filter(Boolean).length} / 500 words
                      </span>
                    </div>
                    <textarea
                      name="description"
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      className={`${inputCls} resize-none leading-relaxed`}
                      placeholder="A brief overview of this program…"
                    />
                  </div>
                </div>
              )}

              {/* ════════════════ STEP 2 ════════════════ */}
              {currentStep === 2 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-3 duration-500">
                  {/* Highlights */}
                  <TagList
                    label="Program Highlights"
                    icon={LightBulbIcon}
                    items={highlights}
                    onAdd={makeAdd(setHighlights)}
                    onRemove={makeRemove(setHighlights)}
                    onChange={makeChange(setHighlights)}
                    placeholder="e.g. Hands-on industry projects"
                    accent="indigo"
                  />

                  {/* Program Structure Table */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between mb-2 ml-1">
                      <div className="flex items-center gap-2">
                        <CommandLineIcon className="w-4 h-4 text-slate-400" />
                        <label className="text-[14px] font-bold text-gray-800 inline-block">Program Structure</label>
                      </div>
                      <button
                        type="button"
                        onClick={addStructureRow}
                        className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors px-2 py-1 rounded-lg hover:bg-indigo-50"
                      >
                        <PlusIcon className="w-3.5 h-3.5" /> Add row
                      </button>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-gray-200">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            {["Semester", "Course Type", "Course Name", "Credits", ""].map((h) => (
                              <th key={h} className="px-3 py-2 text-left text-[11px] font-black text-gray-500 uppercase tracking-wider">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {programStructure.map((row, i) => (
                            <tr key={i} className="group hover:bg-indigo-50/30 transition-colors">
                              {(["sem", "courseType", "courseName"] as const).map((field) => (
                                <td key={field} className="px-2 py-1.5">
                                  <input
                                    type="text"
                                    value={row[field]}
                                    onChange={(e) => changeStructureRow(i, field, e.target.value)}
                                    className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all"
                                    placeholder={
                                      field === "sem" ? "e.g. Sem 1" :
                                      field === "courseType" ? "Core / Elective" :
                                      "Course name"
                                    }
                                  />
                                </td>
                              ))}
                              <td className="px-2 py-1.5 w-20">
                                <input
                                  type="number"
                                  min="0"
                                  value={row.credits}
                                  onChange={(e) => changeStructureRow(i, "credits", e.target.value)}
                                  className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all"
                                  placeholder="0"
                                />
                              </td>
                              <td className="px-2 py-1.5 w-10">
                                {programStructure.length > 1 && (
                                  <button
                                    type="button"
                                    onClick={() => removeStructureRow(i)}
                                    className="p-1 rounded text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                                  >
                                    <TrashIcon className="w-4 h-4" />
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Outcomes & Career Paths */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <TagList
                      label="Learning Outcomes"
                      icon={TrophyIcon}
                      items={outcomes}
                      onAdd={makeAdd(setOutcomes)}
                      onRemove={makeRemove(setOutcomes)}
                      onChange={makeChange(setOutcomes)}
                      placeholder="e.g. Critical thinking skills"
                      accent="indigo"
                    />
                    <TagList
                      label="Career Paths"
                      icon={BriefcaseIcon}
                      items={careerPaths}
                      onAdd={makeAdd(setCareerPaths)}
                      onRemove={makeRemove(setCareerPaths)}
                      onChange={makeChange(setCareerPaths)}
                      placeholder="e.g. Policy Analyst"
                      accent="indigo"
                    />
                  </div>
                </div>
              )}

              {/* ════════════════ STEP 3 ════════════════ */}
              {currentStep === 3 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-3 duration-500">
                  {/* File upload */}
                  <div className="space-y-2">
                    <label className={labelCls}>Fee Structure Document</label>
                    <div
                      className={`flex justify-center px-6 pt-10 pb-10 border-2 ${
                        file ? "border-emerald-200 bg-emerald-50/20" : "border-dashed border-gray-200 bg-gray-50"
                      } rounded-2xl cursor-pointer hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5 group transition-all`}
                      onClick={() => document.getElementById("file-upload")?.click()}
                    >
                      <div className="space-y-3 text-center">
                        <CloudArrowUpIcon
                          className={`mx-auto h-12 w-12 ${
                            file ? "text-emerald-500" : "text-slate-300 group-hover:text-indigo-500 transition-colors duration-500"
                          }`}
                        />
                        <div className="flex flex-col text-sm text-gray-600">
                          <span className="font-bold text-gray-800 text-lg">
                            {file ? file.name : "Choose a file to upload"}
                          </span>
                          {!file && <p className="text-slate-400">or drag and drop your document here</p>}
                        </div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black bg-white/50 px-3 py-1 rounded-full inline-block border border-gray-100">
                          PDF, PNG, JPG (MAX. 10MB)
                        </p>
                      </div>
                      <input id="file-upload" name="feeStructureDoc" type="file" className="sr-only" onChange={handleFileChange} />
                    </div>
                  </div>

                  {/* Eligibility */}
                  <TagList
                    label="Eligibility Criteria"
                    icon={IdentificationIcon}
                    items={eligibility}
                    onAdd={makeAdd(setEligibility)}
                    onRemove={makeRemove(setEligibility)}
                    onChange={makeChange(setEligibility)}
                    placeholder="e.g. 10+2 with minimum 50% marks"
                    accent="amber"
                  />

                  {/* Terms & Conditions */}
                  <TagList
                    label="Terms & Conditions"
                    icon={DocumentTextIcon}
                    items={termsAndConditions}
                    onAdd={makeAdd(setTermsAndConditions)}
                    onRemove={makeRemove(setTermsAndConditions)}
                    onChange={makeChange(setTermsAndConditions)}
                    placeholder="Add a term or condition…"
                    accent="amber"
                  />
                </div>
              )}
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className="flex items-center justify-between mt-10 mb-20 px-1">
            <div>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-8 py-3 bg-white border border-gray-200 text-gray-800 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-sm flex items-center gap-2 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  Previous
                </button>
              )}
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-3 text-gray-500 font-bold hover:text-gray-900 transition-colors"
              >
                Cancel
              </button>

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={currentStep === 1 && !formData.name}
                  className={`px-10 py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all flex items-center gap-2 group ${
                    currentStep === 1 && !formData.name ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Continue
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-12 py-3 bg-gray-900 text-white font-bold rounded-xl shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6)] hover:bg-black transition-all flex items-center gap-3 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Finalizing…
                    </>
                  ) : (
                    <>
                      Publish Program
                      <div className="p-0.5 bg-white/20 rounded-md">
                        <CheckCircleIcon className="w-4 h-4" />
                      </div>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}