import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"

import Sidebar from "./components/Sidebar"
import ImageDetails from "./components/ImageDetails"
import extractFilename from "./util/extractFilename"
import pixelArtEntries from "./data"

const PixelArtGallery = () => {
  const [selectedImage, setSelectedImage] = useState(pixelArtEntries[0])
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    let selectedFilename
    if (id && selectedImage?.src !== id) {
      selectedFilename = id
    } else if (document.referrer) {
      selectedFilename = document.referrer.split("/").pop()
    }

    if (selectedFilename) {
      setSelectedImage(
        pixelArtEntries.find(
          (image) => selectedFilename === extractFilename(image.src)
        ) ?? pixelArtEntries[0]
      )
      history.replace(`/${selectedFilename}`)
    }
  }, [])

  console.log(document.referrer)

  return (
    <React.Fragment>
      <Sidebar entries={pixelArtEntries} onImageSelect={setSelectedImage} />
      <ImageDetails image={selectedImage} />
    </React.Fragment>
  )
}

export default PixelArtGallery
