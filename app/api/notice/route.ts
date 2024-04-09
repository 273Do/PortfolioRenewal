import { NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";

// 全てのお知らせに関する処理
export async function GET(req: Request) {
  const allNotices = await prisma.notice.findMany();
  return NextResponse.json(allNotices);
}

export async function POST(req: Request) {
  const { content, event_date } = await req.json();
  const post = await prisma.notice.create({
    data: { event_date, content },
  });
  return NextResponse.json(post);
}
