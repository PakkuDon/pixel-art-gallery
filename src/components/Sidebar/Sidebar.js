import React from "react"
import { Link } from "react-router-dom"

import extractFilename from "../../util/extractFilename"
import Card from "../Card"
import "./Sidebar.css"

const SidebarEntry = ({ entry, isSelected }) => (
  <Link
    className={`entry ${isSelected ? "selected" : ""}`}
    to={`/${extractFilename(entry.src)}`}
  >
    <img src={`img/${entry.src}`} alt={entry.src} loading="lazy" />
  </Link>
)

const Sidebar = ({
  entries,
  searchQuery,
  selectedImage,
  onImageSelect,
  onSearchQueryChange,
}) => (
  <Card>
    <aside className="sidebar">
      <div>
        <label htmlFor="search">
          Search:{" "}
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={(event) => onSearchQueryChange(event.target.value)}
          />
        </label>
      </div>
      <div className="entriesDropdown">
        <select
          onChange={(event) => {
            const selectedOption = entries.find(
              (entry) =>
                extractFilename(entry.src) ===
                extractFilename(event.target.value)
            )
            onImageSelect(selectedOption)
          }}
          value={extractFilename(selectedImage?.src)}
        >
          {entries.map((entry) => {
            const filename = extractFilename(entry.src)
            return (
              <option key={`option-${filename}`} value={filename}>
                {filename}
              </option>
            )
          })}
        </select>
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
            />
          )
        })}
      </div>
    </aside>
  </Card>
)

export default Sidebar
