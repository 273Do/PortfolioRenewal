import { NextResponse } from "next/server";
import { getPlaiceholder } from "plaiceholder";

import { corsHeaders } from "@/app/utils/api/corsHeaders";
import type { GalleryObj } from "@/features/gallery/types";
import prisma from "@/lib/prismaClient";

// galleryに関する処理
export async function GET() {
  const allGallery = await prisma.gallery.findMany();

  // 画像のブラー処理
  const galleryDataWithBlur = await Promise.all(
    allGallery.map(async (item: GalleryObj) => {
      const { base64 } = await getPlaiceholder(
        await fetch(item.url, {
          cache: "no-store",
        }).then(async (res) => Buffer.from(await res.arrayBuffer()))
      ); // Convert base64 to Buffer
      return {
        ...item,
        blurDataURL: base64,
      };
    })
  );

  return NextResponse.json(galleryDataWithBlur, {
    status: 200,
    headers: corsHeaders,
  });
}
