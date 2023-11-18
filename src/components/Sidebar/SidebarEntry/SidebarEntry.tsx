import path from "path"
import React from "react"
import Link from "next/link"
import classnames from "classnames"

import { extractFilename } from "../../../util/extractFilename"
import { encodeURIFragment } from "../../../util/encodeURIFragment"
import { PixelArtEntry } from "../../../data"

import "./SidebarEntry.css"

interface SidebarEntryProps {
  entry: PixelArtEntry
  isSelected?: boolean
  searchQuery?: string
}

const SidebarEntry = ({
  entry,
  isSelected,
  searchQuery,
}: SidebarEntryProps) => {
  const queryString = searchQuery ? encodeURIFragment(`?q=${searchQuery}`) : ""
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  const [width, height] = entry.resolution
    .split("x")
    .map((value) => parseInt(value, 10))

  return (
    <Link
      className={classnames("entry", { selected: isSelected })}
      href={`/${extractFilename(entry.src)}${queryString}`}
    >
      <img
        src={path.join(basePath, `/img/${entry.src}`)}
        alt={entry.src}
        width={width}
        height={height}
        loading="lazy"
      />
    </Link>
  )
}

export { SidebarEntry }
