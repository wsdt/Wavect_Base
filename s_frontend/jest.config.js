const baseConfig = require("../_base/jest.config");

/* As this is a javaScript file you can simple manipulate or add params to the
 * baseConfig-Json. */
baseConfig.moduleNameMapper = {
  ".(scss|css|jpg|png)$": "<rootDir>/jest_non-ts-files-handler.js"
};

module.exports = baseConfig;
