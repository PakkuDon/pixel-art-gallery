import React from "react"
import { screen, render } from "@testing-library/react"

import { TagList } from "./TagList"

describe("TagList", () => {
  it("renders list of tags", async () => {
    const tagList = [
      { tag: "someTag", count: 3 },
      { tag: "anotherTag", count: 1 },
    ]

    render(<TagList countByTag={tagList} limit={5} />)

    expect(screen.getByText(/someTag .*3/)).toBeInTheDocument()
    expect(screen.getByText(/anotherTag .*1/)).toBeInTheDocument()
  })

  it("renders link to filter entries by tag and number of times tag is used", () => {
    const tagList = [{ tag: "someTag", count: 3 }]

    render(<TagList countByTag={tagList} limit={5} />)

    expect(screen.queryByRole("link", { name: /someTag .*3/ })).toHaveAttribute(
      "href",
      "?q=%23someTag",
    )
  })

  it("limits number of tags to those specified in limit prop", () => {
    const tagList = [
      { tag: "tag1", count: 1 },
      { tag: "tag2", count: 1 },
      { tag: "tag3", count: 1 },
      { tag: "tag4", count: 1 },
      { tag: "tag5", count: 1 },
      { tag: "tag6", count: 1 },
      { tag: "tag7", count: 1 },
      { tag: "tag8", count: 1 },
      { tag: "tag9", count: 1 },
      { tag: "tag10", count: 1 },
      { tag: "tag11", count: 1 },
    ]

    render(<TagList countByTag={tagList} limit={10} />)

    expect(screen.getByText(/tag10/)).toBeInTheDocument()
    expect(screen.queryByText(/tag11/)).not.toBeInTheDocument()
  })

  it("displays all provided tags if no limit is set", () => {
    const tagList = [
      { tag: "tag1", count: 1 },
      { tag: "tag2", count: 1 },
      { tag: "tag3", count: 1 },
      { tag: "tag4", count: 1 },
      { tag: "tag5", count: 1 },
      { tag: "tag6", count: 1 },
      { tag: "tag7", count: 1 },
      { tag: "tag8", count: 1 },
      { tag: "tag9", count: 1 },
      { tag: "tag10", count: 1 },
      { tag: "tag11", count: 1 },
    ]

    render(<TagList countByTag={tagList} />)

    expect(screen.getByText(/tag1 \(/)).toBeInTheDocument()
    expect(screen.getByText(/tag11/)).toBeInTheDocument()
  })
})
