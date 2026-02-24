import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { cookies } from "next/headers"
import { PasswordGate } from "@/components/password-gate"
import "./globals.css"

const _cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "30th Anniversary Trip | Paris & Burgundy 2026",
  description: "Celebrating 30 years of love and friendship in the heart of France",
    generator: 'v0.app'
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const isUnlocked = cookieStore.get("site-unlocked")?.value === "true"

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <PasswordGate isUnlocked={isUnlocked}>
          {children}
        </PasswordGate>
        <Analytics />
      </body>
    </html>
  )
}
