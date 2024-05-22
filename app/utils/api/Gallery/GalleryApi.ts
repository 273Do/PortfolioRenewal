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

// galleryを更新
export async function updateGalleryData(
  id: string,
  value: z.infer<typeof galleryFormSchema>
) {
  await fetch(`http://localhost:3000/api/gallery/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  });
}

// galleryを削除
export async function deleteGalleryData(id: string) {
  await fetch(`http://localhost:3000/api/gallery/${id}`, {
    method: "DELETE",
  });
}
