import fs from "fs"
import path from "path"

import pixelArtEntries from "../data"
import extractFilename from "./extractFilename"

pixelArtEntries.forEach((pixelArt) => {
  const filename = extractFilename(pixelArt.src)
  const outputFilePath = path.join(__dirname, `../../dist/${filename}.html`)
  const metaDescription = pixelArt.description.split("\n")[1].trim().replace(/"/g, "&quot;")
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pixel Art Gallery - ${filename}</title>
    <meta property="og:image" content="https://pakkudon.github.io/pixel-art-gallery/img/${pixelArt.src}" />
    <meta property="og:description" content="${metaDescription}" />
  </head>
  <body>
    <p>
      Redirecting you to Pixel Art Gallery. Click <a href="https://pakkudon.github.io/pixel-art-gallery">here</a> if you are not redirected automatically.
    </p>
    <script>
      let redirectTarget = window.location.href.replace("${filename}", '')
      window.location.replace(redirectTarget)
    </script>
  </body>
</html>
  `
  fs.writeFile(outputFilePath, html, (error) => {
    if (error) {
      console.error(error)
    } else {
      console.log(`Wrote to dist/${filename}.html`)
    }
  })
})
