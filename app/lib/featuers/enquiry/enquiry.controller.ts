import { verifyJWT } from "../../middlewares/verifyJWT";
import { ApiResponse } from "../../utils/ApiResponse";
import { EnquiryService } from "./enquiry.service";

export class EnquiryController {

    static async createEnquiry(enquiry: any) {
        try{
        if(!enquiry.name){
            return ApiResponse(400, null, "Name is required");
        }
        if(!enquiry.email){
            return ApiResponse(400, null, "Email is required");
        }
        if(!enquiry.phone){
            return ApiResponse(400, null, "Phone is required");
        }
        if(!enquiry.subject){
            return ApiResponse(400, null, "Subject is required");
        }
        if(!enquiry.message){
            return ApiResponse(400, null, "Message is required");
        }
        if(!enquiry.email.includes("@")){
            return ApiResponse(400, null, "Invalid email");
        }
        const result = await EnquiryService.createEnquiry(enquiry);
        return ApiResponse(200,result,"Enquiry created successfully");
    }catch(error){
        console.log(error)
        return ApiResponse(500, null, "Internal server error");
    }
    }

    static async getAllEnquiries() {
        const user = await verifyJWT();
        if(!user){
            return ApiResponse(401,null,"Unauthorized request");
        }
        const result = await EnquiryService.getAllEnquiries();
        return ApiResponse(200,result,"Enquiries fetched successfully");
    }

    static async getEnquiryById({params}: {params: Promise<{id: string}>}) {
        const user = await verifyJWT();
        if(!user){
            return ApiResponse(401,null,"Unauthorized request");
        }
        const {id} = await params;
        if(!id){
            return ApiResponse(400, null, "Id is required");
        }
        const result = await EnquiryService.getEnquiryById(id);
        return ApiResponse(200,result,"Enquiry fetched successfully");
    }

    static async updateEnquiry({params}: {params: Promise<{id: string}>}, enquiry: any) {
        const {id} = await params;
        if(!id){
            return ApiResponse(400, null, "Id is required");
        }
        const result = await EnquiryService.updateEnquiry(id, enquiry);
        return ApiResponse(200,result,"Enquiry updated successfully");
    }

    static async deleteEnquiry({params}: {params: Promise<{id: string}>}) {
        const user = await verifyJWT();
        if(!user){
            return ApiResponse(401,null,"Unauthorized request");
        }
        const {id} = await params;
        if(!id){
            return ApiResponse(400, null, "Id is required");
        }
        const result = await EnquiryService.deleteEnquiry(id);
        return ApiResponse(200,result,"Enquiry deleted successfully");
    }
}