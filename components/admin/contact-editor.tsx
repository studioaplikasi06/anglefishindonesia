"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, Loader, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react"
import type { ContactInfo } from "@/lib/db"

export function ContactEditor() {
  const [contact, setContact] = useState<ContactInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch("/api/admin/contact")
        if (response.ok) {
          const data = await response.json()
          setContact(data)
        }
      } catch (error) {
        setMessage({ type: "error", text: "Gagal memuat informasi kontak" })
      } finally {
        setIsLoading(false)
      }
    }

    fetchContact()
  }, [])

  const handleSave = async () => {
    if (!contact) return

    setIsSaving(true)
    try {
      const response = await fetch("/api/admin/contact", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      })

      if (response.ok) {
        setMessage({ type: "success", text: "Informasi kontak berhasil disimpan" })
        setTimeout(() => setMessage(null), 3000)
      } else {
        setMessage({ type: "error", text: "Gagal menyimpan informasi kontak" })
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

  if (!contact) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>Gagal memuat informasi kontak</AlertDescription>
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
          <CardTitle>Informasi Kontak</CardTitle>
          <CardDescription>Update data kontak dan media sosial</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </label>
            <Input
              type="email"
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
              placeholder="info@anglefish-indonesia.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Nomor Telepon
            </label>
            <Input
              value={contact.phone}
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
              placeholder="+62 812-3456-7890"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Alamat
            </label>
            <Input
              value={contact.address}
              onChange={(e) => setContact({ ...contact, address: e.target.value })}
              placeholder="Jakarta, Indonesia"
            />
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-4">Media Sosial</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Instagram className="h-4 w-4" />
                  Instagram
                </label>
                <Input
                  value={contact.socialMedia?.instagram || ""}
                  onChange={(e) =>
                    setContact({
                      ...contact,
                      socialMedia: { ...contact.socialMedia, instagram: e.target.value },
                    })
                  }
                  placeholder="https://instagram.com/anglefish-indonesia"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Facebook className="h-4 w-4" />
                  Facebook
                </label>
                <Input
                  value={contact.socialMedia?.facebook || ""}
                  onChange={(e) =>
                    setContact({
                      ...contact,
                      socialMedia: { ...contact.socialMedia, facebook: e.target.value },
                    })
                  }
                  placeholder="https://facebook.com/anglefish-indonesia"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Youtube className="h-4 w-4" />
                  YouTube
                </label>
                <Input
                  value={contact.socialMedia?.youtube || ""}
                  onChange={(e) =>
                    setContact({
                      ...contact,
                      socialMedia: { ...contact.socialMedia, youtube: e.target.value },
                    })
                  }
                  placeholder="https://youtube.com/@anglefish-indonesia"
                />
              </div>
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
                "Simpan Informasi Kontak"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
