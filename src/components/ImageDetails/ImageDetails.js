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
    <div>
      <p
        dangerouslySetInnerHTML={{
          __html: marked(image.description.replace(/ +/g, " ")),
        }}
      />
      <p>{image.date}</p>
    </div>
  </Card>
)

export default ImageDetails
