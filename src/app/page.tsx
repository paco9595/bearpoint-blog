import ArticleList from "@/components/articuleList";
import Aside from "@/components/sidebar";
import { ArticleDev, FetchArticleResponse } from "@/types/devArticle";
import { ErrorMessage } from "@/types/errorFetch";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data = await fetch(
    "https://dev.to/api/articles/me",
    {
      headers: { "api-key": process.env.DEV_TO_API_KEY || "" },
    }
  ).then((res) => res.json());

  console.log(typeof data, data);

  if (data.status) {
    return <div>Error Pulling Articules</div>;
  }
  return (
    <main className="grid grid-cols-1 md:grid-cols-[1fr_20%] gap-7 max-w-screen-lg mx-auto ">
        <ArticleList list={data}/>
      <Aside />
    </main>
  );
}
