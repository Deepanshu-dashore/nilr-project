import { NextRequest } from "next/server";
import { EnquiryController } from "@/app/lib/featuers/enquiry/enquiry.controller";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const subject = searchParams.get("subject");
    const status = searchParams.get("status");
    const excludeSubject = searchParams.get("excludeSubject");
    return await EnquiryController.getAllEnquiries({ subject, status, excludeSubject });
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    return await EnquiryController.createEnquiry(body);
}