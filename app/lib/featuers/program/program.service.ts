import { Program } from "./program.model";

export class ProgramService {
    static async createProgram(programData: any) {
        const slug = programData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        const program = await Program.create({ ...programData, slug });
        return program;
    }

    static async getAllPrograms() {
        const programs = await Program.find();
        return programs;
    }

    static async getProgramById(id: string) {
        const program = await Program.findById(id);
        return program;
    }

    static async getProgramBySlug(slug: string) {
        const program = await Program.findOne({ slug });
        return program;
    }

    static async updateProgram(id: string, programData: any) {
        const program = await Program.findByIdAndUpdate(id, programData, { new: true });
        return program;
    }

    static async deleteProgram(id: string) {
        const program = await Program.findByIdAndDelete(id);
        return program;
    }
}