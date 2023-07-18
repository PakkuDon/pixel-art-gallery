"use client"

import React from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

import { encodeURIFragment } from "../../util/encodeURIFragment"

const LinkToGallery = () => {
  const params = useSearchParams()
  const searchQuery = params.get("q")
  const queryString = searchQuery ? encodeURIFragment(`?q=${searchQuery}`) : ""

  return <Link href={`/${queryString}`}>Back to gallery</Link>
}

export { LinkToGallery }
