import { ProgramController } from "@/app/lib/featuers/program/program.controller";
import { CloudinaryService } from "@/app/lib/services/cloudinary.service";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    return await ProgramController.getProgramById({ params });
}

const parseJSON = (str: any) => {
    try { return str ? JSON.parse(str as string) : []; }
    catch { return []; }
};

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const formData = await req.formData();
    const file = formData.get("feeStructureDoc");
    const brochureFile = formData.get("brochureDoc");
    const body: any = {
        name: formData.get("name"),
        description: formData.get("description"),
        duration: formData.get("duration"),
        fee: formData.get("fee"),
        lastApplyDate: formData.get("lastApplyDate"),
        termsAndConditions: parseJSON(formData.get("termsAndConditions")),
        eligibility: parseJSON(formData.get("eligibility")),
        programType: formData.get("programType"),
        highlights: parseJSON(formData.get("highlights")),
        programStructure: parseJSON(formData.get("programStructure")),
        outcomes: parseJSON(formData.get("outcomes")),
        careerPaths: parseJSON(formData.get("careerPaths")),
    };
    if (file && file !== "null" && file !== "undefined" && typeof file !== "string") {
        const uploaded: any = await CloudinaryService.upload(file, "programs", "raw", "pdf");
        body.feeStructureDoc = uploaded?.url;
    }
    if (brochureFile && brochureFile !== "null" && brochureFile !== "undefined" && typeof brochureFile !== "string") {
        const uploaded: any = await CloudinaryService.upload(brochureFile, "programs", "raw", "pdf");
        body.brochureDoc = uploaded?.url;
    }
    return await ProgramController.updateProgram({ params }, body);
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    return await ProgramController.deleteProgram({ params });
}
