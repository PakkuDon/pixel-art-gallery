import pixelArtEntries, { PixelArtEntry } from "./data"

interface Repository {
  entries: PixelArtEntry[]
  load: (entries?: PixelArtEntry[]) => void
  findAll: (predicate?: (image: PixelArtEntry) => boolean) => PixelArtEntry[]
  countByTag: () => Array<{ tag: string; count: number }>
  countBy: (
    groupingFunction: (image: PixelArtEntry) => string
  ) => Array<{ tag: string; count: number }>
}

interface Tally {
  [index: string]: number
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
    const tally: Tally = {}
    const result: Array<{ tag: string; count: number }> = []

    this.entries.forEach((entry: PixelArtEntry) => {
      entry.tags.forEach((tag) => {
        if (tally[tag]) {
          tally[tag] += 1
        } else {
          tally[tag] = 1
        }
      })
    })

    Object.entries(tally).forEach(([tag, count]) => {
      result.push({ tag, count })
    })

    result.sort((a, b) => {
      if (a.count > b.count) {
        return -1
      }
      if (a.count < b.count) {
        return 1
      }
      return a.tag.localeCompare(b.tag)
    })

    return result
  },
  countBy(groupingFunction) {
    const tally: Tally = {}
    const result: Array<{ tag: string; count: number }> = []

    this.entries.forEach((entry: PixelArtEntry) => {
      const key = groupingFunction(entry)
      if (tally[key]) {
        tally[key] += 1
      } else {
        tally[key] = 1
      }
    })

    Object.entries(tally).forEach(([tag, count]) => {
      result.push({ tag, count })
    })

    result.sort((a, b) => {
      if (a.count > b.count) {
        return -1
      }
      if (a.count < b.count) {
        return 1
      }
      return a.tag.localeCompare(b.tag)
    })

    return result
  },
}

export default PixelArtRepository
