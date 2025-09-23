"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Search, Filter, Heart, Eye, Camera, Download } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["Semua", "Silver", "Golden", "Black", "Marble", "Koi", "Leopard", "Veil Tail", "Breeding"]

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=400",
    title: "Silver Angelfish Klasik",
    category: "Silver",
    description: "Angelfish silver dengan 4 garis vertikal hitam yang sempurna",
    likes: 124,
    views: 1580,
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=400",
    title: "Golden Beauty",
    category: "Golden",
    description: "Angelfish golden berkilau dengan warna emas yang memukau",
    likes: 156,
    views: 2100,
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=400",
    title: "Black Elegance",
    category: "Black",
    description: "Angelfish hitam dengan pose yang anggun dan elegan",
    likes: 98,
    views: 1320,
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=400",
    title: "Marble Pattern",
    category: "Marble",
    description: "Pola marmer yang unik dan tidak akan pernah sama",
    likes: 187,
    views: 2450,
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=400",
    title: "Koi Angelfish",
    category: "Koi",
    description: "Kombinasi warna oranye dan putih seperti ikan koi",
    likes: 203,
    views: 2890,
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=400",
    title: "Leopard Spots",
    category: "Leopard",
    description: "Pola bintik-bintik eksotis menyerupai macan tutul",
    likes: 142,
    views: 1870,
  },
  {
    id: 7,
    src: "/placeholder.svg?height=400&width=400",
    title: "Veil Tail Wonder",
    category: "Veil Tail",
    description: "Angelfish dengan sirip panjang dan mengalir indah",
    likes: 231,
    views: 3120,
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=400",
    title: "Breeding Pair",
    category: "Breeding",
    description: "Sepasang angelfish dalam perilaku breeding yang natural",
    likes: 176,
    views: 2340,
  },
  {
    id: 9,
    src: "/placeholder.svg?height=400&width=400",
    title: "Juvenile Silver",
    category: "Silver",
    description: "Angelfish muda silver yang sedang berkembang",
    likes: 89,
    views: 1150,
  },
  {
    id: 10,
    src: "/placeholder.svg?height=400&width=400",
    title: "Golden School",
    category: "Golden",
    description: "Kelompok angelfish golden berenang bersama",
    likes: 167,
    views: 2180,
  },
  {
    id: 11,
    src: "/placeholder.svg?height=400&width=400",
    title: "Black Marble Mix",
    category: "Marble",
    description: "Perpaduan pattern hitam dan marble yang menawan",
    likes: 134,
    views: 1690,
  },
  {
    id: 12,
    src: "/placeholder.svg?height=400&width=400",
    title: "Fresh Eggs",
    category: "Breeding",
    description: "Telur angelfish segar di atas daun Amazon Sword",
    likes: 198,
    views: 2560,
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set())

  const filteredImages = galleryImages.filter((image) => {
    const matchesCategory = selectedCategory === "Semua" || image.category === selectedCategory
    const matchesSearch =
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleLike = (imageId: number) => {
    const newLikedImages = new Set(likedImages)
    if (newLikedImages.has(imageId)) {
      newLikedImages.delete(imageId)
    } else {
      newLikedImages.add(imageId)
    }
    setLikedImages(newLikedImages)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Camera className="w-3 h-3 mr-1" />
              {galleryImages.length} Foto Tersedia
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance">
              Galeri Angelfish Indonesia
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Jelajahi koleksi foto angelfish terlengkap dengan berbagai jenis, warna, dan variasi. Temukan inspirasi
              untuk akuarium Anda dan pelajari keragaman keindahan angelfish.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30 sticky top-16 z-40 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari foto angelfish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
              <Filter className="h-4 w-4 text-muted-foreground shrink-0" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <Card
                  key={image.id}
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center space-y-2">
                        <Eye className="h-6 w-6 mx-auto" />
                        <p className="text-sm font-medium">Lihat Detail</p>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <Badge variant="secondary" className="absolute top-3 left-3 backdrop-blur-sm bg-background/90">
                      {image.category}
                    </Badge>
                  </div>

                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground line-clamp-1">{image.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{image.description}</p>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {image.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {image.likes}
                          </span>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleLike(image.id)
                          }}
                          className="p-1 h-auto"
                        >
                          <Heart
                            className={cn(
                              "h-4 w-4 transition-colors",
                              likedImages.has(image.id)
                                ? "fill-red-500 text-red-500"
                                : "text-muted-foreground hover:text-red-500",
                            )}
                          />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Tidak ada foto ditemukan</h3>
              <p className="text-muted-foreground">Coba ubah filter atau kata kunci pencarian Anda.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Detail Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedImage && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  <span>{selectedImage.title}</span>
                  <Badge variant="secondary">{selectedImage.category}</Badge>
                </DialogTitle>
                <DialogDescription>{selectedImage.description}</DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      {selectedImage.views.toLocaleString()} views
                    </span>
                    <span className="flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      {selectedImage.likes} likes
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => toggleLike(selectedImage.id)}>
                      <Heart
                        className={cn(
                          "h-4 w-4 mr-2",
                          likedImages.has(selectedImage.id) ? "fill-red-500 text-red-500" : "text-muted-foreground",
                        )}
                      />
                      {likedImages.has(selectedImage.id) ? "Liked" : "Like"}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
