/* eslint-disable no-console */
import fs from "fs"
import path from "path"

import PixelArtRepository from "../PixelArtRepository"
import extractFilename from "./extractFilename"

PixelArtRepository.load()
const pixelArtEntries = PixelArtRepository.findAll()

const baseHtmlPath = path.join(__dirname, "../../dist/index.html")
const baseHtml = fs.readFileSync(baseHtmlPath, "utf8")

pixelArtEntries.forEach((pixelArt) => {
  const filename = extractFilename(pixelArt.src)
  const outputFilePath = path.join(__dirname, `../../dist/${filename}.html`)
  const metaDescription = pixelArt.description
    .split("\n")[1]
    .trim()
    .replace(/"/g, "&quot;")

  const previewMetatags = `
    <meta property="og:image" content="https://pakkudon.github.io/pixel-art-gallery/img/${pixelArt.src}" />
    <meta property="og:description" content="${metaDescription}" />
  `
  const title = `Pixel Art Gallery - ${filename}`

  const html = baseHtml
    .replace("</head>", `${previewMetatags}</head>`)
    .replace("<title>Pixel Art Gallery</title>", `<title>${title}</title>`)

  fs.writeFile(outputFilePath, html, (error) => {
    if (error) {
      console.error(error)
    } else {
      console.log(`Wrote to dist/${filename}.html`)
    }
  })
})
