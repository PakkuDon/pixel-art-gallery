import React, { Suspense } from "react"
import { Metadata } from "next"
import { Noto_Sans as NotoSans } from "next/font/google"

import "normalize.css"
import { PixelArtRepository } from "../PixelArtRepository"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { Card } from "../components/Card/Card"
import { Footer } from "../components/Footer/Footer"
import "./styles.css"

PixelArtRepository.load()

const notoSans = NotoSans({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
})

const SidebarPlaceholder = () => <Card>Loading...</Card>

export const metadata: Metadata = {
  title: {
    default: "Pixel Art Gallery",
    template: "%s - Pixel Art Gallery",
  },
  metadataBase: new URL("https://pakkudon.github.io/pixel-art-gallery"),
  openGraph: {
    siteName: "Pixel Art Gallery | PakkuDon",
  },
}

interface LayoutProps {
  children: React.ReactNode
}
const RootLayout = ({ children }: LayoutProps) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
    </head>
    <body className={notoSans.className}>
      <div id="app">
        <div className="sidebar-layout">
          <Suspense fallback={<SidebarPlaceholder />}>
            <Sidebar />
          </Suspense>
          {children}
        </div>
        <Card>
          <Footer />
        </Card>
      </div>
    </body>
  </html>
)

export default RootLayout
