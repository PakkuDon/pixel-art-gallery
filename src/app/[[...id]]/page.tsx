"use client"
import React, { useCallback, useState } from "react"
import { marked } from "marked"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import {
  format as formatDate,
  parseISO as parseISODate,
  formatDistanceToNow,
} from "date-fns"
import classnames from "classnames"

import { PixelArtRepository } from "../../PixelArtRepository"
import { encodeURIFragment } from "../../util/encodeURIFragment"
import { Card } from "../../components/Card/Card"
import { Slider } from "../../components/Slider/Slider"
import { extractFilename } from "../../util/extractFilename"
import { matchesSearchQuery } from "../../util/matchesSearchQuery"
import "./page.css"

marked.setOptions({
  breaks: true,
  gfm: true,
})

export function generateStaticParams(): { id: string }[] {
  const entries = PixelArtRepository.findAll()
  return entries.map((image) => ({
    id: extractFilename(image.src),
  }))
}

interface ImageDetailsParams {
  params: {
    // id will only contain 1 value or be undefined
    // It is an array as this page uses optional catch-all segments
    id?: string[]
  }
}

const ImageDetails = ({ params }: ImageDetailsParams) => {
  const [zoom, setZoom] = useState(200)
  const id = params.id ? params.id[0] : ""
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("q")?.trim() || ""
  const entries = PixelArtRepository.findAll((entry) =>
    matchesSearchQuery(searchQuery, entry)
  ).reverse()

  const image =
    PixelArtRepository.findAll(
      (image) => id === extractFilename(image.src)
    )[0] ?? entries[0]
  let imageIndex = 0
  if (id !== "") {
    imageIndex = entries.findIndex((image) => id === extractFilename(image.src))
  }
  const previousImage = entries[imageIndex - 1]
  const nextImage = entries[imageIndex + 1]

  const queryString = searchQuery ? encodeURIFragment(`?q=${searchQuery}`) : ""
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
        <div className="image-metadata">
          <div className="content">
            <strong>Posted:</strong>{" "}
            {formatDate(parsedDate, "MMM d yyyy h:mm aa O")} (
            {formatDistanceToNow(parsedDate, { addSuffix: true })})
          </div>
          <div
            className={classnames("description", "content")}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `<strong>${image.title || ""}</strong><br />${marked(
                image.description ? image.description.replace(/ +/g, " ") : ""
              )}`,
            }}
          />
          <div className="content">
            <strong>Palette: </strong>
            {image.palette.url ? (
              <a
                href={image.palette.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {image.palette.name}
              </a>
            ) : (
              `${image.palette.name}. ${(image.palette.colours || []).join(
                ", "
              )}`
            )}
          </div>
          <div className="content">
            <strong>Tags: </strong>
            {image.tags.map((tag, index) => (
              <React.Fragment key={`tag-${tag}`}>
                <Link href={encodeURIFragment(`?q=#${tag}`)} className="tag">
                  {tag}
                </Link>
                {index < image.tags.length - 1 && ", "}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className={classnames("navigation", "content")}>
          {previousLink ? (
            <Link href={previousLink}>Previous</Link>
          ) : (
            <span>Previous</span>
          )}
          {nextLink ? <Link href={nextLink}>Next</Link> : <span>Next</span>}
        </div>
      </main>
    </Card>
  )
}

export default ImageDetails
