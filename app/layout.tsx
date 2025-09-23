import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Suspense } from "react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AngleFish Indonesia - Ikan Hias Angelfish (Pterophyllum scalare)",
  description:
    "Pusat informasi terlengkap tentang ikan hias Angelfish di Indonesia. Panduan perawatan, jenis-jenis angelfish, tips breeding, dan galeri foto ikan angelfish yang indah.",
  keywords:
    "angelfish, ikan hias, pterophyllum scalare, aquarium, ikan air tawar, breeding angelfish, perawatan ikan, indonesia",
  authors: [{ name: "AngleFish Indonesia" }],
  creator: "AngleFish Indonesia",
  publisher: "AngleFish Indonesia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://anglefish-indonesia.vercel.app",
    siteName: "AngleFish Indonesia",
    title: "AngleFish Indonesia - Ikan Hias Angelfish Terlengkap",
    description:
      "Pusat informasi terlengkap tentang ikan hias Angelfish di Indonesia. Panduan perawatan, jenis-jenis angelfish, tips breeding, dan galeri foto.",
    images: [
      {
        url: "/elegant-angelfish-swimming-in-aquarium.jpg",
        width: 1200,
        height: 630,
        alt: "AngleFish Indonesia - Ikan Hias Angelfish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AngleFish Indonesia - Ikan Hias Angelfish Terlengkap",
    description: "Pusat informasi terlengkap tentang ikan hias Angelfish di Indonesia.",
    images: ["/beautiful-angelfish-in-natural-aquarium.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://anglefish-indonesia.vercel.app",
  },
    generator: 'v0.app'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Website",
  name: "AngleFish Indonesia",
  description: "Pusat informasi terlengkap tentang ikan hias Angelfish di Indonesia",
  url: "https://anglefish-indonesia.vercel.app",
  publisher: {
    "@type": "Organization",
    name: "AngleFish Indonesia",
  },
  mainEntity: {
    "@type": "Article",
    headline: "Panduan Lengkap Ikan Hias Angelfish (Pterophyllum scalare)",
    description: "Informasi lengkap tentang perawatan, breeding, dan jenis-jenis ikan angelfish",
    author: {
      "@type": "Organization",
      name: "AngleFish Indonesia",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
