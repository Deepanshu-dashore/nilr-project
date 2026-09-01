import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db/connectDB";
import { Program } from "@/app/lib/featuers/program/program.model";
import "@/app/lib/featuers/program-type/programType.model";
import { getUrls } from "@/app/lib/utils/geturl";

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const page  = Math.max(1, parseInt(searchParams.get("page")  ?? "1", 10));
    const limit = Math.max(1, parseInt(searchParams.get("limit") ?? "6", 10));
    const skip  = (page - 1) * limit;

    const [rawPrograms, total] = await Promise.all([
      Program.find()
        .skip(skip)
        .limit(limit)
        .select("name description duration fee eligibility feeStructureDoc programType")
        .populate("programType", "name")
        .lean(),
      Program.countDocuments(),
    ]);

    // Resolve Cloudinary URLs for PDF docs (same pattern as program.controller.ts)
    const programs = rawPrograms.map((prog: any) => ({
      ...prog,
      feeStructureDoc: prog.feeStructureDoc
        ? getUrls.getUrl(prog.feeStructureDoc, "raw")
        : null,
    }));

    return NextResponse.json({
      programs,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    console.error("[eligibility-fees] API error:", err);
    return NextResponse.json(
      { error: "Failed to fetch eligibility & fees data" },
      { status: 500 }
    );
  }
}

