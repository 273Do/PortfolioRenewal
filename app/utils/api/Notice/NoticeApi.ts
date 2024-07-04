import type { z } from "zod";

import type { noticeFormSchema } from "@/features/post/types/validation";

// 全てのお知らせを取得する
export async function getNoticeAllData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/notice`,
    {
      cache: "no-store",
    }
  );
  const noticeAllData = await response.json();
  return noticeAllData;
}

// お知らせを作成する
export async function postNoticeData(value: z.infer<typeof noticeFormSchema>) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notice`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  });
}

// お知らせを更新する
export async function updateNoticeData(
  id: string,
  value: z.infer<typeof noticeFormSchema>
) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notice/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  });
}

// お知らせを削除する
export async function deleteNoticeData(id: string) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notice/${id}`, {
    method: "DELETE",
  });
}
