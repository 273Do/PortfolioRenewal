import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";

// 特定のtoolを取得する処理
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const toolData = await prisma.tool.findUnique({
    where: { id },
    include: {
      technology: true,
      genre: true,
    },
  });
  return NextResponse.json(toolData);
}
