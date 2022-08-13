import React, { useState } from "react"
import { Link } from "react-router-dom"

const TAGS_TO_DISPLAY = 10

interface PopularTagListProps {
  countByTag: Array<{ tag: string; count: number }>
}

const PopularTagList = ({ countByTag }: PopularTagListProps) => {
  const [visible, setVisible] = useState(false)

  if (visible) {
    return (
      <div>
        <div>
          <button onClick={() => setVisible(false)}>Hide most used tags</button>
        </div>
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

  return (
    <div>
      <button onClick={() => setVisible(true)}>Show most used tags</button>
    </div>
  )
}

export default PopularTagList
