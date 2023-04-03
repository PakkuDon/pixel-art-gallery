import { PixelArtEntry } from "../data/index"

const matchesSearchQuery = (searchQuery: string) => (entry: PixelArtEntry) => {
  const lowerCaseSearchQuery = searchQuery.toLowerCase()
  return (
    (entry.title && entry.title.toLowerCase().includes(lowerCaseSearchQuery)) ||
    entry.description?.toLowerCase().includes(lowerCaseSearchQuery) ||
    entry.tags.some((tag) => tag.toLowerCase() === lowerCaseSearchQuery)
  )
}

export { matchesSearchQuery }
