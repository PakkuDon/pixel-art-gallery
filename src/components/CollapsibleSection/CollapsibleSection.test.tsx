import React from "react"
import { screen, fireEvent, render } from "@testing-library/react"

import { CollapsibleSection } from "./CollapsibleSection"

describe("CollapsibleSection", () => {
  it("is closed by default", () => {
    render(<CollapsibleSection label="Label">Content</CollapsibleSection>)
    expect(screen.queryByText("Content")).not.toBeInTheDocument()
  })

  it("displays passed in children when open", () => {
    render(<CollapsibleSection label="Label">Content</CollapsibleSection>)
    fireEvent.click(screen.getByLabelText("Show Label"))
    expect(screen.getByText("Content")).toBeInTheDocument()
  })
})
