import React, { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import PixelArtGallery from "./PixelArtGallery"
import "./styles.css"

const App = () => {
  return (
    <Router basename="./">
      <Switch>
        <Route path="/:id?">
          <PixelArtGallery />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"))
