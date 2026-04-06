import { ProgramController } from "@/app/lib/featuers/program/program.controller";
import { CloudinaryService } from "@/app/lib/services/cloudinary.service";

export async function GET() {
    return await ProgramController.getAllPrograms();
}

const parseJSON = (str: any) => {
    try { return str ? JSON.parse(str as string) : []; }
    catch { return []; }
};

export async function POST(req: Request) {
    const formData = await req.formData();
    const file = formData.get("feeStructureDoc");
    const brochureFile = formData.get("brochureDoc");
    const body = {
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
        feeStructureDoc: file,
        brochureDoc: brochureFile,
    } as any;
    if (file && file !== "null" && file !== "undefined" && typeof file !== "string") {
        const uploaded: any = await CloudinaryService.upload(file, "programs", "raw", "pdf");
        body.feeStructureDoc = uploaded?.url;
    } else {
        delete body.feeStructureDoc;
    }
    if (brochureFile && brochureFile !== "null" && brochureFile !== "undefined" && typeof brochureFile !== "string") {
        const uploaded: any = await CloudinaryService.upload(brochureFile, "programs", "raw", "pdf");
        body.brochureDoc = uploaded?.url;
    } else {
        delete body.brochureDoc;
    }
    return await ProgramController.createProgram(body);
}