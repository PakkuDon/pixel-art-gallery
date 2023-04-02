import React, { useState, useEffect, useCallback } from "react"
import { useParams, useSearchParams } from "react-router-dom"

import { Statistics } from "./Statistics"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { ImageDetails } from "../components/ImageDetails/ImageDetails"
import { extractFilename } from "../util/extractFilename"
import { matchesSearchQuery } from "../util/matchesSearchQuery"
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
        PixelArtRepository.findAll(
          (image) => selectedFilename === extractFilename(image.src)
        )[0] ?? entries[0]
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
      document.title = "Portfolio stats - Pixel Art Gallery"
    } else if (selectedImage) {
      const filename = extractFilename(selectedImage.src)
      document.title = `${filename} - Pixel Art Gallery`
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
      new URLSearchParams(params).get("q")?.trim() || ""
    )

    const matchingEntries = PixelArtRepository.findAll(
      matchesSearchQuery(searchQuery)
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
