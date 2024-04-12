import type { NoticeObj } from "@/features/main/types";
import type { noticeFormSchema } from "@/features/post/types/validation";
import type { z } from "zod";

// 全てのお知らせを取得する
export async function getNoticeAllData() {
  const response = await fetch("http://localhost:3000/api/notice", {
    cache: "no-store",
  });
  const noticeAllData: NoticeObj[] = await response.json();
  return noticeAllData;
}

// お知らせを作成する
export async function postNoticeData(value: z.infer<typeof noticeFormSchema>) {
  const { event_date, content } = value;
  await fetch("http://localhost:3000/api/notice", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event_date, content }),
  });
}

// お知らせを更新する
export async function updateNoticeData(
  id: string,
  value: z.infer<typeof noticeFormSchema>
) {
  const { event_date, content } = value;
  await fetch(`http://localhost:3000/api/notice/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event_date, content }),
  });
}

// お知らせを削除する
export async function deleteNoticeData(id: string) {
  await fetch(`http://localhost:3000/api/notice/${id}`, { method: "DELETE" });
}
