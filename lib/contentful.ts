import type { ToolsResponse } from "@/components/Marquee/types";
import type { FAQResponse } from "@/features/faq/types";
import type { GalleriesResponse, NoticesResponse } from "@/features/main/types";
import type { MoviesResponse } from "@/features/movie/types";
import type { WorksResponse } from "@/features/works/types";
import client from "@/graphql/client";
import { GET_FAQ } from "@/graphql/queries/FAQ/getFAQ";
import { GET_Galleries } from "@/graphql/queries/Gallery/getGalleries";
import { GET_Movies } from "@/graphql/queries/Movie/getMovies";
import { GET_Notices } from "@/graphql/queries/Notice/getNotices";
import { GET_Technologies } from "@/graphql/queries/Technology/getTechnology";
import { GET_Tools } from "@/graphql/queries/Tool/getTools";
import { GET_WorkDetail, GET_Works } from "@/graphql/queries/Work/getWorks";

// cmsから取得するデータの型を定義

// FAQを取得する関数
async function fetchFAQ() {
  const data = await client.request<FAQResponse>(GET_FAQ);
  return data.faqCollection;
}

// Toolsを取得する関数
async function fetchTools() {
  const data = await client.request<ToolsResponse>(GET_Tools);
  return data.toolCollection;
}

// Technologiesを取得する関数
async function fetchTechnologies() {
  const data = await client.request<ToolsResponse>(GET_Technologies);
  return data.technologiesCollection;
}

// Worksを取得する関数
async function fetchWorks(limit?: number) {
  const data = await client.request<WorksResponse>(GET_Works, { limit });
  return data.worksCollection;
}

// Workの詳細を取得する関数
async function fetchWorksDetail(id: string) {
  const data = await client.request<WorksResponse>(GET_WorkDetail, { id });
  return data.worksCollection;
}

// Galleryを取得する関数
async function fetchGalleries() {
  const data = await client.request<GalleriesResponse>(GET_Galleries);

  // ランダムに順番を入れ替える
  const shuffledData = data.galleriesCollection.items.sort(
    () => Math.random() - 0.5
  );
  return shuffledData;
}

// Movieを取得する関数
async function fetchMovies() {
  const data = await client.request<MoviesResponse>(GET_Movies);

  // ランダムに順番を入れ替える
  const shuffledData = data.moviesCollection.items.sort(
    () => Math.random() - 0.5
  );
  return shuffledData;
}

// Noticeを取得する関数
async function fetchNotices() {
  const data = await client.request<NoticesResponse>(GET_Notices);
  return data.noticesCollection;
}

export {
  fetchFAQ,
  fetchTools,
  fetchTechnologies,
  fetchWorks,
  fetchWorksDetail,
  fetchGalleries,
  fetchMovies,
  fetchNotices,
};
