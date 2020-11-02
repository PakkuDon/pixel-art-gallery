import React, { useState } from "react"
import ReactDOM from "react-dom"
import marked from "marked"

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
    <React.Fragment>
      <div className="card">
        <ul>
          {pixelArtEntries.map((entry) => (
            <li key={entry.src} onClick={() => setSelectedImage(entry)}>
              {extractFilename(entry.src)}
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <img src={`img/${selectedImage.src}`} alt={selectedImage.src} />
        <div>
          <p
            dangerouslySetInnerHTML={{
              __html: marked(selectedImage.description.replace(/ +/g, " ")),
            }}
          />
          <p>{selectedImage.date}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.querySelector("#app"))
