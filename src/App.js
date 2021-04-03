import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import PixelArtGallery from "./PixelArtGallery"
import Card from "./components/Card"
import "normalize.css"
import "./styles.css"

const App = () => {
  const basename =
    process.env.NODE_ENV === "production" ? "pixel-art-gallery" : ""
  return (
    <Router basename={basename}>
      <Switch>
        <Route path="/:id?">
          <PixelArtGallery />
        </Route>
      </Switch>
      <Card>
        <footer className="footer content">
          <ul>
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
