import React, { useState } from "react"
import { Link } from "react-router-dom"
import { encodeURIFragment } from "../../../util/encodeURIFragment"

interface TagListProps {
  countByTag: Array<{ tag: string; count: number }>
  limit?: number
}

const TagList = ({
  countByTag,
  limit = Number.MAX_SAFE_INTEGER,
}: TagListProps) => {
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
            {/* "%2523" is '#' encoded */}
            <Link to={encodeURIFragment(`?q=#${tag}`)}>
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

export { TagList }
