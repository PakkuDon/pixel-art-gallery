import React from "react"
import Link from "next/link"

import { encodeURIFragment } from "../../util/encodeURIFragment"

interface TagListProps {
  countByTag: Array<{ tag: string; count: number }>
  limit?: number
}

const TagList = ({
  countByTag,
  limit = Number.MAX_SAFE_INTEGER,
}: TagListProps) => (
  <>
    {countByTag.slice(0, limit).map(({ tag, count }, index) => (
      <React.Fragment key={`tag-with-count-${tag}`}>
        <Link href={encodeURIFragment(`?q=#${tag}`)}>
          {tag} ({count})
        </Link>
        {index < countByTag.length - 1 && ", "}
      </React.Fragment>
    ))}
  </>
)

export { TagList }
