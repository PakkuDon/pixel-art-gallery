import React, { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Link } from "react-router-dom"
import marked from "marked"

import Card from "./components/Card"
import Sidebar from "./components/Sidebar"

import "./styles.css"
import pixelArtEntries from "./data"

marked.setOptions({
  breaks: true,
  gfm: true,
})

const App = () => {
  const [selectedImage, setSelectedImage] = useState(pixelArtEntries[0])

  return (
    <Router>
      <Sidebar entries={pixelArtEntries} onImageSelect={setSelectedImage} />
      <Card>
        <img src={`img/${selectedImage.src}`} alt={selectedImage.src} />
        <div>
          <p
            dangerouslySetInnerHTML={{
              __html: marked(selectedImage.description.replace(/ +/g, " ")),
            }}
          />
          <p>{selectedImage.date}</p>
        </div>
      </Card>
    </Router>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"))
