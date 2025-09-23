import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galeri Foto Angelfish - Koleksi Terlengkap | AngleFish Indonesia",
  description:
    "Jelajahi galeri foto angelfish terlengkap dengan berbagai jenis, warna, dan variasi. Foto berkualitas tinggi untuk referensi dan inspirasi aquascape.",
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
