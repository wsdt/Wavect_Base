// Use also Mocks for testing if neccessary.

module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
        ".*.tsx?$": "ts-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverage: true,
    cacheDirectory: ".jest/cache",
}
