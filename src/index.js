import React, { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import PixelArtGallery from "./PixelArtGallery"
import Card from "./components/Card"
import "normalize.css"
import "./styles.css"

const App = () => {
  const basename = location.hostname.includes("github")
    ? "pixel-art-gallery"
    : ""
  return (
    <Router basename={basename}>
      <Switch>
        <Route path="/:id?">
          <PixelArtGallery />
        </Route>
      </Switch>
      <Card>
        <footer className="footer">
          Source code on{" "}
          <a
            href="https://github.com/PakkuDon/pixel-art-gallery"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </Card>
    </Router>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"))
