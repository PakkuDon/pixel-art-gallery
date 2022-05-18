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

  describe(".countByTag", () => {
    it("returns a tally containing number of times each tag is used", () => {
      PixelArtRepository.load([
        {
          src: "img.png",
          title: "foo",
          date: "2000-01-01 23:59 UTC+1100",
          tags: ["pixel_dailies", "animal", "bird"],
        },
        {
          src: "img.jpg",
          title: "bar",
          date: "2000-01-01 23:59 UTC+1100",
          tags: ["pixel_dailies", "food"],
        },
        {
          src: "img.gif",
          title: "foobar",
          date: "2000-01-02 23:59 UTC+1100",
          tags: ["noprompt", "landscape"],
        },
      ])

      expect(PixelArtRepository.countByTag()).toEqual({
        pixel_dailies: 2,
        animal: 1,
        bird: 1,
        food: 1,
        landscape: 1,
        noprompt: 1,
      })
    })
  })
})
