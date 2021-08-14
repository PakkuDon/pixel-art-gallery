import pixelArtEntries, { PixelArtEntry } from "./data"

interface Repository {
  entries: PixelArtEntry[]
  load: (entries?: PixelArtEntry[]) => void
  findAll: (predicate?: () => boolean) => PixelArtEntry[]
}

const PixelArtRepository: Repository = {
  entries: [],
  load(entries: PixelArtEntry[] = pixelArtEntries) {
    this.entries = entries
  },
  findAll(predicate = () => true) {
    return this.entries.filter(predicate)
  },
}

export default PixelArtRepository
