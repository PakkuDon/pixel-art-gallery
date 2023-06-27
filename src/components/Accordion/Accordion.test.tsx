import React from "react"
import { screen, fireEvent, render } from "@testing-library/react"

import { Accordion } from "./Accordion"

describe("Accordion", () => {
  it("is closed by default", () => {
    render(<Accordion label="Label">Content</Accordion>)
    expect(screen.queryByText("Content")).not.toBeInTheDocument()
  })

  it("displays passed in children when open", () => {
    render(<Accordion label="Label">Content</Accordion>)
    fireEvent.click(screen.getByLabelText("Show Label"))
    expect(screen.getByText("Content")).toBeInTheDocument()
  })
})
