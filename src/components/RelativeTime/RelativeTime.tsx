"use client"

import { formatDistanceToNow } from "date-fns"

const RelativeTime = ({ date }: { date: Date }) =>
  `(${formatDistanceToNow(date, { addSuffix: true })})`

export default RelativeTime
