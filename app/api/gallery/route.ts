import { NextResponse } from "next/server";

import { corsHeaders } from "@/app/utils/api/corsHeaders";
import prisma from "@/lib/prismaClient";

// galleryに関する処理
export async function GET() {
  const allGallery = await prisma.gallery.findMany();
  return NextResponse.json(allGallery, { status: 200, headers: corsHeaders });
}

export async function POST(req: Request) {
  const { event_date, title, description, url } = await req.json();
  const newGallery = await prisma.gallery.create({
    data: { event_date, title, description, url },
  });
  return NextResponse.json(newGallery, {
    status: 201,
    headers: corsHeaders,
  });
}
