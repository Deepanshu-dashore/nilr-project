import { ApiResponse } from "@/app/lib/utils/ApiResponse";
import { EventService } from "@/app/lib/featuers/event/event.service";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "8");
        
        // We'll combine news and announcements for the home page feed
        const data = await EventService.publicGetAllNews({ page, limit });
        
        // Combine them into a single chronological feed if needed, 
        // but for now we'll just return what the service provides
        return ApiResponse(200, {
            news: data.news,
            announcements: data.announcement,
            highlights: data.topHighlights
        }, "Home news fetched successfully");
    } catch (error: any) {
        console.error("Error in /api/home/news:", error);
        return ApiResponse(500, null, error.message || "Failed to fetch news");
    }
}
