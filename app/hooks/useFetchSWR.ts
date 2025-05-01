import useSWR from "swr";

// クライアントでデータフェッチするhook
export function useFetchSWR<T>(key: string | null, fetchFn: () => Promise<T>) {
  const fetcher = async () => {
    const data = await fetchFn();
    return data;
  };

  const { data, error, isLoading, mutate } = useSWR<T>(key, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}
