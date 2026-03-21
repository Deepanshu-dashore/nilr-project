import { Schema,model,models } from "mongoose";

const enquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
    },
},{timestamps:true});

export const Enquiry = models.Enquiry || model("Enquiry", enquirySchema);