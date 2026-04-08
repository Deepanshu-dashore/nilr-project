"use client";

import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Header from "./header";
import Footer from "./footer";
import ApplyNowModal from "../modals/ApplyNowModal";
import NavigationLinkModel from "../modals/NavigationLinkModel";

export default function MainLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/admin-login" || pathname === "/admin-register" || pathname.startsWith("/admin");

  return (
    <>
      {!isAuthPage && (
        <Suspense fallback={null}>
          <Header />
        </Suspense>
      )}
      <main className="grow">{children}</main>
      <Suspense fallback={null}>
        <ApplyNowModal />
        <NavigationLinkModel />
      </Suspense>
      {!isAuthPage && <Footer />}
    </>
  );
}
