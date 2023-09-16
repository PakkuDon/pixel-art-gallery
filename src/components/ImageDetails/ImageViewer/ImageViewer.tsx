"use client"

import path from "path"
import React, { useCallback, useState } from "react"
import classnames from "classnames"

import { Slider } from "../../Slider/Slider"
import { PixelArtEntry } from "../../../data"
import "./ImageViewer.css"

interface ImageViewerProps {
  image: PixelArtEntry
}
const ImageViewer = ({ image }: ImageViewerProps) => {
  // Fallback required as basePath is set to env var which
  // is only present on server-side render
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  const [zoom, setZoom] = useState(200)

  const handleZoomChange = useCallback(
    (value: number) => {
      setZoom(value)
    },
    [setZoom],
  )

  return (
    <>
      <div className={classnames("image-viewer", "scrollable")}>
        <img
          src={path.join(`/${basePath}`, `/img/${image.src}`)}
          alt=""
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
