"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { toast } from "@/hooks/use-toast"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Fish,
  Facebook,
  Instagram,
  Youtube,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import type { ContactInfo } from "@/lib/db"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null)
  const [isLoadingContact, setIsLoadingContact] = useState(true)

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch("/api/admin/contact")
        if (response.ok) {
          const data = await response.json()
          setContactInfo(data)
        }
      } catch (error) {
        console.error("[v0] Failed to fetch contact info:", error)
      } finally {
        setIsLoadingContact(false)
      }
    }

    fetchContactInfo()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Pesan terkirim!",
          description: result.message || "Terima kasih atas pesan Anda. Kami akan merespons dalam 24 jam.",
        })

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        toast({
          title: "Gagal mengirim pesan",
          description: result.error || "Terjadi kesalahan saat mengirim pesan",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("[v0] Contact form error:", error)
      toast({
        title: "Gagal mengirim pesan",
        description: "Terjadi kesalahan saat mengirim pesan",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="w-fit mx-auto">
              <MessageCircle className="w-3 h-3 mr-1" />
              Konsultasi Gratis
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
              Hubungi Kami
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Tim expert AngleFish Indonesia siap membantu Anda dengan pertanyaan seputar perawatan angelfish, breeding,
              setup akuarium, dan konsultasi lainnya.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Fish className="h-5 w-5 text-primary" />
                    Kirim Pesan
                  </CardTitle>
                  <CardDescription>Isi form di bawah ini dan kami akan menghubungi Anda dalam 24 jam.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nama Lengkap *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Masukkan nama lengkap Anda"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="nama@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Nomor Telepon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+62 812-3456-7890"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subjek *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Konsultasi perawatan angelfish"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Pesan *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Ceritakan pertanyaan atau kendala Anda terkait angelfish..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 mr-2 border-b-2 border-white"></div>
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Kirim Pesan
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Informasi Kontak</CardTitle>
                  <CardDescription>Hubungi kami melalui berbagai channel</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {isLoadingContact ? (
                    <div className="flex items-center justify-center py-8">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                    </div>
                  ) : contactInfo ? (
                    <>
                      {contactInfo.socialMedia?.whatsapp && (
                        <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                          <MessageCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                          <div className="flex-1">
                            <p className="font-medium text-sm text-green-900 dark:text-green-100">WhatsApp</p>
                            <p className="text-xs text-green-700 dark:text-green-300 mb-2">
                              Chat langsung dengan expert kami
                            </p>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                              <a href={contactInfo.socialMedia.whatsapp} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="h-4 w-4 mr-2" />
                                Hubungi via WhatsApp
                              </a>
                            </Button>
                          </div>
                        </div>
                      )}

                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Email</p>
                          <a href={`mailto:${contactInfo.email}`} className="text-sm text-primary hover:underline">
                            {contactInfo.email}
                          </a>
                          <p className="text-xs text-muted-foreground">Respons dalam 24 jam</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Telepon</p>
                          <a href={`tel:${contactInfo.phone}`} className="text-sm text-primary hover:underline">
                            {contactInfo.phone}
                          </a>
                          <p className="text-xs text-muted-foreground">Hubungi langsung</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Lokasi</p>
                          <p className="text-sm text-muted-foreground">{contactInfo.address}</p>
                          <p className="text-xs text-muted-foreground">Kunjungan by appointment</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Jam Operasional</p>
                          <p className="text-sm text-muted-foreground">Senin - Jumat: 09.00 - 18.00</p>
                          <p className="text-sm text-muted-foreground">Sabtu: 09.00 - 15.00</p>
                          <p className="text-xs text-muted-foreground">Minggu: Tutup</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>Gagal memuat informasi kontak</AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>

              {/* Social Media */}
              {contactInfo && (
                <Card>
                  <CardHeader>
                    <CardTitle>Follow Kami</CardTitle>
                    <CardDescription>Update terbaru dan tips angelfish</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3 flex-wrap">
                      {contactInfo.socialMedia?.whatsapp && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={contactInfo.socialMedia.whatsapp} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            WhatsApp
                          </a>
                        </Button>
                      )}
                      {contactInfo.socialMedia?.facebook && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={contactInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                            <Facebook className="h-4 w-4 mr-2" />
                            Facebook
                          </a>
                        </Button>
                      )}
                      {contactInfo.socialMedia?.instagram && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={contactInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                            <Instagram className="h-4 w-4 mr-2" />
                            Instagram
                          </a>
                        </Button>
                      )}
                      {contactInfo.socialMedia?.youtube && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={contactInfo.socialMedia.youtube} target="_blank" rel="noopener noreferrer">
                            <Youtube className="h-4 w-4 mr-2" />
                            YouTube
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* FAQ Quick */}
              <Card>
                <CardHeader>
                  <CardTitle>Pertanyaan Umum</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium text-sm flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Konsultasi gratis?
                    </p>
                    <p className="text-xs text-muted-foreground pl-6">
                      Ya, konsultasi dasar melalui email dan chat gratis.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-medium text-sm flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Berapa lama respons?
                    </p>
                    <p className="text-xs text-muted-foreground pl-6">Kami merespons dalam 24 jam di hari kerja.</p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-medium text-sm flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Bisa kunjungan langsung?
                    </p>
                    <p className="text-xs text-muted-foreground pl-6">Ya, dengan appointment terlebih dahulu.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-foreground text-balance">
              Bergabung dengan Komunitas Angelfish
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Dapatkan tips exclusive, panduan terbaru, dan berbagi pengalaman dengan sesama pecinta angelfish di
              Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <MessageCircle className="mr-2 h-4 w-4" />
                Join WhatsApp Group
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
