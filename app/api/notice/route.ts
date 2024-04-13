import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

// 全てのお知らせを取得する処理
export async function GET(req: Request) {
  const allNotices = await prisma.notice.findMany();
  return NextResponse.json(allNotices);
}

// お知らせを投稿する処理
export async function POST(req: Request) {
  const { content, event_date } = await req.json();
  await prisma.notice.create({
    data: { event_date, content },
  });
}
