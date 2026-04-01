import { GalleryController } from "@/app/lib/featuers/gallery/gallery.controller";
import { NextRequest } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return await GalleryController.deleteGalleryItem(id);
}
