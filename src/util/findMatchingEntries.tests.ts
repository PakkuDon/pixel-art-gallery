import { findMatchingEntries } from "./findMatchingEntries";
import { PixelArtEntry } from "../data";

describe("findMatchingEntries", () => {
  it("returns true when entry's title includes query regardless of case", () => {
    const entry: PixelArtEntry = {
      src: "",
      title: "foobar",
      palette: {
        name: "something",
      },
      date: "",
      tags: [],
    }

    expect(findMatchingEntries("foo")(entry)).toBeTruthy()
    expect(findMatchingEntries("FOO")(entry)).toBeTruthy()
    expect(findMatchingEntries("baR")(entry)).toBeTruthy()
    expect(findMatchingEntries("something")(entry)).toBeFalsy()
  })

  it("returns true when entry's description includes query regardless of case", () => {
    const entry: PixelArtEntry = {
      src: "",
      title: "foobar",
      palette: {
        name: "something",
      },
      date: "",
      tags: [],
    }

    expect(findMatchingEntries("something")(entry)).toBeTruthy()
    expect(findMatchingEntries("SOME")(entry)).toBeTruthy()
  })

  it("returns true when entry's tags include query regardless of case", () => {
    const entry: PixelArtEntry = {
      src: "",
      title: "foobar",
      palette: {
        name: "something",
      },
      date: "",
      tags: ["pixels", "landscape"],
    }

    expect(findMatchingEntries("pixels")(entry)).toBeTruthy()
    expect(findMatchingEntries("pixelS")(entry)).toBeTruthy()
    expect(findMatchingEntries("landscape")(entry)).toBeTruthy()
    expect(findMatchingEntries("land")(entry)).toBeFalsy()
  })
})