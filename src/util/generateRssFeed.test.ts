import generateRssFeed from "./generateRssFeed"

describe("generateRssFeed", () => {
  beforeAll(() => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date("2020-01-01").getTime())
  })

  it("generates RSS feed containing pixel art entries", () => {
    const entries = [
      {
        src: "example.png",
        title: "Example image with markdown",
        description: `
          Palette: [Example link](https://example.com)
        `,
        date: "2020-01-01T00:00+11:00",
        tags: ["a", "b"],
      },
    ]

    expect(generateRssFeed({ entries })).toMatchSnapshot()
  })

  describe("when there are more entries than given limit", () => {
    it("truncates feed to last x items", () => {
      const limit = 1
      const entries = [
        {
          src: "entry-that-will-be-omitted.png",
          title: "Example image with markdown",
          description: `
            Palette: [Example link](https://example.com)
          `,
          date: "2020-01-01T00:00+1000",
          tags: ["a", "b"],
        },
        {
          src: "entry-that-will-be-included.png",
          title: "Example image with markdown",
          description: `
            Palette: [Example link](https://example.com)
          `,
          date: "2020-01-01T00:00+1000",
          tags: ["a", "b"],
        },
      ]
      const feed = generateRssFeed({ entries, limit })
      const numberOfEntries = feed.match("<item>")?.length || 0

      expect(numberOfEntries).toBe(limit)
    })
  })
})
