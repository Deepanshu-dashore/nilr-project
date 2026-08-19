import { SiteInfoService } from "@/app/lib/featuers/site-info/site-info.service";
import { ApiResponse } from "@/app/lib/utils/ApiResponse";

export async function POST() {
  try {
    const data = await SiteInfoService.seedSiteInfo();
    return ApiResponse(200, data, "Site information database seeded successfully");
  } catch (error: any) {
    console.error("Error seeding site info:", error);
    return ApiResponse(500, null, error.message || "Failed to seed site information");
  }
}

export async function GET() {
  try {
    const data = await SiteInfoService.seedSiteInfo();
    return ApiResponse(200, data, "Site information database seeded successfully");
  } catch (error: any) {
    console.error("Error seeding site info:", error);
    return ApiResponse(500, null, error.message || "Failed to seed site information");
  }
}
