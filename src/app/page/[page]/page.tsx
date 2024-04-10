import ArticleList from "@/components/articleList";
import Aside from "@/components/sidebar";
import { FetchArticleResponse } from "@/types/devArticle";

export default async function Home({
  params: { page },
  params,
}: {
  params: { page: string };
}) {
  
  const { data, status, error}: FetchArticleResponse = await fetch(
    `${process.env.BASE_URL}/api/article?page=${page}`
  )
    .then((res) => res.json())
  if (status) {
    return <div>Error Pulling Articules</div>;
  }
  return (
    <main className="grid grid-cols-1 md:grid-cols-[1fr_20%] gap-7 max-w-[1200px] mx-auto ">
      <ArticleList list={data} />
      <Aside />
    </main>
  );
}
