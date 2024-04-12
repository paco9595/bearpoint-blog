import { ArticleDev } from "@/types/devArticle";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import "@/styles/markdown.css";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import { headers } from "next/headers";

export default async function Article({
  params: { id },
}: {
  params: { id: string };
}) {
  const headersList = headers();
  const hostname = headersList.get('x-forwarded-host');
  const { body_markdown, reading_time_minutes, published_at }: ArticleDev = await fetch(
    `http://${hostname}/api/article/${id}`
  ).then((res) => res.json());
  console.log(typeof body_markdown)
  const { data:{title}, content } = matter(body_markdown);
  return (
    <article className="mt-5 max-w-[800px] mx-auto w-full">
      <div className="items-center flex mb-9 relative">
        <picture className="mr-4">
          <Image src={'/icons/React.svg'} alt="javascript icon" width={100} height={100} />
        </picture>
        <div>
        <h1 className="text-4xl leading-[1.1] font-semibold">{title}</h1>
        <div className="text-xs mt-2">
          <time itemProp="datePublished" dateTime={published_at.toString()}>
            {formatDate(published_at  )}
          </time>
          {'  ·  '}
          <span>{reading_time_minutes} minutos de lectura</span>
        </div>
        </div>
      </div>
      <MDXRemote
        source={content}
        options={{ parseFrontmatter: true, mdxOptions: {} }}
      />
    </article>
  );
}
