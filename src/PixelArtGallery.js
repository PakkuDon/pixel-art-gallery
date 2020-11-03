import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Sidebar from "./components/Sidebar"
import ImageDetails from "./components/ImageDetails"
import extractFilename from "./util/extractFilename"
import pixelArtEntries from "./data"

const PixelArtGallery = () => {
  const [selectedImage, setSelectedImage] = useState(pixelArtEntries[0])
  const { id } = useParams()

  useEffect(() => {
    if (id && selectedImage?.src !== id) {
      setSelectedImage(
        pixelArtEntries.find((image) => id === extractFilename(image.src)) ??
          pixelArtEntries[0]
      )
    }
  }, [])

  return (
    <React.Fragment>
      <Sidebar entries={pixelArtEntries} onImageSelect={setSelectedImage} />
      <ImageDetails image={selectedImage} />
    </React.Fragment>
  )
}

export default PixelArtGallery
