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
        const response = await fetch("/api/admin/auth/verify")
        setIsAuthenticated(response.ok)
        if (!response.ok) {
          router.push("/admin/login")
        }
      } catch (error) {
        setIsAuthenticated(false)
        router.push("/admin/login")
      } finally {
        setIsLoading(false)
      }
    }

    verifyAuth()
  }, [router])

  const login = async (password: string) => {
    try {
      const response = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })

      if (!response.ok) {
        throw new Error("Invalid password")
      }

      setIsAuthenticated(true)
      router.push("/admin/dashboard")
    } catch (error) {
      throw error
    }
  }

  const logout = async () => {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" })
      setIsAuthenticated(false)
      router.push("/admin/login")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return { isAuthenticated, isLoading, login, logout }
}
