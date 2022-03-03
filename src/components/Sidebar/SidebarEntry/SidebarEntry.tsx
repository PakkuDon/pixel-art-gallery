import React from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"

import extractFilename from "../../../util/extractFilename"
import { PixelArtEntry } from "../../../data"

import "./SidebarEntry.css"

interface SidebarEntryProps {
  entry: PixelArtEntry
  isSelected: boolean
  searchQuery: string
}

const SidebarEntry = ({
  entry,
  isSelected,
  searchQuery,
}: SidebarEntryProps) => {
  const queryString = searchQuery ? `?q=${searchQuery}` : ""

  return (
    <Link
      className={classnames("entry", { selected: isSelected })}
      to={`/${extractFilename(entry.src)}${queryString}`}
    >
      <img src={`img/${entry.src}`} alt={entry.src} loading="lazy" />
    </Link>
  )
}

export default SidebarEntry
