import { Metadata } from "next";
import Hero from "@/src/components/shared/hero";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | CVRU Khandwa - NLRI Campus",
  description: "Privacy Policy for Dr. C. V. Raman University, Khandwa.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Hero
        title="Privacy Policy"
        subtitle="Understand how we collect, use, and protect your information at CVRUK-NLRI Campus."
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
          <span className="text-gray-900 font-bold">Privacy Policy</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 uppercase tracking-wide border-b border-gray-200 pb-4">
            Security & Privacy
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="leading-relaxed">
              Thank you for visiting the official web portal of <strong>Dr. C. V. Raman University, Khandwa (CVRUK)</strong> and the <strong>National Livelihood Resources Institute (NLRI), Ratlam Campus</strong>, managed under the stewardship of the <strong>Gramin Vikas Trust (GVT)</strong>.
            </p>
            <p className="leading-relaxed">
              We highly value your privacy. As per our core institutional policy, we do not collect personal information about you unless you voluntarily choose to provide that information to us (e.g., through inquiry forms, admission portals, or email communications). We do not give, share, sell, or transfer any personal information to a third party.
            </p>
            <p className="leading-relaxed">
              To understand more about how we record non-personal information during your visit or how we utilize information securely, please continue reading below.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-primary pl-4">
              Non-Personal Information We Record
            </h2>
            <p className="leading-relaxed">
              If you do nothing during your visit but browse through our website, read pages, or download resources pertaining to our School of Rural Management (SRM) or other programs, our website&apos;s operating system will automatically record some general, non-identifiable information to enhance user experience.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-primary pl-4">
              Data Automatically Collected During Your Visit
            </h2>
            <p className="leading-relaxed">Our web servers collect the following standard internet log information:</p>
            <ul className="list-disc pl-6 space-y-3 marker:text-primary">
              <li className="leading-relaxed">The internet domain for your internet service, such as &quot;xyz.com&quot; or &quot;xyz.net&quot; if you use a private account.</li>
              <li className="leading-relaxed">The type of browser and operating system (such as Macintosh, Unix, or Windows) used to access our site.</li>
              <li className="leading-relaxed">The date and time you access our site, alongside the specific pages you visit.</li>
              <li className="leading-relaxed">The address of the previous website you were visiting, if you linked to us directly from another domain.</li>
            </ul>
            <p className="leading-relaxed">
              We exclusively use this information for statistical analysis—to measure site traffic to different sections of our portal and to help us make the CVRUK-NLRI site more useful for prospective students, researchers, and visitors. This tracking system strictly <strong>does not</strong> record information about identifiable individuals.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-primary pl-4">
              Use of Cookies
            </h2>
            <p className="leading-relaxed">
              On certain CVRUK-NLRI web pages, we may use &quot;cookies&quot; to help you use our website interactively. A cookie is a minuscule text file that a website transfers to your computer&apos;s hard disk, generally to keep track of your session while you are connected to an admission or portal function. You may configure your browser to reject cookies, though some interactive features may not function precisely as intended.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-10 mb-4 border-l-4 border-primary pl-4">
              Information Voluntarily Provided by You
            </h2>
            <p className="leading-relaxed">
              If you submit personal details via contact forms, application sections, or email inquiries—such as your name, address, contact number, or academic background—this data is stored securely. Such information is only utilized by our administrative departments (such as the admissions cell) to respond precisely to your requests and process your applications effectively. We ensure it is protected from unauthorized access.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
