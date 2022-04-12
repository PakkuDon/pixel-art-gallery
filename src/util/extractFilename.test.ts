import extractFilename from "./extractFilename"

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

  describe("when given string containing parent directories", () => {
    it("returns filename without extension or parent directories", () => {
      expect(extractFilename("folder/filename.png")).toBe("filename")
      expect(extractFilename("folder/subfolder/file.png")).toBe("file")
    })
  })
})
