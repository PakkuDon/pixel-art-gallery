"use client"
import React, { useEffect, useState } from "react"
import "normalize.css"

import { PixelArtRepository } from "../PixelArtRepository"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { Card } from "../components/Card/Card"
import { Footer } from "../components/Footer/Footer"
import "./styles.css"

PixelArtRepository.load()

interface LayoutProps {
  children: React.ReactNode
}
const RootLayout = ({ children }: LayoutProps) => {
  const [prefersDarkTheme, setPrefersDarkTheme] = useState(false)

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setPrefersDarkTheme(true)
    }
  }, [])

  useEffect(() => {
    document.body.classList.remove("dark-theme", "light-theme")
    document.body.classList.add(prefersDarkTheme ? "dark-theme" : "light-theme")
  }, [prefersDarkTheme])

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Pixel art by PakkuDon." />
        <meta property="og:description" content="Pixel art by PakkuDon." />
        <meta name="twitter:card" content="summary" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
          rel="stylesheet"
        />
        <title>Pixel Art Gallery</title>
      </head>
      <body>
        <div id="app">
          <div className="sidebar-layout">
            <Sidebar />
            {children}
          </div>
          <Card>
            <Footer
              prefersDarkTheme={prefersDarkTheme}
              onDarkThemeToggle={() => setPrefersDarkTheme(!prefersDarkTheme)}
            />
          </Card>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
