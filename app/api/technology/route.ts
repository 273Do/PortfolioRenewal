import { NextResponse } from "next/server";

import prisma from "@/lib/prismaClient";

// 使用可能な技術を取得する処理(id=1のもののみ)
export async function GET() {
  const availableTechnology = await prisma.technology.findMany({
    where: { id: 1 },
  });
  return NextResponse.json(availableTechnology);
}

// 使用可能な技術を更新する処理(id=1のもののみ)
export async function PUT(req: Request) {
  const { ...technologyData } = await req.json();
  await prisma.technology.update({
    where: { id: 1 },
    data: technologyData,
  });
}
