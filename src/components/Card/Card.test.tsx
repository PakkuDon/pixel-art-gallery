import React from "react"
import { screen, render } from "@testing-library/react"

import Card from "./Card"

describe("Card", () => {
  it("renders children", () => {
    const children = <div>Hello world</div>
    render(<Card>{children}</Card>)

    expect(screen.getByText("Hello world")).toBeInTheDocument()
  })
})
