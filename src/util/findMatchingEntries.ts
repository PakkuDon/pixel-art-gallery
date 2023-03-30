import { PixelArtEntry } from "../data/index"

const findMatchingEntries = (searchQuery: string) => (entry: PixelArtEntry) =>
  (entry.title && entry.title.toLowerCase().includes(searchQuery)) ||
  entry.description?.toLowerCase().includes(searchQuery) ||
  entry.tags.some((tag) => tag.toLowerCase() === searchQuery)

export { findMatchingEntries }
