import React from "react"
import { Link } from "react-router-dom"

import extractFilename from "../../util/extractFilename"
import Card from "../Card"
import "./Sidebar.css"

const SidebarEntry = ({ entry, isSelected }) => {
  const filename = extractFilename(entry.src)

  return (
    <div className={`entry ${isSelected ? "selected" : ""}`}>
      <Link to={`/${extractFilename(entry.src)}`}>
        <img
          src={`img/${entry.src}`}
          alt={entry.src}
          className="entry"
        />
      </Link>
    </div>
  )
}

const Sidebar = ({ entries, onImageSelect, selectedImage }) => (
  <Card>
    <div className="sidebar">
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
            <SidebarEntry entry={entry} isSelected={isSelected} />
          )
        })}
      </div>
    </div>
  </Card>
)

export default Sidebar
