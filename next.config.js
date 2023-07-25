/**
 * @type {import('next').NextConfig}
 */

const path = require("path")

// BASE_PATH defines what subpath the application will be hosted at
// This can be used to see how the app will behave on Github Pages
const basePath = process.env.BASE_PATH ?? ""

// IS_DEPLOY determines whether or not the dist bundle should include
// the basePath. This is not required on Github Pages as the files are
// hosted at the basePath (assuming basePath matches repo name)
const distDir = process.env.IS_DEPLOY ? "dist" : path.join("dist", basePath)

const nextConfig = {
  output: "export",
  distDir,
  basePath,
  trailingSlash: true,
}

module.exports = nextConfig
