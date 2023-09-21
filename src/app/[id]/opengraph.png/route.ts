/*
TODO: Generate using opengraph-image.ts instead
opengraph-image.ts currently cannot be used due to the issue described in
https://github.com/vercel/next.js/issues/51147
*/
import path from "path"
import sharp from "sharp"

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

export async function GET(_: Request, { params }: { params: RouteParams }) {
  const { id } = params
  const image = PixelArtRepository.findAll((entry) => {
    const aliases = entry.aliases || []
    return id === extractFilename(entry.src) || aliases.includes(id)
  })[0]

  const filePath = path.join(__dirname, "../../../../../public/img", image.src)
  const [width, height] = image.resolution
    .split("x")
    .map((value) => parseInt(value, 10))

  const buffer = await sharp(filePath)
    .resize({ width: width * 2, height: height * 2, kernel: "nearest" })
    .toBuffer()

  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
    },
  })
}
