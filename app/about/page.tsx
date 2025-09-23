import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Fish, Droplets, Thermometer, Heart, Users, Clock, ArrowRight, Camera } from "lucide-react"

export const metadata = {
  title: "Tentang Angelfish (Pterophyllum scalare) - Panduan Lengkap | AngleFish Indonesia",
  description:
    "Pelajari semua tentang ikan hias angelfish: karakteristik, habitat alami, jenis-jenis, tips perawatan, breeding, dan cara menciptakan akuarium yang ideal.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                <Fish className="w-3 h-3 mr-1" />
                Pterophyllum scalare
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
                Mengenal Angelfish Lebih Dekat
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Angelfish (Pterophyllum scalare) adalah salah satu ikan hias air tawar paling populer di dunia. Dengan
                bentuk tubuh yang unik dan kepribadian yang menarik, angelfish menjadi pilihan favorit para aquarist.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                <Image
                  src="/detailed-close-up-of-angelfish-showing-beautiful-f.jpg"
                  alt="Close-up detail angelfish menunjukkan keindahan sirip dan pola"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="characteristics" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="characteristics">Karakteristik</TabsTrigger>
              <TabsTrigger value="habitat">Habitat</TabsTrigger>
              <TabsTrigger value="types">Jenis-Jenis</TabsTrigger>
              <TabsTrigger value="care">Perawatan</TabsTrigger>
            </TabsList>

            <TabsContent value="characteristics" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <h2 className="text-3xl font-serif font-bold text-foreground">Karakteristik Angelfish</h2>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      Angelfish memiliki tubuh yang pipih dan tinggi dengan sirip punggung dan dubur yang memanjang,
                      memberikan penampilan yang sangat elegan. Bentuk tubuh ini memungkinkan mereka bergerak dengan
                      anggun di antara tanaman akuarium.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Ukuran dewasa angelfish dapat mencapai 15 cm tinggi dan 10 cm panjang. Mereka memiliki mata yang
                      besar dan ekspresif, dengan mulut yang dapat diperpanjang untuk mencari makanan di sela-sela
                      tanaman atau dekorasi.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Fish className="h-5 w-5 text-primary" />
                          Ukuran & Bentuk
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Tinggi: 12-15 cm</li>
                          <li>• Panjang: 8-10 cm</li>
                          <li>• Bentuk: Pipih lateral</li>
                          <li>• Sirip: Memanjang dan lebar</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Heart className="h-5 w-5 text-primary" />
                          Perilaku
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Sosial dan berkelompok</li>
                          <li>• Teritorial saat breeding</li>
                          <li>• Aktif di siang hari</li>
                          <li>• Dapat dilatih mengenali pemilik</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Fakta Menarik</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Umur Panjang</p>
                          <p className="text-xs text-muted-foreground">
                            Dapat hidup 8-12 tahun dengan perawatan yang baik
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Orang Tua yang Baik</p>
                          <p className="text-xs text-muted-foreground">
                            Merawat telur dan burayak dengan sangat hati-hati
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Fish className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Berenang Unik</p>
                          <p className="text-xs text-muted-foreground">Dapat berenang miring dan bahkan terbalik</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="aspect-square relative overflow-hidden rounded-xl">
                    <Image
                      src="/angelfish-pair-swimming-together-in-planted-aquari.jpg"
                      alt="Sepasang angelfish berenang bersama di akuarium berplantasi"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="habitat" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-serif font-bold text-foreground">Habitat Alami</h2>

                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Angelfish berasal dari lembah Sungai Amazon di Amerika Selatan, terutama ditemukan di Brazil,
                      Peru, Kolombia, dan Guyana. Mereka hidup di perairan yang tenang dengan vegetasi lebat.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Di habitat alaminya, angelfish hidup di antara akar dan batang tanaman air yang tinggi, seperti
                      Vallisneria dan Echinodorus. Air di habitat mereka umumnya bersifat lunak dan sedikit asam.
                    </p>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Droplets className="h-5 w-5 text-primary" />
                        Kondisi Air Alami
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">pH</p>
                          <p className="text-xs text-muted-foreground">6.0 - 6.8</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Suhu</p>
                          <p className="text-xs text-muted-foreground">26-28°C</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Kesadahan</p>
                          <p className="text-xs text-muted-foreground">1-5 dGH</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Arus</p>
                          <p className="text-xs text-muted-foreground">Tenang-sedang</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                    <Image
                      src="/amazon-river-underwater-scene-with-aquatic-plants.jpg"
                      alt="Pemandangan bawah air Sungai Amazon dengan tanaman akuatik"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recreating Natural Habitat</CardTitle>
                      <CardDescription>Tips menciptakan habitat alami di akuarium Anda</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Gunakan tanaman tinggi seperti Amazon Sword</li>
                        <li>• Tambahkan driftwood untuk struktur vertikal</li>
                        <li>• Pasir halus atau substrat bernutrisi</li>
                        <li>• Pencahayaan sedang untuk tanaman</li>
                        <li>• Filter yang tidak terlalu kencang</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="types" className="space-y-8">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-serif font-bold text-foreground">Jenis-Jenis Angelfish</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
                    Melalui breeding selektif, angelfish kini hadir dalam berbagai variasi warna dan bentuk sirip yang
                    menawan.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src="/silver-angelfish-with-black-vertical-stripes.jpg"
                        alt="Angelfish Silver dengan garis vertikal hitam klasik"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Silver Angelfish</CardTitle>
                      <CardDescription>
                        Varian klasik dengan tubuh perak dan 4 garis vertikal hitam yang tegas.
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src="/golden-angelfish-shimmering-yellow.jpg"
                        alt="Angelfish Golden berkilau dengan warna emas"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Golden Angelfish</CardTitle>
                      <CardDescription>
                        Warna emas berkilau yang memukau, hasil mutasi genetik yang langka.
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src="/black-angelfish-solid-dark-elegant.jpg"
                        alt="Angelfish Black solid dengan warna hitam elegan"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Black Angelfish</CardTitle>
                      <CardDescription>
                        Warna hitam pekat yang elegan, memberikan kontras dramatis di akuarium.
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src="/marble-angelfish-with-black-white-pattern.jpg"
                        alt="Angelfish Marble dengan pola hitam putih yang unik"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Marble Angelfish</CardTitle>
                      <CardDescription>
                        Pola marmer hitam-putih yang unik, tidak ada dua individu yang sama.
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=250&width=350"
                        alt="Angelfish Koi dengan pola oranye putih seperti ikan koi"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Koi Angelfish</CardTitle>
                      <CardDescription>
                        Kombinasi warna oranye dan putih yang menyerupai pola ikan koi Jepang.
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=250&width=350"
                        alt="Angelfish Leopard dengan pola bintik-bintik seperti macan tutul"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Leopard Angelfish</CardTitle>
                      <CardDescription>
                        Pola bintik-bintik menyerupai macan tutul, sangat eksotis dan menarik.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="care" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <h2 className="text-3xl font-serif font-bold text-foreground">Panduan Perawatan Angelfish</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Droplets className="h-5 w-5 text-primary" />
                          Setup Akuarium
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <p className="font-medium text-sm mb-1">Ukuran Minimum</p>
                          <p className="text-sm text-muted-foreground">200 liter untuk 1 pasang</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm mb-1">Tinggi Akuarium</p>
                          <p className="text-sm text-muted-foreground">Minimal 40 cm untuk sirip panjang</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm mb-1">Filter</p>
                          <p className="text-sm text-muted-foreground">Internal atau canister dengan flow sedang</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Thermometer className="h-5 w-5 text-primary" />
                          Parameter Air
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <p className="font-medium text-sm mb-1">Suhu</p>
                          <p className="text-sm text-muted-foreground">24-28°C (ideal 26°C)</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm mb-1">pH</p>
                          <p className="text-sm text-muted-foreground">6.5-7.0 (sedikit asam-netral)</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm mb-1">Kesadahan</p>
                          <p className="text-sm text-muted-foreground">5-12 dGH (sedang)</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Makanan dan Feeding</CardTitle>
                      <CardDescription>Angelfish adalah omnivora yang membutuhkan diet seimbang</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <p className="font-medium text-sm mb-2">Makanan Utama</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Pellet berkualitas tinggi</li>
                            <li>• Flake khusus angelfish</li>
                            <li>• Frozen bloodworm</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-sm mb-2">Makanan Tambahan</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Artemia brine shrimp</li>
                            <li>• Daphnia</li>
                            <li>• Sayuran blanched</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-sm mb-2">Frekuensi</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• 2-3 kali sehari</li>
                            <li>• Porsi kecil</li>
                            <li>• Habis dalam 2-3 menit</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tips Breeding</CardTitle>
                      <CardDescription>Angelfish adalah salah satu ikan yang mudah di-breeding</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-sm">Kondisi Breeding</p>
                          <p className="text-xs text-muted-foreground">Suhu 28°C, pH 6.5, air bersih</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Tempat Bertelur</p>
                          <p className="text-xs text-muted-foreground">Daun lebar atau slate vertikal</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Masa Inkubasi</p>
                          <p className="text-xs text-muted-foreground">2-3 hari menetas, 5-7 hari free swimming</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Teman Seakuarium</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-sm text-green-600">Cocok</p>
                          <p className="text-xs text-muted-foreground">Discus, Corydoras, Cardinal Tetra, Gourami</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm text-red-600">Hindari</p>
                          <p className="text-xs text-muted-foreground">Tiger Barb, ikan kecil yang bisa dimakan</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="aspect-square relative overflow-hidden rounded-xl">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Indukan angelfish menjaga telur di atas daun"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-foreground text-balance">
              Siap Memulai dengan Angelfish?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Jelajahi galeri foto angelfish kami atau hubungi kami untuk konsultasi lebih lanjut tentang perawatan
              angelfish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/gallery">
                  <Camera className="mr-2 h-4 w-4" />
                  Lihat Galeri
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Konsultasi
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
