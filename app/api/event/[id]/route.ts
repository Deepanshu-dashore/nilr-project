import { EventController } from "@/app/lib/featuers/event/event.controller";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return await EventController.getEventById(req, id);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return await EventController.updateEvent(req, id);
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return await EventController.deleteEvent(req, id);
}