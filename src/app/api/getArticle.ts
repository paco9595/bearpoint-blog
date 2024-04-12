import { FetchArticleResponse } from "@/types/devArticle";

export async function getArticle(
  page: number,
  per_page: number
): Promise<FetchArticleResponse> {
  return await fetch(
    `https://dev.to/api/articles/me?page=${page}&per_page=${per_page}`,
    {
      headers: { "api-key": process.env.DEV_TO_API_KEY || "" },
    }
  ).then((res) => res.json());
}
