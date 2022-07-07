import React from "react"
import { Link } from "react-router-dom"

const TAGS_TO_DISPLAY = 10

interface PopularTagListProps {
  countByTag: Array<{ tag: string; count: number }>
}

const PopularTagList = ({ countByTag }: PopularTagListProps) => {
  return (
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
  )
}

export default PopularTagList
