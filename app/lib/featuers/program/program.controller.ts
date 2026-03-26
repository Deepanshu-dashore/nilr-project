import { ApiResponse } from "../../utils/ApiResponse";
import { ProgramService } from "./program.service";

export class ProgramController {
    static async createProgram(programData: any) {
        try {
            const result = await ProgramService.createProgram(programData);
            return ApiResponse(200, result, "Program created successfully");
        } catch (error) {
            console.log(error);
            return ApiResponse(500, null, "Internal server error");
        }
    }

    static async getAllPrograms() {
        try {
            const result = await ProgramService.getAllPrograms();
            return ApiResponse(200, result, "Programs fetched successfully");
        } catch (error) {
            console.log(error);
            return ApiResponse(500, null, "Internal server error");
        }
    }

    static async getProgramById({ params }: { params: Promise<{ id: string }> }) {
        try {
            const { id } = await params;
            const result = await ProgramService.getProgramById(id);
            return ApiResponse(200, result, "Program fetched successfully");
        } catch (error) {
            console.log(error);
            return ApiResponse(500, null, "Internal server error");
        }
    }

    static async getProgramBySlug({ params }: { params: Promise<{ slug: string }> }) {
        try {
            const { slug } = await params;
            const result = await ProgramService.getProgramBySlug(slug);
            return ApiResponse(200, result, "Program fetched successfully");
        } catch (error) {
            console.log(error);
            return ApiResponse(500, null, "Internal server error");
        }
    }

    static async updateProgram({ params }: { params: Promise<{ id: string }> }, programData: any) {
        try {
            const { id } = await params;
            const result = await ProgramService.updateProgram(id, programData);
            return ApiResponse(200, result, "Program updated successfully");
        } catch (error) {
            console.log(error);
            return ApiResponse(500, null, "Internal server error");
        }
    }

    static async deleteProgram({ params }: { params: Promise<{ id: string }> }) {
        try {
            const { id } = await params;
            const result = await ProgramService.deleteProgram(id);
            return ApiResponse(200, result, "Program deleted successfully");
        } catch (error) {
            console.log(error);
            return ApiResponse(500, null, "Internal server error");
        }
    }
}