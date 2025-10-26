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
        let attempts = 0
        const maxAttempts = 3
        let response

        while (attempts < maxAttempts) {
          response = await fetch("/api/admin/auth/verify")
          if (response.ok) {
            setIsAuthenticated(true)
            setIsLoading(false)
            return
          }
          attempts++
          if (attempts < maxAttempts) {
            await new Promise((resolve) => setTimeout(resolve, 100))
          }
        }

        setIsAuthenticated(false)
        router.push("/admin/login")
      } catch (error) {
        console.log("[v0] Auth verification error:", error)
        setIsAuthenticated(false)
        router.push("/admin/login")
      } finally {
        setIsLoading(false)
      }
    }

    verifyAuth()
  }, [router])

  const logout = async () => {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" })
      setIsAuthenticated(false)
      router.push("/admin/login")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return { isAuthenticated, isLoading, logout }
}
