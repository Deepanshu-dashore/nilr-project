import { connectDB } from "@/app/lib/db/connectDB";
import { ProgramTypeController } from "@/app/lib/featuers/program-type/programType.controller";

export async function GET() {
    await connectDB();
    return await ProgramTypeController.getAllProgramTypes();
}

export async function POST(req: Request) {
    await connectDB();
    const body = await req.json();
    return await ProgramTypeController.createProgramType(body);
}
