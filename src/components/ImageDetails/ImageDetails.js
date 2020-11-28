import React from "react"
import marked from "marked"

import Card from "../Card"
import "./ImageDetails.css"

marked.setOptions({
  breaks: true,
  gfm: true,
})

const ImageDetails = ({ image }) => (
  <Card>
    <div className="image-details">
      <div className="image-viewer scrollable-content">
        <img src={`img/${image.src}`} alt={image.src} className="pixelArt" />
      </div>
      <div className="image-metadata scrollable-content">
        <div
          dangerouslySetInnerHTML={{
            __html: marked(image.description.replace(/ +/g, " ")),
          }}
        />
        <div>Tags: {image.tags.join(", ")}</div>
        <p>- Posted {image.date}</p>
      </div>
    </div>
  </Card>
)

export default ImageDetails
