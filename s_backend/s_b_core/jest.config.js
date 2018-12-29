// Use also Mocks for testing if neccessary.

module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.ts?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  collectCoverage: true
};
