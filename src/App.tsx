import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import PixelArtGallery from "./PixelArtGallery"
import Card from "./components/Card"
import "normalize.css"
import "./styles.css"

const App = () => {
  const [prefersDarkTheme, setPrefersDarkTheme] = useState(false)

  useEffect(() => {
    document.body.classList.remove("dark-theme", "light-theme")
    document.body.classList.add(prefersDarkTheme ? "dark-theme" : "light-theme")
  }, [prefersDarkTheme])

  const basename = location.hostname.includes("github")
    ? "pixel-art-gallery"
    : ""
  return (
    <Router basename={basename}>
      <Switch>
        <Route path="/:id?">
          <PixelArtGallery prefersDarkTheme={prefersDarkTheme} />
        </Route>
      </Switch>
      <Card>
        <footer className="footer content">
          <ul>
            <li>
              <label htmlFor="prefers-dark-theme">
                <input
                  type="checkbox"
                  id="prefers-dark-theme"
                  value={prefersDarkTheme.toString()}
                  onChange={() => setPrefersDarkTheme(!prefersDarkTheme)}
                />
                Dark theme?
              </label>
            </li>
            <li>
              <a href="./feed.xml" target="_blank" rel="noopener noreferrer">
                RSS Feed
              </a>
            </li>
            <li>
              Source code on{" "}
              <a
                href="https://github.com/PakkuDon/pixel-art-gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </footer>
      </Card>
    </Router>
  )
}

export default App
