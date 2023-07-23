/**
 * @type {import('next').NextConfig}
 */

const path = require("path")
const basePath = process.env.BASE_PATH ?? ""
const distDir = process.env.IS_DEPLOY ? "dist" : path.join("dist", basePath)

const nextConfig = {
  output: "export",
  distDir,
  basePath,
  trailingSlash: true,
}

module.exports = nextConfig
