import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";

// 特定のお知らせに関する処理
// 更新処理
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const { content, event_date } = await req.json();
  const post = await prisma.notice.update({
    where: { id },
    data: { event_date, content },
  });
  return NextResponse.json(post);
}

// 削除処理
