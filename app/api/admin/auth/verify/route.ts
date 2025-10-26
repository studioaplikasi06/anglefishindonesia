import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const cookieToken = request.cookies.get("admin_token")?.value
  const authHeader = request.headers.get("authorization")
  const headerToken = authHeader?.replace("Bearer ", "")

  const isValid = cookieToken || headerToken

  if (!isValid) {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }

  return NextResponse.json({ authenticated: true })
}
