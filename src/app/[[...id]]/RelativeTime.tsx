"use client"

import { formatDistanceToNow } from "date-fns"

export const RelativeTime = ({ date }: { date: Date }) =>
  formatDistanceToNow(date, { addSuffix: true })
