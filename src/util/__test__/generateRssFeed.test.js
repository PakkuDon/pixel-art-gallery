import generateRssFeed from "../generateRssFeed"

describe("generateRssFeed", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern")
    jest.setSystemTime(new Date("2020-01-01").getTime())
  })

  it("generates RSS feed containing pixel art entries", () => {
    const entries = [
      {
        src: "example.png",
        description: `
          Example image with markdown
          Palette: [Example link](https://example.com)
        `,
        date: "2020-01-01 00:00",
        tags: ["a", "b"],
      },
    ]

    expect(generateRssFeed(entries)).toMatchSnapshot()
  })
})
