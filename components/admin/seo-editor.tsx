"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, Loader } from "lucide-react"
import type { SeoSettings } from "@/lib/db"

interface SeoEditorProps {
  slug: string
  onSave?: () => void
}

export function SeoEditor({ slug, onSave }: SeoEditorProps) {
  const [seo, setSeo] = useState<SeoSettings | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  useEffect(() => {
    const fetchSeo = async () => {
      try {
        const response = await fetch(`/api/admin/seo?slug=${slug}`)
        if (response.ok) {
          const data = await response.json()
          setSeo(
            data || {
              id: "",
              pageSlug: slug,
              title: "",
              description: "",
              keywords: "",
              ogImage: "",
              updatedAt: new Date().toISOString(),
            },
          )
        }
      } catch (error) {
        setMessage({ type: "error", text: "Gagal memuat SEO settings" })
      } finally {
        setIsLoading(false)
      }
    }

    fetchSeo()
  }, [slug])

  const handleSave = async () => {
    if (!seo) return

    setIsSaving(true)
    try {
      const response = await fetch("/api/admin/seo", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, ...seo }),
      })

      if (response.ok) {
        setMessage({ type: "success", text: "SEO settings berhasil disimpan" })
        onSave?.()
        setTimeout(() => setMessage(null), 3000)
      } else {
        setMessage({ type: "error", text: "Gagal menyimpan SEO settings" })
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

  if (!seo) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>Gagal memuat SEO settings</AlertDescription>
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
          <CardTitle>SEO Settings: {slug}</CardTitle>
          <CardDescription>Kelola metadata dan SEO untuk halaman ini</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Meta Title</label>
            <Input
              value={seo.title}
              onChange={(e) => setSeo({ ...seo, title: e.target.value })}
              placeholder="Judul untuk search engine (50-60 karakter)"
              maxLength={60}
            />
            <p className="text-xs text-muted-foreground">{seo.title.length}/60 karakter</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Meta Description</label>
            <Textarea
              value={seo.description}
              onChange={(e) => setSeo({ ...seo, description: e.target.value })}
              placeholder="Deskripsi untuk search engine (150-160 karakter)"
              rows={3}
              maxLength={160}
            />
            <p className="text-xs text-muted-foreground">{seo.description.length}/160 karakter</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Keywords</label>
            <Textarea
              value={seo.keywords}
              onChange={(e) => setSeo({ ...seo, keywords: e.target.value })}
              placeholder="Kata kunci (pisahkan dengan koma)"
              rows={3}
            />
            <p className="text-xs text-muted-foreground">Contoh: angelfish, ikan hias, pterophyllum scalare</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">OG Image URL (untuk social media)</label>
            <Input
              value={seo.ogImage || ""}
              onChange={(e) => setSeo({ ...seo, ogImage: e.target.value })}
              placeholder="https://example.com/og-image.jpg"
            />
            <p className="text-xs text-muted-foreground">Ukuran rekomendasi: 1200x630px</p>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg space-y-2">
            <h4 className="font-semibold text-sm">Preview Search Result</h4>
            <div className="space-y-1">
              <p className="text-blue-600 text-sm font-semibold">{seo.title || "Judul halaman"}</p>
              <p className="text-green-700 text-xs">anglefish-indonesia.vercel.app › {slug}</p>
              <p className="text-gray-700 text-sm">{seo.description || "Deskripsi halaman akan muncul di sini"}</p>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button onClick={handleSave} disabled={isSaving} className="gap-2">
              {isSaving ? (
                <>
                  <Loader className="h-4 w-4 animate-spin" />
                  Menyimpan...
                </>
              ) : (
                "Simpan SEO Settings"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
