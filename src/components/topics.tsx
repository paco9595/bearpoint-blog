import { FetchArticleResponse } from "@/types/devArticle";

export default async function Topics() {
  const {status, data}: FetchArticleResponse= await fetch(`${process.env.BASE_URL}/api/tag`).then(res=>res.json())
  if (status) {
    return <div>Error Pulling Articules</div>;
  }
  return <div>{data?.join(' ')}</div>;
}
