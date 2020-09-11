module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  collectCoverage: true,
  "collectCoverageFrom": [
    "**/*.js",
    "**/*.jsx",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/public/**",
    "!src/*.js",
    "!*.js",

  ],
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
}