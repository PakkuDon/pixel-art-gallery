import React from "react"
import { MemoryRouter } from "react-router-dom"
import { screen, render } from "@testing-library/react"

import { SidebarEntry } from "./SidebarEntry"

describe("SidebarEntry", () => {
  it("renders thumbnail and link to image", () => {
    const img = {
      src: "abc123.png",
      title: "Test image",
      palette: {
        name: "Some palette",
      },
      resolution: "1x1",
      date: "2000-01-01T00:00+10:00",
      tags: ["test"],
    }

    render(
      <MemoryRouter>
        <SidebarEntry entry={img} />
      </MemoryRouter>
    )

    expect(screen.getByRole("link")).toHaveAttribute("href", "/abc123")
    expect(screen.getByRole("img")).toHaveAttribute("src", "img/abc123.png")
  })

  it("highlights image if selected", () => {
    const img = {
      src: "abc123.png",
      title: "Test image",
      palette: {
        name: "Some palette",
      },
      resolution: "1x1",
      date: "2000-01-01T00:00+10:00",
      tags: ["test"],
    }

    render(
      <MemoryRouter>
        <SidebarEntry entry={img} isSelected />
      </MemoryRouter>
    )

    expect(screen.getByRole("link")).toHaveClass("selected")
  })

  it("appends search query to link", () => {
    const img = {
      src: "abc123.png",
      title: "Test image",
      palette: {
        name: "Some palette",
      },
      resolution: "1x1",
      date: "2000-01-01T00:00+10:00",
      tags: ["test"],
    }
    const searchQuery = "pixel"

    render(
      <MemoryRouter>
        <SidebarEntry entry={img} searchQuery={searchQuery} />
      </MemoryRouter>
    )

    expect(screen.getByRole("link")).toHaveAttribute("href", "/abc123?q=pixel")
  })

  it("appends tag with hash encoded if present in search query", () => {
    const img = {
      src: "abc123.png",
      title: "Test image",
      palette: {
        name: "Some palette",
      },
      resolution: "1x1",
      date: "2000-01-01T00:00+10:00",
      tags: ["test"],
    }
    const searchQuery = "something else #tags"

    render(
      <MemoryRouter>
        <SidebarEntry entry={img} searchQuery={searchQuery} />
      </MemoryRouter>
    )

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/abc123?q=something else %2523tags"
    )
  })
})
