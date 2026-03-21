import { EnquiryController } from "@/app/lib/featuers/enquiry/enquiry.controller";

export async function GET(req:Request) {
    return await EnquiryController.getAllEnquiries();
}

export async function POST(req:Request) {
    const body = await req.json();
    return await EnquiryController.createEnquiry(body);
}