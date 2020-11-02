import React, { useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Link } from "react-router-dom"
import marked from "marked"

import Card from "./components/Card"

import "./styles.css"
import pixelArtEntries from "./data"

marked.setOptions({
  breaks: true,
  gfm: true,
})

const extractFilename = (path) => path.split(/[/.]/g)[0]

const App = () => {
  const [selectedImage, setSelectedImage] = useState(pixelArtEntries[0])

  return (
    <Router>
      <Card>
        <ul>
          {pixelArtEntries.map((entry) => (
            <li key={entry.src} onClick={() => setSelectedImage(entry)}>
              <Link to={`/${extractFilename(entry.src)}`}>
                {extractFilename(entry.src)}
              </Link>
            </li>
          ))}
        </ul>
      </Card>
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
