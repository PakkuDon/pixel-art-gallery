/* eslint-disable no-console */
import fs from "fs"
import path from "path"
import marked from "marked"

import pixelArtEntries from "../data"
import extractFilename from "./extractFilename"

marked.setOptions({
  breaks: true,
  gfm: true,
  xhtml: true,
})

const outputFile = path.join(__dirname, "../../dist/feed.xml")

const feedItems = pixelArtEntries.map((pixelArt) => {
  const filename = extractFilename(pixelArt.src)
  const title = pixelArt.description.split("\n")[1].trim()

  return `
    <item>
      <title>${title}</title>
      <description>
        <![CDATA[<img src="https://pakkudon.github.io/pixel-art-gallery/img/${
          pixelArt.src
        }" alt="${filename}" />]]>
        ${marked(pixelArt.description.replace(/ +/g, " "))}
      </description>
      <link>https://pakkudon.github.io/pixel-art-gallery/${filename}</link>
      <pubDate>${new Date(pixelArt.date).toGMTString()}</pubDate>
    </item>
  `
})

const xml = `<?xml version="1.0" encoding="ISO-8859-1" ?>
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

fs.writeFile(outputFile, xml, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.log(`RSS feed written to ${outputFile}`)
  }
})
