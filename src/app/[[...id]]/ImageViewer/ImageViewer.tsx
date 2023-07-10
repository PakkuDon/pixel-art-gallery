"use client"

import React, { useCallback, useEffect, useState } from "react"
import classnames from "classnames"

import { Slider } from "../../../components/Slider/Slider"
import { PixelArtEntry } from "../../../data"

interface ImageViewerProps {
  image: PixelArtEntry
}
const ImageViewer = ({ image }: ImageViewerProps) => {
  const [zoom, setZoom] = useState(200)

  const handleZoomChange = useCallback(
    (value: number) => {
      setZoom(value)
    },
    [setZoom]
  )

  return (
    <>
      <div className={classnames("image-viewer", "scrollable")}>
        <img
          src={`img/${image.src}`}
          alt={image.src}
          className="pixelArt"
          style={{ transform: `scale(${zoom / 100})` }}
        />
      </div>
      <div className="content">
        <Slider
          zoom={zoom}
          min={100}
          max={500}
          label="Zoom"
          increment={50}
          onChange={handleZoomChange}
        />
      </div>
    </>
  )
}

export { ImageViewer }
