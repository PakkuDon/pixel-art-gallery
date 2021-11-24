import React, { useCallback, useState } from "react"
import marked from "marked"
import { Link, useHistory } from "react-router-dom"
import { useSwipeable } from "react-swipeable"

import Card from "../Card"
import Slider from "../Slider"
import extractFilename from "../../util/extractFilename"
import { PixelArtEntry } from "../../data"
import "./ImageDetails.css"

marked.setOptions({
  breaks: true,
  gfm: true,
})

interface ImageDetailsProps {
  image: PixelArtEntry
  previousImage: PixelArtEntry
  nextImage: PixelArtEntry
}
const ImageDetails = ({
  image,
  previousImage,
  nextImage,
}: ImageDetailsProps) => {
  const [zoom, setZoom] = useState(100)
  const history = useHistory()
  const previousLink = previousImage ? extractFilename(previousImage.src) : ""
  const nextLink = nextImage ? extractFilename(nextImage.src) : ""

  const handleZoomChange = useCallback(
    (zoom) => {
      setZoom(zoom)
    },
    [setZoom]
  )

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (nextLink) {
        history.replace(`/${nextLink}`)
      }
    },
    onSwipedRight: () => {
      if (previousLink) {
        history.replace(`/${previousLink}`)
      }
    },
  })

  return (
    <Card>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <main className="image-details" {...handlers}>
        <div className="image-viewer scrollable">
          <img
            src={`img/${image.src}`}
            alt={image.src}
            className="pixelArt"
            style={{ transform: `scale(${zoom / 100})` }}
          />
        </div>
        <div className="image-metadata content">
          <Slider
            zoom={zoom}
            min={100}
            max={500}
            increment={25}
            onChange={handleZoomChange}
          />
          <div
            className="description scrollable content"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `${image.title || ""}<br />${marked(
                image.description ? image.description.replace(/ +/g, " ") : ""
              )}`,
            }}
          />
          <div className="content">Tags: {image.tags.join(", ")}</div>
          <p className="content">- Posted {image.date}</p>
        </div>
        <div className="navigation content">
          {previousLink ? (
            <Link to={previousLink}>Previous</Link>
          ) : (
            <span>Previous</span>
          )}
          {nextLink ? <Link to={nextLink}>Next</Link> : <span>Next</span>}
        </div>
      </main>
    </Card>
  )
}

export default ImageDetails
