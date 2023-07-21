/**
 * @type {import('next').NextConfig}
 */

const path = require("path")
const basePath = process.env.BASE_PATH ?? ""

const nextConfig = {
  output: "export",
  distDir: path.join("dist", basePath),
  basePath,
  trailingSlash: true,
}

module.exports = nextConfig
