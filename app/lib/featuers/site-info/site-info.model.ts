import { Schema, model, models } from "mongoose";

const importantDateSchema = new Schema({
  event: { type: String, required: true },
  date: { type: String, required: true },
  icon: { type: String }
});

const socialLinksSchema = new Schema({
  facebook: { type: String, default: "https://facebook.com" },
  twitter: { type: String, default: "https://twitter.com" },
  linkedin: { type: String, default: "https://linkedin.com" },
  instagram: { type: String, default: "https://instagram.com" },
  youtube: { type: String, default: "https://youtube.com" }
}, { _id: false });

const siteInfoSchema = new Schema({
  academicSession: { type: String, default: "2026–28" },
  admissionCycle: { type: String, default: "2026–27" },
  importantDates: {
    type: [importantDateSchema],
    default: [
      { event: "Application Opens", date: "15 May 2026", icon: "ClockIcon" },
      { event: "Last Date to Apply", date: "31 July 2026", icon: "CalendarIcon" },
      { event: "Entrance Test / Interview", date: "10 August 2026", icon: "IdentificationIcon" },
      { event: "Course Commencement", date: "1 September 2026", icon: "UserPlusIcon" }
    ]
  },
  contactAddress: { type: String, default: "CVRU Khandwa – NIRM Ratlam Campus, Near Maleni River, Village Bhadwasa, Namli, Ratlam, MP – 457222, India" },
  contactEmail: { type: String, default: "admissions@nirm.cvruk.in" },
  generalEmail: { type: String, default: "info@nirm-cvruk.ac.in" },
  contactPhone: { type: String, default: "+91 91110 03000" },
  helplinePhone: { type: String, default: "+91 91091 07361 / 07412 284300" },
  officeHours: { type: String, default: "Monday – Saturday: 9:30 AM – 5:30 PM (Sunday: Closed)" },
  websiteUrl: { type: String, default: "https://www.nirm.cvruk.in" },
  mapEmbedUrl: { type: String, default: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.255252157876!2d75.07872367512006!3d23.523320078826014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39640419d441a225%3A0x53063056acb1832d!2sNational%20Livelihood%20Resource%20Institute!5e0!3m2!1sen!2sin!4v171567929771!5m2!1sen!2sin" },
  socialLinks: {
    type: socialLinksSchema,
    default: () => ({
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com"
    })
  },
  announcementTicker: { type: String, default: "Admissions Open for 2026–28: PGD-RM & Certificate Courses" }
}, {
  timestamps: true
});

const SiteInfo = models.SiteInfo || model("SiteInfo", siteInfoSchema);

export default SiteInfo;
