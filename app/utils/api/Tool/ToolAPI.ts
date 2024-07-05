import type { z } from "zod";

import type { toolFormSchema } from "@/features/post/types/validation";

// 全てのToolを取得する
export async function getAllToolData() {
  const allTool = await fetch(
    `${process.env.NEXT_PUBLIC_API_PREFIX}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tool`,
    {
      cache: "no-store",
    }
  );
  const allToolData = await allTool.json();
  return allToolData;
}

// // 特定のToolを取得する
export async function getToolData(id: string) {
  const tool_data = await fetch(
    `${process.env.NEXT_PUBLIC_API_PREFIX}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tool/${id}`,
    {
      cache: "no-store",
    }
  );
  const toolData = await tool_data.json();
  return toolData;
}

// Toolを投稿する
export async function postToolData(value: z.infer<typeof toolFormSchema>) {
  await fetch(
    `${process.env.NEXT_PUBLIC_API_PREFIX}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tool`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    }
  );
}

// Toolを更新する
export async function updateToolData(
  id: string,
  value: z.infer<typeof toolFormSchema>
) {
  await fetch(
    `${process.env.NEXT_PUBLIC_API_PREFIX}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tool/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    }
  );
}

// Toolを削除する
export async function deleteToolData(id: string) {
  await fetch(
    `${process.env.NEXT_PUBLIC_API_PREFIX}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tool/${id}`,
    {
      method: "DELETE",
    }
  );
}
