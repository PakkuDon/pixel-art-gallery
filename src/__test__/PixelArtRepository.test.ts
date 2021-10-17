import PixelArtRepository from "../PixelArtRepository"

describe("PixelArtRepository", () => {
  describe(".findAll", () => {
    describe("when there are entries that match predicate", () => {
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

      beforeAll(() => {
        PixelArtRepository.load([entry, otherEntry])
      })

      it("returns matching entries", () => {
        expect(
          PixelArtRepository.findAll((image) => image.title === "foo")
        ).toEqual([entry])
      })
    })

    describe("when there are no entries that match predicate", () => {
      beforeAll(() => {
        PixelArtRepository.load([
          {
            src: "img.png",
            title: "foo",
            date: "2000-01-01 23:59 UTC+1100",
            tags: [],
          },
        ])
      })

      it("returns empty array", () => {
        expect(PixelArtRepository.findAll(() => false)).toEqual([])
      })
    })
  })
})
