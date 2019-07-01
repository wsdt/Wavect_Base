const parentScripts = require("../../../_base/package-scripts")

parentScripts.scripts.default = "webpack-dev-server --watch"
parentScripts.scripts.once = "webpack-dev-server"
parentScripts.scripts.production = "start ./dist/index.html"
parentScripts.scripts.build = "webpack --mode production --optimize-max-chunks 10 --optimize-min-chunk-size true --optimize-minimize true"

module.exports = parentScripts
