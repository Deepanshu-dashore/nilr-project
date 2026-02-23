import ContactHero from "@/src/components/contact/contact-hero";
import ContactInfo from "@/src/components/contact/contact-info";
import ContactForm from "@/src/components/contact/contact-form";
import ContactMap from "@/src/components/contact/contact-map";

export const metadata = {
  title: "Contact Us | CVRU Khandwa – NLRI Ratlam Campus",
  description: "Get in touch with CVRU Khandwa – NLRI Ratlam Campus for admissions, programs, partnerships, or campus visits.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* 🏛️ Contact Hero Section */}
      <ContactHero />

      {/* 📞 Contact Information Grid */}
      <ContactInfo />

      {/* ✉️ Send Us a Message (Form) */}
      <ContactForm />

      {/* 📍 Location Map & Closing */}
      <ContactMap />
    </div>
  );
}
