import React from "react";
import WorkUnderProgress from "@/src/components/shared/work-under-progress";

export const metadata = {
  title: "Student Life | NIRM Ratlam Campus",
  description: "Explore campus culture, student clubs, hostel life, sports activities, and rural immersion experiences at NIRM Ratlam.",
};

export default function StudentLifePage() {
  return (
    <WorkUnderProgress
      title="Student Life & Campus Culture"
      tag="STUDENT LIFE & CAMPUS CULTURE"
      description="Discover campus life, student clubs, residential amenities, sports events, and grassroots field immersion at NIRM Ratlam."
    />
  );
}
