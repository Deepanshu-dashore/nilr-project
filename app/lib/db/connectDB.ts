import mongoose from "mongoose";
import dns from "dns";

// Prefer IPv4 first in Node.js DNS resolution
try {
  dns.setDefaultResultOrder?.("ipv4first");
} catch {
  // Ignore if not supported in the current Node version
}

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

export const connectDB = async (): Promise<void> => {
  if (connection.isConnected && mongoose.connection.readyState >= 1) {
    return;
  }
  if (mongoose.connection.readyState >= 1) {
    connection.isConnected = mongoose.connection.readyState;
    return;
  }

  const connectionString = process.env.MONGODB_URI;
  if (!connectionString) {
    throw new Error("MongoDB URI is not defined");
  }

  try {
    const db = await mongoose.connect(connectionString, {
      serverSelectionTimeoutMS: 10000,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("NIRM-Database connected");
  } catch (error: any) {
    // If SRV lookup fails with ECONNREFUSED on the default DNS, try falling back to public DNS once
    if (error?.code === "ECONNREFUSED" && error?.syscall === "querySrv") {
      try {
        console.warn("Retrying DB connection with fallback public DNS (8.8.8.8, 1.1.1.1)...");
        dns.setServers(["8.8.8.8", "1.1.1.1"]);
        const db = await mongoose.connect(connectionString, {
          serverSelectionTimeoutMS: 10000,
        });
        connection.isConnected = db.connections[0].readyState;
        console.log("NIRM-Database connected (via fallback DNS)");
        return;
      } catch (fallbackError) {
        console.error("NIRM-Database connection error with fallback DNS:", fallbackError);
      }
    }

    connection.isConnected = 0;
    console.error("NIRM-Database connection error:", error);
    throw error;
  }
};