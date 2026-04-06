"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ProgramStructureItem {
  sem: string;
  courseType: string;
  courseName: string;
  credits: number;
}

interface Props {
  groupedStructure: Record<string, ProgramStructureItem[]>;
}

export function SemesterAccordion({ groupedStructure }: Props) {
  // First semester open by default
  const keys = Object.keys(groupedStructure);
  const [openSemesters, setOpenSemesters] = useState<Set<string>>(
    new Set(keys.length > 0 ? [keys[0]] : [])
  );

  const toggle = (sem: string) => {
    setOpenSemesters((prev) => {
      const next = new Set(prev);
      if (next.has(sem)) next.delete(sem);
      else next.add(sem);
      return next;
    });
  };

  return (
    <div className="space-y-[6px]">
      {Object.entries(groupedStructure).map(([sem, courses]) => {
        const isOpen = openSemesters.has(sem);

        return (
          <div
            key={sem}
            className="border border-gray-200 overflow-hidden rounded-sm"
          >
            {/* ── Header ── */}
            <button
              type="button"
              onClick={() => toggle(sem)}
              className="w-full flex items-center justify-between px-6 py-4 bg-primary hover:bg-primary/80 transition-colors duration-200 text-left group"
            >
              <span className="text-sm font-bold text-white tracking-wide">
                Semester {sem}
              </span>

              {/* Animated +/− icon */}
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="w-6 h-6 cursor-pointer flex items-center justify-center text-white text-xl font-light shrink-0 origin-center"
                style={{ lineHeight: 1 }}
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    >
                      <path d="M5 12h14">
                        <animate
                          fill="freeze"
                          attributeName="strokeDasharray"
                          dur="0.5s"
                          values="16;0"
                        />
                      </path>
                      <path
                        strokeDasharray="16"
                        d="M12 5v14"
                      >
                        <animate
                          fill="freeze"
                          attributeName="strokeDasharray"
                          begin="0.5s"
                          dur="0.5s"
                          to="0"
                        />
                      </path>
                    </g>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeDasharray="16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14"><animate fill="freeze" attributeName="strokeDasharray" dur="0.5s" values="16;0"/></path></svg>
              )}
              </motion.span>
            </button>

            {/* ── Body with AnimatePresence ── */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-5"
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="overflow-x-auto border border-gray-200">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-300 border-b border-gray-200">
                          <th className="px-4 py-3 text-gray-700 font-bold text-xs capitalize border-r border-gray-200 w-24">
                            Semester
                          </th>
                          <th className="px-4 py-3 text-gray-700 font-bold text-xs capitalize border-r border-gray-200 w-56">
                            Course Type
                          </th>
                          <th className="px-4 py-3 text-gray-700 font-bold text-xs capitalize border-r border-gray-200">
                            Course Name / Course Title
                          </th>
                          <th className="px-4 py-3 text-gray-700 font-bold text-xs capitalize text-center w-28">
                            Total Credits
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {courses.map((c, i) => (
                          <motion.tr
                            key={i}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.03, duration: 0.2 }}
                            className={
                              (i % 2 === 0 ? "bg-white" : "bg-gray-100") +
                              " border-b border-gray-200 hover:bg-blue-50/30 transition-colors"
                            }
                          >
                            <td className="px-4 py-2.5 font-semibold text-xs border-r border-gray-200">
                              {c.sem}
                            </td>
                            <td className="px-4 py-2.5 text-xs border-r border-gray-200">
                              {c.courseType}
                            </td>
                            <td className="px-4 py-2.5 font-medium text-[13px] border-r border-gray-200">
                              {c.courseName}
                            </td>
                            <td className="px-4 py-2.5 font-bold text-center text-xs">
                              {c.credits}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
