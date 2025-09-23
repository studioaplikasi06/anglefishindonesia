import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Droplets, Thermometer, Fish, Star, Camera, BookOpen } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 bg-[url('/underwater-scene-with-aquatic-plants.jpg')] bg-cover bg-center opacity-10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Fish className="w-3 h-3 mr-1" />
                  Pterophyllum scalare
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground leading-tight text-balance">
                  Keindahan {""}
                  <span className="text-primary">Angelfish</span> {""}
                  di Akuarium Anda
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Temukan pesona ikan hias angelfish (Pterophyllum scalare) yang elegan dan anggun. Panduan lengkap
                  perawatan, breeding, dan tips menciptakan habitat yang sempurna untuk angelfish kesayangan Anda.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="/about">
                    Pelajari Angelfish
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/gallery">
                    <Camera className="mr-2 h-4 w-4" />
                    Lihat Galeri
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <Image
                  src="/beautiful-angelfish-swimming-gracefully-in-aquariu.jpg"
                  alt="Angelfish (Pterophyllum scalare) berenang dengan anggun"
                  fill
                  className="object-cover rounded-2xl animate-float"
                  priority
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-sm font-medium">Favorit Aquarist</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-accent fill-current" />
                  <span className="text-sm font-medium">Ikan Hias Terpopuler</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Mengapa Memilih Angelfish?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Angelfish adalah pilihan sempurna untuk aquarist pemula maupun berpengalaman. Berikut alasan mengapa
              angelfish begitu istimewa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Fish className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Bentuk yang Elegan</CardTitle>
                <CardDescription>
                  Bentuk tubuh gepeng dengan sirip yang panjang dan anggun membuat angelfish menjadi centerpiece yang
                  memukau di akuarium.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Mudah Dirawat</CardTitle>
                <CardDescription>
                  Angelfish relatif mudah dirawat dan cocok untuk pemula. Mereka dapat beradaptasi dengan berbagai
                  kondisi air dalam akuarium komunitas.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Thermometer className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Adaptif Suhu</CardTitle>
                <CardDescription>
                  Dapat hidup dalam kisaran suhu 24-28°C, membuat angelfish fleksibel untuk berbagai setup akuarium
                  tropis.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Galeri Angelfish</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Jelajahi keragaman warna dan jenis angelfish yang menawan dari koleksi foto terbaik kami.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="aspect-square relative overflow-hidden rounded-xl group">
              <Image
                src="/silver-angelfish-with-black-stripes.jpg"
                alt="Angelfish Silver dengan garis hitam klasik"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-xl group">
              <Image
                src="/gold-angelfish-shimmering.jpg"
                alt="Angelfish Golden yang berkilau"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-xl group">
              <Image
                src="/black-angelfish-elegant.jpg"
                alt="Angelfish Black yang elegan"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-xl group">
              <Image
                src="/marble-angelfish-pattern.jpg"
                alt="Angelfish Marble dengan pola unik"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/gallery">
                <Camera className="mr-2 h-4 w-4" />
                Lihat Semua Foto
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground text-balance">
              Mulai Perjalanan Angelfish Anda
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Pelajari lebih lanjut tentang perawatan, breeding, dan tips terbaik untuk menciptakan habitat yang
              sempurna bagi angelfish kesayangan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/about">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Panduan Lengkap
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
