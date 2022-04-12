import React, { useState, useEffect, useCallback } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import classnames from "classnames"

import Sidebar from "./components/Sidebar"
import ImageDetails from "./components/ImageDetails"
import extractFilename from "./util/extractFilename"
import PixelArtRepository from "./PixelArtRepository"
import { PixelArtEntry } from "./data"

PixelArtRepository.load()

interface PixelArtGalleryProps {
  prefersDarkTheme?: boolean
}

const PixelArtGallery = ({ prefersDarkTheme }: PixelArtGalleryProps) => {
  const [entries, setPixelArtEntries] = useState(
    PixelArtRepository.findAll().reverse()
  )
  const [selectedImage, setSelectedImage] = useState(entries[0])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [params, setParams] = useSearchParams()
  const { id } = useParams()
  const navigate = useNavigate()

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
    if (selectedImage) {
      const filename = extractFilename(selectedImage.src)
      document.title = `Pixel Art Gallery - ${filename}`
    } else {
      document.title = "Pixel Art Gallery"
    }
  }, [selectedImage])

  const onImageSelect = useCallback(
    (image: PixelArtEntry) => {
      const searchQuery = new URLSearchParams(params).get("q")?.trim() || ""
      const queryString = searchQuery ? `?q=${searchQuery}` : ""

      const selectedFilename = extractFilename(image.src)
      navigate(`/${selectedFilename}${queryString}`)
    },
    [history, params]
  )

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
    <div
      className={classnames("sidebar-layout", {
        "dark-theme": prefersDarkTheme,
        "light-theme": !prefersDarkTheme,
      })}
    >
      <Sidebar
        entries={entries}
        searchQuery={new URLSearchParams(params).get("q") || ""}
        selectedImage={selectedImage}
        onImageSelect={onImageSelect}
        onSearchQueryChange={onSearchQueryChange}
      />
      <ImageDetails
        image={selectedImage}
        previousImage={entries[selectedIndex - 1]}
        nextImage={entries[selectedIndex + 1]}
      />
    </div>
  )
}

export default PixelArtGallery
