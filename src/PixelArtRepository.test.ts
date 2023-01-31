import { PixelArtRepository } from "./PixelArtRepository"

describe("PixelArtRepository", () => {
  describe(".findAll", () => {
    it("returns entries that match predicate", () => {
      const entry = {
        src: "img.png",
        title: "foo",
        palette: {
          name: "Some palette",
        },
        date: "2000-01-01T23:59+11:00",
        tags: [],
      }
      const otherEntry = {
        src: "img.jpg",
        title: "bar",
        palette: {
          name: "Some palette",
        },
        date: "2000-01-01T23:59+11:00",
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
          palette: {
            name: "Some palette",
          },
          date: "2000-01-01T23:59+11:00",
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
          palette: {
            name: "Some palette",
          },
          date: "2000-01-01T23:59+11:00",
          tags: ["pixel_dailies", "animal"],
        },
        {
          src: "img.jpg",
          title: "bar",
          palette: {
            name: "Some palette",
          },
          date: "2000-01-01T23:59+11:00",
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
          palette: {
            name: "Some palette",
          },
          date: "2000-01-01T23:59+11:00",
          tags: ["pixel_dailies"],
        },
        {
          src: "img.jpg",
          title: "bar",
          palette: {
            name: "Some palette",
          },
          date: "2000-01-01T23:59+11:00",
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

  describe(".countBy", () => {
    it("returns tally where results are grouped by provided function", () => {
      PixelArtRepository.load([
        {
          src: "img.png",
          title: "foo",
          palette: {
            name: "Some palette",
          },
          date: "2000-01-01T23:59+11:00",
          tags: ["pixel_dailies", "animal"],
        },
        {
          src: "img.jpg",
          title: "bar",
          palette: {
            name: "Some palette",
          },
          date: "2000-01-01T23:59+11:00",
          tags: ["pixel_dailies"],
        },
        {
          src: "img.bmp",
          title: "foobar",
          palette: {
            name: "Some palette",
          },
          date: "2001-01-01T23:59+11:00",
          tags: ["noprompt"],
        },
      ])

      expect(PixelArtRepository.countBy((entry) => entry.tags[0])).toEqual([
        {
          key: "pixel_dailies",
          count: 2,
        },
        {
          key: "noprompt",
          count: 1,
        },
      ])
      expect(
        PixelArtRepository.countBy((entry) => entry.date.split("-")[0])
      ).toEqual([
        {
          key: "2000",
          count: 2,
        },
        {
          key: "2001",
          count: 1,
        },
      ])
    })

    it("returns tally sorted by field name if counts are the same", () => {
      PixelArtRepository.load([
        {
          src: "img.png",
          title: "foo",
          palette: {
            name: "Some palette",
          },
          date: "2000-01-01T23:59+11:00",
          tags: ["pixel_dailies"],
        },
        {
          src: "img.jpg",
          title: "bar",
          palette: {
            name: "Some palette",
          },
          date: "2000-01-01T23:59+11:00",
          tags: ["noprompt"],
        },
      ])

      expect(PixelArtRepository.countBy((entry) => entry.tags[0])).toEqual([
        {
          key: "noprompt",
          count: 1,
        },
        {
          key: "pixel_dailies",
          count: 1,
        },
      ])
    })
  })
})
