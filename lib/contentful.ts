import type { FAQResponse, ToolsResponse } from "@/features/faq/types";
import { WorksResponse } from "@/features/works/types";
import client from "@/graphql/client";
import { GET_FAQ } from "@/graphql/queries/FAQ/getFAQ";
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

// Technologyを取得する関数
async function fetchTechnology() {
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

export { fetchFAQ, fetchTools, fetchTechnology, fetchWorks, fetchWorksDetail };
