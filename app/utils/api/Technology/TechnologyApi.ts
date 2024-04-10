import type { TechnologyObj } from "@/features/main/types";

//使用可能な技術を取得
async function getAvailableTechnologyData() {
  const response = await fetch("http://localhost:3000/api/technology", {
    cache: "no-store",
  });
  const availableTechnologyData: TechnologyObj[] = await response.json();
  return availableTechnologyData;
}

export { getAvailableTechnologyData };
