import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"

import Sidebar from "./components/Sidebar"
import ImageDetails from "./components/ImageDetails"
import extractFilename from "./util/extractFilename"
import pixelArtEntries from "./data"

const entries = pixelArtEntries.reverse()

const PixelArtGallery = () => {
  const [selectedImage, setSelectedImage] = useState(entries[0])
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
        entries.find(
          (image) => selectedFilename === extractFilename(image.src)
        ) ?? entries[0]
      )
      history.replace(`/${selectedFilename}`)
    }
  }, [id])

  return (
    <div className="sidebar-layout">
      <Sidebar
        entries={entries}
        onImageSelect={setSelectedImage}
        selectedImage={selectedImage}
      />
      <ImageDetails image={selectedImage} />
    </div>
  )
}

export default PixelArtGallery
