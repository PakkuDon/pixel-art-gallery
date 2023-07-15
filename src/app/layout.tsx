import React, { Suspense } from "react"
import { Noto_Sans } from "next/font/google"

import "normalize.css"
import { PixelArtRepository } from "../PixelArtRepository"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { Card } from "../components/Card/Card"
import { Footer } from "../components/Footer/Footer"
import "./styles.css"

PixelArtRepository.load()

const notoSans = Noto_Sans({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
})

const SidebarPlaceholder = () => <Card>Loading...</Card>

interface LayoutProps {
  children: React.ReactNode
}
const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Pixel art by PakkuDon." />
        <meta property="og:description" content="Pixel art by PakkuDon." />
        <meta name="twitter:card" content="summary" />
        <title>Pixel Art Gallery</title>
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
}

export default RootLayout
