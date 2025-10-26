import { getContactInfo, updateContactInfo } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json(getContactInfo())
}

export async function PUT(request: NextRequest) {
  const data = await request.json()
  const updated = updateContactInfo(data)
  return NextResponse.json(updated)
}
