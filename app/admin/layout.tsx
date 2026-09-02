"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "@/src/components/shared/Logo";
import {
  HomeIcon,
  ChatBubbleBottomCenterTextIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  AcademicCapIcon,
  BookOpenIcon,
  RectangleStackIcon,
  MegaphoneIcon,
  PhotoIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
  ArrowLeftOnRectangleIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { API_ENDPOINTS } from "@/src/config/api.config";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavSection {
  id: string;
  title: string;
  links: NavItem[];
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Logout Confirmation Modal State
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Collapsible sections state
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    admissions: true,
    academics: true,
    media: true,
    settings: true,
  });

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.AUTH.VERIFY);
        const data = await response.json();
        if (!data.success) {
          router.push("/admin-login");
        } else {
          setIsLoading(false);
        }
      } catch (err) {
        router.push("/admin-login");
      }
    };
    checkAuth();
  }, [router]);

  // Handle Logout Confirmation
  const handleConfirmLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch(API_ENDPOINTS.AUTH.LOGOUT, { method: "POST" });
      router.push("/admin-login");
    } catch (err) {
      console.error("Logout failed:", err);
      router.push("/admin-login");
    } finally {
      setIsLoggingOut(false);
      setIsLogoutModalOpen(false);
    }
  };

  // Top Priority Daily Operations
  const primaryDailyItems: NavItem[] = [
    { name: "Overview", href: "/admin", icon: HomeIcon },
    { name: "Student Enquiries", href: "/admin/enquiries", icon: ChatBubbleBottomCenterTextIcon },
    { name: "Admissions & Leads", href: "/admin/admission", icon: UserGroupIcon },
  ];

  // Grouped Navigation Sections ordered by administrative priority
  const navSections: NavSection[] = [
    {
      id: "admissions",
      title: "Admissions & Schedule",
      links: [
        { name: "Academic Session & Cycle", href: "/admin/academic-session", icon: AcademicCapIcon },
        { name: "Important Dates", href: "/admin/important-dates", icon: CalendarDaysIcon },
      ],
    },
    {
      id: "academics",
      title: "Course Catalog",
      links: [
        { name: "Academic Programs", href: "/admin/programs", icon: BookOpenIcon },
        { name: "Program Types", href: "/admin/program-types", icon: RectangleStackIcon },
      ],
    },
    {
      id: "media",
      title: "Media & Broadcasts",
      links: [
        { name: "News & Events", href: "/admin/events", icon: MegaphoneIcon },
        { name: "Photo Gallery", href: "/admin/gallery", icon: PhotoIcon },
      ],
    },
    {
      id: "settings",
      title: "System & Info",
      links: [
        { name: "Site Info & Settings", href: "/admin/settings", icon: Cog6ToothIcon },
      ],
    },
  ];

  const allNavLinks = [...primaryDailyItems, ...navSections.flatMap((s) => s.links)];

  // Filtered links when searching
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return navSections;
    const q = searchQuery.toLowerCase();
    return navSections
      .map((section) => ({
        ...section,
        links: section.links.filter((l) => l.name.toLowerCase().includes(q)),
      }))
      .filter((section) => section.links.length > 0);
  }, [searchQuery, navSections]);

  const filteredPrimaryItems = useMemo(() => {
    if (!searchQuery.trim()) return primaryDailyItems;
    const q = searchQuery.toLowerCase();
    return primaryDailyItems.filter((item) => item.name.toLowerCase().includes(q));
  }, [searchQuery, primaryDailyItems]);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-2.5">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-800 border-t-transparent" />
          <p className="font-sans font-semibold text-slate-600 text-xs tracking-wide">
            Loading Workspace...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#FBFBFC] font-sans antialiased text-slate-800">
      {/* Clean Compact SaaS Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-[248px]" : "w-[64px]"
        } transition-all duration-200 bg-white border-r border-slate-200/70 flex flex-col z-40 relative shrink-0 select-none`}
      >
        {/* Workspace Brand / Header */}
        <div className={`h-13 px-3 flex items-center ${isSidebarOpen ? "justify-between" : "justify-center"} border-b border-slate-100`}>
          {isSidebarOpen ? (
            <>
              <Link
                href="/admin"
                className="flex items-center gap-2 min-w-0 group hover:opacity-90 transition-opacity"
              >
                {/* Small Logo Component (Without Text) */}
                <div className="relative shrink-0 flex items-center justify-center">
                  <Logo size="xs" showText={false} />
                </div>

                <div className="flex flex-col items-left min-w-0 mt-1">
                  <span className="font-bold text-[13px] text-slate-900 truncate block">
                    NIRM Admin Panel
                  </span>
                  <p className="text-[10px] text-slate-500">Management Dashboard</p>
                </div>
              </Link>

              {/* Sidebar Collapse Button */}
              <button
                type="button"
                onClick={() => setIsSidebarOpen(false)}
                className="w-6 h-6 rounded-md hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors cursor-pointer shrink-0"
                title="Collapse sidebar"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                </svg>
              </button>
            </>
          ) : (
            /* When Sidebar is Closed: Show Open/Expand Button in place of logo */
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              className="w-8 h-8 rounded-md hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              title="Expand sidebar"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
            </button>
          )}
        </div>

        {/* Quick Actions Search Bar */}
        {isSidebarOpen && (
          <div className="px-2.5 pt-2.5 pb-1">
            <div className="relative flex items-center bg-slate-50 border border-slate-200/70 rounded-lg px-2.5 py-1.5 focus-within:border-slate-400 focus-within:bg-white transition-all shadow-2xs">
              <span className="w-3.5 h-3.5 border border-slate-300 rounded text-[9px] font-mono text-slate-500 flex items-center justify-center mr-1.5 shrink-0">
                ⌘
              </span>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-[12px] text-slate-800 placeholder-slate-400 focus:outline-hidden"
              />
              <div className="flex items-center gap-0.5 text-[9.5px] text-slate-400 font-mono ml-1 shrink-0">
                <span>⌘K</span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Scrollable Body */}
        <nav className="flex-1 py-2 px-2 space-y-2.5 overflow-y-auto custom-scrollbar">
          {/* Top Priority Items */}
          <div className="space-y-0.5">
            {filteredPrimaryItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors group ${
                    isActive
                      ? "bg-slate-100 text-slate-950 font-semibold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                  title={!isSidebarOpen ? item.name : undefined}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? "text-slate-950" : "text-slate-400 group-hover:text-slate-700"
                    }`}
                  />
                  {isSidebarOpen && <span className="truncate">{item.name}</span>}
                </Link>
              );
            })}
          </div>

          {/* Grouped Hierarchical Sections */}
          {filteredSections.map((section) => {
            const isOpen = openSections[section.id] !== false;
            return (
              <div key={section.id} className="pt-1">
                {/* Section Header with Chevron */}
                {isSidebarOpen && (
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between px-2 py-1 text-[10.5px] font-bold text-slate-400 hover:text-slate-700 uppercase tracking-wider transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-1.5">
                      <ChevronRightIcon
                        className={`w-3 h-3 transition-transform duration-150 ${
                          isOpen ? "rotate-90 text-slate-600" : "text-slate-400"
                        }`}
                      />
                      <span>{section.title}</span>
                    </div>
                  </button>
                )}

                {/* Sub-items list with clean indentation */}
                {(isOpen || !isSidebarOpen) && (
                  <div className={`space-y-0.5 ${isSidebarOpen ? "mt-0.5 pl-2" : ""}`}>
                    {section.links.map((link) => {
                      const isActive =
                        pathname === link.href ||
                        (link.href !== "/admin" && pathname.startsWith(link.href + "/"));
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors group ${
                            isActive
                              ? "bg-slate-100 text-slate-950 font-semibold"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                          title={!isSidebarOpen ? link.name : undefined}
                        >
                          <Icon
                            className={`w-4 h-4 shrink-0 transition-colors ${
                              isActive
                                ? "text-slate-950"
                                : "text-slate-400 group-hover:text-slate-700"
                            }`}
                          />
                          {isSidebarOpen && (
                            <span className="truncate tracking-tight">{link.name}</span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer Admin User Profile Bar */}
        <div className="p-2.5 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-slate-200 text-slate-700 font-bold text-[11px] flex items-center justify-center shrink-0 border border-slate-300/60">
              A
            </div>
            {isSidebarOpen && (
              <div className="min-w-0">
                <p className="text-[12px] font-semibold text-slate-800 truncate leading-tight">
                  Administrator
                </p>
                <p className="text-[10px] text-slate-400 truncate leading-tight">
                  admin@nirm.in
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Viewport */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Minimalist Topbar Header */}
        <header className="h-13 bg-white border-b border-slate-200/70 flex items-center justify-between px-6 z-30 shrink-0">
          <div className="flex items-center gap-2 text-[13px] text-slate-500">
            <span className="font-semibold text-slate-900">
              {allNavLinks.find(
                (l) => pathname === l.href || (l.href !== "/admin" && pathname.startsWith(l.href + "/"))
              )?.name || "Overview"}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* View Public Site */}
            <Link
              href="/"
              target="_blank"
              className="text-[12px] font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <span>View Public Site</span>
              <svg className="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeWidth="2" strokeLinecap="round" />
                <polyline points="15 3 21 3 21 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="10" y1="14" x2="21" y2="3" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Link>

            {/* Topbar Separator */}
            <div className="w-px h-4 bg-slate-200 mx-0.5" />

            {/* Logout Topbar Button */}
            <button
              type="button"
              onClick={() => setIsLogoutModalOpen(true)}
              className="text-[12px] font-medium text-slate-600 hover:text-rose-600 hover:bg-rose-50 px-2.5 py-1 rounded-md border border-slate-200 hover:border-rose-200 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
              title="Sign out"
            >
              <ArrowLeftOnRectangleIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-600" />
              <span>Sign Out</span>
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#FBFBFC] custom-scrollbar">
          {children}
        </main>
      </div>

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-xl w-full max-w-sm shadow-2xl border border-slate-200/80 overflow-hidden transform transition-all">
            {/* Modal Header */}
            <div className="p-5 pb-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
                  <ArrowLeftOnRectangleIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm">
                    Confirm Sign Out
                  </h3>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                    Are you sure you want to log out of the admin panel? You will need to sign back in with your administrator credentials.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setIsLogoutModalOpen(false)}
                disabled={isLoggingOut}
                className="px-3.5 py-1.5 rounded-md border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-white transition-colors cursor-pointer disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmLogout}
                disabled={isLoggingOut}
                className="px-4 py-1.5 rounded-md bg-rose-600 text-white text-xs font-semibold hover:bg-rose-700 transition-colors shadow-xs cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
              >
                {isLoggingOut ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Signing out...</span>
                  </>
                ) : (
                  <span>Sign Out</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
