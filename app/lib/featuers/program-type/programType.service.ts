import { ProgramType } from "./programType.model";

export class ProgramTypeService {
    static async createProgramType(data: { name: string; description: string; order?: number }) {
        const programType = await ProgramType.create(data);
        return programType;
    }

    static async getAllProgramTypes() {
        const programTypes = await ProgramType.find().sort({ order: 1, createdAt: 1 });
        return programTypes;
    }

    static async getProgramTypeById(id: string) {
        const programType = await ProgramType.findById(id);
        return programType;
    }

    static async updateProgramType(id: string, data: Partial<{ name: string; description: string; order?: number }>) {
        const programType = await ProgramType.findByIdAndUpdate(id, data, { returnDocument: 'after' });
        return programType;
    }

    static async deleteProgramType(id: string) {
        const programType = await ProgramType.findByIdAndDelete(id);
        return programType;
    }
}
