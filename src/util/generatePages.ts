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

  const previewMetatags = `
    <meta property="og:image" content="https://pakkudon.github.io/pixel-art-gallery/img/${pixelArt.src}" />
    <meta property="og:title" content="${pixelArt.title}" />
  `
  const title = `Pixel Art Gallery - ${filename}`

  const pageHtml = baseHtml
    .replace("</head>", `${previewMetatags}</head>`)
    .replace("<title>Pixel Art Gallery</title>", `<title>${title}</title>`)

  fs.writeFile(outputFilePath, pageHtml, (error) => {
    if (error) {
      console.error(error)
    } else {
      console.log(`Wrote to dist/${filename}.html`)
    }
  })

  const aliases = pixelArt.aliases || []

  aliases.forEach((alias) => {
    const aliasFilePath = path.join(__dirname, `../../dist/${alias}.html`)
    const redirectSnippet = `
    <p>
      Redirecting you to Pixel Art Gallery. Click <a href="https://pakkudon.github.io/pixel-art-gallery">here</a> if you are not redirected automatically.
    </p>
    <script>
      let redirectTarget = window.location.href.replace('${alias}', '${filename}')
      console.log(redirectTarget)
      window.location.replace(redirectTarget)
    </script>
    `
    const htmlForRedirect = pageHtml.replace("</body>", redirectSnippet)
    fs.writeFile(aliasFilePath, htmlForRedirect, (error) => {
      if (error) {
        console.error(error)
      } else {
        console.log(`Wrote to dist/${filename}.html`)
      }
    })
  })
})
