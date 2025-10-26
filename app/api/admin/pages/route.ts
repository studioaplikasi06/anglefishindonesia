import { getPages, getPageBySlug, updatePage } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug")

  if (slug) {
    const page = getPageBySlug(slug)
    if (!page) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 })
    }
    return NextResponse.json(page)
  }

  return NextResponse.json(getPages())
}

export async function PUT(request: NextRequest) {
  const { slug, ...data } = await request.json()

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 })
  }

  const updated = updatePage(slug, data)
  if (!updated) {
    return NextResponse.json({ error: "Page not found" }, { status: 404 })
  }

  return NextResponse.json(updated)
}
