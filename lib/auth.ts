// Simple authentication helper for admin
// In production, use proper auth solution like NextAuth.js or Supabase Auth

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123"

export function verifyAdminPassword(password: string): boolean {
  return password === ADMIN_PASSWORD
}

export function setAdminSession(token: string): void {
  // Session is stored in httpOnly cookie via API
  if (typeof window !== "undefined") {
    localStorage.setItem("admin_token", token)
  }
}

export function getAdminSession(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("admin_token")
  }
  return null
}

export function clearAdminSession(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("admin_token")
  }
}

export function isAdminAuthenticated(): boolean {
  return getAdminSession() !== null
}
