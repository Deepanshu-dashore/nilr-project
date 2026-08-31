import React from "react";
import WorkUnderProgress from "@/src/components/shared/work-under-progress";

export const metadata = {
  title: "Success Stories | NIRM Alumni & Rural Impact",
  description: "Read inspiring success stories of NIRM alumni, rural entrepreneurs, and community leaders driving rural development across Central India.",
};

export default function SuccessStoriesPage() {
  return (
    <WorkUnderProgress
      title="Success Stories & Alumni Impact"
      tag="ALUMNI IMPACT & SUCCESS STORIES"
      description="Inspiring journeys of NIRM rural management graduates, AC&ABC agripreneurs, and community change-makers across India."
    />
  );
}
