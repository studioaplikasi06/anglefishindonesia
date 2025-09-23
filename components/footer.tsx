import Link from "next/link"
import { Fish, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary/10 rounded-full">
                <Fish className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-foreground">AngleFish Indonesia</h3>
                <p className="text-xs text-muted-foreground">Pterophyllum scalare</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pusat informasi terlengkap tentang ikan hias Angelfish di Indonesia. Panduan perawatan, breeding, dan tips
              untuk aquarium yang sehat.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Menu Utama</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Beranda
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tentang Angelfish
              </Link>
              <Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Galeri
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Kontak Kami
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Panduan</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/sitemap.xml" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sitemap XML
              </Link>
              <Link href="/robots.txt" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Robots.txt
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Panduan Perawatan
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tips Breeding
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">info@anglefish-indonesia.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Jakarta, Indonesia</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-3 pt-2">
              <Link href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                <Facebook className="h-4 w-4 text-primary" />
              </Link>
              <Link href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                <Instagram className="h-4 w-4 text-primary" />
              </Link>
              <Link href="#" className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
                <Youtube className="h-4 w-4 text-primary" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-muted-foreground">© 2025 AngleFish Indonesia. Semua hak dilindungi.</p>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
