import { GalleryController } from "@/app/lib/featuers/gallery/gallery.controller";

export async function GET() {
  return await GalleryController.getAllGalleryItems();
}

export async function POST(req: Request) {
  const formData = await req.formData();
  return await GalleryController.createGalleryItem(formData);
}
