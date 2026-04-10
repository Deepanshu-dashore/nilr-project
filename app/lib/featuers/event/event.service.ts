import { connectDB } from "../../db/connectDB";
import Event from "./event.model";
import { getUrls } from "../../utils/geturl";

export class EventService {
    static async create (data:any){
        await connectDB();
        return await Event.create(data)
    }

    static async getAllEvents(filter:any={}){
        await connectDB();
        const items = await Event.find(filter).sort({createdAt: -1});
        return items.map((item: any) => {
            const obj = item.toObject();
            return {
                ...obj,
                url: obj.url ? getUrls.getUrl(obj.url, "image") : null
            };
        });
    }

    static async publicGetAllNews({page=1,limit=10,type="News"}:any){
        await connectDB();
        
        const process = (items: any[]) => items.map(item => {
            const obj = item.toObject();
            return {
                ...obj,
                _id: obj._id.toString(),
                url: obj.url ? getUrls.getUrl(obj.url, "image") : null
            };
        });

        const topHighlightsRaw = await Event.find({highlight:true}).sort({date: -1}).limit(5);
        const newsRaw = await Event.find({type:type}).sort({createdAt: -1}).limit(limit).skip((page-1)*limit);
        const announcementRaw = await Event.find({type:"Announcement"}).sort({createdAt: -1}).limit(limit).skip((page-1)*limit);

        return {
            topHighlights: process(topHighlightsRaw),
            news: process(newsRaw),
            announcement: process(announcementRaw)
        };
    }

    static async publicGetAllEvents({page=1,limit=10}:any){
        await connectDB();
        
        const process = (items: any[]) => items.map(item => {
            const obj = item.toObject();
            return {
                ...obj,
                _id: obj._id.toString(),
                url: obj.url ? getUrls.getUrl(obj.url, "image") : null
            };
        });

        const highlightsRaw = await Event.find({type: "Event", highlight: true}).sort({date: -1}).limit(5);
        const regularEventsRaw = await Event.find({type:"Event", highlight: false}).sort({date: -1}).limit(limit).skip((page-1)*limit);
        const eventGalleryRaw = await Event.find({type:"Event"}).select("title url").sort({date: -1}).limit(8);

        return {
            highlights: process(highlightsRaw),
            regularEvents: process(regularEventsRaw),
            eventGallery: process(eventGalleryRaw)
        };
    }

    static async getCounts() {
        await connectDB();
        const counts = await Event.aggregate([
            {
                $group: {
                    _id: "$type",
                    count: { $sum: 1 }
                }
            }
        ]);
        
        const result: any = { all: 0, event: 0, announcement: 0, news: 0 };
        counts.forEach((item: any) => {
            const key = item._id.toLowerCase() === 'annoucment' ? 'announcement' : item._id.toLowerCase();
            if (result.hasOwnProperty(key)) {
                result[key] += item.count;
            }
            result.all += item.count;
        });
        return result;
    }

    static async getEventById(id:string){
        await connectDB();
        return await Event.findById(id)
    }

    static async updateEvent(id:string,data:any){
        await connectDB();
        return await Event.findByIdAndUpdate(id,data,{new:true})
    }

    static async deleteEvent(id:string){
        await connectDB();
        return await Event.findByIdAndDelete(id)
    }

    static async getMonthlyEvents(year: number, month: number) {
        await connectDB();
        
        const startDate = new Date(year, month, 1);
        const endDate = new Date(year, month + 1, 0, 23, 59, 59);

        const eventsRaw = await Event.find({
            type: "Event",
            date: {
                $gte: startDate,
                $lte: endDate
            },
            status: "published"
        })
        .select("title description date time location highlight")
        .sort({ date: 1 });

        return eventsRaw.map(item => {
            const obj = item.toObject();
            return {
                ...obj,
                _id: obj._id.toString(),
            };
        });
    }
}