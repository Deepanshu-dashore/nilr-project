import Admissions from "@/src/components/home/admissions";
import CampusIntroduction from "@/src/components/home/campus-introduction";
import HeroCarousel from "@/src/components/home/hero-carousel";
import LatestHappenings from "@/src/components/home/latest-happenings";
import NewsAnnouncements from "@/src/components/home/news-announcements";
import PartnershipOverview from "@/src/components/home/partnership-overview";
import QuickLinks from "@/src/components/home/quick-links";
import StudentTestimonials from "@/src/components/home/student-testimonials";

export default function Home() {
  return (
    <div className="flex flex-col bg-bg-main font-sans text-text-main overflow-x-hidden">
      <HeroCarousel />
      <PartnershipOverview />
      <CampusIntroduction />
      <NewsAnnouncements />
      <Admissions />
      <LatestHappenings />
      <QuickLinks />
      <StudentTestimonials />
    </div>
  );
}
