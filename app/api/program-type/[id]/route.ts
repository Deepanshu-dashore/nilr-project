import { connectDB } from "@/app/lib/db/connectDB";
import { ProgramTypeController } from "@/app/lib/featuers/program-type/programType.controller";

export async function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
    await connectDB();
    return await ProgramTypeController.getProgramTypeById(ctx);
}

export async function PUT(req: Request, ctx: { params: Promise<{ id: string }> }) {
    await connectDB();
    const body = await req.json();
    return await ProgramTypeController.updateProgramType(ctx, body);
}

export async function DELETE(_req: Request, ctx: { params: Promise<{ id: string }> }) {
    await connectDB();
    return await ProgramTypeController.deleteProgramType(ctx);
}
