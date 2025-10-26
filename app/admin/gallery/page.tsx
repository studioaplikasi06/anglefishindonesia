"use client"

import { useAdminAuth } from "@/hooks/use-admin-auth"
import { AdminSidebar } from "@/components/admin/sidebar"
import { AdminHeader } from "@/components/admin/header"
import { GalleryManager } from "@/components/admin/gallery-manager"
import { useState } from "react"

export default function AdminGalleryPage() {
  const { isAuthenticated, isLoading, logout } = useAdminAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Memverifikasi akses...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden lg:block">
        <AdminSidebar onLogout={logout} />
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <AdminSidebar onLogout={logout} />
        </div>
      )}

      <div className="flex-1 flex flex-col">
        <AdminHeader
          title="Kelola Galeri"
          description="Tambah, edit, dan hapus foto angelfish"
          onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />

        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto">
            <GalleryManager />
          </div>
        </main>
      </div>
    </div>
  )
}
