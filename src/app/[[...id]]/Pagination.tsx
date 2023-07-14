"use client"

import React from "react"
import classnames from "classnames"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { PixelArtRepository } from "../../PixelArtRepository"
import { extractFilename } from "../../util/extractFilename"
import { encodeURIFragment } from "../../util/encodeURIFragment"
import { matchesSearchQuery } from "../../util/matchesSearchQuery"

PixelArtRepository.load()

const Pagination = ({ id }: { id: string }) => {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("q")?.trim() || ""
  const entries = PixelArtRepository.findAll((entry) =>
    matchesSearchQuery(decodeURIComponent(searchQuery), entry)
  ).reverse()

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

  return (
    <div className={classnames("navigation", "content")}>
      {previousLink ? (
        <Link href={previousLink}>Previous</Link>
      ) : (
        <span>Previous</span>
      )}
      {nextLink ? <Link href={nextLink}>Next</Link> : <span>Next</span>}
    </div>
  )
}

export { Pagination }
