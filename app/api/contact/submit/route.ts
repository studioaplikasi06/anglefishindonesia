import { type NextRequest, NextResponse } from "next/server"

interface ContactSubmission {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  submittedAt: string
}

// In-memory storage for contact submissions
const submissions: ContactSubmission[] = []

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json({ error: "Nama, email, subjek, dan pesan harus diisi" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: "Format email tidak valid" }, { status: 400 })
    }

    // Create submission record
    const submission: ContactSubmission = {
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      subject: data.subject,
      message: data.message,
      submittedAt: new Date().toISOString(),
    }

    // Store submission
    submissions.push(submission)

    console.log("[v0] Contact form submitted:", submission)

    return NextResponse.json(
      {
        success: true,
        message: "Pesan Anda telah diterima. Kami akan merespons dalam 24 jam.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Contact submission error:", error)
    return NextResponse.json({ error: "Terjadi kesalahan saat mengirim pesan" }, { status: 500 })
  }
}

// GET endpoint to retrieve submissions (for admin)
export async function GET(request: NextRequest) {
  // Check if admin token is provided
  const authHeader = request.headers.get("authorization")
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json(submissions)
}
