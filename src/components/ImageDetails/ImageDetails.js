import React, { useState } from "react"
import marked from "marked"

import Card from "../Card"
import "./ImageDetails.css"

marked.setOptions({
  breaks: true,
  gfm: true,
})

const ImageDetails = ({ image }) => {
  const [zoom, setZoom] = useState(100)

  return (
    <Card>
      <div className="image-details">
        <div className="image-viewer scrollable-content">
          <img
            src={`img/${image.src}`}
            alt={image.src}
            className="pixelArt"
            style={{ transform: `scale(${zoom / 100})` }}
          />
        </div>
        <div className="image-metadata">
          <label>
            Zoom
            <input
              type="range"
              value={zoom}
              min="100"
              max="500"
              step="5"
              onChange={(event) => setZoom(event.target.value)}
            />
          </label>
          <output>{zoom}%</output>
          <div
            className="description scrollable-content"
            dangerouslySetInnerHTML={{
              __html: marked(image.description.replace(/ +/g, " ")),
            }}
          />
          <div>
            Tags:
            {image.tags.join(", ")}
          </div>
          <p>
            - Posted
            {image.date}
          </p>
        </div>
      </div>
    </Card>
  )
}

export default ImageDetails
