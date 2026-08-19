import { SiteInfoService } from "./site-info.service";
import { ApiResponse } from "@/app/lib/utils/ApiResponse";

export class SiteInfoController {
  static async getSiteInfo() {
    try {
      const data = await SiteInfoService.getSiteInfo();
      return ApiResponse(200, data, "Site information fetched successfully");
    } catch (error: any) {
      console.error("Error fetching site info:", error);
      return ApiResponse(500, null, error.message || "Failed to fetch site info");
    }
  }

  static async updateSiteInfo(req: Request) {
    try {
      const body = await req.json();
      const data = await SiteInfoService.updateSiteInfo(body);
      return ApiResponse(200, data, "Site information updated successfully");
    } catch (error: any) {
      console.error("Error updating site info:", error);
      return ApiResponse(500, null, error.message || "Failed to update site info");
    }
  }
}
