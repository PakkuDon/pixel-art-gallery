import React, { useState } from "react"

import Sidebar from "./components/Sidebar"
import ImageDetails from "./components/ImageDetails"

import pixelArtEntries from "./data"

const PixelArtGallery = () => {
  const [selectedImage, setSelectedImage] = useState(pixelArtEntries[0])

  return (
    <React.Fragment>
      <Sidebar entries={pixelArtEntries} onImageSelect={setSelectedImage} />
      <ImageDetails image={selectedImage} />
    </React.Fragment>
  )
}

export default PixelArtGallery
