import mongoose from "mongoose";
import dns from "dns";

const setPublicDns = () => {
  try {
    dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
  } catch (e) {
    // Ignore in environments where setting DNS servers is not allowed
  }
};

// Set initially on module load
setPublicDns();

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

export const connectDB = async (): Promise<void> => {
    // Always re-apply DNS configuration before connecting to prevent ECONNREFUSED SRV lookups on Windows
    setPublicDns();

    if (connection.isConnected && mongoose.connection.readyState >= 1) {
        return;
    }
    if (mongoose.connection.readyState >= 1) {
        connection.isConnected = mongoose.connection.readyState;
        return;
    }
    const connectionString = process.env.MONGODB_URI;
    if(!connectionString){
        throw new Error("MongoDB URI is not defined");
    }
    try {
        const db = await mongoose.connect(connectionString, {
            serverSelectionTimeoutMS: 10000,
        });
        connection.isConnected = db.connections[0].readyState;
        console.log("NIRM-Database connected");
    } catch (error) {
        connection.isConnected = 0;
        console.error("NIRM-Database connection error:", error);
        throw error;
    }
}