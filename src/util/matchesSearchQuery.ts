import { PixelArtEntry } from "../data/index"

const matchesSearchQuery = (searchQuery: string) => (entry: PixelArtEntry) => {
  searchQuery = searchQuery.toLowerCase()
  return (
    entry.title && entry.title.toLowerCase().includes(searchQuery)) ||
    entry.description?.toLowerCase().includes(searchQuery) ||
    entry.tags.some((tag) => tag.toLowerCase() === searchQuery
  )
}

export { matchesSearchQuery }
