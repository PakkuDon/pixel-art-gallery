import React from "react"
import { Metadata } from "next"
import { redirect } from "next/navigation"

import { PixelArtRepository } from "../../PixelArtRepository"
import { extractFilename } from "../../util/extractFilename"
import { ImageDetails } from "../../components/ImageDetails/ImageDetails"

import { PixelArtEntry } from "../../data"

export function generateStaticParams(): { id: string }[] {
  const entries = PixelArtRepository.findAll()
  const ids = entries.map((image) => extractFilename(image.src))
  const aliases = entries.map((image) => image.aliases || [])
  return ids.concat(aliases.flat()).map((param) => ({
    id: param,
  }))
}

interface PageParams {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: PageParams): Metadata {
  const { id } = params
  const image = PixelArtRepository.findAll(
    (entry) => id === extractFilename(entry.src),
  )[0]

  if (image) {
    return {
      title: `${extractFilename(image.src)}`,

      twitter: {
        card: "summary_large_image",
      },
    }
  }
  return {}
}

PixelArtRepository.load()

const Page = ({ params }: PageParams) => {
  const { id } = params
  const entries = PixelArtRepository.findAll().reverse()
  let image: PixelArtEntry | undefined

  image = entries.find((entry) => id === extractFilename(entry.src))
  // Redirect to new URL if id is alias for entry
  if (!image) {
    const imageForAlias = entries.find((entry) => entry.aliases?.includes(id))
    if (imageForAlias) {
      return redirect(`/${extractFilename(imageForAlias.src)}`)
    }
  }

  if (!image) {
    ;[image] = entries
  }

  return <ImageDetails image={image} />
}

export default Page
