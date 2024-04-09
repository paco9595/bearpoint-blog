import { ArticleDev, FetchArticleResponse } from "@/types/devArticle";
import { ErrorMessage } from "@/types/errorFetch";
import Link from "next/link";

export default async function Home() {
  
  const data: FetchArticleResponse<ArticleDev, ErrorMessage> = await fetch("https://dev.to/api/articles/me", {
    headers: { "api-key": process.env.DEV_TO_API_KEY || "" },
  }).then((res) => res.json());

  console.log(typeof data, data);

  if(data.status) {
    return (
      <div>Error Pulling Articules</div>
    )
  }
  return (
    <main className="flex flex-col justify-between max-w-[768px] px-20 mx-auto h-screen">
      <div>
        <div>
          ultimos Atriculos 
        </div>
        {data?.map(({ url, title, description, id, tag_list }: ArticleDev) => (
          <div key={id} className="my-4">
            <Link href={url} target="_blank" className="text-2xl truncate">
              {title}
            </Link>
            <p>{description}</p>
            <div>#{tag_list.join(" #")}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
