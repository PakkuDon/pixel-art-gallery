import React from "react"
import { createRoot } from "react-dom/client"

import { App } from "./App"

const container = document.querySelector("#app")

if (container) {
  const root = createRoot(container)
  root.render(<App />)
} else {
  throw new Error(
    "Failed to render application. Container element #app not found"
  )
}
