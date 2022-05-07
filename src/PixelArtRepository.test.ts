import PixelArtRepository from "./PixelArtRepository"

describe("PixelArtRepository", () => {
  describe(".findAll", () => {
    it("returns entries that match predicate", () => {
      const entry = {
        src: "img.png",
        title: "foo",
        date: "2000-01-01 23:59 UTC+1100",
        tags: [],
      }
      const otherEntry = {
        src: "img.jpg",
        title: "bar",
        date: "2000-01-01 23:59 UTC+1100",
        tags: [],
      }

      PixelArtRepository.load([entry, otherEntry])

      expect(
        PixelArtRepository.findAll((image) => image.title === "foo")
      ).toEqual([entry])
    })

    it("returns empty array when there are no matches", () => {
      PixelArtRepository.load([
        {
          src: "img.png",
          title: "foo",
          date: "2000-01-01 23:59 UTC+1100",
          tags: [],
        },
      ])

      expect(PixelArtRepository.findAll(() => false)).toEqual([])
    })
  })
})
