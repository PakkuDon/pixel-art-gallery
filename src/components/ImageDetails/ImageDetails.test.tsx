import React from "react"
import { MemoryRouter } from "react-router-dom"
import { screen, render } from "@testing-library/react"

import ImageDetails from "./ImageDetails"

describe("ImageDetails", () => {
  it("renders image details", () => {
    const img = {
      src: "abc123.png",
      title: "Test image",
      description: "Image description",
      date: "2000-01-01 00:00 UTC+1000",
      tags: ["test"],
    }

    render(
      <MemoryRouter>
        <ImageDetails image={img} />
      </MemoryRouter>
    )

    expect(screen.getByText(img.title)).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("src", `img/${img.src}`)
    expect(screen.getByText(img.description)).toBeInTheDocument()
    expect(screen.getByText(img.date)).toBeInTheDocument()
    expect(screen.getByText(img.tags[0])).toBeInTheDocument()
  })

  it("renders placeholders for navigational links if previous and next image not provided", () => {
    const img = {
      src: "abc123.png",
      title: "Test image",
      description: "Image description",
      date: "2000-01-01 00:00 UTC+1000",
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
      date: "2000-01-01 00:00 UTC+1000",
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
      `/nextImage`
    )
  })

  it("renders link to previous image if previous image provided", () => {
    const img = {
      src: "abc123.png",
      title: "Test image",
      description: "Image description",
      date: "2000-01-01 00:00 UTC+1000",
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
      `/previousImage`
    )
  })
})
