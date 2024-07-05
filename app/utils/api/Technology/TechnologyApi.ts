import type { z } from "zod";

import type { TechnologyObj } from "@/features/main/types";
import type { technologyFormSchema } from "@/features/post/types/validation";

// 使用可能な技術を取得
export async function getAvailableTechnologyData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PREFIX}${process.env.VERCEL_URL}/api/technology`,
    {
      cache: "no-store",
    }
  );
  const availableTechnologyData: TechnologyObj[] = await response.json();
  return availableTechnologyData;
}

// 使用可能な技術を更新
export async function updateTechnologyData(
  value: z.infer<typeof technologyFormSchema>
) {
  await fetch(
    `${process.env.NEXT_PUBLIC_API_PREFIX}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/technology`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    }
  );
}
