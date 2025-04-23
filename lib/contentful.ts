import type { FAQResponse } from "@/features/faq/types";
import client from "@/graphql/client";
import { GET_FAQ } from "@/graphql/queries/FAQ/getFAQ";

export async function fetchFAQ() {
  const data = await client.request<FAQResponse>(GET_FAQ);
  return data.faqCollection;
}
