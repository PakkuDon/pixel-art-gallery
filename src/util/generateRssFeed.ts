/* eslint-disable no-console */
import fs from "fs"
import path from "path"
import marked from "marked"

import PixelArtRepository from "../PixelArtRepository"
import { PixelArtEntry } from "../data"
import extractFilename from "./extractFilename"

PixelArtRepository.load()
const pixelArtEntries = PixelArtRepository.findAll()

// Date#toGMTString() is deprecated but still present in some browsers
declare global {
  interface Date {
    toGMTString: () => string,
  }
}

const generateRssFeed = ({ entries = [], limit }: { entries: PixelArtEntry[], limit?: number }) => {
  marked.setOptions({
    breaks: true,
    gfm: true,
    xhtml: true,
  })
  let filteredEntries = entries

  if (limit) {
    filteredEntries = entries.slice(-limit)
  }

  const feedItems = filteredEntries.map((pixelArt) => {
    const filename = extractFilename(pixelArt.src)
    const title = (pixelArt.title || pixelArt.description || "").split("\n")[1].trim()

    return `
      <item>
        <title>${title}</title>
        <description>
          <![CDATA[<img src="https://pakkudon.github.io/pixel-art-gallery/img/${
            pixelArt.src
          }" alt="${filename}" />]]>
          <p>${pixelArt.title || ""}</p>
          ${marked((pixelArt.description || "").replace(/ +/g, " "))}
        </description>
        <link>https://pakkudon.github.io/pixel-art-gallery/${filename}</link>
        <pubDate>${new Date(pixelArt.date).toGMTString()}</pubDate>
      </item>
    `
  })

  return `<?xml version="1.0" encoding="ISO-8859-1" ?>
    <rss version="2.0">
      <channel>
        <title>Pixel Art Gallery</title>
        <link>https://pakkudon.github.io/pixel-art-gallery/</link>
        <description>Collection of pixel art pieces</description>
        <pubDate>${new Date().toGMTString()}</pubDate>
        ${feedItems.join("\n")}
      </channel>
    </rss>
  `
}

const outputFile = path.join(__dirname, "../../dist/feed.xml")

if (process.env.NODE_ENV !== "test") {
  const xml = generateRssFeed({ entries: pixelArtEntries, limit: 50 })
  fs.writeFile(outputFile, xml, (error) => {
    if (error) {
      console.error(error)
    } else {
      console.log(`RSS feed written to ${outputFile}`)
    }
  })
}

export default generateRssFeed
