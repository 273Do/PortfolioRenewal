import type { z } from "zod";

// import { getPlaiceholder } from "plaiceholder";
import type { galleryFormSchema } from "@/features/post/types/validation";

// 全てのgalleryデータを取得
export async function getGalleryData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PREFIX}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/gallery`,
    {
      cache: "no-store",
    }
  );
  const galleryData = await response.json(); // Await the response.json() call
  // return galleryData;

  return galleryData;
}

// 全てのブラーgalleryデータを取得
export async function getBlurGalleryData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PREFIX}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/gallery/blur`,
    {
      cache: "no-store",
    }
  );
  const blurGalleryData = await response.json(); // Await the response.json() call
  // return galleryData;

  return blurGalleryData;
}
// export const getBlurGalleryData = async (): Promise<GalleryObj[]> => {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_PREFIX}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/gallery", {
//     cache: "no-store",
//   });
//   const galleryData = await response.json(); // Await the response.json() call
//   // return galleryData;

//   // 画像のブラー処理
//   const galleryDataWithBlur = await Promise.all(
//     galleryData.map(async (item: GalleryObj) => {
//       const { base64 } = await getPlaiceholder(
//         await fetch(item.url).then(async (res) =>
//           Buffer.from(await res.arrayBuffer())
//         )
//       ); // Convert base64 to Buffer
//       return {
//         ...item,
//         blurDataURL: base64,
//       };
//     })
//   );

//   return galleryDataWithBlur;
// };

// galleryを作成
export async function postGalleryData(
  value: z.infer<typeof galleryFormSchema>
) {
  await fetch(
    `${process.env.NEXT_PUBLIC_API_PREFIX}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/gallery`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    }
  );
}

// galleryを更新
export async function updateGalleryData(
  id: string,
  value: z.infer<typeof galleryFormSchema>
) {
  await fetch(
    `${process.env.NEXT_PUBLIC_API_PREFIX}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/gallery/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    }
  );
}

// galleryを削除
export async function deleteGalleryData(id: string) {
  await fetch(
    `${process.env.NEXT_PUBLIC_API_PREFIX}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/gallery/${id}`,
    {
      method: "DELETE",
    }
  );
}
