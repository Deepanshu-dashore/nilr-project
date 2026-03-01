import Link from "next/link";
import Image from "next/image";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
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
    <footer className="bg-primary border-t border-white/20 text-white overflow-hidden relative">

      {/* Main Footer Body */}
      <div className="container-wide pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-10 gap-y-16 mb-14">

          {/* 1. Brand column */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/Logo.png"
                alt="CVRUK-NLRI Logo"
                width={260}
                height={60}
                className="h-14 w-auto brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              Empowering rural communities through innovation, leadership, and professional excellence. A global benchmark for sustainable grassroots transformation.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-auto">
              <SocialLink href="#" label="Facebook">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href="#" label="Twitter/X">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="#" label="LinkedIn">
                <LinkedInIcon />
              </SocialLink>
              <SocialLink href="#" label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href="#" label="YouTube">
                <YouTubeIcon />
              </SocialLink>
            </div>
          </div>

          {/* 2. Link columns - mapped */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            {footerLinks.slice(0, 2).map((section) => (
              <div key={section.title} className="flex flex-col items-start">
                <h3 className="font-bold text-white text-[11px] uppercase tracking-[0.2em] mb-7 relative inline-block">
                  {section.title}
                  <span className="absolute -bottom-2.5 left-0 w-8 h-[2px] bg-accent rounded-full" />
                </h3>
                <ul className="space-y-4 w-full">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-all duration-300 text-[13.5px] flex items-center group/item gap-2"
                      >
                        <span className="w-0 group-hover/item:w-4 h-[1px] bg-accent transition-all duration-300 shrink-0" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 3. Contact Details column */}
          <div className="lg:col-span-3 flex flex-col items-start gap-8">
            <h3 className="font-bold text-white text-[11px] uppercase tracking-[0.2em] mb-2 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2.5 left-0 w-8 h-[2px] bg-accent rounded-full" />
            </h3>
            
            <div className="space-y-6 w-full pt-2">
              <ContactDetail 
                icon={<MapPinIcon className="w-5 h-5"/>}
                title="Office Location"
                text="Bhadwasa, Mhow-Neemuch Road, Ratlam (M.P.)"
                href="/contact"
              />
              <ContactDetail 
                icon={<PhoneIcon className="w-5 h-5"/>}
                title="Admissions Helpline"
                text="+91 91110 03000 / 07412 284300"
                href="tel:+919111003000"
              />
              <ContactDetail 
                icon={<EnvelopeIcon className="w-5 h-5"/>}
                title="Official Email"
                text="info@nlri-cvruk.ac.in"
                href="mailto:info@nlri-cvruk.ac.in"
              />
            </div>
          </div>
        </div>

        {/* Divider & Footer Bottom */}
        <div className="border-t border-white/5 pt-10 mt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-[11px] font-medium tracking-wide text-gray-500 text-center lg:text-left">
            <div className="space-y-2 lg:space-y-0 lg:flex lg:items-center lg:gap-6">
               <p className="border-b lg:border-b-0 border-white/5 pb-2 lg:pb-0">© {new Date().getFullYear()} CVRUK – NLRI Partnership. All Rights Reserved.</p>
               <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-400 uppercase tracking-widest text-[10px]">
                {["Privacy Policy", "Disclaimer", "Mandatory Disclosures"].map((item) => (
                  <Link key={item} href="#" className="hover:text-accent transition-colors">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <span>Designed & Developed by</span>
              <Link href="#" className="text-white hover:text-accent transition-colors font-bold uppercase tracking-widest border-b border-white/30 hover:border-accent">
                Dipanshu Dashore
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
    </footer>
  );
}

/* ─── Sub-components ─── */

function ContactDetail({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link href={href} className="flex items-start gap-4 group">
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-200">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">{title}</p>
        <p className="text-sm text-gray-200 font-medium leading-snug">{text}</p>
      </div>
    </Link>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:border-accent hover:text-white hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="w-4 h-4">{children}</div>
    </Link>
  );
}

/* ─── Social SVGs ─── */
const FacebookIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);
const TwitterIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 110-4.127 2.063 2.063 0 010 4.127zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
);
const InstagramIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.94 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
