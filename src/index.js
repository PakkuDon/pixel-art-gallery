import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import pixelArtEntries from './data'

const extractFilename = path => (
  path.split(/[/.]/g)[1]
)

const App = () => (
  <div>
    <div>
      <ul>
        {pixelArtEntries.map(({ src }) => (
          <li key={src}>{extractFilename(src)}</li>
        ))}
      </ul>
    </div>
  </div>
)

ReactDOM.render(
  <App />,
  document.querySelector('#app'),
)
