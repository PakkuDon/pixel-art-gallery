import { PixelArtEntry } from "../data/index"

const matchesSearchQuery = (searchQuery: string, entry: PixelArtEntry) => {
  const lowerCaseSearchQuery = searchQuery.toLowerCase()
  if (lowerCaseSearchQuery.startsWith("#")) {
    const searchTag = lowerCaseSearchQuery.substring(1)
    return entry.tags.some((tag) => tag.toLowerCase() === searchTag)
  }
  return (
    (entry.title && entry.title.toLowerCase().includes(lowerCaseSearchQuery)) ||
    entry.description?.toLowerCase().includes(lowerCaseSearchQuery) ||
    false
  )
}

export { matchesSearchQuery }
