import { FetchArticleResponse } from "@/types/devArticle";
import { headers } from "next/headers";

export default async function Topics() {
  const headersList = headers();
  const hostname = headersList.get('x-forwarded-host');
  const {status, data}: FetchArticleResponse= await fetch(`http://${hostname}/api/tag`).then(res=>res.json())
  if (status) {
    return <div>Error Pulling Articules</div>;
  }
  return <div>{data?.join(' ')}</div>;
}
