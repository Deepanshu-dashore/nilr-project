import SRMClient from "@/src/components/programs/srm-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "School of Rural Management (SRM) | CVRUK-NIRM",
  description: "The School of Rural Management (SRM) at NIRM offers a two-year post graduate diploma program in rural management, recognized by AICTE and MoHRD.",
};

export default function SRMPage() {
  return <SRMClient />;
}
