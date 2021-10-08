import React, { useState, useEffect, useCallback } from "react"
import { useHistory, useParams } from "react-router-dom"

import Sidebar from "./components/Sidebar"
import ImageDetails from "./components/ImageDetails"
import extractFilename from "./util/extractFilename"
import PixelArtRepository from "./PixelArtRepository"

PixelArtRepository.load()

interface ParamTypes {
  id: string
}

const PixelArtGallery = () => {
  const [entries, setPixelArtEntries] = useState(
    PixelArtRepository.findAll().reverse()
  )
  const [selectedImage, setSelectedImage] = useState(entries[0])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const { id } = useParams<ParamTypes>()
  const history = useHistory()

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
      history.replace(`/${selectedFilename}`)
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
    (image) => {
      const selectedFilename = extractFilename(image.src)
      history.replace(`/${selectedFilename}`)
    },
    [history]
  )

  const onSearchQueryChange = useCallback(
    (query) => {
      setSearchQuery(query)
    },
    [setSearchQuery]
  )

  useEffect(() => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase()
    const matchingEntries = PixelArtRepository.findAll(
      (entry) =>
        (entry.title &&
          entry.title.toLowerCase().includes(lowerCaseSearchQuery)) ||
        entry.description?.toLowerCase().includes(lowerCaseSearchQuery) ||
        entry.tags.some((tag) => tag.toLowerCase() === lowerCaseSearchQuery)
    ).reverse()

    setPixelArtEntries(matchingEntries)
  }, [searchQuery, setPixelArtEntries])

  return (
    <div className="sidebar-layout">
      <Sidebar
        entries={entries}
        searchQuery={searchQuery}
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
