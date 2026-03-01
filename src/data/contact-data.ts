import { MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon, ClockIcon } from "@heroicons/react/24/outline";

export const contactData = {
  hero: {
    title: "CVRU Khandwa – NLRI Ratlam Campus",
    tagline: "National Livelihood Resources Institute (NLRI)",
    address: "Near Maleni River, Village Bhadwasa, Namli, Mhow-Neemuch State Highway-31, Ratlam, MP – 457222",
    quickContact: [
      { icon: PhoneIcon, text: "+91-12345-67890", label: "General" },
      { icon: EnvelopeIcon, text: "test@nlri.com", label: "Email" },
      { icon: GlobeAltIcon, text: "www.nlri.cvruk.in", label: "Web" }
    ]
  },
  categories: [
    {
      title: "Admission Queries",
      icon: PhoneIcon,
      items: [
        { label: "Phone", value: "+91-12345-67890, +91-12345-67891" },
        { label: "Email", value: "admissions@nlri.cvruk.in" }
      ]
    },
    {
      title: "Fee & Finance",
      icon: EnvelopeIcon,
      items: [
        { label: "Phone", value: "+91-7313111500, +91-7313111497" },
        { label: "Email", value: "accounts@nlri.com" }
      ]
    },
    {
      title: "Administration",
      icon: MapPinIcon,
      items: [
        { label: "Phone", value: "+91-7313111500, +91-7313111498" },
        { label: "Email", value: "registrar@nlri.cvruk.in" }
      ]
    }
  ],
  form: {
    title: "Let's Connect",
    subtitle: "Fill in the details below and our counselor will get in touch with you at the earliest.",
    fields: [
      { name: "name", label: "Name", type: "text", placeholder: "Your Full Name" },
      { name: "email", label: "Email", type: "email", placeholder: "Your Email Address" },
      { name: "phone", label: "Phone no.", type: "tel", placeholder: "Your Phone Number" },
      { name: "state", label: "State", type: "select", options: ["Madhya Pradesh", "Rajasthan", "Gujarat", "Other"] },
      { name: "course", label: "Course", type: "select", options: ["Vocational training", "Diploma", "Certificate", "Other"] },
      { name: "message", label: "Message", type: "textarea", placeholder: "Tell us about your query" }
    ],
    submitButton: "Contact Us"
  },
  map: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.255252157876!2d75.07872367512006!3d23.523320078826014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39640419d441a225%3A0x53063056acb1832d!2sNational%20Livelihood%20Resource%20Institute!5e0!3m2!1sen!2sin!4v171567929771!5m2!1sen!2sin",
    locationName: "NLRI Ratlam Campus"
  },
  socials: {
    title: "Connect with Us",
    links: [
      { label: "Facebook", url: "#" },
      { label: "LinkedIn", url: "#" },
      { label: "Instagram", url: "#" }
    ]
  }
};
