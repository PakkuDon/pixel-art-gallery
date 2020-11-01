import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import pixelArtEntries from './data'

const extractFilename = path => (
  path.split(/[/.]/g)[1]
)

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div>
      <div>
        <ul>
          {pixelArtEntries.map((entry) => (
            <li key={entry.src} onClick={() => setSelectedImage(entry)}>{extractFilename(entry.src)}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#app'),
)
