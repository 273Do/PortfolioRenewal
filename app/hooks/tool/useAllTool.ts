import useSWR from "swr";

import type { ToolObj } from "@/features/tool/types";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json()) as Promise<ToolObj[] | null>;
}
export const useAllTool = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/tool`,
    fetcher
  );
  return { tools: data, isError: error, isLoading };
};
