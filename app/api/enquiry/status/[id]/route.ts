import { EnquiryController } from "@/app/lib/featuers/enquiry/enquiry.controller";

export async function PUT(req:Request, {params}: {params: Promise<{id: string}>}) {
    return await EnquiryController.updateStatus({params});
}
