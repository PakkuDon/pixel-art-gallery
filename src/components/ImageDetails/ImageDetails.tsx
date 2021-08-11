import React, { useCallback, useState } from "react"
import marked from "marked"
import { Link, useHistory } from "react-router-dom"
import { useSwipeable } from "react-swipeable"

import Card from "../Card"
import extractFilename from "../../util/extractFilename"
import { PixelArtEntry } from "../../data"
import "./ImageDetails.css"

marked.setOptions({
  breaks: true,
  gfm: true,
})

const ZOOM_INCREMENT = 25
const MIN_ZOOM = 100
const MAX_ZOOM = 500

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

  const incrementZoom = useCallback(() => {
    if (zoom + ZOOM_INCREMENT <= MAX_ZOOM) {
      setZoom(zoom + ZOOM_INCREMENT)
    } else {
      setZoom(MAX_ZOOM)
    }
  }, [zoom, setZoom])

  const decrementZoom = useCallback(() => {
    if (zoom - ZOOM_INCREMENT >= MIN_ZOOM) {
      setZoom(zoom - ZOOM_INCREMENT)
    } else {
      setZoom(MIN_ZOOM)
    }
  }, [zoom, setZoom])

  const handleZoomChange = useCallback(
    (event) => {
      setZoom(parseInt(event.target.value, 10))
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
      <main className="image-details" {...handlers}>
        <div className="image-viewer scrollable-content">
          <img
            src={`img/${image.src}`}
            alt={image.src}
            className="pixelArt"
            style={{ transform: `scale(${zoom / 100})` }}
          />
        </div>
        <div className="image-metadata content">
          <div>
            <label>
              Zoom
              <input
                type="range"
                value={zoom}
                min={MIN_ZOOM}
                max={MAX_ZOOM}
                step="5"
                onChange={handleZoomChange}
              />
            </label>
            <button type="button" aria-label="Zoom out" onClick={decrementZoom}>
              -
            </button>
            <output>{zoom}%</output>
            <button type="button" aria-label="Zoom in" onClick={incrementZoom}>
              +
            </button>
          </div>
          <div
            className="description scrollable-content"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `${image.title || ""}<br />${marked(
                image.description ? image.description.replace(/ +/g, " ") : ""
              )}`,
            }}
          />
          <div>Tags: {image.tags.join(", ")}</div>
          <p>- Posted {image.date}</p>
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
