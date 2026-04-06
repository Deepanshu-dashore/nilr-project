import { Schema, model, models } from "mongoose";
import "../program-type/programType.model"; // Ensure ProgramType schema is registered

const ProgramSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    lastApplyDate: {
        type: Date
    },
    fee:{
        type:Number,
        required:true
    },
    feeStructureDoc:{
        type:String,
    },
    brochureDoc:{
        type:String,
    },
    termsAndConditions:{
        type:[String],
        required:true
    },
    eligibility:{
        type:[String],
        required:true,
        validate: (v:string[]) => v.length > 0
    },
    highlights:{
        type:[String],
        required:true
    },
    programStructure:{
        type:[
            {
               sem:{type:String}, 
               courseType:{type:String},
               courseName:{type:String},
               credits:{type:Number}
            }
        ],
    default:[]
    },
    outcomes:{
        type:[String],
        required:true
    },
    careerPaths:{
        type:[String],
        required:true
    },
    programType:{
        type: Schema.Types.ObjectId,
        ref:"ProgramType",
    },
    
},{timestamps:true});

export const Program = models.Program || model("Program",ProgramSchema);