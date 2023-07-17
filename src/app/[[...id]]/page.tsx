import React from "react"
import { Metadata } from "next"
import { redirect } from "next/navigation"

import { PixelArtRepository } from "../../PixelArtRepository"
import { extractFilename } from "../../util/extractFilename"
import { ImageDetails } from "./ImageDetails"

import "./page.css"
import { PixelArtEntry } from "../../data"

export function generateStaticParams(): { id: string[] }[] {
  const entries = PixelArtRepository.findAll()
  const ids = entries.map((image) => extractFilename(image.src))
  const aliases = entries.map((image) => image.aliases || [])
  return ids
    .concat(aliases.flat())
    .map((param) => ({
      id: [param],
    }))
    .concat({ id: [] })
}

interface PageParams {
  params: {
    // id will only contain 1 value or be undefined
    // It is an array as this page uses optional catch-all segments
    id?: string[]
  }
}

export function generateMetadata({ params }: PageParams): Metadata {
  const id = params.id ? params.id[0] : ""
  const image = PixelArtRepository.findAll(
    (image) => id === extractFilename(image.src)
  )[0]

  if (image) {
    return {
      title: `${extractFilename(image.src)}`,
      openGraph: {
        title: `${extractFilename(image.src)} - Pixel Art Gallery`,
        description: image.title,
        images: [`img/${image.src}`],
      },
    }
  }
  return {}
}

PixelArtRepository.load()

const Page = ({ params }: PageParams) => {
  const id = params.id ? params.id[0] : ""
  const entries = PixelArtRepository.findAll().reverse()
  let image: PixelArtEntry | undefined

  if (id) {
    image = entries.find((image) => id === extractFilename(image.src))
    // Redirect to new URL if id is alias for entry
    if (!image) {
      const imageForAlias = entries.find((image) => image.aliases?.includes(id))
      if (imageForAlias) {
        return redirect(`/${extractFilename(imageForAlias.src)}`)
      }
    }
  }

  if (!image) {
    image = entries[0]
  }

  return <ImageDetails image={image} />
}

export default Page
