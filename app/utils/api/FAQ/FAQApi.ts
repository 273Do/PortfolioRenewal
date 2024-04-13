import type { FAQFormSchema } from "@/features/post/types/validation";
import type { z } from "zod";

// 全てのFAQを取得
export async function getFAQData() {
  const allFAQ = await fetch("http://localhost:3000/api/faq", {
    cache: "no-store",
  });
  const allFAQData = await allFAQ.json();
  return allFAQData;
}

// FAQを作成する
export async function postFAQData(value: z.infer<typeof FAQFormSchema>) {
  const { question, answer } = value;
  await fetch("http://localhost:3000/api/faq", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, answer }),
  });
}

// FAQを削除する
export async function deleteFAQData(id: string) {
  await fetch(`http://localhost:3000/api/faq/${id}`, { method: "DELETE" });
}
