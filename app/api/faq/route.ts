import { NextResponse } from "next/server";

import prisma from "@/lib/prismaClient";

// faqに関する処理
export async function GET() {
  const allFAQ = await prisma.faq.findMany();
  return NextResponse.json(allFAQ);
}

export async function POST(req: Request) {
  const { question, answer } = await req.json();
  await prisma.faq.create({
    data: { question, answer },
  });
}
