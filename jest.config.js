/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */

const nextJest = require("next/jest")

const createJestConfig = nextJest({
  dir: "./",
})

// Use UTC time in tests
process.env.TZ = "UTC"

const customJestConfig = {
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
}

module.exports = createJestConfig(customJestConfig)
