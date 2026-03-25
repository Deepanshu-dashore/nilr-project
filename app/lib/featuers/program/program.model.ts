import { Schema,model,models } from "mongoose";

const ProgramSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:String,
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
    
},{timestamps:true})
export const Program = models.Program || model("Program",ProgramSchema);