import { NextResponse } from "next/server";

import { corsHeaders } from "@/app/utils/api/corsHeaders";
import prisma from "@/lib/prismaClient";

// 全てのお知らせを取得する処理
export async function GET() {
  const allNotice = await prisma.notice.findMany();
  return NextResponse.json(allNotice, { status: 200, headers: corsHeaders });
}

// お知らせを投稿する処理
export async function POST(req: Request) {
  const { content, event_date, url } = await req.json();
  await prisma.notice.create({
    data: { event_date, content, url },
  });
}
