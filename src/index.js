import React, { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import PixelArtGallery from "./PixelArtGallery"
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
    </Router>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"))
