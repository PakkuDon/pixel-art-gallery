import { generateRssFeed } from "../../util/generateRssFeed"
import { PixelArtRepository } from "../../PixelArtRepository"

PixelArtRepository.load()
const pixelArtEntries = PixelArtRepository.findAll()

export async function GET() {
  const xml = generateRssFeed({ entries: pixelArtEntries, limit: 50 })

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
