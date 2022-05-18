import pixelArtEntries, { PixelArtEntry } from "./data"

interface Repository {
  entries: PixelArtEntry[]
  load: (entries?: PixelArtEntry[]) => void
  findAll: (predicate?: (image: PixelArtEntry) => boolean) => PixelArtEntry[]
  countByTag: () => object
}

const PixelArtRepository: Repository = {
  entries: [],
  load(entries: PixelArtEntry[] = pixelArtEntries) {
    this.entries = entries
  },
  findAll(predicate = () => true) {
    return this.entries.filter(predicate)
  },
  countByTag() {
    interface Tally {
      [index: string]: number
    }
    const tally: Tally = {}

    this.entries.forEach((entry: PixelArtEntry) => {
      entry.tags.forEach((tag) => {
        if (tally[tag]) {
          tally[tag]++
        } else {
          tally[tag] = 1
        }
      })
    })

    return tally
  },
}

export default PixelArtRepository
