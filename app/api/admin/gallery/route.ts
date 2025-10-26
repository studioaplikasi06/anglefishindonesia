import { getGalleryImages, addGalleryImage, updateGalleryImage, deleteGalleryImage } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json(getGalleryImages())
}

export async function POST(request: NextRequest) {
  const data = await request.json()

  if (!data.title || !data.imageUrl) {
    return NextResponse.json({ error: "Title and imageUrl are required" }, { status: 400 })
  }

  const image = addGalleryImage(data)
  return NextResponse.json(image, { status: 201 })
}

export async function PUT(request: NextRequest) {
  const { id, ...data } = await request.json()

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 })
  }

  const updated = updateGalleryImage(id, data)
  if (!updated) {
    return NextResponse.json({ error: "Image not found" }, { status: 404 })
  }

  return NextResponse.json(updated)
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json()

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 })
  }

  deleteGalleryImage(id)
  return NextResponse.json({ success: true })
}
