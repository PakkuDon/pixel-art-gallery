import React from "react"
import { MemoryRouter } from "react-router-dom"
import { screen, render } from "@testing-library/react"

import { ImageDetails } from "./ImageDetails"

describe("ImageDetails", () => {
  it("renders image details", () => {
    const img = {
      src: "abc123.png",
      title: "Test image",
      description: "Image description",
      palette: {
        name: "Some palette",
      },
      date: "2000-01-01T00:00+00:00",
      tags: ["test"],
    }

    render(
      <MemoryRouter>
        <ImageDetails image={img} />
      </MemoryRouter>
    )

    expect(screen.getByText("Test image")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("src", "img/abc123.png")
    expect(screen.getByText("Image description")).toBeInTheDocument()
    expect(screen.getByText(/Jan 1 2000 12:00 AM/)).toBeInTheDocument()
    expect(screen.getByText("test")).toBeInTheDocument()
  })

  it("renders placeholders for navigational links if previous and next image not provided", () => {
    const img = {
      src: "abc123.png",
      title: "Test image",
      description: "Image description",
      palette: {
        name: "Some palette",
      },
      date: "2000-01-01T00:00+10:00",
      tags: ["test"],
    }

    render(
      <MemoryRouter>
        <ImageDetails image={img} />
      </MemoryRouter>
    )

    expect(screen.getByText("Previous")).toBeInTheDocument()
    expect(
      screen.queryByRole("link", { name: "Previous" })
    ).not.toBeInTheDocument()

    expect(screen.getByText("Next")).toBeInTheDocument()
    expect(screen.queryByRole("link", { name: "Next" })).not.toBeInTheDocument()
  })

  it("renders link to next image if next image provided", () => {
    const img = {
      src: "abc123.png",
      title: "Test image",
      description: "Image description",
      palette: {
        name: "Some palette",
      },
      date: "2000-01-01T00:00+10:00",
      tags: ["test"],
    }
    const nextImage = {
      ...img,
      src: "nextImage.png",
    }

    render(
      <MemoryRouter>
        <ImageDetails image={img} nextImage={nextImage} />
      </MemoryRouter>
    )

    expect(screen.getByRole("link", { name: "Next" })).toHaveAttribute(
      "href",
      "/nextImage"
    )
  })

  it("renders link to previous image if previous image provided", () => {
    const img = {
      src: "abc123.png",
      title: "Test image",
      description: "Image description",
      palette: {
        name: "Some palette",
      },
      date: "2000-01-01T00:00+10:00",
      tags: ["test"],
    }
    const previousImage = {
      ...img,
      src: "previousImage.png",
    }

    render(
      <MemoryRouter>
        <ImageDetails image={img} previousImage={previousImage} />
      </MemoryRouter>
    )

    expect(screen.getByRole("link", { name: "Previous" })).toHaveAttribute(
      "href",
      "/previousImage"
    )
  })
})
