"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { PageHeader } from "@/src/components/shared/PageHeader";
import { 
  AcademicCapIcon, 
  ClockIcon, 
  CurrencyRupeeIcon, 
  CalendarDaysIcon,
  TagIcon,
  CheckBadgeIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  LightBulbIcon,
  ArrowTopRightOnSquareIcon,
  ListBulletIcon
} from "@heroicons/react/24/outline";
import { API_ENDPOINTS } from "@/src/config/api.config";

export default function ViewProgramPage() {
  const router = useRouter();
  const params = useParams();
  const programId = params?.id as string;
  const [program, setProgram] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProgram = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(API_ENDPOINTS.PROGRAMS.GET_BY_ID(programId));
        if (data.success) {
          setProgram(data.data);
        } else {
          setError("Failed to fetch program data");
        }
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching program details.");
      } finally {
        setIsLoading(false);
      }
    };
    if (programId) fetchProgram();
  }, [programId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !program) {
    return (
      <div className="p-8 text-center text-red-500 font-medium">
        {error || "Program not found."}
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 pb-20 space-y-8">
      <PageHeader
        title={`${program.name} Details`}
        backLink="/admin/programs"
        breadcrumbs={[
          { label: "Admin", href: "/admin" },
          { label: "Programs", href: "/admin/programs" },
          { label: "View" },
        ]}
      />

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Basic Header Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-0.5 h-full bg-primary" />
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="space-y-2">
              <p className="text-gray-600 leading-relaxed max-w-2xl text-sm">
                {program.description}
              </p>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-center gap-2">
            <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
              <ClockIcon className="w-5 h-5 text-indigo-500" />
              Duration
            </div>
            <div className="text-xl font-bold text-gray-900">{program.duration} Years</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-center gap-2">
            <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
              <ListBulletIcon className="w-5 h-5 text-indigo-500" />
              Type
            </div>
            <div className="text-xl font-bold text-gray-900">{program.programType?.name || program.programType || "N/A"}</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-center gap-2">
            <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
              <CurrencyRupeeIcon className="w-5 h-5 text-emerald-500" />
              Total Fee
            </div>
            <div className="text-xl font-bold text-gray-900">₹{program.fee}</div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-center gap-2">
            <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
              <CalendarDaysIcon className="w-5 h-5 text-amber-500" />
              Last Apply Date
            </div>
            <div className="text-xl font-bold text-gray-900">
              {program.lastApplyDate ? new Date(program.lastApplyDate).toLocaleDateString() : "Not Specified"}
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Highlights */}
          {program.highlights && program.highlights.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <LightBulbIcon className="w-5 h-5 text-indigo-500" />
                Program Highlights
              </h3>
              <ul className="space-y-3">
                {program.highlights.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700">
                    <CheckBadgeIcon className="w-5 h-5 text-indigo-500 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Eligibility */}
          {program.eligibility && program.eligibility.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <AcademicCapIcon className="w-5 h-5 text-amber-500" />
                Eligibility Criteria
              </h3>
              <ul className="space-y-3">
                {program.eligibility.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700">
                    <CheckBadgeIcon className="w-5 h-5 text-amber-500 shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes */}
          {program.outcomes && program.outcomes.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <CheckBadgeIcon className="w-5 h-5 text-emerald-500" />
                Learning Outcomes
              </h3>
              <ul className="space-y-3">
                {program.outcomes.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Career Paths */}
          {program.careerPaths && program.careerPaths.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <BriefcaseIcon className="w-5 h-5 text-teal-500" />
                Career Paths
              </h3>
              <ul className="space-y-3">
                {program.careerPaths.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Program Structure */}
        {program.programStructure && program.programStructure.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <DocumentTextIcon className="w-5 h-5 text-slate-500" />
              Program Structure
            </h3>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-600 uppercase tracking-wider text-xs">Semester</th>
                    <th className="px-4 py-3 font-semibold text-gray-600 uppercase tracking-wider text-xs">Type</th>
                    <th className="px-4 py-3 font-semibold text-gray-600 uppercase tracking-wider text-xs">Course Name</th>
                    <th className="px-4 py-3 font-semibold text-gray-600 uppercase tracking-wider text-xs">Credits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {program.programStructure.map((row: any, i: number) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 text-gray-900 font-medium">{row.sem}</td>
                      <td className="px-4 py-3 text-gray-500">{row.courseType}</td>
                      <td className="px-4 py-3 text-gray-800">{row.courseName}</td>
                      <td className="px-4 py-3 text-gray-500">{row.credits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Terms & Conditions & Documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {program.termsAndConditions && program.termsAndConditions.length > 0 && (
            <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4 ${(!program.feeStructureDoc && !program.brochureDoc) ? 'md:col-span-2 lg:col-span-3' : 'lg:col-span-1'}`}>
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <DocumentTextIcon className="w-5 h-5 text-red-500" />
                Terms & Conditions
              </h3>
              <ul className="space-y-3">
                {program.termsAndConditions.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3 text-xs text-gray-500">
                    <span className="font-bold text-red-400">{i + 1}.</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {program.brochureDoc && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4 flex flex-col justify-center items-center text-center">
              <div className="p-4 bg-amber-50 rounded-full">
                <DocumentTextIcon className="w-10 h-10 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Program Brochure</h3>
                <p className="text-sm text-gray-500 mt-1">Official brochure with program details.</p>
              </div>
              <a 
                href={program.brochureDoc} 
                target="_blank" 
                rel="noreferrer"
                className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-2.5 bg-amber-50 text-amber-600 font-bold rounded-xl hover:bg-amber-100 transition-colors"
              >
                View Brochure
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            </div>
          )}

          {program.feeStructureDoc && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4 flex flex-col justify-center items-center text-center">
              <div className="p-4 bg-indigo-50 rounded-full">
                <DocumentTextIcon className="w-10 h-10 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Fee Structure</h3>
                <p className="text-sm text-gray-500 mt-1">Detailed fee breakdown and schedules.</p>
              </div>
              <a 
                href={program.feeStructureDoc} 
                target="_blank" 
                rel="noreferrer"
                className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-2.5 bg-indigo-50 text-indigo-600 font-bold rounded-xl hover:bg-indigo-100 transition-colors"
              >
                View Document
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
