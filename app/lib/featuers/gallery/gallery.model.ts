import { Schema, model, models } from "mongoose";

const GallerySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String, // For images: Cloudinary partial URL; For videos: YouTube video ID or full URL
      required: true,
    },
    type: {
      type: String,
      enum: ["image", "video"],
      required: true,
    },
  },
  { timestamps: true }
);

export const Gallery = models.Gallery || model("Gallery", GallerySchema);
