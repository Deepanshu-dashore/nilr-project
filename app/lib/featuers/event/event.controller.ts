import { CloudinaryService } from "../../services/cloudinary.service";
import { ApiResponse } from "../../utils/ApiResponse";
import { getUrls } from "../../utils/geturl";
import { EventService } from "./event.service"

export class EventController {
    static async create(req: Request) {
        try {
            const formData = await req.formData();
            
            const title = formData.get("title") as string;
            const description = formData.get("description") as string;
            const date = formData.get("date") as string;
            const time = formData.get("time") as string;
            const location = formData.get("location") as string;
            const type = formData.get("type") as string;
            const highlight = formData.get("highlight") === "true";
            const status = formData.get("status") as string || "published";
            const file = formData.get("file") as File | null;

            if (!title) {
                return ApiResponse(400, null, "Title is required")
            }
            if (!description) {
                return ApiResponse(400, null, "Description is required")
            }
            if (!type) {
                return ApiResponse(400, null, "Type is required")
            } else {
                if (!["Announcement", "Event", "News"].includes(type)) {
                    return ApiResponse(400, null, "Invalid type")
                }
            }

            let url: any = null;
            if (file) {
                url = (await CloudinaryService.upload(file, "event", "image"))?.url;
                if (!url) {
                    return ApiResponse(400, null, "Failed to upload file")
                }
            }
            const event = await EventService.create({ title, description, date, time, location, type, url, highlight, status })
            return ApiResponse(200, event, "Event created successfully")
        } catch (error: any) {
            console.error("Error in EventController.create:", error);
            return ApiResponse(500, null, error.message || "Internal server error");
        }
    }

    static async getAllEvents(req: Request) {
        try {
            const url = new URL(req.url);
            const type = url.searchParams.get("type");
            const status = url.searchParams.get("status");
            
            let filter: any = {};
            if (type && type !== 'all') {
                if (type.toLowerCase() === 'announcement') {
                    filter.type = { $in: ['Announcement', 'Annoucment'] };
                } else {
                    filter.type = new RegExp(`^${type}$`, 'i');
                }
            }

            if (status && status !== 'all') {
                filter.status = status;
            }

            const data = await EventService.getAllEvents(filter);
            const counts = await EventService.getCounts();
            
            return ApiResponse(200, { items: data, counts }, "Events fetched successfully");
        } catch (error: any) {
            console.error("Error in getAllEvents:", error);
            return ApiResponse(500, null, error.message || "Failed to fetch events");
        }
    }

    static async getEventById(req: Request, id?: string) {
        try {
            if (!id) {
                const url = new URL(req.url);
                id = url.searchParams.get("id") as string;
            }
            
            if (!id) {
                return ApiResponse(400, null, "Id is required")
            }
            const event = await EventService.getEventById(id);
            if (!event) {
                return ApiResponse(404, null, "Event not found")
            }

            const plainEvent = event.toObject ? event.toObject() : event;
            const transformedEvent = {
                ...plainEvent,
                url: plainEvent.url ? getUrls.getUrl(plainEvent.url, "image") : null
            };

            return ApiResponse(200, transformedEvent, "Event fetched successfully")
        } catch (error: any) {
            console.error("Error in getEventById:", error);
            return ApiResponse(500, null, error.message || "Failed to fetch event");
        }
    }

    static async updateEvent(req: Request, id?: string) {
        try {
            if (!id) {
                const url = new URL(req.url);
                id = url.searchParams.get("id") as string;
            }
            
            if (!id) {
                return ApiResponse(400, null, "Id is required")
            }

            const formData = await req.formData();
            const title = formData.get("title") as string;
            const description = formData.get("description") as string;
            const date = formData.get("date") as string;
            const time = formData.get("time") as string;
            const location = formData.get("location") as string;
            const type = formData.get("type") as string;
            const highlight = formData.get("highlight") === "true";
            const status = formData.get("status") as string;
            const file = formData.get("file") as File | null;
            
            let updateData: any = { title, description, date, time, location, type, highlight, status };
            
            if (file) {
                const uploaded = await CloudinaryService.upload(file, "event", "image");
                if (uploaded?.url) {
                    updateData.url = uploaded.url;
                }
            }

            const event = await EventService.updateEvent(id, updateData);
            const plainEvent = event.toObject ? event.toObject() : event;
            const transformedEvent = {
                ...plainEvent,
                url: plainEvent.url ? getUrls.getUrl(plainEvent.url, "image") : null
            };
            return ApiResponse(200, transformedEvent, "Event updated successfully")
        } catch (error: any) {
            console.error("Error in EventController.updateEvent:", error);
            return ApiResponse(500, null, error.message || "Internal server error");
        }
    }

    static async deleteEvent(req: Request, id?: string) {
        try {
            if (!id) {
                const url = new URL(req.url);
                id = url.searchParams.get("id") as string;
            }

            if (!id) {
                return ApiResponse(400, null, "Id is required")
            }
            const event = await EventService.getEventById(id);
            if (!event) {
                return ApiResponse(404, null, "Event not found")
            }
            if (event.url) {
                await CloudinaryService.delete(event.url);
            }
            await EventService.deleteEvent(id);
            return ApiResponse(200, null, "Event deleted successfully");
        } catch (error: any) {
            console.error("Error in deleteEvent:", error);
            return ApiResponse(500, null, error.message || "Failed to delete event");
        }
    }
}
