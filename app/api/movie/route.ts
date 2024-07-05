import { NextResponse } from "next/server";

import { corsHeaders } from "@/app/utils/api/corsHeaders";
import prisma from "@/lib/prismaClient";

// 全ての映像投稿を取得する処理
export async function GET() {
  const allMovie = await prisma.movie.findMany();
  return NextResponse.json(allMovie, { status: 200, headers: corsHeaders });
}

// 映像を投稿する処理
export async function POST(req: Request) {
  const { title, description, url } = await req.json();
  await prisma.movie.create({
    data: { title, description, url },
  });
}
