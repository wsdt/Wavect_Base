module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    ".*.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  moduleNameMapper: {
    ".(scss|css|jpg|png)$": "<rootDir>/jest_non-ts-files-handler.js"
  },
  cacheDirectory: ".jest/cache"
};
