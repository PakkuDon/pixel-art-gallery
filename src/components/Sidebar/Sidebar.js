import React from "react"
import { Link } from "react-router-dom"

import extractFilename from "../../util/extractFilename"
import Card from "../Card"
import "./Sidebar.css"

const Sidebar = ({ entries, onImageSelect, selectedImage }) => (
  <Card>
    <ul>
      {entries.map((entry) => {
        const filename = extractFilename(entry.src)
        const selectedFilename = extractFilename(selectedImage.src)

        return (
          <li
            key={entry.src}
            className={filename === selectedFilename && "selected"}
            onClick={() => onImageSelect(entry)}
          >
            <Link to={`/${extractFilename(entry.src)}`}>{filename}</Link>
          </li>
        )
      })}
    </ul>
  </Card>
)

export default Sidebar
