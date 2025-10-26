"use client"

import { useAdminAuth } from "@/hooks/use-admin-auth"
import { AdminSidebar } from "@/components/admin/sidebar"
import { AdminHeader } from "@/components/admin/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ImageIcon, Mail, Settings, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AdminDashboardPage() {
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

  const quickActions = [
    {
      title: "Edit Halaman",
      description: "Kelola konten halaman utama",
      icon: FileText,
      href: "/admin/pages",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Kelola Galeri",
      description: "Tambah dan edit foto angelfish",
      icon: ImageIcon,
      href: "/admin/gallery",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      title: "Informasi Kontak",
      description: "Update data kontak dan media sosial",
      icon: Mail,
      href: "/admin/contact",
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "SEO & Settings",
      description: "Kelola metadata dan pengaturan SEO",
      icon: Settings,
      href: "/admin/seo",
      color: "bg-orange-500/10 text-orange-600",
    },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden lg:block">
        <AdminSidebar onLogout={logout} />
      </div>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <AdminSidebar onLogout={logout} />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <AdminHeader
          title="Dashboard"
          description="Selamat datang di CMS AngleFish Indonesia"
          onMenuClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />

        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Selamat Datang di Admin Dashboard</h2>
              <p className="text-muted-foreground">
                Kelola semua konten website AngleFish Indonesia dari satu tempat. Pilih menu di bawah untuk memulai.
              </p>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-4">Akses Cepat</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action) => {
                  const Icon = action.icon
                  return (
                    <Link key={action.href} href={action.href}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                        <CardHeader>
                          <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mb-4`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <CardTitle className="text-lg">{action.title}</CardTitle>
                          <CardDescription>{action.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="ghost" size="sm" className="gap-2">
                            Buka
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Info Section */}
            <Card>
              <CardHeader>
                <CardTitle>Informasi Sistem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Versi CMS</p>
                    <p className="font-semibold">1.0.0</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status Database</p>
                    <p className="font-semibold text-green-600">Terhubung</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
