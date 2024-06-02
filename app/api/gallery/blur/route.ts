import prisma from "@/lib/prismaClient";
import { NextResponse } from "next/server";
import { getPlaiceholder } from "plaiceholder";
import type { GalleryObj } from "@/features/gallery/types";

// galleryに関する処理
export async function GET(req: Request) {
  const allGallery = await prisma.gallery.findMany();

  // 画像のブラー処理
  const galleryDataWithBlur = await Promise.all(
    allGallery.map(async (item: GalleryObj) => {
      const { base64 } = await getPlaiceholder(
        await fetch(item.url).then(async (res) =>
          Buffer.from(await res.arrayBuffer())
        )
      ); // Convert base64 to Buffer
      return {
        ...item,
        blurDataURL: base64,
      };
    })
  );

  return NextResponse.json(galleryDataWithBlur);
}
