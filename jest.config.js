/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
}
