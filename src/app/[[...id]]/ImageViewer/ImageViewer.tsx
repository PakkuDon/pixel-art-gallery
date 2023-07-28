"use client"

import path from "path"
import React, { useCallback, useState } from "react"
import { usePathname } from "next/navigation"
import classnames from "classnames"

import { Slider } from "../../../components/Slider/Slider"
import { PixelArtEntry } from "../../../data"
import nextConfig from "../../../../next.config.js"
import "./ImageViewer.css"

interface ImageViewerProps {
  image: PixelArtEntry
}
const ImageViewer = ({ image }: ImageViewerProps) => {
  // Fallback required as basePath is set to env var which
  // is only present on server-side render
  const basePath =
    nextConfig.basePath || usePathname().includes("/pixel-art-gallery")
      ? "/pixel-art-gallery"
      : ""
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
          src={path.join(`/${basePath}`, `/img/${image.src}`)}
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
