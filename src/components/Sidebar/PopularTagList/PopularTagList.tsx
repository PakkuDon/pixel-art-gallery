import React, { useState } from "react"
import { Link } from "react-router-dom"

interface PopularTagListProps {
  countByTag: Array<{ tag: string; count: number }>
  limit: number
}

const PopularTagList = ({ countByTag, limit }: PopularTagListProps) => {
  const [visible, setVisible] = useState(false)

  if (visible) {
    return (
      <div>
        <div>
          <button type="button" onClick={() => setVisible(false)}>
            Hide most used tags
          </button>
        </div>
        {countByTag.slice(0, limit).map(({ tag, count }, index) => (
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
      <button type="button" onClick={() => setVisible(true)}>
        Show most used tags
      </button>
    </div>
  )
}

export default PopularTagList
