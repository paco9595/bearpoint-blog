"use client";
import { ArticleDev } from "@/types/devArticle";
import { formatDate } from "@/utils/formatDate";
import { ImageError } from "next/dist/server/image-optimizer";
import Image from "next/image";
import Link from "next/link";

export default function ArticleList({ list = [] }: { list?: ArticleDev[] }) {
  return (
    <div className="w-full">
      {list.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
}
function ArticleItem({
  article: {  tag_list, title, published_at, id},
}: {
  article: ArticleDev;
}) {
  return (
    <div className="my-4 font-normal grid grid-cols-[48px_1fr] max-w-[768px] gap-x-6">
      <Image
        src={`/icons/${tag_list[0]}.svg`}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          const target = e.target as HTMLImageElement;
          target.src = "/icons/next.svg";
          target.onerror = null;
        }}
        alt="profile image"
        className="h-auto w-full my-auto"
        sizes="100vw"
        height={0}
        width={0}
      />
      <div>
        <Link
          href={`/article/${id}`}
          className="text-wrap font-semibold text-lg"
        >
          {title}
        </Link>
        <p className="text-xs font-normal">{formatDate(published_at)}</p>
      </div>
    </div>
  );
}
