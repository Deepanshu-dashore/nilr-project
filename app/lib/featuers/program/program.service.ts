import { connectDB } from "../../db/connectDB";
import { Program } from "./program.model";
import { ProgramType } from "../program-type/programType.model";

export class ProgramService {
    static async createProgram(programData: any) {
        await connectDB();
        const slug = programData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        const program = await Program.create({ ...programData, slug });
        return program;
    }

    static async getAllPrograms() {
        await connectDB();
        const programs = await Program.find().select("name description duration fee programType createdAt").populate("programType", "name");
        return programs;
    }

    static async getProgramById(id: string) {
        await connectDB();
        const program = await Program.findById(id).populate("programType", "name");
        return program;
    }

    static async getProgramBySlug(slug: string) {
        await connectDB();
        const program = await Program.findOne({ slug }).populate("programType", "name");
        return program;
    }

    static async getProgramByType(type: string) {
        await connectDB();
        const programs = await Program.find({ programType: type }).populate("programType", "name").select("name description duration fee programType createdAt slug");
        return programs;
    }

    static async updateProgram(id: string, programData: any) {
        await connectDB();
        const program = await Program.findByIdAndUpdate(id, programData, { returnDocument: 'after' });
        return program;
    }

    static async deleteProgram(id: string) {
        await connectDB();
        const program = await Program.findByIdAndDelete(id);
        return program;
    }
}