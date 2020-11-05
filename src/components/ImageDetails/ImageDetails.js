import React from "react"
import marked from "marked"

import Card from "../Card"

marked.setOptions({
  breaks: true,
  gfm: true,
})

const ImageDetails = ({ image }) => (
  <Card>
    <img src={`img/${image.src}`} alt={image.src} />
    <div
      dangerouslySetInnerHTML={{
        __html: marked(image.description.replace(/ +/g, " ")),
      }}
    />
    <p>{image.date}</p>
  </Card>
)

export default ImageDetails
