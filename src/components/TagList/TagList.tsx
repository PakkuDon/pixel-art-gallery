import React from "react"
import { Link } from "react-router-dom"

import { Accordion } from "../Accordion/Accordion"
import { encodeURIFragment } from "../../util/encodeURIFragment"

interface TagListProps {
  countByTag: Array<{ tag: string; count: number }>
  limit?: number
}

const TagList = ({
  countByTag,
  limit = Number.MAX_SAFE_INTEGER,
}: TagListProps) => (
  <Accordion openLabel="Show most used tags" closeLabel="Hide most used tags">
    {countByTag.slice(0, limit).map(({ tag, count }, index) => (
      <React.Fragment key={`tag-with-count-${tag}`}>
        {/* "%2523" is '#' encoded */}
        <Link to={encodeURIFragment(`?q=#${tag}`)}>
          {tag} ({count})
        </Link>
        {index < countByTag.length - 1 && ", "}
      </React.Fragment>
    ))}
  </Accordion>
)

export { TagList }
