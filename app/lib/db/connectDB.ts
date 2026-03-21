import mongoose from "mongoose";
import { ApiResponse } from "../utils/ApiResponse";

export const connectDB = async () => {
    if(mongoose.connection.readyState === 1) {
        return;
    }
    const connectionString = process.env.MONGODB_URI!;
    if(!connectionString){
        return ApiResponse(404, "", "MongoDB URI is not defined");
    }
    try {
        await mongoose.connect(connectionString);
        console.log("NLRI-Database connected");
    } catch (error) {
        console.error("NLRI-Database connection error:", error);
        return ApiResponse(500, "", "NLRI-Database connection error");
    }
}