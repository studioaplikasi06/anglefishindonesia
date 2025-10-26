"use client"

import { useAdminAuth } from "@/hooks/use-admin-auth"
import { AdminSidebar } from "@/components/admin/sidebar"
import { AdminHeader } from "@/components/admin/header"
import { PageEditor } from "@/components/admin/page-editor"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function AdminPagesPage() {
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
          title="Kelola Halaman"
          description="Edit konten halaman utama website"
          onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />

        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="home" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="home">Halaman Home</TabsTrigger>
                <TabsTrigger value="about">Halaman About</TabsTrigger>
              </TabsList>

              <TabsContent value="home" className="mt-6">
                <PageEditor slug="home" />
              </TabsContent>

              <TabsContent value="about" className="mt-6">
                <PageEditor slug="about" />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
