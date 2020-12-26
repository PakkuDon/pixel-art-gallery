import React, { useCallback, useState } from "react"
import marked from "marked"
import { Link } from "react-router-dom"

import Card from "../Card"
import extractFilename from "../../util/extractFilename"
import "./ImageDetails.css"

marked.setOptions({
  breaks: true,
  gfm: true,
})

const ZOOM_INCREMENT = 25
const MIN_ZOOM = 100
const MAX_ZOOM = 500

const ImageDetails = ({ image, previousImage, nextImage }) => {
  const [zoom, setZoom] = useState(100)

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

  return (
    <Card>
      <div className="image-details">
        <div className="image-viewer scrollable-content">
          <img
            src={`img/${image.src}`}
            alt={image.src}
            className="pixelArt"
            style={{ transform: `scale(${zoom / 100})` }}
          />
        </div>
        <div className="image-metadata">
          <div>
            <label>
              Zoom
              <input
                type="range"
                value={zoom}
                min={MIN_ZOOM}
                max={MAX_ZOOM}
                step="5"
                onChange={(event) => setZoom(event.target.value)}
              />
            </label>
            <button type="button" onClick={decrementZoom}>
              -
            </button>
            <output>{zoom}%</output>
            <button type="button" onClick={incrementZoom}>
              +
            </button>
          </div>
          <div
            className="description scrollable-content"
            dangerouslySetInnerHTML={{
              __html: marked(image.description.replace(/ +/g, " ")),
            }}
          />
          <div>Tags: {image.tags.join(", ")}</div>
          <p>- Posted {image.date}</p>
        </div>
        <div className="navigation">
          {previousImage ? (
            <Link to={extractFilename(previousImage.src)}>Previous</Link>
          ) : (
            "Previous"
          )}
          {nextImage ? (
            <Link to={extractFilename(nextImage.src)}>Next</Link>
          ) : (
            "Next"
          )}
        </div>
      </div>
    </Card>
  )
}

export default ImageDetails
