import { EventController } from "@/app/lib/featuers/event/event.controller";

export async function GET(req: Request){
    return await EventController.getAllEvents(req);
}

export async function POST(req:Request){
    return await EventController.create(req);
}