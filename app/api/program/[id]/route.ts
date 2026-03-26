import { ProgramController } from "@/app/lib/featuers/program/program.controller";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    return await ProgramController.getProgramById({ params });
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const body = await req.json();
    return await ProgramController.updateProgram({ params }, body);
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    return await ProgramController.deleteProgram({ params });
}
