import type { MovieFormSchema } from "@/features/post/types/validation";
import type { z } from "zod";

// 全ての映像投稿を取得
export async function getMovieData() {
  const allMovie = await fetch("http://localhost:3000/api/movie", {
    cache: "no-store",
  });
  const allMovieData = await allMovie.json();
  return allMovieData;
}

// 映像投稿を作成
export async function postMovieData(value: z.infer<typeof MovieFormSchema>) {
  // const
  console.log("postMovieData");
  console.log(value);

  await fetch("http://localhost:3000/api/movie", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  });
}
