"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const token = localStorage.getItem("admin_token")

        let attempts = 0
        const maxAttempts = 3
        let response

        while (attempts < maxAttempts) {
          const headers: Record<string, string> = {}
          if (token) {
            headers["Authorization"] = `Bearer ${token}`
          }

          response = await fetch("/api/admin/auth/verify", { headers })

          if (response.ok) {
            console.log("[v0] Auth verified successfully")
            setIsAuthenticated(true)
            setIsLoading(false)
            return
          }

          attempts++
          if (attempts < maxAttempts) {
            await new Promise((resolve) => setTimeout(resolve, 100))
          }
        }

        console.log("[v0] Auth verification failed, redirecting to login")
        setIsAuthenticated(false)
        localStorage.removeItem("admin_token")
        router.push("/admin/login")
      } catch (error) {
        console.log("[v0] Auth verification error:", error)
        setIsAuthenticated(false)
        localStorage.removeItem("admin_token")
        router.push("/admin/login")
      } finally {
        setIsLoading(false)
      }
    }

    verifyAuth()
  }, [router])

  const logout = async () => {
    try {
      const token = localStorage.getItem("admin_token")
      const headers: Record<string, string> = {}
      if (token) {
        headers["Authorization"] = `Bearer ${token}`
      }

      await fetch("/api/admin/auth/logout", {
        method: "POST",
        headers,
      })

      setIsAuthenticated(false)
      localStorage.removeItem("admin_token")
      router.push("/admin/login")
    } catch (error) {
      console.error("[v0] Logout error:", error)
      localStorage.removeItem("admin_token")
    }
  }

  return { isAuthenticated, isLoading, logout }
}
