import type { galleryFormSchema } from "@/features/post/types/validation";
import type { z } from "zod";

// 全てのgalleryデータを取得
export async function getGalleryData() {
  const response = await fetch("http://localhost:3000/api/gallery", {
    cache: "no-store",
  });
  const galleryData = response.json();
  return galleryData;
}

// galleryを作成
export async function postGalleryData(
  value: z.infer<typeof galleryFormSchema>
) {
  await fetch("http://localhost:3000/api/gallery", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  });
}
