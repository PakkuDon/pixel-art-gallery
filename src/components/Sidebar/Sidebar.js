import React from "react"
import { Link } from "react-router-dom"

import extractFilename from "../../util/extractFilename"
import Card from "../Card"

const Sidebar = ({ entries, onImageSelect }) => (
  <Card>
    <ul>
      {entries.map((entry) => (
        <li key={entry.src} onClick={() => onImageSelect(entry)}>
          <Link to={`/${extractFilename(entry.src)}`}>
            {extractFilename(entry.src)}
          </Link>
        </li>
      ))}
    </ul>
  </Card>
)

export default Sidebar
