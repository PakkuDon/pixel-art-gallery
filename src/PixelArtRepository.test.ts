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
    it("returns tally containing number of times each tag is used sorted in descending order", () => {
      PixelArtRepository.load([
        {
          src: "img.png",
          title: "foo",
          date: "2000-01-01 23:59 UTC+1100",
          tags: ["pixel_dailies", "animal"],
        },
        {
          src: "img.jpg",
          title: "bar",
          date: "2000-01-01 23:59 UTC+1100",
          tags: ["pixel_dailies"],
        },
      ])

      expect(PixelArtRepository.countByTag()).toEqual([
        {
          tag: "pixel_dailies",
          count: 2,
        },
        {
          tag: "animal",
          count: 1,
        },
      ])
    })

    it("returns tally sorted by tags if counts are the same", () => {
      PixelArtRepository.load([
        {
          src: "img.png",
          title: "foo",
          date: "2000-01-01 23:59 UTC+1100",
          tags: ["pixel_dailies"],
        },
        {
          src: "img.jpg",
          title: "bar",
          date: "2000-01-01 23:59 UTC+1100",
          tags: ["noprompt"],
        },
      ])

      expect(PixelArtRepository.countByTag()).toEqual([
        {
          tag: "noprompt",
          count: 1,
        },
        {
          tag: "pixel_dailies",
          count: 1,
        },
      ])
    })
  })
})
