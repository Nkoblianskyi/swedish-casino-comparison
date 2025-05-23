import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SvenskaToppCasinos - Topp 10 Bästa Online Casino i Sverige",
  description: "Jämför de bästa onlinecasinona i Sverige med oberoende recensioner, bonusar och betyg.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv">
      <body className={inter.className}>
          <div className="flex min-h-screen flex-col relative">
            <Header />
            <main className="flex-1 relative">{children}</main>
            <Footer />
          </div>
      </body>
    </html>
  )
}
