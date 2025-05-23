"use client"

import React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { CollapsibleSection } from "../CollapsibleSection/CollapsibleSection"
import { encodeURIFragment } from "../../util/encodeURIFragment"
import { extractFilename } from "../../util/extractFilename"
import { matchesSearchQuery } from "../../util/matchesSearchQuery"
import { Card } from "../Card/Card"
import { PixelArtRepository } from "../../PixelArtRepository"
import { SidebarEntry } from "./SidebarEntry/SidebarEntry"
import { TagList } from "../TagList/TagList"

import "./Sidebar.css"

PixelArtRepository.load()

const Sidebar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const countByTag = PixelArtRepository.countByTag()
  const searchQuery = useSearchParams().get("q")?.trim() || ""
  const entries = PixelArtRepository.findAll((entry) =>
    matchesSearchQuery(decodeURIComponent(searchQuery), entry),
  ).reverse()

  const onSearchQueryChange = (query: string) => {
    const queryString = `?q=${encodeURIFragment(query)}`
    router.push(queryString)
  }
  const basePath = pathname.includes("/pixel-art-gallery")
    ? "/pixel-art-gallery/"
    : "/"

  return (
    <Card>
      <aside className="sidebar">
        <div className="header">
          <div className="search-bar">
            <input
              type="text"
              value={decodeURIComponent(searchQuery)}
              onChange={(event) => {
                onSearchQueryChange(event.target.value)
              }}
              placeholder="Search"
            />
            <button
              type="button"
              aria-label="Clear search field"
              onClick={() => {
                onSearchQueryChange("")
              }}
            >
              x
            </button>
          </div>
          <div className="content">
            {entries.length} {entries.length === 1 ? "entry" : "entries"}.
          </div>
          <div className="content">
            <CollapsibleSection label="Most used tags">
              <TagList countByTag={countByTag} limit={10} />
            </CollapsibleSection>
          </div>
        </div>
        <div className="entriesList">
          {entries.map((entry, index) => {
            const isSelected =
              pathname.includes(extractFilename(entry.src)) ||
              (pathname === basePath && index === 0)

            return (
              <SidebarEntry
                key={`sidebar-item-${entry.src}`}
                entry={entry}
                isSelected={isSelected}
                searchQuery={searchQuery}
                lazyLoad={index > 20}
              />
            )
          })}
        </div>
      </aside>
    </Card>
  )
}

export { Sidebar }
