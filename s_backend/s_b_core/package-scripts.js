const parentScripts = require("../../_base/package-scripts")

parentScripts.scripts.default =
    'concurrently --kill-others "tsc -w" "nodemon ./dist/server.js"'
parentScripts.scripts.once = "ts-node ./src/server.ts"
parentScripts.scripts.production = "node ./dist/server.js"
parentScripts.scripts.build = "tsc"

module.exports = parentScripts
