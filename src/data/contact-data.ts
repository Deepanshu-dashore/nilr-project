import { MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon, ClockIcon } from "@heroicons/react/24/outline";

export const contactData = {
  hero: {
    title: "Contact Us",
    subtitle: "We’re here to help!",
    description: "For any queries regarding admissions, programs, training, partnerships, or campus visits, feel free to get in touch with us."
  },
  address: {
    title: "Campus Address",
    details: [
      "CVRU Khandwa – NLRI Ratlam Campus",
      "National Livelihood Resources Institute (NLRI)",
      "Near Maleni River,",
      "Village Bhadwasa, Namli,",
      "Mhow-Neemuch State Highway-31,",
      "Ratlam, Madhya Pradesh – 457222, India"
    ],
    icon: MapPinIcon
  },
  phones: {
    title: "Phone Numbers",
    items: [
      { label: "General Enquiry", number: "+91-12345-67890 / +91-12345-67890" },
      { label: "Admissions Office", number: "+91-12345-67890 / +91-12345-67890" },
      { label: "Campus Reception", number: "0731-1122112211" }
    ],
    icon: PhoneIcon
  },
  emails: {
    title: "Email Addresses",
    items: [
      { label: "General Information", email: "test@nlri.com" },
      { label: "Admissions Enquiry", email: "test@nlri.com" }
    ],
    icon: EnvelopeIcon
  },
  websites: {
    title: "Official Websites",
    items: [
      { label: "Main Website", url: "www.nlri.cvruk.in" }
    ],
    icon: GlobeAltIcon
  },
  officeHours: {
    title: "Office Hours",
    items: [
      { day: "Monday to Saturday", time: "9:30 AM – 5:30 PM" },
      { day: "Sunday", time: "Closed" }
    ],
    icon: ClockIcon
  },
  socials: {
    title: "Connect with Us",
    description: "Stay updated through our social media channels:",
    links: [
      { label: "Facebook", url: "#", iconName: "facebook" },
      { label: "LinkedIn", url: "#", iconName: "linkedin" },
      { label: "Instagram", url: "#", iconName: "instagram" }
    ]
  },
  form: {
    title: "Send Us a Message",
    fields: [
      { name: "name", label: "Name", type: "text", placeholder: "Your Full Name" },
      { name: "email", label: "Email", type: "email", placeholder: "Your Email Address" },
      { name: "phone", label: "Phone Number", type: "tel", placeholder: "Your Phone Number" },
      { name: "subject", label: "Subject", type: "text", placeholder: "Subject of Enquiry" },
      { name: "message", label: "Message", type: "textarea", placeholder: "How can we help you?" }
    ],
    submitButton: "Submit Message"
  },
  map: {
    title: "Location Map",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14665.418042571439!2d74.9656825!3d23.2302066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963fc2310129219%3A0xe962534f3b762514!2sNational%20Livelihood%20Resources%20Institute!5e0!3m2!1sen!2sin!4v1707466585324!5m2!1sen!2sin", // Placeholder or finding actual if possible
    locationName: "NLRI Ratlam Campus"
  },
  closing: "We look forward to welcoming you at CVRUK-NLRI Campus!"
};
