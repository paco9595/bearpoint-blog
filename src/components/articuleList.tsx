'use client'
import { ArticleDev } from "@/types/devArticle";
import { ImageError } from "next/dist/server/image-optimizer";
import Image from "next/image";
import Link from "next/link";
import { ReactEventHandler } from "react";

export default function ArticleList({ list }: { list: ArticleDev[] }) {
  return (
    <div className="w-full">
      {list.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
}
function ArticleItem({
  article: { url, tag_list, title, published_at },
}: {
  article: ArticleDev;
}) {
  return (
    <div className="my-4 font-normal grid grid-cols-[50px_1fr]">
      <Image
        src={`/icons/${tag_list[0]}.svg`}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>)=> {
            const target = e.target as HTMLImageElement;
            target.src= '/icons/next.svg'
            target.onerror = null
        }}
        alt="profile image"
        className="h-auto w-full my-auto"
        sizes="100vw"
        height={0}
        width={0}

      />
      <div className="ml-4">
        <Link
          href={url}
          target="_blank"
          className="text-2xl truncate font-semibold"
        >
          {title}
        </Link>
        <p>{published_at.toString()}</p>
      </div>
    </div>
  );
}

/*
<div key={id} className="my-4 font-normal">
          <div className="mx-auto">
            <Image
              src={cover_image || ""}
              alt="profile image"
              className="h-auto w-full"
              sizes="100vw"
              height={0}
              width={0}
            />
          </div>
          <Link
            href={url}
            target="_blank"
            className="text-2xl truncate font-semibold"
          >
            {title}
          </Link>
          <p className="">{description}</p>
          <div>#{tag_list.join(" #")}</div>
        </div>
*/
