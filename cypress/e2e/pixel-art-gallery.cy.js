const PixelArtRepository = require("../../src/PixelArtRepository").default
const extractFilename = require("../../src/util/extractFilename").default

PixelArtRepository.load()
const pixelArtEntries = PixelArtRepository.findAll()

const selectRandomEntry = (predicate = () => true) => {
  const matchingEntries = pixelArtEntries.filter(predicate)
  const index = Math.floor(Math.random() * matchingEntries.length)
  return matchingEntries[index]
}

describe("Pixel Art Gallery", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("renders successfully", () => {
    cy.get("#app").should("exist")
  })

  it("displays pixel art entries", () => {
    let testEntry = selectRandomEntry()
    let slug = extractFilename(testEntry.src)

    cy.get(`a[href='/${slug}'`).should("exist")
  })

  context("when URL contains pixel art ID", () => {
    context("and ID is entry's canonical ID", () => {
      it("displays details about pixel art entry", () => {
        let testEntry = selectRandomEntry()
        let slug = extractFilename(testEntry.src)

        cy.get(`a[href='/${slug}'`).click()
        cy.get("main img")
          .should("have.attr", "src")
          .should("contain", testEntry.src)
      })
    })

    context("and ID is an alias for an entry", () => {
      it("should redirect to entry's canonical ID", () => {
        let testEntry = selectRandomEntry((entry) => entry.aliases)
        let slug = extractFilename(testEntry.src)
        let alias = testEntry.aliases[0]

        cy.visit(`/${alias}`)
        expect(cy.url()).should("include", slug)
      })

      it("displays details about pixel art entry", () => {
        let testEntry = selectRandomEntry((entry) => entry.aliases)
        let alias = testEntry.aliases[0]

        cy.visit(`/${alias}`)
        cy.get("main img")
          .should("have.attr", "src")
          .should("contain", testEntry.src)
      })
    })
  })
})
