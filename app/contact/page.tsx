import ContactClient from "@/src/components/contact/contact-client";

export const metadata = {
  title: "Contact Us | CVRU Khandwa – NIRM Ratlam Campus",
  description: "Get in touch with CVRU Khandwa – NIRM Ratlam Campus for university admissions, administration, and campus queries.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* 🏛️ Professional Unitary Layout */}
      <ContactClient />
    </div>
  );
}
