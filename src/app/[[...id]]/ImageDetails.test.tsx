import React from "react"
import { screen, render } from "@testing-library/react"

import { ImageDetails } from "./ImageDetails"
import { PixelArtRepository } from "../../PixelArtRepository"

// Required as <ImageDetails /> renders a pagination component
// which uses Next.js' useSearchParms function to determine
// which images to link to
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useSearchParams: () => ({ get: () => "" }),
}))

describe("ImageDetails", () => {
  it("renders image details", () => {
    const img = {
      src: "abc123.png",
      title: "Test image",
      description: "Image description",
      palette: {
        name: "Some palette",
      },
      resolution: "1x1",
      date: "2000-01-01T00:00+00:00",
      tags: ["test"],
    }
    PixelArtRepository.load([img])

    render(<ImageDetails image={img} />)

    expect(screen.getByText("Test image")).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("src", "img/abc123.png")
    expect(screen.getByText("Image description")).toBeInTheDocument()
    expect(screen.getByText(/Jan 1 2000 12:00 AM/)).toBeInTheDocument()
    expect(screen.getByText("test")).toBeInTheDocument()
  })

  it("renders placeholders for navigational links if previous and next image not available", () => {
    const img = {
      src: "abc123.png",
      title: "Test image",
      description: "Image description",
      palette: {
        name: "Some palette",
      },
      resolution: "1x1",
      date: "2000-01-01T00:00+10:00",
      tags: ["test"],
    }
    PixelArtRepository.load([img])

    render(<ImageDetails image={img} />)

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
      resolution: "1x1",
      date: "2000-01-01T00:00+10:00",
      tags: ["test"],
    }
    const nextImage = {
      ...img,
      src: "nextImage.png",
    }
    // Images loaded in reverse order as they are reversed in UI
    PixelArtRepository.load([nextImage, img])

    render(<ImageDetails image={img} />)

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
      resolution: "1x1",
      date: "2000-01-01T00:00+10:00",
      tags: ["test"],
    }
    const previousImage = {
      ...img,
      src: "previousImage.png",
    }
    // Images loaded in reverse order as they are reversed in UI
    PixelArtRepository.load([img, previousImage])

    render(<ImageDetails image={img} />)

    expect(screen.getByRole("link", { name: "Previous" })).toHaveAttribute(
      "href",
      "/previousImage"
    )
  })
})
