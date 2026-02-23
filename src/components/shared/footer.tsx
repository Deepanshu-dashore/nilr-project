import Link from "next/link";
import Image from "next/image";
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Programs Offered", href: "/programs" },
      { name: "Admissions", href: "/admissions" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Campus & Life",
    links: [
      { name: "Infrastructure", href: "/campus" },
      { name: "Student Life", href: "/student-life" },
      { name: "Hostel Facilities", href: "/campus#hostels" },
      { name: "Media & Events", href: "/media-events" },
      { name: "Success Stories", href: "/success-stories" },
    ],
  },
  {
    title: "Portals",
    links: [
      { name: "Student Login", href: "#" },
      { name: "Faculty Portal", href: "#" },
      { name: "Placement Cell", href: "/placements" },
      { name: "CSR Initiatives", href: "/csr-partnerships" },
      { name: "Research Hub", href: "/research-training" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-[#031146] via-primary to-primary text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-10 max-w-7xl mx-auto">

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-bold text-white text-sm mb-10 uppercase tracking-[0.2em] relative inline-block">
                  {section.title}
                  <span className="absolute -bottom-3 left-0 w-8 h-0.5 bg-accent" />
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-accent transition-all duration-300 text-sm flex items-center group/item"
                      >
                        <span className="w-0 group-hover/item:w-4 h-px bg-accent mr-0 group-hover/item:mr-2 transition-all duration-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="lg:col-span-4 max-w-sm">
            <Link href="/" className="inline-block mb-2 group">
              <Image 
                src="/Logo.png" 
                alt="CVRUK-NLRI Logo" 
                width={280} 
                height={60} 
                className="h-16 w-auto brightness-0 invert opacity-90 transition-opacity hover:opacity-100"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-medium">
              A pioneering collaboration between Dr. C.V. Raman University and National Livelihood Resources Institute, dedicated to excellence in rural management and sustainable innovation.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<FacebookIcon />} />
              <SocialIcon icon={<TwitterIcon />} />
              <SocialIcon icon={<LinkedInIcon />} />
              <SocialIcon icon={<InstagramIcon />} />
            </div>
          </div>
        </div>
        

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-white/5 mb-12 bg-white/5 backdrop-blur-sm rounded-3xl px-10">
          <ContactDetail 
            icon={<MapPinIcon className="h-6 w-6" />}
            title="Our Campus"
            text="CVRU-NLRI Campus, Ratlam, Madhya Pradesh, India"
          />
          <ContactDetail 
            icon={<PhoneIcon className="h-6 w-6" />}
            title="Helpline"
            text="+91 1234 567 890 / 07412 284300"
          />
          <ContactDetail 
            icon={<EnvelopeIcon className="h-6 w-6" />}
            title="Admission Email"
            text="admissions@cvruknlri.ac.in"
          />
        </div> */}

        <div className="border-t border-white/5 flex flex-col gap-0">
          {/* Institutional Links Bar - Matched to user request */}
          {/* <div className="flex flex-wrap justify-center bg-primary py-4 md:justify-start w-full px-8 gap-x-8 gap-y-4 text-[10px] font-semibold uppercase tracking-wider text-gray-400 border-b border-white/10">
            <FooterPolicyLink title="Admission Policy" />
            <FooterPolicyLink title="Mandatory Disclosures" />
            <FooterPolicyLink title="Cautionary Notice" />
            <FooterPolicyLink title="Fraud Alert" />
            <FooterPolicyLink title="Tender Notices" />
            <FooterPolicyLink title="Sitemap" />
            <FooterPolicyLink title="Disclaimer" />
            <FooterPolicyLink title="Copyright Statement" />
            <FooterPolicyLink title="Data Protection and Privacy Statement" />
          </div> */}

          <div className="flex mx-auto w-full px-10 flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-gray-500 font-medium pt-8">
             <p>© {new Date().getFullYear()} CVRUK–NLRI Partnership. All Rights Reserved.</p>
             <p>Website Design and Development by <span className="text-gray-300">Dipanshu Dashore</span></p>
          </div>
        </div>
      </div>

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </footer>
  );
}

function SocialIcon({ icon: Icon, href = "#" }: { icon: React.ReactNode; href?: string }) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-5 h-5">
        {Icon}
      </div>
    </Link>
  );
}

function ContactDetail({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">{title}</p>
        <p className="text-sm text-gray-200 font-semibold">{text}</p>
      </div>
    </div>
  );
}

function FooterPolicyLink({ title, href = "#" }: { title: string; href?: string }) {
  return (
    <Link href={href} className="group flex items-center gap-3 hover:text-white transition-colors">
      <div className="w-1.5 h-1.5 bg-white shrink-0" />
      <span>{title}</span>
    </Link>
  );
}

// Custom Social SVGs to match Heroicon style
const FacebookIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const TwitterIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
);

const InstagramIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.94 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
