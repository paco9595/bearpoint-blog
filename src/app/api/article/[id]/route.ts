import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const id = request.nextUrl.pathname.split('/').pop()
    const data = await fetch(`https://dev.to/api/articles/${id}`).then(res=> res.json())
    return NextResponse.json({...data})
}