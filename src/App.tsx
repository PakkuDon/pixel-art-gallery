import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js"
import autocolors from "chartjs-plugin-autocolors"

import { PixelArtRepository } from "./PixelArtRepository"
import { PixelArtGallery } from "./PixelArtGallery"
import { Card } from "./components/Card/Card"
import { Footer } from "./components/Footer/Footer"
import "normalize.css"
import "./styles.css"

PixelArtRepository.load()
ChartJS.register(autocolors, CategoryScale, LinearScale, BarElement, Tooltip)

const App = () => {
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

  // eslint-disable-next-line no-restricted-globals
  const basename = location.hostname.includes("github")
    ? "pixel-art-gallery"
    : ""
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/:id?" element={<PixelArtGallery />} />
      </Routes>
      <Card>
        <Footer
          prefersDarkTheme={prefersDarkTheme}
          onDarkThemeToggle={() => setPrefersDarkTheme(!prefersDarkTheme)}
        />
      </Card>
    </Router>
  )
}

export { App }
