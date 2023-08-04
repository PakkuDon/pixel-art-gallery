import React, { Suspense } from "react"
import Link from "next/link"
import { marked } from "marked"
import classnames from "classnames"
import {
  format as formatDate,
  parseISO as parseISODate,
  formatDistanceToNow,
} from "date-fns"

import { Card } from "../../components/Card/Card"
import { ImageViewer } from "./ImageViewer/ImageViewer"
import { Pagination } from "./Pagination"
import { encodeURIFragment } from "../../util/encodeURIFragment"
import { extractFilename } from "../../util/extractFilename"
import { PixelArtEntry } from "../../data"

const PaginationPlaceholder = () => (
  <div className={classnames("navigation", "content")}>
    <span>Previous</span>
    <span>Next</span>
  </div>
)

export const ImageDetails = ({ image }: { image: PixelArtEntry }) => {
  marked.setOptions({
    // These options disabled to silence warnings about their deprecation
    // Ref: https://github.com/markedjs/marked/releases/tag/v5.0.0
    headerIds: false,
    mangle: false,
  })
  const id = extractFilename(image.src)
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
                image.description ? image.description.replace(/ +/g, " ") : "",
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
                ", ",
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
