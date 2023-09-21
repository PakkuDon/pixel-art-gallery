/*
TODO: Generate using opengraph-image.ts instead
opengraph-image.ts currently cannot be used due to the issue described in
https://github.com/vercel/next.js/issues/51147
*/
import fs from "fs"
import path from "path"

import { PixelArtRepository } from "../../../PixelArtRepository"
import { extractFilename } from "../../../util/extractFilename"

interface RouteParams {
  id: string
}

PixelArtRepository.load()

export function generateStaticParams(): RouteParams[] {
  const entries = PixelArtRepository.findAll()
  const ids = entries.map((image) => extractFilename(image.src))
  const aliases = entries.map((image) => image.aliases || [])
  return ids.concat(aliases.flat()).map((param) => ({
    id: param,
  }))
}

export function GET(_: Request, { params }: { params: RouteParams }) {
  const { id } = params
  const image = PixelArtRepository.findAll((entry) => {
    const aliases = entry.aliases || []
    return id === extractFilename(entry.src) || aliases.includes(id)
  })[0]

  const filePath = path.join(__dirname, "../../../../../public/img", image.src)
  const buffer = fs.readFileSync(filePath)

  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
    },
  })
}
