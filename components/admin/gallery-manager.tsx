"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, Loader, Trash2, Edit2, Plus } from "lucide-react"
import type { GalleryImage } from "@/lib/db"

export function GalleryManager() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    category: "silver",
    order: 0,
  })

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    try {
      const response = await fetch("/api/admin/gallery")
      if (response.ok) {
        const data = await response.json()
        setImages(data)
      }
    } catch (error) {
      setMessage({ type: "error", text: "Gagal memuat galeri" })
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddImage = async () => {
    if (!formData.title || !formData.imageUrl) {
      setMessage({ type: "error", text: "Judul dan URL gambar harus diisi" })
      return
    }

    setIsSaving(true)
    try {
      const response = await fetch("/api/admin/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessage({ type: "success", text: "Gambar berhasil ditambahkan" })
        setFormData({ title: "", description: "", imageUrl: "", category: "silver", order: 0 })
        setShowForm(false)
        fetchImages()
      } else {
        setMessage({ type: "error", text: "Gagal menambahkan gambar" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Terjadi kesalahan" })
    } finally {
      setIsSaving(false)
    }
  }

  const handleUpdateImage = async (id: string) => {
    setIsSaving(true)
    try {
      const response = await fetch("/api/admin/gallery", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...formData }),
      })

      if (response.ok) {
        setMessage({ type: "success", text: "Gambar berhasil diperbarui" })
        setEditingId(null)
        setFormData({ title: "", description: "", imageUrl: "", category: "silver", order: 0 })
        fetchImages()
      } else {
        setMessage({ type: "error", text: "Gagal memperbarui gambar" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Terjadi kesalahan" })
    } finally {
      setIsSaving(false)
    }
  }

  const handleDeleteImage = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus gambar ini?")) return

    try {
      const response = await fetch("/api/admin/gallery", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      })

      if (response.ok) {
        setMessage({ type: "success", text: "Gambar berhasil dihapus" })
        fetchImages()
      } else {
        setMessage({ type: "error", text: "Gagal menghapus gambar" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Terjadi kesalahan" })
    }
  }

  const handleEditImage = (image: GalleryImage) => {
    setFormData({
      title: image.title,
      description: image.description,
      imageUrl: image.imageUrl,
      category: image.category,
      order: image.order,
    })
    setEditingId(image.id)
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingId(null)
    setFormData({ title: "", description: "", imageUrl: "", category: "silver", order: 0 })
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader className="h-6 w-6 animate-spin text-primary" />
      </div>
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

      {/* Add/Edit Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Edit Gambar" : "Tambah Gambar Baru"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Judul Gambar</label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Contoh: Angelfish Silver"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Deskripsi</label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Deskripsi gambar"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">URL Gambar</label>
              <Input
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Kategori</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="silver">Silver</option>
                  <option value="gold">Gold</option>
                  <option value="black">Black</option>
                  <option value="marble">Marble</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Urutan</label>
                <Input
                  type="number"
                  value={formData.order}
                  onChange={(e) => setFormData({ ...formData, order: Number.parseInt(e.target.value) })}
                  placeholder="0"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button onClick={() => (editingId ? handleUpdateImage(editingId) : handleAddImage())} disabled={isSaving}>
                {isSaving ? "Menyimpan..." : editingId ? "Perbarui" : "Tambah"}
              </Button>
              <Button variant="outline" onClick={handleCancel} disabled={isSaving}>
                Batal
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add Button */}
      {!showForm && (
        <Button onClick={() => setShowForm(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Tambah Gambar
        </Button>
      )}

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <Card key={image.id} className="overflow-hidden">
            <div className="relative aspect-square bg-muted">
              <Image
                src={image.imageUrl || "/placeholder.svg"}
                alt={image.title}
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.src = "/angelfish.jpg"
                }}
              />
            </div>
            <CardContent className="pt-4 space-y-2">
              <div>
                <h3 className="font-semibold text-sm">{image.title}</h3>
                <p className="text-xs text-muted-foreground">{image.category}</p>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">{image.description}</p>
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" onClick={() => handleEditImage(image)} className="flex-1 gap-2">
                  <Edit2 className="h-3 w-3" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDeleteImage(image.id)}
                  className="flex-1 gap-2"
                >
                  <Trash2 className="h-3 w-3" />
                  Hapus
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {images.length === 0 && !showForm && (
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground mb-4">Belum ada gambar di galeri</p>
            <Button onClick={() => setShowForm(true)}>Tambah Gambar Pertama</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
