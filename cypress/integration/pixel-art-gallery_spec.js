const PixelArtRepository = require("../../src/PixelArtRepository")

PixelArtRepository.load()
const pixelArtEntries = PixelArtRepository.findAll()

const selectRandomEntry = () => {
  const index = Math.floor(Math.random() * pixelArtEntries.length)
  return pixelArtEntries[index]
}

describe("Pixel Art Gallery", () => {
  let testEntry = selectRandomEntry()
  let testEntryIdentifier = testEntry.src.split(".")[0]

  beforeEach(() => {
    cy.visit("/")
  })

  it("renders successfully", () => {
    cy.get("#app").should("exist")
  })

  it("displays pixel art entries", () => {
    cy.get(`a[href='/${testEntryIdentifier}'`).should("exist")
  })

  context("when pixel art entry is selected", () => {
    it("displays details about pixel art entry", () => {
      cy.get(`a[href='/${testEntryIdentifier}'`).click()
      cy.get("main img")
        .should("have.attr", "src")
        .should("contain", testEntry.src)
    })
  })
})
