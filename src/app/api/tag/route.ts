import { NextResponse } from "next/server"
import { getArticle } from "../getArticle";


export async function GET(_request: Request){
    const data = await getArticle()
    if(!Array.isArray(data)){
        return NextResponse.json(data)
    }

    const tags = data.reduce(
        (acc, article) => {
          for(const tag of article.tag_list) {
            acc.add(tag)
          }
          return acc
        },
        new Set()
    );
    return NextResponse.json({data: Array.from(tags)})
}
