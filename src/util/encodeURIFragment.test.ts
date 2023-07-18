import { encodeURIFragment } from "./encodeURIFragment"

describe("encodeURIFragment", () => {
  it("replaces # with URL-encoded hash", () => {
    expect(encodeURIFragment("test")).toBe("test")
    expect(encodeURIFragment("#test")).toBe("%23test")
    expect(encodeURIFragment("%23")).toBe("%23")
    expect(encodeURIFragment("t#e#s#t")).toBe("t%23e%23s%23t")
  })
})
