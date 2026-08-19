import SiteInfo from "./site-info.model";
import { connectDB } from "@/app/lib/db/connectDB";

export const DEFAULT_SITE_INFO = {
  academicSession: "2026–28",
  admissionCycle: "2026–27",
  importantDates: [
    { event: "Application Opens", date: "15 May 2026", icon: "ClockIcon" },
    { event: "Last Date to Apply", date: "31 July 2026", icon: "CalendarIcon" },
    { event: "Entrance Test / Interview", date: "10 August 2026", icon: "IdentificationIcon" },
    { event: "Course Commencement", date: "1 September 2026", icon: "UserPlusIcon" }
  ],
  contactAddress: "CVRU Khandwa – NLRI Ratlam Campus, Near Maleni River, Village Bhadwasa, Namli, Ratlam, MP – 457222, India",
  contactEmail: "admissions@nlri.cvruk.in",
  generalEmail: "info@nlri-cvruk.ac.in",
  contactPhone: "+91 91110 03000",
  helplinePhone: "+91 91091 07361 / 07412 284300",
  officeHours: "Monday – Saturday: 9:30 AM – 5:30 PM (Sunday: Closed)",
  websiteUrl: "https://www.nlri.cvruk.in",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.255252157876!2d75.07872367512006!3d23.523320078826014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39640419d441a225%3A0x53063056acb1832d!2sNational%20Livelihood%20Resource%20Institute!5e0!3m2!1sen!2sin!4v171567929771!5m2!1sen!2sin",
  socialLinks: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com"
  },
  announcementTicker: "Admissions Open for 2026–28: PGD-RM & Certificate Courses"
};

export class SiteInfoService {
  static async getSiteInfo() {
    try {
      await connectDB();
      let info = await SiteInfo.findOne().lean();
      if (!info) {
        info = await SiteInfo.create(DEFAULT_SITE_INFO);
      }
      return info;
    } catch (error) {
      console.error("Error in SiteInfoService.getSiteInfo:", error);
      return DEFAULT_SITE_INFO;
    }
  }

  static async seedSiteInfo() {
    try {
      await connectDB();
      await SiteInfo.deleteMany({});
      const info = await SiteInfo.create(DEFAULT_SITE_INFO);
      return info;
    } catch (error) {
      console.error("Error in SiteInfoService.seedSiteInfo:", error);
      throw error;
    }
  }

  static async updateSiteInfo(data: any) {
    await connectDB();
    let info = await SiteInfo.findOne();
    if (!info) {
      info = await SiteInfo.create({ ...DEFAULT_SITE_INFO, ...data });
    } else {
      if (data.academicSession !== undefined) info.academicSession = data.academicSession;
      if (data.admissionCycle !== undefined) info.admissionCycle = data.admissionCycle;
      if (data.importantDates !== undefined) info.importantDates = data.importantDates;
      if (data.contactAddress !== undefined) info.contactAddress = data.contactAddress;
      if (data.contactEmail !== undefined) info.contactEmail = data.contactEmail;
      if (data.generalEmail !== undefined) info.generalEmail = data.generalEmail;
      if (data.contactPhone !== undefined) info.contactPhone = data.contactPhone;
      if (data.helplinePhone !== undefined) info.helplinePhone = data.helplinePhone;
      if (data.officeHours !== undefined) info.officeHours = data.officeHours;
      if (data.websiteUrl !== undefined) info.websiteUrl = data.websiteUrl;
      if (data.mapEmbedUrl !== undefined) info.mapEmbedUrl = data.mapEmbedUrl;
      if (data.socialLinks !== undefined) info.socialLinks = { ...info.socialLinks, ...data.socialLinks };
      if (data.announcementTicker !== undefined) info.announcementTicker = data.announcementTicker;
      await info.save();
    }
    return info;
  }
}
