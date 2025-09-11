/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/jest.setup.js"], // <-- ensures TextEncoder/Decoder are set
};

module.exports = config;
