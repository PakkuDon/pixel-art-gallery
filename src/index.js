import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'

import './styles.css'
import pixelArtEntries from './data'

marked.setOptions({
  breaks: true,
  gfm: true,
})

const extractFilename = path => (
  path.split(/[/.]/g)[1]
)

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <React.Fragment>
      <div className="card">
        <ul>
          {pixelArtEntries.map((entry) => (
            <li key={entry.src} onClick={() => setSelectedImage(entry)}>{extractFilename(entry.src)}</li>
          ))}
        </ul>
      </div>
      <div className="card">
        <img src={selectedImage && selectedImage.src} alt={selectedImage && selectedImage.src} />
        <div>
          <p dangerouslySetInnerHTML={{ __html: selectedImage && marked(selectedImage.description.replace(/ +/g, ' '))}} />
          <p>{selectedImage && selectedImage.date}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#app'),
)
