import { useQuery } from "@tanstack/react-query";
import { API_KEY, API_URL } from "./config";
import { NewsResponse } from "@/types/news";

const getNewsList = async (): Promise<NewsResponse> => {
  const NEWS_URL = `${API_URL}${API_KEY}`;
  const data = await fetch(NEWS_URL);
  const responseData = await data.json();
  return responseData;
};

export const useGetNewsList = () =>
  useQuery<NewsResponse>({
    queryKey: ["getNewsList"],
    queryFn: () => getNewsList(),
    refetchOnWindowFocus: false,
  });
