import React from "react"
import { Link } from "react-router-dom"

import extractFilename from "../../util/extractFilename"
import Card from "../Card"
import "./Sidebar.css"

const Sidebar = ({ entries, onImageSelect, selectedImage }) => (
  <Card>
    <div className="entriesDropdown">
      <select
        onChange={(event) => {
          const selectedOption = entries.find(
            (entry) =>
              extractFilename(entry.src) === extractFilename(event.target.value)
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
    <ul className="entriesList">
      {entries.map((entry) => {
        const filename = extractFilename(entry.src)
        const selectedFilename = extractFilename(selectedImage.src)

        return (
          <li
            key={entry.src}
            className={filename === selectedFilename && "selected"}
          >
            <Link to={`/${extractFilename(entry.src)}`}>{filename}</Link>
          </li>
        )
      })}
    </ul>
  </Card>
)

export default Sidebar
