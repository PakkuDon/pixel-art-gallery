import pixelArtEntries from "./data"

export default {
  load(entries = pixelArtEntries) {
    this.entries = entries
  },
  findAll(predicate = () => true) {
    return this.entries.filter(predicate)
  },
}
