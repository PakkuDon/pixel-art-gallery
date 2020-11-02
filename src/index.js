import React, { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Link } from "react-router-dom"

import Sidebar from "./components/Sidebar"
import ImageDetails from "./components/ImageDetails"

import "./styles.css"
import pixelArtEntries from "./data"

const App = () => {
  const [selectedImage, setSelectedImage] = useState(pixelArtEntries[0])

  return (
    <Router>
      <Sidebar entries={pixelArtEntries} onImageSelect={setSelectedImage} />
      <ImageDetails image={selectedImage} />
    </Router>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"))
