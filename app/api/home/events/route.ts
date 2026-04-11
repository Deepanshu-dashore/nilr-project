import { ApiResponse } from "@/app/lib/utils/ApiResponse";
import { EventService } from "@/app/lib/featuers/event/event.service";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const limit = parseInt(searchParams.get("limit") || "8");
        const page = parseInt(searchParams.get("page") || "1");
        
        // We'll fetch 'Event' type specifically for Latest Happenings
        const data = await EventService.publicGetAllEvents({ limit, page });
        
        // Combine highlights and regular events for the home section if needed
        const combined = [...data.highlights, ...data.regularEvents].slice(0, limit);
        
        return ApiResponse(200, combined, "Home events fetched successfully");
    } catch (error: any) {
        console.error("Error in /api/home/events:", error);
        return ApiResponse(500, null, error.message || "Failed to fetch events");
    }
}
