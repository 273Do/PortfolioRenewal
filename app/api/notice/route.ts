import { NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";

export async function GET(req: Request) {
  const allNotices = await prisma.notice.findMany();
  return NextResponse.json(allNotices);
}
