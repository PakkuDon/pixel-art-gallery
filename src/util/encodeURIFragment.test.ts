import { encodeURIFragment } from "./encodeURIFragment"

describe("encodeURIFragment", () => {
  it("replaces # with URL-encoded hash", () => {
    expect(encodeURIFragment("test")).toBe("test")
    expect(encodeURIFragment("#test")).toBe("%2523test")
    expect(encodeURIFragment("%2523")).toBe("%2523")
    expect(encodeURIFragment("t#e#s#t")).toBe("t%2523e%2523s%2523t")
  })
})
