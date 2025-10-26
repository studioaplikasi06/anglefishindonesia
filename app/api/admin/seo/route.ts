import { getSeoSettings, getSeoBySlug, updateSeoSettings } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug")

  if (slug) {
    const seo = getSeoBySlug(slug)
    return NextResponse.json(seo || {})
  }

  return NextResponse.json(getSeoSettings())
}

export async function PUT(request: NextRequest) {
  const { slug, ...data } = await request.json()

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 })
  }

  const updated = updateSeoSettings(slug, data)
  return NextResponse.json(updated)
}
