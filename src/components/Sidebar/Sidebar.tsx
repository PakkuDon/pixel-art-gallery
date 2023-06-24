import React from "react"

import { extractFilename } from "../../util/extractFilename"
import { Card } from "../Card/Card"
import { PixelArtEntry } from "../../data"
import { SidebarEntry } from "./SidebarEntry/SidebarEntry"
import { TagList } from "../TagList/TagList"

import "./Sidebar.css"

interface SidebarProps {
  entries: PixelArtEntry[]
  searchQuery: string
  selectedImage: PixelArtEntry
  countByTag: Array<{ tag: string; count: number }>
  onSearchQueryChange: (query: string) => void
}

const Sidebar = ({
  entries,
  searchQuery,
  selectedImage,
  countByTag,
  onSearchQueryChange,
}: SidebarProps) => (
  <Card>
    <aside className="sidebar">
      <div className="header">
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
          <TagList countByTag={countByTag} limit={10} />
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

export { Sidebar }
