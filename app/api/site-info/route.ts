import { SiteInfoController } from "@/app/lib/featuers/site-info/site-info.controller";

export async function GET() {
  return SiteInfoController.getSiteInfo();
}

export async function PUT(req: Request) {
  return SiteInfoController.updateSiteInfo(req);
}

export async function POST(req: Request) {
  return SiteInfoController.updateSiteInfo(req);
}
