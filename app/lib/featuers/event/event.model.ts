import { Schema,model,models } from "mongoose";

const eventSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default:Date.now},
    time: {type: String},
    location: {type: String},
    url: {type: String},
    highlight: {type: Boolean, default: false},
    status: {type: String, default: "draft", enum: ["draft", "published"]},
    type :{type:String,required:true,enum:["Announcement","Event","News"]}
});

export const Event = models.Event || model("Event", eventSchema);

export default Event;