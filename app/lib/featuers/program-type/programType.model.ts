import { Schema,model,models } from "mongoose";

const ProgramTypeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    
},{timestamps:true});

export const ProgramType = models.ProgramType || model("ProgramType",ProgramTypeSchema);