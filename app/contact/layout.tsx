import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hubungi Kami - AngleFish Indonesia | Konsultasi Angelfish Expert",
  description:
    "Hubungi tim expert AngleFish Indonesia untuk konsultasi perawatan angelfish, breeding tips, atau pertanyaan seputar akuarium. Kami siap membantu Anda.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
