import { ProgramController } from "@/app/lib/featuers/program/program.controller";

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
    return await ProgramController.getProgramBySlug({ params });
}
