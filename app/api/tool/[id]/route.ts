import { NextResponse } from "next/server";

import prisma from "@/lib/prismaClient";

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

// 特定のtoolを更新する処理
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
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

  await prisma.tool.update({
    where: { id },
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
        update: {
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
      genre: {
        update: {
          name: genre,
        },
      },
    },
  });
}

// 特定のtoolを削除する処理
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);

  // onDelete: Cascadeが効かないので手動で削除
  const tool = await prisma.tool.findUnique({
    where: { id },
    include: {
      technology: true,
      genre: true,
    },
  });

  await prisma.tool.delete({
    where: { id },
  });

  // 関連するtechnologyとgenreを削除
  await prisma.technology.delete({
    where: { id: tool.technologyId },
  });

  await prisma.genre.delete({
    where: { id: tool.genreId },
  });
}
