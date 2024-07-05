import type { z } from "zod";

import type { FAQFormSchema } from "@/features/post/types/validation";

// 全てのFAQを取得
export async function getFAQData() {
  const allFAQ = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/faq`, {
    cache: "no-store",
  });
  const allFAQData = await allFAQ.json();
  return allFAQData;
}

// FAQを作成する
export async function postFAQData(value: z.infer<typeof FAQFormSchema>) {
  await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/faq`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  });
}

// FAQを更新する
export async function updateFAQData(
  id: string,
  value: z.infer<typeof FAQFormSchema>
) {
  await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/faq/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  });
}

// FAQを削除する
export async function deleteFAQData(id: string) {
  await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/faq/${id}`, {
    method: "DELETE",
  });
}
