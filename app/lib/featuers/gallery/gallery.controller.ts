import { ApiResponse } from "../../utils/ApiResponse";
import { GalleryService } from "./gallery.service";
import { CloudinaryService } from "../../services/cloudinary.service";
import { getUrls } from "../../utils/geturl";

export class GalleryController {
  static async createGalleryItem(formData: FormData) {
    try {
      const name = formData.get("name") as string;
      const type = formData.get("type") as "image" | "video";
      let url = "";

      if (type === "image") {
        const file = formData.get("image") as File;
        if (!file) return ApiResponse(400, null, "Image is required for image type");
        const uploadResult = await CloudinaryService.upload(file, "gallery", "image");
        if (!uploadResult) return ApiResponse(500, null, "Failed to upload image to Cloudinary");
        url = uploadResult.url;
      } else {
        url = formData.get("url") as string;
        if (!url) return ApiResponse(400, null, "URL is required for video type");
      }

      const result = await GalleryService.createGalleryItem({ name, url, type });
      return ApiResponse(201, result, "Gallery item created successfully");
    } catch (error) {
      console.log(error);
      return ApiResponse(500, null, "Internal server error");
    }
  }

  static async getAllGalleryItems() {
    try {
      const result = await GalleryService.getAllGalleryItems();
      const gallery = (result || []).map((item: any) => {
        const doc = item.toObject ? item.toObject() : item;
        return {
          ...doc,
          url: doc.type === "image" ? getUrls.getUrl(doc.url, "image") : doc.url,
        }
      })
      return ApiResponse(200, gallery, "Gallery items fetched successfully");
    } catch (error) {
      console.log(error);
      return ApiResponse(500, null, "Internal server error");
    }
  }

  static async deleteGalleryItem(id: string) {
    try {
      const item = await GalleryService.getGalleryItemById(id);
      if (!item) return ApiResponse(404, null, "Gallery item not found");

      if (item.type === "image") {
        await CloudinaryService.delete(item.url, "image");
      }

      await GalleryService.deleteGalleryItem(id);
      return ApiResponse(200, null, "Gallery item deleted successfully");
    } catch (error) {
      console.log(error);
      return ApiResponse(500, null, "Internal server error");
    }
  }
}
