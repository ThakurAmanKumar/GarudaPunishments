import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/hooks/use-language"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Garuda Purana - Understanding the Sacred Teachings",
  description:
    "Educational website exploring the moral and spiritual lessons of the Garuda Purana, focusing on the 28 Narakas and their teachings about karma, ethics, and righteous living.",
  keywords: "Garuda Purana, Hindu scripture, Narakas, karma, spirituality, ethics, moral teachings",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
