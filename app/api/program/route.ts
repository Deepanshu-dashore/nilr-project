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
    };
    if (file) {
        const uploaded:any = await CloudinaryService.upload(file);
        body.feeStructureDoc = uploaded?.url;
    }
    return await ProgramController.createProgram(body);
}