import { type FetchArticleResponse } from "@/types/devArticle";
import { NextRequest, NextResponse } from "next/server";
import { getArticle } from "../getArticle";

export async function GET(request: NextRequest) {
  try {
    const page = Number(request.nextUrl.searchParams.get("page")) || 1;
    const per_page = Number(request.nextUrl.searchParams.get("per_page")) || 10;

    const data: FetchArticleResponse = await getArticle(page, per_page);

    if (Array.isArray(data)) {
      console.log(data.length);
      return NextResponse.json({ data });
    }
    return NextResponse.json(
      { error: data.error },
      {
        status: data.status,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.error()
  }
}
