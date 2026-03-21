import type { Metadata } from "next";
import { Inter, Outfit,Poppins } from "next/font/google";
import "./globals.css";
import MainLayoutWrapper from "@/src/components/shared/main-layout-wrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CVRUK–NLRI Campus Portal | Education, Training & Rural Development",
  description: "Official portal for CVRU Khandwa – NLRI Ratlam Campus. Providing excellence in rural development, academic programs, and CSR initiatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${poppins.variable} antialiased min-h-screen flex flex-col`}>
        <MainLayoutWrapper>{children}</MainLayoutWrapper>
      </body>
    </html>
  );
}
