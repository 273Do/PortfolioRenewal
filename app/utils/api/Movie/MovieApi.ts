import type { movieFormSchema } from "@/features/post/types/validation";
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
export async function postMovieData(value: z.infer<typeof movieFormSchema>) {
  await fetch("http://localhost:3000/api/movie", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  });
}

// 映像投稿を更新
export async function updateMovieData(
  id: string,
  value: z.infer<typeof movieFormSchema>
) {
  await fetch(`http://localhost:3000/api/movie/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  });
}

// 映像投稿を削除
export async function deleteMovieData(id: string) {
  await fetch(`http://localhost:3000/api/movie/${id}`, { method: "DELETE" });
}

// youtubeアカウント情報を取得
export async function getYTProfileData() {
  // アカウント情報を取得
  // const fetchYTData = await fetch(
  //   `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCh4boc9_9Dxiz9QP_VkwGww&key=${process.env.YOUTUBE_API_KEY}`
  // );
  // 登録者数を取得
  const fetchSubscribe = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCh4boc9_9Dxiz9QP_VkwGww&key=${process.env.YOUTUBE_API_KEY}`
  );
  // const YTData = await fetchYTData.json();
  const subscribe = await fetchSubscribe.json();
  // return YTData;
  return subscribe;
}
