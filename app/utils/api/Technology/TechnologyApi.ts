import type { TechnologyObj } from "@/features/main/types";
import type { technologyFormSchema } from "@/features/post/types/validation";
import type { z } from "zod";

//使用可能な技術を取得
export async function getAvailableTechnologyData() {
  const response = await fetch("http://localhost:3000/api/technology", {
    cache: "no-store",
  });
  const availableTechnologyData: TechnologyObj[] = await response.json();
  return availableTechnologyData;
}

export async function updateTechnologyData(
  value: z.infer<typeof technologyFormSchema>
) {
  await fetch("http://localhost:3000/api/technology", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  });
}
