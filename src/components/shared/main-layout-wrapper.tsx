"use client";

import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";

export default function MainLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/admin-login" || pathname === "/admin-register" || pathname.startsWith("/admin");

  return (
    <>
      {!isAuthPage && <Header />}
      <main className="grow">{children}</main>
      {!isAuthPage && <Footer />}
    </>
  );
}
