import ContactHero from "@/src/components/contact/contact-hero";
import ContactMain from "@/src/components/contact/contact-main";

export const metadata = {
  title: "Contact Us | CVRU Khandwa – NLRI Ratlam Campus",
  description: "Get in touch with CVRU Khandwa – NLRI Ratlam Campus for university admissions, administration, and campus queries.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-white">
      {/* 🎓 University-style Hero Section */}
      <ContactHero />

      {/* 📞 Integrated Layout (Categories + Map/Form Overlap) */}
      <ContactMain />
    </div>
  );
}
