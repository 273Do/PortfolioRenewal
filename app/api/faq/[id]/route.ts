import { NextResponse } from "next/server";

import { corsHeaders } from "@/app/utils/api/corsHeaders";
import prisma from "@/lib/prismaClient";

// 特定のFAQに関する処理

// 更新処理
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const { question, answer } = await req.json();
  await prisma.faq.update({
    where: { id },
    data: { question, answer },
  });
  return NextResponse.json(
    { status: "success" },
    { status: 200, headers: corsHeaders }
  );
}

// 削除処理
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  await prisma.faq.delete({
    where: { id },
  });
  return NextResponse.json(
    { status: "success" },
    { status: 200, headers: corsHeaders }
  );
}
