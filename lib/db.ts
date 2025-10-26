// Simple in-memory database for CMS content
// In production, replace with actual database (Supabase, Neon, etc.)

export interface PageContent {
  id: string
  slug: string
  title: string
  description: string
  content: string
  heroImage?: string
  updatedAt: string
}

export interface GalleryImage {
  id: string
  title: string
  description: string
  imageUrl: string
  category: string
  order: number
  createdAt: string
}

export interface ContactInfo {
  id: string
  email: string
  phone: string
  address: string
  socialMedia: {
    instagram?: string
    facebook?: string
    youtube?: string
    whatsapp?: string
  }
  updatedAt: string
}

export interface SeoSettings {
  id: string
  pageSlug: string
  title: string
  description: string
  keywords: string
  ogImage?: string
  updatedAt: string
}

// In-memory storage (replace with database in production)
const pages: PageContent[] = [
  {
    id: "1",
    slug: "home",
    title: "Keindahan Angelfish di Akuarium Anda",
    description: "Temukan pesona ikan hias angelfish yang elegan dan anggun",
    content: "Angelfish adalah pilihan sempurna untuk aquarist pemula maupun berpengalaman.",
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    slug: "about",
    title: "Tentang Angelfish",
    description: "Panduan lengkap tentang ikan hias Angelfish",
    content: "Angelfish (Pterophyllum scalare) adalah ikan air tawar yang berasal dari Amerika Selatan.",
    updatedAt: new Date().toISOString(),
  },
]

let galleryImages: GalleryImage[] = []
let contactInfo: ContactInfo = {
  id: "1",
  email: "info@anglefish-indonesia.com",
  phone: "+62 812-3456-7890",
  address: "Jakarta, Indonesia",
  socialMedia: {
    instagram: "https://instagram.com/anglefish-indonesia",
    facebook: "https://facebook.com/anglefish-indonesia",
    whatsapp: "https://wa.me/6281234567890",
  },
  updatedAt: new Date().toISOString(),
}

const seoSettings: SeoSettings[] = []

// Page operations
export const getPages = () => pages
export const getPageBySlug = (slug: string) => pages.find((p) => p.slug === slug)
export const updatePage = (slug: string, data: Partial<PageContent>) => {
  const index = pages.findIndex((p) => p.slug === slug)
  if (index !== -1) {
    pages[index] = { ...pages[index], ...data, updatedAt: new Date().toISOString() }
    return pages[index]
  }
  return null
}

// Gallery operations
export const getGalleryImages = () => galleryImages.sort((a, b) => a.order - b.order)
export const addGalleryImage = (image: Omit<GalleryImage, "id" | "createdAt">) => {
  const newImage: GalleryImage = {
    ...image,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  }
  galleryImages.push(newImage)
  return newImage
}
export const updateGalleryImage = (id: string, data: Partial<GalleryImage>) => {
  const index = galleryImages.findIndex((img) => img.id === id)
  if (index !== -1) {
    galleryImages[index] = { ...galleryImages[index], ...data }
    return galleryImages[index]
  }
  return null
}
export const deleteGalleryImage = (id: string) => {
  galleryImages = galleryImages.filter((img) => img.id !== id)
}

// Contact operations
export const getContactInfo = () => contactInfo
export const updateContactInfo = (data: Partial<ContactInfo>) => {
  contactInfo = { ...contactInfo, ...data, updatedAt: new Date().toISOString() }
  return contactInfo
}

// SEO operations
export const getSeoSettings = () => seoSettings
export const getSeoBySlug = (slug: string) => seoSettings.find((s) => s.pageSlug === slug)
export const updateSeoSettings = (slug: string, data: Partial<SeoSettings>) => {
  const index = seoSettings.findIndex((s) => s.pageSlug === slug)
  if (index !== -1) {
    seoSettings[index] = { ...seoSettings[index], ...data, updatedAt: new Date().toISOString() }
    return seoSettings[index]
  } else {
    const newSeo: SeoSettings = {
      id: Date.now().toString(),
      pageSlug: slug,
      title: "",
      description: "",
      keywords: "",
      updatedAt: new Date().toISOString(),
      ...data,
    }
    seoSettings.push(newSeo)
    return newSeo
  }
}
