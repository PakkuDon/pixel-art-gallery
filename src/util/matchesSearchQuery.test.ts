import { matchesSearchQuery } from "./matchesSearchQuery"
import { PixelArtEntry } from "../data"

describe("matchesSearchQuery", () => {
  it("returns true when entry's title includes query regardless of case", () => {
    const entry: PixelArtEntry = {
      src: "",
      title: "foobar",
      palette: {
        name: "",
      },
      date: "",
      tags: [],
    }

    expect(matchesSearchQuery("foo", entry)).toBeTruthy()
    expect(matchesSearchQuery("FOO", entry)).toBeTruthy()
    expect(matchesSearchQuery("baR", entry)).toBeTruthy()
    expect(matchesSearchQuery("something", entry)).toBeFalsy()
  })

  it("returns true when entry's description includes query regardless of case", () => {
    const entry: PixelArtEntry = {
      src: "",
      title: "",
      description: "something",
      palette: {
        name: "",
      },
      date: "",
      tags: [],
    }

    expect(matchesSearchQuery("something", entry)).toBeTruthy()
    expect(matchesSearchQuery("SOME", entry)).toBeTruthy()
  })

  it("returns true when entry's tags include query regardless of case", () => {
    const entry: PixelArtEntry = {
      src: "",
      title: "",
      palette: {
        name: "",
      },
      date: "",
      tags: ["pixels", "landscape"],
    }

    expect(matchesSearchQuery("pixels", entry)).toBeTruthy()
    expect(matchesSearchQuery("pixelS", entry)).toBeTruthy()
    expect(matchesSearchQuery("landscape", entry)).toBeTruthy()
    expect(matchesSearchQuery("land", entry)).toBeFalsy()
  })
})
