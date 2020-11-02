import React, { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

import PixelArtGallery from "./PixelArtGallery"
import "./styles.css"

const App = () => {
  return (
    <Router>
      <PixelArtGallery />
    </Router>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"))
