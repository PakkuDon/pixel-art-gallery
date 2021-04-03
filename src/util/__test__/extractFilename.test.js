import extractFilename from "../extractFilename"

describe("extractFilename", () => {
  describe("when given a string containing no extension", () => {
    it("returns whole string", () => {
      expect(extractFilename("something")).toBe("something")
    })
  })

  describe("when given a string containing an extension", () => {
    it("returns string sans extension", () => {
      expect(extractFilename("something.png")).toBe("something")
    })
  })
})
