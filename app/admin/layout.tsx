"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/src/components/shared/Logo";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  UsersIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  ChartBarIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ChatBubbleBottomCenterTextIcon,
  PhotoIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { API_ENDPOINTS } from "@/src/config/api.config";

const sidebarLinks = [
  { name: "Enquiries", href: "/admin/enquiries", icon: ({className}: {className: string}) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24">
	<path fill="currentColor" d="M15 11V4H4v8.17l.59-.58l.58-.59H6z" opacity={0.3}></path>
	<path fill="currentColor" d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1m-5 7c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4zM4.59 11.59l-.59.58V4h11v7H5.17z"></path>
</svg>) },
  { name: "Admission", href: "/admin/admission", icon: ({className}: {className: string}) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 640 640"><path fill="currentColor" d="M288 32h64c17.7 0 32 14.3 32 32v64H256V64c0-17.7 14.3-32 32-32M96 96h112v32c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V96h112c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64m112 368c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80h-64c-44.2 0-80 35.8-80 80m112-120c30.9 0 56-25.1 56-56s-25.1-56-56-56s-56 25.1-56 56s25.1 56 56 56"/></svg>) },
  { name: "Programs", href: "/admin/programs", icon: ({className}: {className: string}) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24">
	<path fill="currentColor" d="M14.217 3.5a5.17 5.17 0 0 0-4.434 0L5.489 5.512a2.25 2.25 0 0 1 .647 4.306l-1.076.461c-.534.23-.837.362-1.042.467l-.003.05L9.783 13.5a5.17 5.17 0 0 0 4.434 0l6.691-3.137c1.456-.682 1.456-3.044 0-3.726z"></path>
	<path fill="currentColor" d="M5.545 8.44a.75.75 0 0 0-.59-1.38l-1.112.477c-.557.239-1.03.441-1.4.65c-.395.222-.734.482-.989.868c-.254.386-.36.8-.408 1.25C1 10.729 1 11.243 1 11.85v2.901a.75.75 0 0 0 1.5 0v-2.862c0-.656.001-1.088.037-1.421c.034-.315.093-.47.17-.586c.075-.115.195-.231.471-.387c.292-.164.689-.335 1.292-.593z"></path>
	<path fill="currentColor" d="M5 11.258L9.783 13.5a5.17 5.17 0 0 0 4.434 0L19 11.258v5.367c0 1.008-.503 1.952-1.385 2.44C16.146 19.88 13.796 21 12 21s-4.146-1.121-5.615-1.935C5.504 18.577 5 17.633 5 16.625z" opacity={0.5}></path>
</svg>)  },
  { name: "Program Types", href: "/admin/program-types", icon: ({className}: {className: string}) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24"><path fill="currentColor" d="M4 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3.5 0a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2zm.1 5a1.1 1.1 0 0 0 0 2.2h5.8a1.1 1.1 0 0 0 0-2.2zm-1.1 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M3 12a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/><path fill="currentColor" d="M19.5 13.5a1 1 0 1 0-2 0v2.05h-2a1 1 0 1 0 0 2h2v1.95a1 1 0 1 0 2 0v-1.95h2a1 1 0 1 0 0-2h-2z" opacity="0.5"/></svg>) },
  { name: "Events", href: "/admin/events", icon: ({className}: {className: string}) => (<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 36 36"><path fill="currentColor" d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" className="clr-i-solid--badged clr-i-solid-path-1--badged"></path><path fill="currentColor" d="M30 13.5A7.5 7.5 0 0 1 22.5 6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V12.34a7.45 7.45 0 0 1-4 1.16M10 26H8v-2h2Zm0-5H8v-2h2Zm0-5H8v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Z" className="clr-i-solid--badged clr-i-solid-path-2--badged"></path><circle cx={30} cy={6} r={5} fill="currentColor" className="clr-i-solid--badged clr-i-solid-path-3--badged clr-i-badge"></circle><path fill="none" d="M0 0h36v36H0z"></path></svg>) },
  { name: "Gallery", href: "/admin/gallery", icon: ({className}: {className: string})=>(<svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24"><path fill="currentColor" d="M19 2H5a3.01 3.01 0 0 0-3 3v8.86l3.88-3.88a3.075 3.075 0 0 1 4.24 0l2.871 2.887l.888-.888a3.01 3.01 0 0 1 4.242 0L22 15.86V5a3.01 3.01 0 0 0-3-3" opacity="0.5"/><path fill="currentColor" d="M10.12 9.98a3.075 3.075 0 0 0-4.24 0L2 13.86V19a3.01 3.01 0 0 0 3 3h14a3 3 0 0 0 2.16-.92z"/><path fill="currentColor" d="m22 15.858l-3.879-3.879a3.01 3.01 0 0 0-4.242 0l-.888.888l8.165 8.209c.542-.555.845-1.3.844-2.076z" opacity="0.25"/></svg>) },
  { name: "Site Info & Settings", href: "/admin/settings", icon: Cog6ToothIcon },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-bg-section">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="font-heading font-black text-primary animate-pulse uppercase tracking-widest text-sm">
            Verifying Admin Access...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-bg-section font-sans">
      {/* Admin Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? "w-[280px]" : "w-24"
        } transition-all duration-300 bg-white border-r border-dashed border-gray-200 flex flex-col z-50 relative shrink-0`}
      >
        <div className="px-6 py-6 flex flex-col gap-1 items-center bg-gray-50 border-b border-dashed border-gray-200">

          <Link href="/admin" className="flex items-end gap-2.5">
             {isSidebarOpen ? (
               <Logo variant="admin" size="xs" />
             ) : (
                  <div className="relative shrink-0">
                        <Image
                          src="/NLRILOGO.png"
                          alt="CVRUK-NIRM Logo"
                          width={50}
                          height={50}
                          className="h-6 md:h-8 xl:h-10"
                          priority
                        />
                      </div>
             )}
          </Link>
        </div>

        {/* Floating Toggle Button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute top-8 -right-3.5 w-7 h-7 bg-white border border-gray-200 border-dashed rounded-full shadow-sm hidden md:flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-all z-50 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" className={`transition-transform duration-300 ${!isSidebarOpen && "rotate-180"}`}>
            <path fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"/>
          </svg>
        </button>

        <nav className="flex-1 py-4 px-4 space-y-2 overflow-y-auto custom-scrollbar">
          {isSidebarOpen && (
             <div className="px-4 py-3 text-[11px] font-bold tracking-widest text-slate-400 uppercase mt-2 mb-1">
                Management Menu
             </div>
          )}
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-4 px-4 py-2.5 rounded-lg transition-all duration-200 group ${
                  isActive 
                    ? "bg-[#00A76F]/10 text-[#00A76F] font-semibold" 
                    : "text-slate-600 hover:bg-gray-50 hover:text-gray-900 font-medium"
                }`}
              >
                <link.icon className={`h-6 w-6 shrink-0 ${isActive ? "text-[#00A76F]" : "text-slate-400 group-hover:text-gray-600 transition-colors"}`} strokeWidth={isActive ? 2 : 1.5} />
                {isSidebarOpen && (
                  <span className="text-[14px]">
                    {link.name}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header for Admin Panel */}
        <header className="h-16 bg-white border-b border-border-light flex items-center justify-between px-8 z-40">
           <h2 className="text-xl font-heading font-black text-primary">
              {sidebarLinks.find(l => pathname.startsWith(l.href))?.name || "Overview"}
           </h2>
           <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-extrabold text-primary uppercase tracking-widest">Administrator</p>
                <p className="text-[10px] text-text-muted">Account Management</p>
              </div>

              {/* Header Separator */}
              <div className="w-px h-6 bg-gray-300 mx-2 hidden sm:block" />

              {/* Logout TopBar Button */}
              <button 
                onClick={async () => {
                  try {
                    await fetch(API_ENDPOINTS.AUTH.LOGOUT, { method: "POST" });
                    router.push("/admin-login");
                  } catch (err) {
                    console.error("Logout failed:", err);
                    router.push("/admin-login"); // fallback redirect
                  }
                }}
                className="p-2 py-1.5 flex text-xs font-medium items-center gap-2 bg-red-600 text-red-200 rounded-lg transition-colors group cursor-pointer"
                title="Logout"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} className="bg-red-100 text-red-600 rounded-full p-0.5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 20a8 8 0 1 1 0-16z" opacity={0.5} />
                  <path fill="currentColor" fillRule="evenodd" d="M16.47 8.47a.75.75 0 0 0 0 1.06l1.72 1.72H10a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0" clipRule="evenodd" />
                </svg>
                Logout
              </button>
           </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 bg-bg-section custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
