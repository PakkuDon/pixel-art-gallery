import React, { useCallback, useState } from "react"
import { marked } from "marked"
import { Link, useSearchParams } from "react-router-dom"
import {
  format as formatDate,
  parseISO as parseISODate,
  formatDistanceToNow,
} from "date-fns"
import classnames from "classnames"

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
  previousImage?: PixelArtEntry
  nextImage?: PixelArtEntry
}
const ImageDetails = ({
  image,
  previousImage,
  nextImage,
}: ImageDetailsProps) => {
  const [zoom, setZoom] = useState(200)
  const [params] = useSearchParams()

  const searchQuery = new URLSearchParams(params).get("q")?.trim() || ""
  const queryString = searchQuery ? `?q=${searchQuery}` : ""
  const previousLink = previousImage
    ? `/${extractFilename(previousImage.src)}${queryString}`
    : ""
  const nextLink = nextImage
    ? `/${extractFilename(nextImage.src)}${queryString}`
    : ""

  const handleZoomChange = useCallback(
    (value: number) => {
      setZoom(value)
    },
    [setZoom]
  )
  const parsedDate = parseISODate(image.date)

  return (
    <Card>
      <main className="image-details">
        <div className={classnames("image-viewer", "scrollable")}>
          <img
            src={`img/${image.src}`}
            alt={image.src}
            className="pixelArt"
            style={{ transform: `scale(${zoom / 100})` }}
          />
        </div>
        <div className="image-metadata">
          <div className="content">
            <Slider
              zoom={zoom}
              min={100}
              max={500}
              increment={50}
              onChange={handleZoomChange}
            />
          </div>
          <div
            className={classnames("description", "scrollable", "content")}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `<strong>${image.title || ""}</strong><br />${marked(
                image.description ? image.description.replace(/ +/g, " ") : ""
              )}`,
            }}
          />
          <div className="content">
            <strong>Tags: </strong>
            {image.tags.map((tag, index) => (
              <React.Fragment key={`tag-${tag}`}>
                <Link to={`?q=${tag}`} className="tag">
                  {tag}
                </Link>
                {index < image.tags.length - 1 && ", "}
              </React.Fragment>
            ))}
          </div>
          <div className="content">
            <strong>Posted:</strong>{" "}
            {formatDate(parsedDate, "MMM d yyyy h:mm aa O")} (
            {formatDistanceToNow(parsedDate, { addSuffix: true })})
          </div>
        </div>
        <div className={classnames("navigation", "content")}>
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
