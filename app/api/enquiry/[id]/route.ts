import { EnquiryController } from "@/app/lib/featuers/enquiry/enquiry.controller";

export async function GET(req:Request, {params}: {params: Promise<{id: string}>}) {
    return await EnquiryController.getEnquiryById({params});
}

export async function PUT(req:Request, {params}: {params: Promise<{id: string}>}) {
    const body = await req.json();
    return await EnquiryController.updateEnquiry({params},body);
}

export async function DELETE(req:Request, {params}: {params: Promise<{id: string}>}) {
    return await EnquiryController.deleteEnquiry({params});
}