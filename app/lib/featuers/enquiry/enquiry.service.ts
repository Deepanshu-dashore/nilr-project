import { connectDB } from "../../db/connectDB";
import { Enquiry } from "./enquiry.model";

export class EnquiryService {
    static async createEnquiry(enquiry: any) {
        await connectDB();
        return await Enquiry.create(enquiry);
    }

    static async getAllEnquiries(filter:any) {
        await connectDB();
        return await Enquiry.find(filter);
    }

    static async getEnquiryById(id: string) {
        await connectDB();
        return await Enquiry.findById(id);
    }

    static async updateEnquiry(id: string, enquiry: any) {
        await connectDB();
        return await Enquiry.findByIdAndUpdate(id, enquiry, { new: true });
    }

    static async deleteEnquiry(id: string) {
        await connectDB();
        return await Enquiry.findByIdAndDelete(id);
    }
}