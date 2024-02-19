/**
 * @type {import('next').NextConfig}
 */

const path = require("path")

// NEXT_PUBLIC_BASE_PATH defines what subpath the application will be hosted at
// This can be used to see how the app will behave on Github Pages
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

// IS_DEPLOY determines whether or not the dist bundle should include
// the basePath. This is not required on Github Pages as the files are
// hosted at the basePath (assuming basePath matches repo name)
let distDir

// Clear distDir to resolve an issue where the dev server
// won't compile if both distDir and output: "export" are set
// See https://github.com/vercel/next.js/issues/61105
if (process.env.NODE_ENV === "development") {
  distDir = undefined
} else {
  distDir = process.env.IS_DEPLOY ? "dist" : path.join("dist", basePath)
}

const nextConfig = {
  output: "export",
  distDir,
  basePath,
  trailingSlash: true,
}

module.exports = nextConfig
