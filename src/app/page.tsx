import React from "react"

import { PixelArtRepository } from "../PixelArtRepository"
import { ImageDetails } from "../components/ImageDetails/ImageDetails"

PixelArtRepository.load()
const entries = PixelArtRepository.findAll().reverse()

const Page = () => {
  const image = entries[0]
  return <ImageDetails image={image} />
}

export default Page
