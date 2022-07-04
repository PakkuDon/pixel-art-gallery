import React from "react"
import { Link } from "react-router-dom"

import extractFilename from "../../util/extractFilename"
import Card from "../Card"
import { PixelArtEntry } from "../../data"
import SidebarEntry from "./SidebarEntry"
import "./Sidebar.css"

const TAGS_TO_DISPLAY = 10

interface SidebarProps {
  entries: PixelArtEntry[]
  searchQuery: string
  selectedImage: PixelArtEntry
  countByTag: Array<{ tag: string; count: number }>
  onImageSelect: (entry: PixelArtEntry) => void
  onSearchQueryChange: (query: string) => void
}

const Sidebar = ({
  entries,
  searchQuery,
  selectedImage,
  countByTag,
  onImageSelect,
  onSearchQueryChange,
}: SidebarProps) => (
  <Card>
    <aside className="sidebar">
      <div className="search-bar">
        <label htmlFor="search-input">
          <input
            id="search-input"
            type="text"
            value={decodeURIComponent(searchQuery)}
            onChange={(event) => onSearchQueryChange(event.target.value)}
            placeholder="Search"
          />
        </label>
        <button
          type="button"
          aria-label="Clear search field"
          onClick={() => onSearchQueryChange("")}
        >
          x
        </button>
      </div>
      <div className="content">
        <div>
          {entries.length} {entries.length === 1 ? "entry" : "entries"}.
        </div>
        <div>
          Frequently used tags:{" "}
          {countByTag.slice(0, TAGS_TO_DISPLAY).map(({ tag, count }, index) => (
            <React.Fragment key={`tag-with-count-${tag}`}>
              <Link to={`?q=${tag}`}>
                {tag} ({count})
              </Link>
              {index < countByTag.length - 1 && ", "}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="entriesList">
        {entries.map((entry) => {
          const filename = extractFilename(entry.src)
          const selectedFilename = extractFilename(selectedImage.src)
          const isSelected = filename === selectedFilename

          return (
            <SidebarEntry
              key={`sidebar-item-${entry.src}`}
              entry={entry}
              isSelected={isSelected}
              searchQuery={searchQuery}
            />
          )
        })}
      </div>
    </aside>
  </Card>
)

export default Sidebar
