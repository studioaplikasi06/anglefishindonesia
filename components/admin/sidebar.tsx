"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, ImageIcon, Mail, Settings, LogOut, Fish } from "lucide-react"

interface SidebarProps {
  onLogout: () => void
}

export function AdminSidebar({ onLogout }: SidebarProps) {
  const pathname = usePathname()

  const menuItems = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Halaman",
      href: "/admin/pages",
      icon: FileText,
    },
    {
      label: "Galeri",
      href: "/admin/gallery",
      icon: ImageIcon,
    },
    {
      label: "Kontak",
      href: "/admin/contact",
      icon: Mail,
    },
    {
      label: "SEO & Settings",
      href: "/admin/seo",
      icon: Settings,
    },
  ]

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-sidebar-primary flex items-center justify-center">
            <Fish className="h-6 w-6 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="font-serif font-bold text-sidebar-foreground">AngleFish</h1>
            <p className="text-xs text-sidebar-accent-foreground">Admin CMS</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3",
                  isActive && "bg-sidebar-primary text-sidebar-primary-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-sidebar-border">
        <Button variant="outline" className="w-full justify-start gap-3 bg-transparent" onClick={onLogout}>
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  )
}
