import { Metadata } from "next";
import Hero from "@/src/components/shared/hero";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | CVRU Khandwa - NIRM Campus",
  description: "Terms and Conditions for Dr. C. V. Raman University, Khandwa.",
};

export default function TermsConditions() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero
        title="Terms & Conditions"
        subtitle="Review the rules, guidelines, and agreements for using the CVRUK-NIRM web portal."
        tag="Policies"
        className="py-16 md:py-18"
        tagIcon={DocumentTextIcon}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 py-4 mb-10">
        <div className="container mx-auto px-4 max-w-6xl flex items-center gap-2 text-sm text-gray-500 font-medium tracking-wide">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>&gt;</span>
          <span>Policies</span>
          <span>&gt;</span>
          <span className="text-gray-900 font-bold">Terms & Conditions</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold border-gray-200 text-gray-900 mb-8 uppercase tracking-wide border-b pb-4">
            Terms of Use
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">
              Welcome to the official web portal of the <strong>Dr. C. V. Raman University, Khandwa (CVRUK)</strong> and <strong>National Institute of Rural Management (NIRM), Ratlam Campus</strong>. By accessing and utilizing this website, you explicitly agree to comply with and be bound by the following terms and conditions of use.
            </p>
            <p className="leading-relaxed">
              These terms, together with our privacy policy, govern the CVRUK-NIRM campus relationship with you in relation to this digital platform. This campus operates under the strategic partnership of CVRUK and the <strong>Gramin Vikas Trust (GVT)</strong>.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-primary pl-4">
              Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By browsing, accessing, or using this website to seek admission into the School of Rural Management (SRM) or any other academic/training programs, you acknowledge that you have read, understood, and agree to be legally bound by these terms. If you remain in disagreement with any part of these terms, please refrain from using this website.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-primary pl-4">
              Use of Content & Intellectual Property
            </h2>
            <p className="leading-relaxed">
              All materials hosted on this website—including but not limited to texts, dynamic imagery, institutional logos, campus photographs, and academic curriculum structures—are the intellectual property of CVRUK, NIRM, or their respective licensors. You may access, view, and download structural materials exclusively for personal, non-commercial, and educational reference purposes. Reproduction, modification, or unauthorized commercial distribution of these materials is strictly prohibited.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-primary pl-4">
              User Conduct & Restrictions
            </h2>
            <ul className="list-disc pl-6 space-y-3 marker:text-primary">
              <li className="leading-relaxed">You agree not to use the website in any capacity that intentionally causes, or may cause, damage to the website framework or impairment of the availability or accessibility of the institutional portal.</li>
              <li className="leading-relaxed">You must not utilize our website for any unlawful, illicit, fraudulent, or globally harmful activities.</li>
              <li className="leading-relaxed">Unauthorized interference, including attempts to bypass security, upload malicious code, or unilaterally alter information on this website, is strictly prohibited and punishable under the Information Technology Act.</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-primary pl-4">
              Amendments to Terms
            </h2>
            <p className="leading-relaxed">
              The administration of CVRUK and NIRM reserves the absolute right to revise, modify, or rewrite these terms and conditions at any given time without prior external notice. Any updated versions will immediately be made available on this particular page. Your continued use of the site following such modifications constitutes your formal acceptance of the revised terms.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
