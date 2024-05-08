import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

// galleryに関する処理
export async function GET(req: Request) {
  const allGallery = await prisma.gallery.findMany();
  return NextResponse.json(allGallery);
}

export async function POST(req: Request) {
  const { event_date, title, description, url } = await req.json();
  await prisma.gallery.create({
    data: { event_date, title, description, url },
  });
}
