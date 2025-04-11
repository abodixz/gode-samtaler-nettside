import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Initialiser Poppins-fonten
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",  // eller flere vekter som ["400", "700"] hvis det er ønskelig
})

export const metadata: Metadata = {
  title: "Gode samtaler | Personlig veiledning og samtaleterapi",
  description: "Finn klarhet og balanse med personlig veiledning og samtaleterapi hos Gode samtaler i Sarpsborg.",
  alternates: {
    canonical: "https://godesamtaler.no/",
  },
  openGraph: {
    title: "Gode samtaler | Personlig veiledning og samtaleterapi",
    description: "Finn klarhet og balanse med personlig veiledning og samtaleterapi hos Gode samtaler i Sarpsborg.",
    url: "https://godesamtaler.no/",
    siteName: "Gode samtaler",
    locale: "no_NO",
    type: "website",
    images: [
      {
        url: "https://godesamtaler.no/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gode samtaler - Personlig veiledning og samtaleterapi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gode samtaler | Personlig veiledning og samtaleterapi",
    description: "Finn klarhet og balanse med personlig veiledning og samtaleterapi hos Gode samtaler i Sarpsborg.",
    images: ["https://godesamtaler.no/twitter-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className="scroll-smooth">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
