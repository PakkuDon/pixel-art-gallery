import React, { useState, useEffect, useCallback } from "react"
import { useParams, useSearchParams } from "react-router-dom"

import { Statistics } from "./Statistics"
import { Sidebar } from "../components/Sidebar"
import { ImageDetails } from "../components/ImageDetails"
import { extractFilename } from "../util/extractFilename"
import { PixelArtRepository } from "../PixelArtRepository"

const PixelArtGallery = () => {
  const [entries, setPixelArtEntries] = useState(
    PixelArtRepository.findAll().reverse()
  )
  const [countByTag] = useState(PixelArtRepository.countByTag())
  const [selectedImage, setSelectedImage] = useState(entries[0])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [params, setParams] = useSearchParams()
  const { id } = useParams()

  useEffect(() => {
    let selectedFilename = ""

    if (id && selectedImage?.src !== id) {
      selectedFilename = id
    }

    if (selectedFilename) {
      setSelectedImage(
        entries.find(
          (image) => selectedFilename === extractFilename(image.src)
        ) ?? entries[0]
      )
    }
  }, [id])

  useEffect(() => {
    if (selectedImage) {
      setSelectedIndex(
        entries.findIndex((image) => image.src === selectedImage.src)
      )
    } else {
      setSelectedIndex(0)
    }
  }, [selectedImage])

  useEffect(() => {
    if (id === "stats") {
      document.title = "Pixel Art Gallery - Portfolio stats"
    } else if (selectedImage) {
      const filename = extractFilename(selectedImage.src)
      document.title = `Pixel Art Gallery - ${filename}`
    } else {
      document.title = "Pixel Art Gallery"
    }
  }, [selectedImage])

  const onSearchQueryChange = useCallback(
    (query: string) => {
      setParams(new URLSearchParams({ q: encodeURIComponent(query) }))
    },
    [setParams]
  )

  useEffect(() => {
    const searchQuery = decodeURIComponent(
      new URLSearchParams(params).get("q")?.trim().toLowerCase() || ""
    )

    const matchingEntries = PixelArtRepository.findAll(
      (entry) =>
        (entry.title && entry.title.toLowerCase().includes(searchQuery)) ||
        entry.description?.toLowerCase().includes(searchQuery) ||
        entry.tags.some((tag) => tag.toLowerCase() === searchQuery)
    ).reverse()

    setPixelArtEntries(matchingEntries)
  }, [params, setPixelArtEntries])

  return (
    <div className="sidebar-layout">
      <Sidebar
        entries={entries}
        searchQuery={new URLSearchParams(params).get("q") || ""}
        selectedImage={selectedImage}
        onSearchQueryChange={onSearchQueryChange}
        countByTag={countByTag}
      />
      {id === "stats" ? (
        <Statistics searchQuery={new URLSearchParams(params).get("q") || ""} />
      ) : (
        <ImageDetails
          image={selectedImage}
          previousImage={entries[selectedIndex - 1]}
          nextImage={entries[selectedIndex + 1]}
        />
      )}
    </div>
  )
}

export { PixelArtGallery }
