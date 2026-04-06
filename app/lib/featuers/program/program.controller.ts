import { ApiResponse } from "../../utils/ApiResponse";
import { getUrls } from "../../utils/geturl";
import { ProgramService } from "./program.service";

export class ProgramController {
    static async createProgram(programData: any) {
        try {
            const result = await ProgramService.createProgram(programData);
            const doc = result.toObject();
            if (doc.feeStructureDoc) doc.feeStructureDoc = getUrls.getUrl(doc.feeStructureDoc, "raw");
            return ApiResponse(200, doc, "Program created successfully");
        } catch (error) {
            console.log(error);
            return ApiResponse(500, null, "Internal server error");
        }
    }

    static async getAllPrograms() {
        try {
            const results = await ProgramService.getAllPrograms();
            const mapped = results.map(result => {
                const doc = result.toObject();
                if (doc.feeStructureDoc) doc.feeStructureDoc = getUrls.getUrl(doc.feeStructureDoc, "raw");
                return doc;
            });
            return ApiResponse(200, mapped, "Programs fetched successfully");
        } catch (error) {
            console.log(error);
            return ApiResponse(500, null, "Internal server error");
        }
    }

    static async getProgramById({ params }: { params: Promise<{ id: string }> }) {
        try {
            const { id } = await params;
            const result = await ProgramService.getProgramById(id);
            if (!result) return ApiResponse(404, null, "Program not found");
            
            const doc = result.toObject();
            if (doc.feeStructureDoc) doc.feeStructureDoc = getUrls.getUrl(doc.feeStructureDoc, "raw");
            if (doc.brochureDoc) doc.brochureDoc = getUrls.getUrl(doc.brochureDoc, "raw");
            
            return ApiResponse(200, doc, "Program fetched successfully");
        } catch (error) {
            console.log(error);
            return ApiResponse(500, null, "Internal server error");
        }   
    }

    static async getProgramBySlug({ params }: { params: Promise<{ slug: string }> }) {
        try {
            const { slug } = await params;
            const result = await ProgramService.getProgramBySlug(slug);
            if (!result) return ApiResponse(404, null, "Program not found");

            const doc = result.toObject();
            if (doc.feeStructureDoc) doc.feeStructureDoc = getUrls.getUrl(doc.feeStructureDoc, "raw");
            if (doc.brochureDoc) doc.brochureDoc = getUrls.getUrl(doc.brochureDoc, "raw");
            
            return ApiResponse(200, doc, "Program fetched successfully");
        } catch (error) {
            console.log(error);
            return ApiResponse(500, null, "Internal server error");
        }
    }

    static async updateProgram({ params }: { params: Promise<{ id: string }> }, programData: any) {
        try {
            const { id } = await params;
            const result = await ProgramService.updateProgram(id, programData);
            if (!result) return ApiResponse(404, null, "Program not found");
            
            const doc = result.toObject();
            if (doc.feeStructureDoc) doc.feeStructureDoc = getUrls.getUrl(doc.feeStructureDoc, "raw");

            return ApiResponse(200, doc, "Program updated successfully");
        } catch (error) {
            console.log(error);
            return ApiResponse(500, null, "Internal server error");
        }
    }

    static async deleteProgram({ params }: { params: Promise<{ id: string }> }) {
        try {
            const { id } = await params;
            const program = await ProgramService.getProgramById(id);
            if (!program) return ApiResponse(404, null, "Program not found");
            if (program.feeStructureDoc) await CloudinaryService.delete(program.feeStructureDoc, "raw");
            if (program.brochureDoc) await CloudinaryService.delete(program.brochureDoc, "raw");
            const result = await ProgramService.deleteProgram(id);
            if (!result) return ApiResponse(404, null, "Program not found");
            return ApiResponse(200, result, "Program deleted successfully");
        } catch (error) {
            console.log(error);
            return ApiResponse(500, null, "Internal server error");
        }
    }
}