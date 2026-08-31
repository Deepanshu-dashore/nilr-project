import { Metadata } from "next";
import Hero from "@/src/components/shared/hero";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | CVRU Khandwa - NIRM Campus",
  description: "Disclaimer for Dr. C. V. Raman University, Khandwa.",
};

export default function Disclaimer() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero
        title="Disclaimer"
        subtitle="Important information regarding the limitations of liability and accuracy of content on our portal."
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
          <span className="text-gray-900 font-bold">Disclaimer</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold border-gray-200 text-gray-900 mb-8 uppercase tracking-wide border-b pb-4">
            Official Disclaimer
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">
              The information contained within this web portal is strictly for general informational purposes. This information is provided under the collaborative partnership of <strong>Dr. C. V. Raman University, Khandwa (CVRUK)</strong> and the <strong>National Institute of Rural Management (NIRM), Ratlam Campus</strong>, operated by the Gramin Vikas Trust (GVT). While we endeavor intrinsically to keep the latest information up to date and meticulously correct, we make no overarching representations or warranties of any kind—express or implied—concerning completeness or absolute accuracy.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-primary pl-4">
              Accuracy of Information
            </h2>
            <p className="leading-relaxed">
              Any direct reliance you place on such institutional information is strictly at your own operational risk. The administration of CVRUK and NIRM reserves the fundamental right to make definitive operational changes to academic courses, admission regulations, fee structures, program syllabi (e.g., within the School of Rural Management), and allied policies without prior public notice. Prospective students and users are explicitly advised to cross-verify specific details directly with the designated campus administrative departments before finalizing any academic or financial decisions based on the web content.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-primary pl-4">
              External Linking & Endorsements
            </h2>
            <p className="leading-relaxed">
              Through the utilization of this specific website, you may encounter the ability to link to external websites that are functionally not under the direct control or supervision of CVRUK or NIRM. We retain absolutely no control over the nature, structural content, and continuous availability of those external platforms. The deliberate inclusion of any external links does not necessarily imply an unequivocal recommendation nor does it endorse the views or agendas expressed unilaterally within them.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-primary pl-4">
              Continuous Website Availability
            </h2>
            <p className="leading-relaxed">
              Every coordinated technological effort is consistently made by our IT cell to keep the portal securely up and running smoothly. However, CVRUK-NIRM takes no tangible responsibility for, and strictly will not be legally liable for, the website being temporarily unavailable due to technical contingencies, server maintenance, or issues fundamentally beyond our structural control.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
