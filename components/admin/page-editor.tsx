"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, Loader } from "lucide-react"
import type { PageContent } from "@/lib/db"

interface PageEditorProps {
  slug: string
  onSave?: () => void
}

export function PageEditor({ slug, onSave }: PageEditorProps) {
  const [page, setPage] = useState<PageContent | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await fetch(`/api/admin/pages?slug=${slug}`)
        if (response.ok) {
          const data = await response.json()
          setPage(data)
        }
      } catch (error) {
        setMessage({ type: "error", text: "Gagal memuat halaman" })
      } finally {
        setIsLoading(false)
      }
    }

    fetchPage()
  }, [slug])

  const handleSave = async () => {
    if (!page) return

    setIsSaving(true)
    try {
      const response = await fetch("/api/admin/pages", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, ...page }),
      })

      if (response.ok) {
        setMessage({ type: "success", text: "Halaman berhasil disimpan" })
        onSave?.()
        setTimeout(() => setMessage(null), 3000)
      } else {
        setMessage({ type: "error", text: "Gagal menyimpan halaman" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Terjadi kesalahan saat menyimpan" })
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader className="h-6 w-6 animate-spin text-primary" />
      </div>
    )
  }

  if (!page) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>Halaman tidak ditemukan</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-6">
      {message && (
        <Alert variant={message.type === "success" ? "default" : "destructive"}>
          {message.type === "success" ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <AlertDescription>{message.text}</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Edit Halaman: {page.title}</CardTitle>
          <CardDescription>Terakhir diperbarui: {new Date(page.updatedAt).toLocaleString("id-ID")}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Judul Halaman</label>
            <Input
              value={page.title}
              onChange={(e) => setPage({ ...page, title: e.target.value })}
              placeholder="Masukkan judul halaman"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Deskripsi Singkat</label>
            <Input
              value={page.description}
              onChange={(e) => setPage({ ...page, description: e.target.value })}
              placeholder="Masukkan deskripsi singkat"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Konten Halaman</label>
            <Textarea
              value={page.content}
              onChange={(e) => setPage({ ...page, content: e.target.value })}
              placeholder="Masukkan konten halaman"
              rows={12}
              className="font-mono text-sm"
            />
            <p className="text-xs text-muted-foreground">
              Anda dapat menggunakan HTML atau Markdown untuk format konten
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">URL Gambar Hero (opsional)</label>
            <Input
              value={page.heroImage || ""}
              onChange={(e) => setPage({ ...page, heroImage: e.target.value })}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button onClick={handleSave} disabled={isSaving} className="gap-2">
              {isSaving ? (
                <>
                  <Loader className="h-4 w-4 animate-spin" />
                  Menyimpan...
                </>
              ) : (
                "Simpan Perubahan"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
