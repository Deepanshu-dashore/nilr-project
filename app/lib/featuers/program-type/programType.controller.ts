import { ApiResponse } from "../../utils/ApiResponse";
import { ProgramTypeService } from "./programType.service";

export class ProgramTypeController {
    static async createProgramType(data: any) {
        try {
            const result = await ProgramTypeService.createProgramType(data);
            return ApiResponse(201, result, "Program type created successfully");
        } catch (error) {
            console.log(error);
            return ApiResponse(500, null, "Internal server error");
        }
    }

    static async getAllProgramTypes() {
        try {
            const result = await ProgramTypeService.getAllProgramTypes();
            return ApiResponse(200, result, "Program types fetched successfully");
        } catch (error) {
            console.log(error);
            return ApiResponse(500, null, "Internal server error");
        }
    }

    static async getProgramTypeById({ params }: { params: Promise<{ id: string }> }) {
        try {
            const { id } = await params;
            const result = await ProgramTypeService.getProgramTypeById(id);
            if (!result) return ApiResponse(404, null, "Program type not found");
            return ApiResponse(200, result, "Program type fetched successfully");
        } catch (error) {
            console.log(error);
            return ApiResponse(500, null, "Internal server error");
        }
    }

    static async updateProgramType({ params }: { params: Promise<{ id: string }> }, data: any) {
        try {
            const { id } = await params;
            const result = await ProgramTypeService.updateProgramType(id, data);
            if (!result) return ApiResponse(404, null, "Program type not found");
            return ApiResponse(200, result, "Program type updated successfully");
        } catch (error) {
            console.log(error);
            return ApiResponse(500, null, "Internal server error");
        }
    }

    static async deleteProgramType({ params }: { params: Promise<{ id: string }> }) {
        try {
            const { id } = await params;
            const result = await ProgramTypeService.deleteProgramType(id);
            if (!result) return ApiResponse(404, null, "Program type not found");
            return ApiResponse(200, result, "Program type deleted successfully");
        } catch (error) {
            console.log(error);
            return ApiResponse(500, null, "Internal server error");
        }
    }
}
