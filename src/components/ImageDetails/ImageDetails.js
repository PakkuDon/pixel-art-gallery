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
    <img src={`img/${image.src}`} alt={image.src} className="pixelArt" />
    <div
      dangerouslySetInnerHTML={{
        __html: marked(image.description.replace(/ +/g, " ")),
      }}
    />
    <div>Tags: {image.tags.join(", ")}</div>
    <p>- Posted {image.date}</p>
  </Card>
)

export default ImageDetails
