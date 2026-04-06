import { ProgramService } from "@/app/lib/featuers/program/program.service";
import { ApiResponse } from "@/app/lib/utils/ApiResponse";

export async function GET(request: Request, { params }: { params: Promise<{ type: string }> }) {
    try {
        const { type } = await params;
        const programs = await ProgramService.getProgramByType(type);
        return ApiResponse(200, programs, "Programs fetched successfully")
    } catch (error) {
        return ApiResponse(500, null, "Failed to fetch programs")
    }
}
