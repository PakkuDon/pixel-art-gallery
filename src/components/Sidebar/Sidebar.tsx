import React from "react"
import { usePathname, useSearchParams } from "next/navigation"

import { CollapsibleSection } from "../CollapsibleSection/CollapsibleSection"
import { extractFilename } from "../../util/extractFilename"
import { matchesSearchQuery } from "../../util/matchesSearchQuery"
import { Card } from "../Card/Card"
import { PixelArtRepository } from "../../PixelArtRepository"
import { SidebarEntry } from "./SidebarEntry/SidebarEntry"
import { TagList } from "../TagList/TagList"

import "./Sidebar.css"

const Sidebar = () => {
  const pathname = usePathname()
  const countByTag = PixelArtRepository.countByTag()
  const searchQuery = useSearchParams().get("q")?.trim() || ""
  const entries = PixelArtRepository.findAll((entry) =>
    matchesSearchQuery(searchQuery, entry)
  ).reverse()

  return (
    <Card>
      <aside className="sidebar">
        <div className="header">
          <div className="search-bar">
            <label htmlFor="search-input">
              <input
                id="search-input"
                type="text"
                value={decodeURIComponent(searchQuery)}
                onChange={() => {}}
                placeholder="Search"
              />
            </label>
            <button
              type="button"
              aria-label="Clear search field"
              onClick={() => {}}
            >
              x
            </button>
          </div>
          <div className="content">
            <CollapsibleSection label="Most used tags">
              <>
                <div>
                  {entries.length} {entries.length === 1 ? "entry" : "entries"}.
                </div>
                <TagList countByTag={countByTag} limit={10} />
              </>
            </CollapsibleSection>
          </div>
        </div>
        <div className="entriesList">
          {entries.map((entry, index) => {
            const isSelected =
              extractFilename(entry.src) === extractFilename(pathname) ||
              (pathname === "/" && index === 0)

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
}

export { Sidebar }
