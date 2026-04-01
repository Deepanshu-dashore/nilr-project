import { connectDB } from "../../db/connectDB";
import { Gallery } from "./gallery.model";

export class GalleryService {
  static async createGalleryItem(data: { name: string; url: string; type: "image" | "video" }) {
    await connectDB();
    return await Gallery.create(data);
  }

  static async getAllGalleryItems() {
    await connectDB();
    return await Gallery.find().sort({ createdAt: -1 });
  }

  static async getItemsByType(type: "image" | "video") {
    await connectDB();
    return await Gallery.find({ type }).sort({ createdAt: -1 });
  }

  static async getGalleryItemById(id: string) {
    await connectDB();
    return await Gallery.findById(id);
  }

  static async deleteGalleryItem(id: string) {
    await connectDB();
    return await Gallery.findByIdAndDelete(id);
  }
}
