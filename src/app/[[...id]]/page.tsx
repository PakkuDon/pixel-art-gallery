import React, { Suspense } from "react"
import { marked } from "marked"
import { redirect } from "next/navigation"
import Link from "next/link"
import {
  format as formatDate,
  parseISO as parseISODate,
  formatDistanceToNow,
} from "date-fns"
import classnames from "classnames"

import { PixelArtRepository } from "../../PixelArtRepository"
import { encodeURIFragment } from "../../util/encodeURIFragment"
import { Card } from "../../components/Card/Card"
import { ImageViewer } from "./ImageViewer/ImageViewer"
import { Pagination } from "./Pagination"
import { extractFilename } from "../../util/extractFilename"
import "./page.css"
import { PixelArtEntry } from "../../data"

marked.setOptions({
  breaks: true,
  gfm: true,
})

const PaginationPlaceholder = () => (
  <div className={classnames("navigation", "content")}>
    <span>Previous</span>
    <span>Next</span>
  </div>
)

export function generateStaticParams(): { id: string[] }[] {
  const entries = PixelArtRepository.findAll()
  const ids = entries.map((image) => extractFilename(image.src))
  const aliases = entries.map((image) => image.aliases || [])
  return ids
    .concat(aliases.flat())
    .map((param) => ({
      id: [param],
    }))
    .concat({ id: [] })
}

interface ImageDetailsParams {
  params: {
    // id will only contain 1 value or be undefined
    // It is an array as this page uses optional catch-all segments
    id?: string[]
  }
}

PixelArtRepository.load()

const ImageDetails = ({ params }: ImageDetailsParams) => {
  const id = params.id ? params.id[0] : ""
  const entries = PixelArtRepository.findAll().reverse()
  let image: PixelArtEntry | undefined

  if (id) {
    image = entries.find((image) => id === extractFilename(image.src))
    // Redirect to new URL if id is alias for entry
    if (!image) {
      const imageForAlias = entries.find((image) => image.aliases?.includes(id))
      if (imageForAlias) {
        return redirect(`/${extractFilename(imageForAlias.src)}`)
      }
    }
  }

  if (!image) {
    image = entries[0]
  }

  const parsedDate = parseISODate(image.date)

  return (
    <Card>
      <main className="image-details">
        <ImageViewer image={image} />
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
                {index < image!.tags.length - 1 && ", "}
              </React.Fragment>
            ))}
          </div>
        </div>
        <Suspense fallback={<PaginationPlaceholder />}>
          <Pagination id={id} />
        </Suspense>
      </main>
    </Card>
  )
}

export default ImageDetails
