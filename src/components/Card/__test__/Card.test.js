import React from "react"
import { render } from "@testing-library/react"

import Card from "../Card"

describe("Card", () => {
  it("matches snapshot", () => {
    const children = <div>Hello world</div>
    const { container } = render(<Card>{children}</Card>)

    expect(container).toMatchSnapshot()
  })
})
