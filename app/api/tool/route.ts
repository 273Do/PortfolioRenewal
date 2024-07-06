import { NextResponse } from "next/server";

import { corsHeaders } from "@/app/utils/api/corsHeaders";
import prisma from "@/lib/prismaClient";

// 全てのtoolを取得する処理
export async function GET() {
  const getAllTool = await prisma.tool.findMany({
    // リレーション先のデータも取得
    include: {
      technology: true,
      genre: true,
    },
  });
  return NextResponse.json(getAllTool, { status: 200, headers: corsHeaders });
}

// toolを投稿する処理
export async function POST(req: Request) {
  const {
    name,
    period,
    color,
    description,
    background,
    ingenuity,
    point,
    url,
    genre,
    ...tech
  } = await req.json();
  // リレーション先のデータも格納
  await prisma.tool.create({
    data: {
      name,
      period,
      color,
      description,
      background,
      ingenuity,
      point,
      url,
      technology: {
        create: {
          tech0: tech.tech0,
          tech1: tech.tech1,
          tech2: tech.tech2,
          tech3: tech.tech3,
          tech4: tech.tech4,
          tech5: tech.tech5,
          tech6: tech.tech6,
          tech7: tech.tech7,
          tech8: tech.tech8,
          tech9: tech.tech9,
        },
      },
      genre: { create: { name: genre } },
    },
  });
}
