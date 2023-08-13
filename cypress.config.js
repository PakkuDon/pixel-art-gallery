const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080/pixel-art-gallery",
    supportFile: false,
  },
})
