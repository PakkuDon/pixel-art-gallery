import { matchesSearchQuery } from "./matchesSearchQuery"
import { PixelArtEntry } from "../data"

describe("matchesSearchQuery", () => {
  it("matches when entry's title includes query regardless of case", () => {
    const entry: PixelArtEntry = {
      src: "",
      title: "foobar",
      palette: {
        name: "",
      },
      resolution: "1x1",
      date: "",
      tags: [],
    }

    expect(matchesSearchQuery("foo", entry)).toBeTruthy()
    expect(matchesSearchQuery("FOO", entry)).toBeTruthy()
    expect(matchesSearchQuery("baR", entry)).toBeTruthy()
    expect(matchesSearchQuery("something", entry)).toBeFalsy()
  })

  it("matches when entry's description includes query regardless of case", () => {
    const entry: PixelArtEntry = {
      src: "",
      title: "",
      description: "something",
      palette: {
        name: "",
      },
      resolution: "1x1",
      date: "",
      tags: [],
    }

    expect(matchesSearchQuery("something", entry)).toBeTruthy()
    expect(matchesSearchQuery("SOME", entry)).toBeTruthy()
  })

  it("matches when entry's tags include query regardless of case", () => {
    const entry: PixelArtEntry = {
      src: "",
      title: "",
      palette: {
        name: "",
      },
      resolution: "1x1",
      date: "",
      tags: ["pixels", "landscape"],
    }

    expect(matchesSearchQuery("pixels", entry)).toBeTruthy()
    expect(matchesSearchQuery("pixelS", entry)).toBeTruthy()
    expect(matchesSearchQuery("landscape", entry)).toBeTruthy()
    expect(matchesSearchQuery("land", entry)).toBeFalsy()
  })
})
